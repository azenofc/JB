// Diamond FF 						// Harga FF
let _diamond1 = '⦿ 50 💎';           let diamond1 = 'Rp 6.500 💰';
let _diamond2 = '⦿ 70 💎';           let diamond2 = 'Rp 9.250💰';
let _diamond3 = '⦿ 100 💎';           let diamond3 = 'Rp 13.500💰';
let _diamond4 = '⦿ 140 💎';           let diamond4 = 'Rp 18.600💰';
let _diamond5 = '⦿ 150 💎';           let diamond5 = 'Rp 20.400💰';
let _diamond6 = '⦿ 200 💎';           let diamond6 = 'Rp 26.900💰';
let _diamond7 = '⦿ 210 💎';           let diamond7 = 'Rp 28.400💰';
let _diamond8 = '⦿ 280 💎';           let diamond8 = 'Rp 37.500💰';
let _diamond9 = '⦿ 355 💎';         let diamond9 = 'Rp 46.600💰';
let _diamond10 = '⦿ 400 💎';         let diamond10 = 'Rp 52.600💰';
let _diamond11 = '⦿ 500 💎';         let diamond11 = 'Rp 65.600💰';
let _diamond12 = '⦿ 635 💎';         let diamond12 = 'Rp 82.800💰';
let _diamond13  = '⦿ 720 💎';         let diamond13 = 'Rp 91.400💰';
let _diamond14 = '⦿ 1000 💎';         let diamond14 = 'Rp 118.600💰';
let _diamond15 = '⦿ 1075 💎';         let diamond15 = 'Rp 137.600💰';
let _diamond16 = '⦿ 1440 💎';         let diamond16 = 'Rp 182.600💰';
let _diamond17 = '⦿ 9926 💎';        let diamond17 = 'Rp 248.600💰';
let _diamond18 = '⦿ 14820 💎';      let diamond18 = 'Rp 340.100💰';

const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix }) => {
	let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	try {
		pp = await conn.getProfilePicture(who)
	} catch (e) {

	} finally {
	let shop = wm
	let prefix = usedPrefix
    let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: wm, orderTitle: `${shop}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

if (/^ff1?$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
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
if (/9$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond9} dgn harga ${diamond9}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/10$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond10} dgn harga ${diamond10}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/11$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond11} dgn harga ${diamond11}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/12$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond12} dgn harga ${diamond12}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/13$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond13} dgn harga ${diamond13}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/14$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond14} dgn harga ${diamond14}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/15$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond15} dgn harga ${diamond15}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/16$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond16} dgn harga ${diamond16}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/17$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond17} dgn harga ${diamond17}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
	conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (/18$/i.test(command)) {
	buttons = [
	{buttonId: `${prefix}dm_ff`, buttonText: {displayText: '⬅️ Back'}, type: 1},
	{buttonId: `${prefix}payment`, buttonText:{displayText: '💸 Payment'}, type: 1}
	]
	buttonMessage = {
		contentText: `Halo kak @${m.sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond18} dgn harga ${diamond18}\n• Pilih back jika ingin kembali ke list diamond`,
		footerText: `${shop}`,
		buttons: buttons,
		headerType: 1
	}
		conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [m.sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
		}
	}
}

handler.help = new Array(18).fill('ff').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ff1','ff2','ff3','ff4','ff5','ff6','ff7','ff8','ff9','ff10','ff11','ff12','ff13','ff14','ff15','ff16','ff17','ff18']

module.exports = handler