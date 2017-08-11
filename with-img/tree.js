module.exports = {

    show: function() {
        var img = document.createElement('img');
        img.src = require('./tree.jpeg');
        document.body.appendChild(img);
    }

};