var QRCode = require('qrcode')

QRCode.toString('Helllllloooo',{type:'terminal'}, function (err, url) {
  console.log(url)
})