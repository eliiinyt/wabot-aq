let fetch = require("node-fetch");
let handler = conn.sendFile(m.chat,'so', m);



handler.help = ['meme']
handler.tags = ['internet']

handler.command = /(que)$/i

handler.group = true

module.exports = handler
