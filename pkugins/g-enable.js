let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let set = db.data.settings[conn.user.jid]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  let grup = [
    'antilink',
    'antispam',
    'desc',
    'detect',
    'welcome',
  ]
  let ch = [
    'antidelete',
    'delete',
    'document',
  ]
  let ow = [
    'anon',
    'anticall',
    'autoread',
    'public',
  ]
  switch (type) {
    // group
    case 'w':
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.desc = isEnable
      break
    case 'read':
    case 'autoread':
      if (!isOwner) {
        dfail('owner', m, conn)
        throw false
      }
      chat.autoread = isEnable
      break
    case 'antilink':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.antilink = isEnable
      break
    case 'antispam':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.antispam = isEnable
      break
    case 'del':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'document':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.useDocument = isEnable
      break

    //owner
    case 'public':
      isAll = true
      if (!isROwner) {
        dfail('rowner', m, conn)
        throw false
      }
      set.self = !isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        dfail('owner', m, conn)
        throw false
      }
      set.anticall = isEnable
      break
    default:
      if (!/[01]/.test(command)) throw `
┌「 *daftar opsi* 」${isOwner ? '\n' + ow.map(v => '├ ' + v).join`\n` : ''}${m.isGroup ? '\n' + grup.map(v => '├ ' + v).join`\n` : ''}
${ch.map(v => '├ ' + v).join`\n`}
└────
contoh:
${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim()
      throw false
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyalakan' : 'matikan'}* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`.trim())
}
handler.help = ['on', 'off'].map(v => v + ' <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler