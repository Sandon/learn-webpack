var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

// development
//gulp.task("default", ["webpack-dev-server"]);

// production
gulp.task("default", ["build"]);


// Production build
gulp.task("build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    !myConfig.plugins && (myConfig.plugins=[]);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

// Development build
gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    !myConfig.entry.app && ( myConfig.entry.app = [] );
    myConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");

    !myConfig.plugins && (myConfig.plugins=[]);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.HotModuleReplacementPlugin()
    );

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath || '/',
        stats: {
            colors: true
        },
        hot: true
    }).listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        });
});