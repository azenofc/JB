function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6281320170984', 'Fokus Dot Id', m)
  this.sendContact(m.chat, owner[0], namaowner, m)
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
