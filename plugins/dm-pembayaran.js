const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^dana?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}qr_dana`, buttonText: {displayText: '📠 Qr Code'}, type: 1},
	{buttonId: `${prefix}dana_aja`, buttonText:{displayText: '💸 Dana'}, type: 1}
	]
	buttonMessage = {
		contentText: `hay @${m.sender.split('@')[0]}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/^gopay?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}qr_gopay`, buttonText: {displayText: '📠 Qr Code'}, type: 1},
	{buttonId: `${prefix}gopay_aja`, buttonText:{displayText: '💸 Gopay'}, type: 1}
	]
	buttonMessage = {
		contentText: `hay @${m.sender.split('@')[0]}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if (/^ovo$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}qr_ovo`, buttonText: {displayText: '📠 Qr Code'}, type: 1},
	{buttonId: `${prefix}ovo_aja`, buttonText:{displayText: '💸 Qris'}, type: 1}
	]
	buttonMessage = {
		contentText: `hay @${m.sender.split('@')[0]}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
	}
}


handler.help = ['dana', 'gopay', 'qris']
handler.tags = ['diamond']
handler.command = ['dana','gopay','qris']

module.exports = handler
