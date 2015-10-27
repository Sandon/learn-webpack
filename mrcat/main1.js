var longVariableName = 'Hello';
longVariableName += ' World';

if (__DEV__) {
    console.log('I am in Dev env.');
}

document.write('<h1>' + longVariableName + '</h1>');

var btn = document.getElementById('btn');

btn.onclick = function() {
    require.ensure([], function(require) {
        console.log('after fetchback');
        var content = require('./banner/banner.js');

        var img = document.createElement('img');
        img.src = require('./banner/tree.jpg');

        document.body.appendChild(img);
        console.log(content);
    });
};