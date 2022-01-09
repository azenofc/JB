/*const diamond = [
_diamond1 = '⦿ 5 💎',
_diamond2 = '⦿ 20 💎',
_diamond3 = '⦿ 50 💎',
_diamond4 = '⦿ 70 💎',
_diamond5 = '⦿ 100 💎',
_diamond6 = '⦿ 150 💎',
_diamond7 = '⦿ 210 💎',
_diamond8 = '⦿ 355 💎',
_diamond9 = '⦿ 500 💎',
_diamond10 = '⦿ 720 💎',
_diamond11 = '⦿ 1000 💎',
_diamond12 = '⦿ 1075 💎',
_diamond13  = '⦿ 1440 💎',
_diamond14 = '⦿ 2000 💎',
_diamond15 = '⦿ 5000 💎',
_diamond16 = '⦿ M. Mingguan',
_diamond17 = '⦿ M. Bulanan'
]
*/
// list diamond                                            // harga diamond
let _diamond1 = '⦿ 86 💎';           let diamond1 = 'Rp 22,000 💰';
let _diamond2 = '⦿ 172 💎';           let diamond2 = 'Rp 41,000 💰';
let _diamond3 = '⦿ 257 💎';           let diamond3 = 'Rp 62,000 💰';
let _diamond4 = '⦿ 706 💎';           let diamond4 = 'Rp 162,000 💰';
let _diamond5 = '⦿ 2195 💎';           let diamond5 = 'Rp 480,000 💰';
let _diamond6 = '⦿ 3688 💎';           let diamond6 = 'Rp 780,000 💰';
let _diamond7 = '⦿ 5532 💎';           let diamond7 = 'Rp 1,200,000 💰';
let _diamond8 = '⦿ 9288 💎';           let diamond8 = 'Rp 1,995,000 💰';

const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^ml1?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond1} dgn harga ${diamond1}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/2$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond2} dgn harga ${diamond2}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/3$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond3} dgn harga ${diamond3}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/4$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond4} dgn harga ${diamond4}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/5$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond5} dgn harga ${diamond5}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/6$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond6} dgn harga ${diamond6}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/7$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond7} dgn harga ${diamond7}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/8$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond8} dgn harga ${diamond8}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
		conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
	}
}


handler.help = new Array(8).fill('ml').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ml1','ml2','ml3','ml4','ml5','ml6','ml7','ml8']

module.exports = handler