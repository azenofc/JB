
// list diamond                                            // harga diamond
let _diamond1 = 'ā¦æ 86 š';           let diamond1 = 'Rp 18.500 š°';
let _diamond2 = 'ā¦æ 172 š';           let diamond2 = 'Rp 37.500 š°';
let _diamond3 = 'ā¦æ 257 š';           let diamond3 = 'Rp 55.600 š°';
let _diamond4 = 'ā¦æ 344 š';           let diamond4 = 'Rp 73.400 š°';
let _diamond5 = 'ā¦æ 429 š';           let diamond5 = 'Rp 92.300 š°';
let _diamond6 = 'ā¦æ 514 š';           let diamond6 = 'Rp 112.400 š°';
let _diamond7 = 'ā¦æ 706 š';           let diamond7 = 'Rp 145.100 š°';
let _diamond8 = 'ā¦æ 878 š';           let diamond8 = 'Rp 182.200 š°';
let _diamond9 = 'ā¦æ 963 š';           let diamond9 = 'Rp 198.600 š°';
let _diamond10 = 'ā¦æ 1412 š';           let diamond10 = 'Rp 280.600 š°';
let _diamond11 = 'ā¦æ 2195 š';           let diamond11 = 'Rp 426.200 š°';
let _diamond12 = 'ā¦æ 3688 š';           let diamond12 = 'Rp 708.100 š°';
let _diamond13 = 'ā¦æ 4394 š';           let diamond13 = 'Rp 848.600 š°';

const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^ml1?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond1} dgn harga ${diamond1}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/2$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond2} dgn harga ${diamond2}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/3$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond3} dgn harga ${diamond3}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/4$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond4} dgn harga ${diamond4}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/5$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond5} dgn harga ${diamond5}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/6$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond6} dgn harga ${diamond6}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/7$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond7} dgn harga ${diamond7}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/8$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond8} dgn harga ${diamond8}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/9$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond9} dgn harga ${diamond9}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/10$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond10} dgn harga ${diamond10}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/11$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond11} dgn harga ${diamond11}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/12$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond12} dgn harga ${diamond12}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/13$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ml`, buttonText: {displayText: 'ā¬ļø Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: 'šø Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} š„°\n\nā¢ Pilih payment jika ingin membeli ${_diamond13} dgn harga ${diamond13}\nā¢ Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
		conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
	}
}


handler.help = new Array(13).fill('ml').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ml1','ml2','ml3','ml4','ml5','ml6','ml7','ml8','ml9','ml10','ml11','ml12','ml13']

module.exports = handler