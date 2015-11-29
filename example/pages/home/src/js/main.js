require( './a' );
require( '../css/index' );
var jQuery = require( 'jquery' );

(function ($) {
    var btn1 = $('#btn1');
    var btn2 = $('#btn2');

    btn1.on('click', function() {

        require.ensure(['./d'], function() {
            console.log('Module A & B has been ready');
            var a = require('./a');
            var b = require('./b');

            btn2.on('click', function() {
                var c = require('./c');
            });
        });
    });
})(jQuery);


