let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if (m.quoted) {
if (m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
conn.groupRemove(m.chat, [usr]); return;
}
  if (!m.mentionedJid[0]) throw `tag yang mau dikick`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupRemove(m.chat, [user]);
};

handler.help = ['kick', '-'].map((v) => v + '@user');
handler.tags = ['group'];
handler.command = /^(kick|\-)$/i;

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
