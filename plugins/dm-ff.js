// Diamond FF 						// Harga FF
let _diamond1 = '⦿ 70 💎';           let diamond1 = 'Rp 9.250 💰';
let _diamond2 = '⦿ 100 💎';           let diamond2 = 'Rp 13.500💰';
let _diamond3 = '⦿ 140 💎';           let diamond3 = 'Rp 18.600💰';
let _diamond4 = '⦿ 150 💎';           let diamond4 = 'Rp 20.400💰';
let _diamond5 = '⦿ 200 💎';           let diamond5 = 'Rp 26.900💰';
let _diamond6 = '⦿ 210 💎';           let diamond6 = 'Rp 28.400💰';
let _diamond7 = '⦿ 280 💎';           let diamond7 = 'Rp 37.200💰';
let _diamond8 = '⦿ 355 💎';           let diamond8 = 'Rp 46.600💰';
let _diamond9 = '⦿ 400 💎';         let diamond9 = 'Rp 52.600💰';
let _diamond10 = '⦿ 500 💎';         let diamond10 = 'Rp 65.600💰';
let _diamond11 = '⦿ 635 💎';         let diamond11 = 'Rp 82.800💰';
let _diamond12 = '⦿ 720 💎';         let diamond12 = 'Rp 91.400💰';
let _diamond13  = '⦿ 1000 💎';         let diamond13 = 'Rp 118.600💰';
let _diamond14 = '⦿ 1075 💎';         let diamond14 = 'Rp 137.600💰';
let _diamond15 = '⦿ 1440 💎';         let diamond15 = 'Rp 182.600💰';
let _diamond16 = '⦿ 9926 💎';         let diamond16 = 'Rp 248.600💰';
let _diamond17 = '⦿ 14820 💎';        let diamond17 = 'Rp 340.100💰';
let _diamond18 = '⦿ 18076 💎';        let diamond18 = 'Rp 497.600💰';

let _diamond19 = '⦿ M. Mingguan';       let diamond16 = 'Rp 28.500💰';
let _diamond20 = '⦿ M. Bulanan';      let diamond17 = 'Rp 140.600💰';

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
	}
}

handler.help = new Array(15).fill('ff').map((v, i) => v + (i + 1))
handler.tags = ['diamond']
handler.command = ['ff1','ff2','ff3','ff4','ff5','ff6','ff7','ff8','ff9','ff10','ff11','ff12','ff13','ff14','ff15']

module.exports = handler
