let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
  let prefix = usedPrefix
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let nama = m.sender.split`@`[0]
    let str = `Halo kak @${nama}, saya adalah bot whatsApp khusus  untuk membantu owner saya jualan.Semoga kamu suka 💌`.trim()
    //conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    conn.send3ButtonLoc(m.chat, await (await fetch(pp)).buffer(), str, wm, '💎 Diamond FF', `${prefix}dm_ff`, '💎 Diamond ML', `${prefix}dm_ml`, '📋 Menu lainnya', `${prefix}allmenu`)
  }
}
handler.help = ['diamond','menu']
handler.tags = ['main']
handler.command = /^(diamond|dm|menu)$/i

module.exports = handler
