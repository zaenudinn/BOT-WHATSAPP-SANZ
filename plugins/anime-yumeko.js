import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/yumeko?apikey=tamvan'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(yumeko)$/i
handler.tags = ['anime']
handler.help = ['yumeko']
handler.premium = false
handler.limit = true

export default handler