let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')

// list diamond dan harga
let _diamond1 = `⦿ 5 💎 = Rp 830 💰`;
let _diamond2 = `⦿ 20 💎 = Rp 3,000 💰`;
let _diamond3 = `⦿ 50 💎 = Rp 7,000 💰`;
let _diamond4 = `⦿ 70 💎 = Rp 9,500 💰`;
let _diamond5 = `⦿ 100 💎 = Rp 14,000 💰`;
let _diamond6 = `⦿ 150 💎 = Rp 23,000 💰`;
let _diamond7 = `⦿ 210 💎 = Rp 28,800 💰`;
let _diamond8 = `⦿ 355 💎 = Rp 47,000 💰`;
let _diamond9 = `⦿ 500 💎 = Rp 67,000 💰`;
let _diamond10 = `⦿ 720 💎 = Rp 92,000 💰`;
let _diamond11 = `⦿ 1000 💎 = Rp 130,000 💰`;
let _diamond12 = `⦿ 1075 💎 = Rp 140,000 💰`;
let _diamond13  = `⦿ 1440 💎 = Rp 200,000 💰`;
let _diamond14 = `⦿ 2000 💎 = Rp 260,000 💰`;
let _diamond15 = `⦿ 5000 💎 = Rp 520,000 💰`; 

let _diamond16 = `⦿ M. Mingguan = Rp 28,800💰`;
let _diamond17 = `⦿ M. Bulanan = Rp 140,000💰`;

let handler = async (m, { conn, usedPrefix: _p, text, isOwner, command }) => {
    let prefix = _p

    let tampil = [`${_diamond1}`, `${_diamond2}`, `${_diamond3}`, `${_diamond4}`, `${_diamond5}`, `${_diamond6}`, `${_diamond7}`, `${_diamond8}`, `${_diamond9}`, `${_diamond10}`, `${_diamond11}`, `${_diamond12}`, `${_diamond13}`, `${_diamond14}`, `${_diamond15}`]
    let tampil1 = tampil.filter(v => ![`${_diamond1}`].includes(v))
    let row = ['ff', 'ff1', 'ff2', 'ff3', 'ff4', 'ff5', 'ff6', 'ff7', 'ff8', 'ff9', 'ff10', 'ff11', 'ff12', 'ff13', 'ff14', 'ff15']
    let row2 = row.filter(v => !['ff'].includes(v))

    let rows = Object.keys(tampil).map(v => ({
        title: tampil[v],
        description: '',
        rowId: `${prefix + row2[v]}`
    }))
    let button = {
        buttonText: 'Pilih Disini!!',
        description: `Hai @${m.sender.split`@`[0]} Have a nice day  😇\nberikut list diamond Epep yang tersedia`,
        footerText: wm,
        title: 'List Diamond Epep'
    }
    return conn.sendListM(m.chat, button, rows, m)
}

handler.help = ['dm_ff']
handler.tags = ['diamond']
handler.command = /^((diamond|dm)_(ff?))$/i

module.exports = handler