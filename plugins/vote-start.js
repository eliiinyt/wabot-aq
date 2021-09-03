let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_¡Todavía hay votos en este chat! _\n\n*${usedPrefix}anularvoto* - para eliminar voto`
    }
    m.reply(`¡Comienza la votación!\n\n*${usedPrefix}upvote* - con seguridad\n*${usedPrefix}devote* - por no\n
    *${usedPrefix}checkvote* -  para comprobar el voto\n 
    *${usedPrefix}anularvoto* - para eliminar votos`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [motivo] ']
handler.tags = ['vote']
handler.command = /^(start|comienzo)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler