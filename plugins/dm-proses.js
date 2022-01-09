const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn, command, usedPrefix }) => {
	let prefix = usedPrefix
	let d = new Date(new Date + 3600000)
	let locale = 'id'
	let hari = d.toLocaleDateString(locale, { weekday: 'long' })
	let tgl = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let jam = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let tampilTanggal = `${hari}, ${tgl}`
    let tampilWaktu = `${jam} WIB.`
	let shop = 'FAMILIA-STORE'
	let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
	let name = conn.getName(m.sender)
	let proses = `「 *PESANAN DIPROSES* 」\n\nNama : ${name}\nNomor : ${m.sender.split('@')[0]}\nHari : ${tampilTanggal}\nWaktu : ${tampilWaktu}\nStatus : Pesanan sedang di proses!!!\n\nSetelah pesanan selesai ketik ${prefix}done yang menandakan bahwa pesanan telah telesai 🐣`
	buttons = [
	{buttonId: `${prefix}done`, buttonText:{displayText: 'Selesai'}, type: 1}
	]
	buttonMessage = {
		contentText: `${proses}`,
		footerText: wm,
		buttons: buttons,
		headerType: 1
	}
	await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
	await conn.sendButton(owner[0] + '@s.whatsapp.net', ` *「 PESANAN BARU 」* \n\n dari:\nNama: ${name}\nNomor: @${m.sender.split`@`[0]}`, wm, 'Selesai', '.done' + m.sender.split`@`[0])
}


handler.help = ['proses']
handler.tags = ['diamond']
handler.command = ['proses']

module.exports = handler