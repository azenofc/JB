const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const fs = require('fs')
const { text, image, sticker } = MessageType
const getBuffer = require('../lib/buffer')
let handler = async (m, { conn, command, usedPrefix }) => {
	//function _0x223e(_0x1f45ae,_0x3370df){const _0x383fa8=_0x383f();return _0x223e=function(_0x223efa,_0x3beb8a){_0x223efa=_0x223efa-0x137;let _0x55902c=_0x383fa8[_0x223efa];return _0x55902c;},_0x223e(_0x1f45ae,_0x3370df);}const _0x47ba5b=_0x223e;(function(_0x434496,_0x177889){const _0x21390d=_0x223e,_0x5d4695=_0x434496();while(!![]){try{const _0x3b84b3=-parseInt(_0x21390d(0x143))/0x1+-parseInt(_0x21390d(0x146))/0x2*(parseInt(_0x21390d(0x13e))/0x3)+-parseInt(_0x21390d(0x13a))/0x4*(-parseInt(_0x21390d(0x139))/0x5)+parseInt(_0x21390d(0x142))/0x6*(parseInt(_0x21390d(0x13b))/0x7)+-parseInt(_0x21390d(0x140))/0x8*(parseInt(_0x21390d(0x13f))/0x9)+parseInt(_0x21390d(0x13c))/0xa*(-parseInt(_0x21390d(0x145))/0xb)+parseInt(_0x21390d(0x13d))/0xc*(parseInt(_0x21390d(0x137))/0xd);if(_0x3b84b3===_0x177889)break;else _0x5d4695['push'](_0x5d4695['shift']());}catch(_0x543047){_0x5d4695['push'](_0x5d4695['shift']());}}}(_0x383f,0xe642e));let fetch=require(_0x47ba5b(0x141)),setting=fetch(_0x47ba5b(0x144)),cr=setting[_0x47ba5b(0x138)];function _0x383f(){const _0x19c8f0=['34HMaYhl','52vAxXRM','credit','681595BmcciM','4lzFlwA','90734CVaBoI','20tsBRJg','9112296QUCJMX','99525depDFf','566154nIkRba','136zGlWwM','node-fetch','534IrsLCo','1487544UnPKPB','https://raw.githubusercontent.com/Fokusdotid/FokusDotId/main/wm.json','1448139BCsMEL'];_0x383f=function(){return _0x19c8f0;};return _0x383f();}
	let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
	let prefix = usedPrefix
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let dana = '083154614517'
	let gopay = 'SCAN'
	let qris = 'SCAN'
	let nama = conn.getName(who)
	let d = new Date(new Date + 3600000)
	let locale = 'id'
	let wib = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let shop = 'AZEN STORE'
    
	try {
		pp = await conn.getProfilePicture(who)
	} catch (e) {

	} finally {
		let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^dana_aja?$/i.test(command)) {
	let teks = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*\n\n•> _Nama : ${nama}_\n•> _Nomor : ${m.sender.split("@")[0]}_\n\n*_PAYMENT DANA_*\n\nJangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*Dana:* ${dana}\n\nSilahkan ketik ${prefix}proses agar pesanan kamu segera di proses\n\n _🕐 ${wib} WIB_\n\n*「 ${shop} 」*`
	buttons = [
	{buttonId: `${prefix}proses`, buttonText:{displayText: 'Proses'}, type: 1}
	]
	buttonMessage = {
		contentText: `${teks}`,
		footerText: wm,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if (/^gopay_aja?$/i.test(command)) {
	let teks = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*\n\n•> _Nama : ${nama}_\n•> _Nomor : ${m.sender.split("@")[0]}_\n\n*_PAYMENT GOPAY*\n\nJangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*Gopay:* ${gopay}\n\nSilahkan ketik ${prefix}proses agar pesanan kamu segera di proses\n\n _🕐 ${wib} WIB_\n\n*「 ${shop} 」*`
	buttons = [
	{buttonId: `${prefix}proses`, buttonText:{displayText: 'proses'}, type: 1}
	]
	buttonMessage = {
		contentText: `${teks}`,
		footerText: wm,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/^ovo_aja?$/i.test(command)) {
	let teks = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*\n\n•> _Nama : ${nama}_\n•> _Nomor : ${m.sender.split("@")[0]}_\n\n*_PAYMENT OVO*\n\nJangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*Ovo:* ${ovo}\n\nSilahkan ketik ${prefix}proses agar pesanan kamu segera di proses\n\n _🕐 ${wib} WIB_\n\n*「 ${shop} 」*`
	buttons = [
	{buttonId: `${prefix}proses`, buttonText:{displayText: 'proses'}, type: 1}
	]
	buttonMessage = {
		contentText: `${teks}`,
		footerText: wm,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/^qr_gopay?$/i.test(command)) {
	let teks = `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`
	let teks2 = `hay ${nama}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih.`
	let gopay = 'https://telegra.ph/file/90f282f0730d58e7355b2.jpg'
	let gambar = `${gopay}`
	let gambarnya = await getBuffer(gambar)
	await conn.sendMessage(m.chat, gambarnya, image, { thumbnail: gambarnya, quoted: m, caption: teks } )
}
if (/^qr_dana?$/i.test(command)) {
	let teks = `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`
	let teks2 = `hay ${nama}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih.`
	let dana = 'https://telegra.ph/file/acd35982b7ad7a58c3117.jpg'
	let gambar = `${dana}`
	let gambarnya = await getBuffer(gambar)
	await conn.sendMessage(m.chat, gambarnya, image, { thumbnail: gambarnya, quoted: m, caption: teks } )
}
if (/^qr_ovo?$/i.test(command)) {
	let teks = `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`
	let teks2 = `hay ${nama}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih.`
	let ovo = 'https://telegra.ph/file/a6179145789adac8ac2c9.jpg'
	let gambar = `${qris}`
	let gambarnya = await getBuffer(gambar)
	await conn.sendMessage(m.chat, gambarnya, image, { thumbnail: gambarnya, quoted: m, caption: teks } )
	}
}
}

handler.help = ['dana_aja','gopay_aja','ovo_aja','qr_dana','qr_ovo','qr_gopay']
handler.tags = ['diamond']
handler.command = ['dana_aja','gopay_aja','ovo_aja','qr_dana','qr_ovo','qr_gopay']

module.exports = handler
