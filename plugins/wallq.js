// cewe yang ada di iklan royco bikin ange njing
// pdhl cuma iklan :v

const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '¿Buscando qué?'
  let res = await fetch(global.API('https://api.pexels.com/v1/' {
    auth: '563492ad6f917000010000019a75842b148f435fa2487429ad579abf',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendFile(m.chat, img.url_image, 'wallpaper', '¡Aquí está tu fondos de pantalla!', m)
}
handler.help = ['wallpaperq <query>']
handler.tags = ['internet']
handler.command = /^wall(paper)?q?$/i
handler.limit = true

module.exports = handler
