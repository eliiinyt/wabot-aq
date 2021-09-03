let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No hay votaciones en este grupo! *_\n\n*${usedPrefix}startvote * - para empezar a votar`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['deletevote']
handler.tags = ['vote']
handler.command = /^(delete|Eliminar)vote$/i
handler.group = true
handler.admin = true
module.exports = handler