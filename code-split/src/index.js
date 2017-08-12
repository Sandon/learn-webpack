require('./a')

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

btn1.addEventListener('click', async function () {
  const d = await import(/* webpackChunkName: "d" */ './d.js')
  
  
  // old style
  /*
  require.ensure(['./d'], function () {
    console.log('Module A & B has been ready')
    var a = require('./a')
    var b = require('./b')
    
    btn2.addEventListener('click', function () {
      var c = require('./c')
    })
  })
  */
})

