let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')

// list diamond dan harga
let _diamond1 = `⦿ 50 💎 = Rp 6.500 💰`;
let _diamond2 = `⦿ 70 💎 = Rp 9.250 💰`;
let _diamond3 = `⦿ 100 💎 = Rp 13.500 💰`;
let _diamond4 = `⦿ 140 💎 = Rp 18.600 💰`;
let _diamond5 = `⦿ 150 💎 = Rp 20.400 💰`;
let _diamond6 = `⦿ 200 💎 = Rp 26.900 💰`;
let _diamond7 = `⦿ 210 💎 = Rp 28.400 💰`;
let _diamond8 = `⦿ 280 💎 = Rp 37.500 💰`;
let _diamond9 = `⦿ 355 💎 = Rp 46.600 💰`;
let _diamond10 = `⦿ 400 💎 = Rp 52.600 💰`;
let _diamond11 = `⦿ 500 💎 = Rp 65.600 💰`;
let _diamond12 = `⦿ 635 💎 = Rp 82.800 💰`;
let _diamond13  = `⦿ 720 💎 = Rp 91.400 💰`;
let _diamond14 = `⦿ 1000 💎 = Rp 118.600 💰`;
let _diamond15 = `⦿ 1075 💎 = Rp 137.600 💰`; 
let _diamond15 = `⦿ 1440 💎 = Rp 182.600 💰`; 
let _diamond15 = `⦿ 9926 💎 = Rp 248.600 💰`; 
let _diamond15 = `⦿ 14820 💎 = Rp 340.100 💰`; 

let _diamond16 = `⦿ M. Mingguan = Rp 28.800💰`;
let _diamond17 = `⦿ M. Bulanan = Rp 140,400💰`;

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
handler.tags = ['main']
handler.command = /^((diamond|dm)_(ff?))$/i

module.exports = handler