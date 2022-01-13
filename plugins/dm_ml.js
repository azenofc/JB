let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')

// list diamond ml beserta harganya
let _diamond1 = `⦿ 86 💎 = Rp 18.500 💰`;
let _diamond2 = `⦿ 172 💎 = Rp 37.500 💰`;
let _diamond3 = `⦿ 257 💎 = Rp 55.600 💰`;
let _diamond4 = `⦿ 344 💎 = Rp 73.400 💰`;
let _diamond5 = `⦿ 429 💎 = Rp 92.300 💰`;
let _diamond6 = `⦿ 514 💎 = Rp 112.400 💰`;
let _diamond7 = `⦿ 706 💎 = Rp 145.100 💰`;
let _diamond8 = `⦿ 878 💎 = Rp 182.200 💰`;
let _diamond8 = `⦿ 963 💎 = Rp 198.600 💰`;
let _diamond8 = `⦿ 1412 💎 = Rp 280.600 💰`;
let _diamond8 = `⦿ 2195 💎 = Rp 426.200 💰`;
let _diamond8 = `⦿ 3688 💎 = Rp 708.100 💰`;
let _diamond8 = `⦿ 4394 💎 = Rp 848.600 💰`;

let handler = async (m, { conn, usedPrefix: _p, text, isOwner, command }) => {
    let prefix = _p
    let tampil = [`${_diamond1}`, `${_diamond2}`, `${_diamond3}`, `${_diamond4}`, `${_diamond5}`, `${_diamond6}`, `${_diamond7}`, `${_diamond8}`]
    let tampil1 = tampil.filter(v => ![`${_diamond1}`].includes(v))
    let row = ['ml', 'ml1', 'ml2', 'ml3', 'ml4', 'ml5', 'ml6', 'ml7', 'ml8']
    let row2 = row.filter(v => !['ml'].includes(v))

    let rows = Object.keys(tampil).map(v => ({
        title: tampil[v],
        description: '',
        rowId: `${prefix + row2[v]}`
    }))
    let button = {
        buttonText: 'Pilih Disini!!',
        description: `Hai @${m.sender.split`@`[0]} Have a nice day  😇 berikut list diamond yang tersedia`,
        footerText: wm,
        title: 'List Diamond ML'
    }
    return conn.sendListM(m.chat, button, rows, m)
}

handler.help = ['dm_ml']
handler.tags = ['main']
handler.command = /^((diamond|dm)_(ml?))$/i

module.exports = handler