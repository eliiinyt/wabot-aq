let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'owo', m)
}
handler.help = ['hentai']
handler.tags = ['internet']
handler.command = /^(hentai)$/i
//ftwrr
module.exports = handler
