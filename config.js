let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6281320170984', '6281332757893']
global.namaowner = '𝑨𝒈𝒖𝒛 𝑭𝒂𝒎𝒊𝒍𝒊𝒂'
global.APIs = {
  amel: 'https://melcanz.com',
  zeks: 'https://api.zeks.xyz',
  lol: 'https://lolhuman.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  hardianto: 'https://hardianto.xyz',
}
global.APIKeys = {
  'https://melcanz.com': 'apikeylu',
  'https://api.zeks.xyz': 'apikeylu',
  'https://lolhuman.herokuapp.com': 'apikeylu',
  'https://api.xteam.xyz': 'apikeylu',
}

global.packname = '𝑺𝒊𝒏𝒕𝒂 𝑪𝒂𝒏𝒛'
global.author = '𝑨𝒈𝒖𝒛 𝑭𝒂𝒎𝒊𝒍𝒊𝒂 & 𝑺𝒊𝒏𝒕𝒂 𝑪𝒂𝒏𝒛'
// WM = NAMA TOKO LU
global.wm = '𝑨𝒈𝒖𝒛 𝑭𝒂𝒎𝒊𝒍𝒊𝒂 & 𝑺𝒊𝒏𝒕𝒂 𝑪𝒂𝒏𝒛'

global.eror = '*Error Kak:(*'
global.wait = '*tunggu kak..*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("memperbaharui 'config.js'"))
  delete require.cache[file]
  require(file)
})
