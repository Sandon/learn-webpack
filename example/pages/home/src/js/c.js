require('../css/colorful');

var name = 'Module C';

console.log(name + ' loaded & executed');

var img = document.createElement('img');
img.src = require('../images/tree.jpeg');
document.body.appendChild(img);

module.exports = name;