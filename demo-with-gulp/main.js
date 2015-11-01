require('./a');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function() {

    require.ensure(['./d'], function() {
        console.log('Module A & B has been ready');
        var a = require('./a');
        var b = require('./b');

        btn2.addEventListener('click', function() {
            var c = require('./c');
        });
    });
});

