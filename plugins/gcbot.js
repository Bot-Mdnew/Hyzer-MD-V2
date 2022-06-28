//ubah jadi grup mu

let handler = async m => m.reply(`
╭═════════════════
║   Group DaniBotz-Ofc
║https://chat.whatsapp.com/BiJs5Xl4oJA1Ama5BahUwd
╰══════════════════

`.trim()) 
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
