let handler = async (m, { conn, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let chat = db.data.chats[m.chat]
    let user = db.data.users[who]
    let set = db.data.settings[conn.user.jid]
        m.reply(`
┌「 *CHAT* 」${m.isGroup ? `
├ ${chat.isBanned ? '✅' : '❌'} Banned
├ ${chat.desc ? '✅' : '❌'} Deskripsi
├ ${chat.welcome ? '✅' : '❌'} Welcome
├ ${chat.detect ? '✅' : '❌'} Detect
├ ${chat.antilink ? '✅' : '❌'} Anti Link` : ''}
├ ${chat.antiBadword ? '✅' : '❌'} Anti Badword
├ ${chat.antispam ? '✅' : '❌'} Anti Spam
├ ${chat.delete ? '❌' : '✅'} Anti Delete
├ ${chat.autoread ? '✅' : '❌'} Auto Read
└────
       `.trim())
}

handler.help = ['infochat']
handler.tags = ['main']
handler.command = /^(info(c(hat)?|b(ot)?))$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}