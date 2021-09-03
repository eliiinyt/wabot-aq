let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Bienvenida configurada correctamente\n@user (Mention)\n@subject (Título del grupo)\n@desc (Descripción del Grupo)')
  } else throw '¿Dónde está el texto?'
}
handler.help = ['setwelcome <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

