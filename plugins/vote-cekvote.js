let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No votar en este grupo!*_\n\n*${usedPrefix}startvote * - para empezar a votar`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 VOTE 」*

*razón:* ${reason}

*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}deletevote * - para eliminar el voto

_by ariffb_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
