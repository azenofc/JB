const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
    let nama = m.sender.split`@`[0]
    let shop = wm
    let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
    let str = `Halo kak @${m.sender.split('@')[0]} 🥰\n\nBerikut adalah metode pembayaran yang tersedia di ${shop}.`.trim()
buttons = [
	{buttonId: `${prefix}dana`, buttonText: {displayText: '💸 Dana'}, type: 1},
	{buttonId: `${prefix}gopay`, buttonText:{displayText: '💸 Gopay'}, type: 1},
	{buttonId: `${prefix}ovo`, buttonText:{displayText: '💸 Ovo'}, type: 1}
	]
	buttonMessage = {
		contentText: `${str}`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

handler.help = ['payment']
handler.tags = ['diamond']
handler.command = /^(payment|pembayaran)$/i

module.exports = handler
