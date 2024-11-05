import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
global.fotoperfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let api = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
global.userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'

//creador y otros
global.channelid = '120363310433406751@newsletter'
global.creador = 'Wa.me/593939005387'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/593978663361'
global.namechannel = '𝗚𝗼𝗸𝘂𝗕𝗼𝘁 𝗖𝗵𝗮𝗻𝗻𝗲𝗹'
global.namechannel2 = '𝗦𝘂𝗻𝗹𝗶𝗴𝗵𝘁 𝗧𝗲𝗮𝗺 𝗖𝗵𝗮𝗻𝗻𝗲𝗹'
global.namecomu = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗚𝗼𝗸𝘂𝗕𝗼𝘁'
global.namecomu2 = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗦𝘂𝗻𝗹𝗶𝗴𝗵𝘁'
global.colab1 = '𝗞𝗶𝗿𝗮𝗕𝗼𝘁 & 𝗚𝗼𝗸𝘂𝗕𝗼𝘁'
global.colab2 = '𝗡𝗶𝗹𝗼𝘂 & 𝗚𝗼𝗸𝘂𝗕𝗼𝘁'
global.colab3 = '𝗚𝗿𝘂𝗽𝗼 𝗦𝘂𝗻𝗹𝗶𝗴𝗵𝘁 𝗧𝗲𝗮𝗺'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de GokuBot
global.emoji = '🌹'
global.emoji2 = '🌻'
global.emoji3 = '✨️'
global.emoji4 = '💦'
global.emoji5 = '💖'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waittt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗼 ...*';

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VaJL0xn0LKZL7FtiRs1e' 
var canal2 = 'https://whatsapp.com/channel/0029Vam7yUg77qVaz3sIAp0z'  
var git = 'https://github.com/Jostin207' 
var youtube = 'https://www.youtube.com/@jostin20oficialmanito' 
var github = 'https://github.com/Jostin207/GokuBot-MD' 
var facebook = 'https://www.facebook.com/JostinOfici' 
let tiktok = 'https://tiktok.com/@thegokubotmd'

global.redes = [canal, canal2, git, youtube, github, facebook, tiktok].getRandom()

global.canales = [canal, canal2].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363220442272685@newsletter', newsletterName: "✨ 𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫 𝑵𝒆𝒘 𝑪𝒉𝒂𝒏𝒏𝒆𝒍 🌹", serverMessageId: -1 }
}}, { quoted: m }

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363220442272685@newsletter', newsletterName: "✨ 𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫 𝑵𝒆𝒘 𝑪𝒉𝒂𝒏𝒏𝒆𝒍 🌹", serverMessageId: -1 }
}}, { quoted: m }}

export default handler
