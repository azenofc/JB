let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {
    if (global.conn.user.jid == conn.user.jid) {
        let stdout = execSync('git remote set-url origin https://github.com/FokusDotId/JB.git && git pull' + (isROwner && text ? ' ' + text : ''))
        if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
        m.reply(stdout.toString())
    }
}
handler.help = ['update']
handler.tags = ['main']
handler.command = /^(u(pdate)?)$/i

handler.rowner = true

module.exports = handler