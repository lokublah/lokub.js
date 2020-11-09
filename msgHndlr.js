/*
* "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
* Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
* (QS ash-Shaff: 2-3).
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const get = require('got')
const fetch = require('node-fetch')
const color = require('./lib/color')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { liriklagu, quotemaker, corona, randomNimek, fb, sleep, jadwalTv, ss } = require('./lib/functions')
const { help, snk, info, donate, readme, listChannel } = require('./lib/help')
const { stdout } = require('process')
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandler = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')

        const msgs = (message) => {
            if (command.startsWith('!')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }
const rugapoi = require ('./lib/nekopoi')
const rugaapi = require ('./lib/rugaApi')
const resep = require ('./lib/resep')
const cekResi = require ('./lib/cekResi')
const images = require ('./lib/images')
        const mess = {
            wait: '_Sedang Di Proses.._',
            joox: '_Sedang mencari lagu.._',
            prem: '_Hanya Untuk Pengguna Premium.._\nInfo Ketik *!premium*',
            error: {
                St: 'Kirim gambar dengan caption *!s* Atau reply gambar',
                Qm: '[ 404 ] Error,Beri tema yang simple, contoh :\nsun,blue,cloud,aesthetic,alone,cool dsb',
                Yt3: '[ 404 ] Tidak bisa mengubah ke mp3',
                Yt4: '[ 404 ] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[ 404 ] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[ 404 ] Bot tidak bisa mengeluarkan admin group!',
                Ad: '[ 404 ] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[ 404 ] Link yang anda kirim tidak valid!'
            }
        }
        const apiKey = 'EQ5I0L35qvzexX96KUDb' // apikey you can get it at https://mhankbarbar.herokuapp.com/api
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await client.getHostNumber()
        const blockNumber = await client.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const ownerNumber = ["6281282810290@c.us","6281380915247@c.us"] // replace with your whatsapp 
        const premiumNumber = ["6281282810290@c.us","6281380915247@c.us","6282329178176@c.us","6283811368384@c.us","6281373179470@c.us"]
        const isPremium = premiumNumber.includes(sender.id)
        const isOwner = ownerNumber.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        if (!isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('!')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
        //if (!isGroupMsg && !command.startsWith('!')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname))
        //if (isGroupMsg && !command.startsWith('!')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname), 'in', color(formattedTitle))
        if (isBlocked) return
        //if (!isOwner) return
        switch(command) {
        case '!sticker':
        case '!stiker':
        case '!s':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break
        case '!stickergif':
        case '!stikergif':
        case '!gifsticker':
        case '!gifstiker':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[] Sedang di proses,No  respon? Ganti Video 2-5 detik ', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break
	    case '!nobg':
        case '!snobg':
        if (!isPremium) return client.reply(from, mess.prem, id)
	    if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'TGwEemY8Txft884BKBcsLEuD', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
            case '!resi':
            if (args.length !== 2) return client.reply(from, `Maaf, format pesan salah.\nSilahkan ketik pesan dengan !resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[0])) return client.sendText(from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
            cekResi(args[0], args[1]).then((result) => client.sendText(from, result))
            break
            case '!nekopoi':
            client.sendText(from, `Sedang mencari video terbaru dari website nekopoi...`)
            rugapoi.getLatest()
            .then((result) => {
                rugapoi.getVideo(result.link)
                .then((res) => {
                    let heheq = '\n'
                    for (let i = 0; i < res.links.length; i++) {
                        heheq += `${res.links[i]}\n`
                    }
                    client.reply(from, `Title: ${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`)
                })
            })
            break
            case '!images':
            case '!search':
            if (args.length == 0) return client.reply(from, `Untuk mencari gambar di pinterest\nketik: !images [search]\ncontoh: !images naruto`, id)
            const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            client.sendFileFromUrl(from, hasilwall, '', '', id)
            break
            case '!artinama':
            if (args.length === 1) return client.reply(from, 'Masukan perintah : *!artinama* _nama kamu_', id) 
            const artihah = body.slice(10)
            const arte = await get.get('https://api.vhtear.com/artinama?nama='+artihah+'&apikey=botnolepbydandyproject').json()
            const { hasil } = arte.result
            client.reply(from, hasil, id)
            break
            case '!fakta':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                client.reply(from, randomnix, id)
            })
            break
            case '!shortlink':
            if (args.length == 0) return client.reply(from, `ketik shortlink <url>`, message.id)
            if (!isUrl(args[0])) return client.reply(from, 'Maaf, url yang kamu kirim tidak valid.', message.id)
            const shortlink = await urlShortener(args[0]);
            await client.sendText(from, shortlink);
            break
            case '!kpop':
            if (args.length == 0) return client.reply(from, `Untuk menggunakan !kpop\nSilahkan ketik: !kpop [query]\nContoh !kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    client.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
                })
            } else {
                client.reply(from, `Maaf query tidak tersedia. Silahkan ketik !kpop untuk melihat list query`)
            }
            break
            case '!pantun':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                client.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            break
            case 'makasih':
            return client.reply(from, `Sama-Sama Bro`)
            break
            case '!tes':
            client.reply(from, `ON`)
            break
        case '!donasi':
        case '!donate':
            client.sendLinkWithAutoPreview(from, 'https://saweria.co/donate/lokublah', donate)
            break
        case '!tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!tts [id, en, jp, ar] [teks]*, contoh *!tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa : [id] indonesia lagi error, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break
        case '/nulis':
        if (!isPremium) return client.reply(from, mess.prem, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!nulis [teks]*', id)
            const nulis = encodeURIComponent(body.slice(7))
            client.reply(from, mess.wait, id)
            let urlnulis = `https://mhankbarbar.herokuapp.com/nulis?text=${nulis}&apiKey=${apiKey}`
            await fetch(urlnulis, {method: "GET"})
            .then(res => res.json())
            .then(async (json) => {
                await client.sendFileFromUrl(from, json.result, 'Nulis.jpg', '_Nulis By Lokub_', id)
            }).catch(e => client.reply(from, "Error: "+ e));
            break
            case '/nulis2':
            client.reply(from, mess.wait, id)
            if (args.length == 0) return client.reply(from, `Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: !tulis [teks]\n\ncontoh: !tulis i love you 3000`, id)
            const nulisq = body.slice(7)
            const nulisp = await rugaapi.tulis(nulisq)
            await client.sendImage(from, `${nulisp}`, '', '_Nulis2 By Lokub_', id)
            break
            case '!listsurah':
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══〘 List Surah 〙══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '[ > ] '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *Lokub 2* 〙'
                    client.reply(from, hehex, id)
                })
            } catch(err) {
                client.reply(from, err, id)
            }
            break
            
            case '!ceklokasi':
            if (quotedMsg.type !== 'location') return client.reply(from, 'Maaf, format pesan salah silahkan periksa menu. [Wrong Format]', id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) client.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let data = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                data += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${data}`
            client.sendText(from, text)
            break
            case '!news':
          const respons = await axios.get('http://newsapi.org/v2/top-headlines?country=id&apiKey=b2d3b1c264c147ae88dba39998c23279')
          const { totalResults, articles } = respons.data
          res = totalResults
          if (args[1] >= totalResults) {
            res = totalResults
          } else {
            res = args[1]
          }
          i = 0
          pesan = '_*Berita Terbaru Hari Ini*_\n\n'
          for (const isi of articles) {
            i++
            pesan = pesan + i + '. ' + '_' + isi.title + '_' + '\n' + isi.publishedAt + '\n' + isi.description + '\n' + isi.url
            if (i<res) {
              pesen = pesan + '\n\n'
            } else if(i > res){
              break
            }
          }
          await client.sendText(from, pesan)
          break
          case '!play'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return client.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: !play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await client.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `_Lagu Ditemukan_\n\nJudul: ${res.data[0].title}\n\nDurasi: ${res.data[0].duration}detik\n\nUploaded: ${res.data[0].uploadDate}\n\nView: ${res.data[0].viewCount}\n\nsedang dikirim`, id)
                axios.get(`https://arugaz.herokuapp.com/api/yta?url=https://youtu.be/${res.data[0].id}`)
                .then(async(rest) => {
                    await client.sendPtt(from, `${rest.data.result}`, id)
                })
            })
            break
             case '!qrcode':
                        if(!args.lenght >= 2) return
                        let qrcodes = body.slice(8)
                        await client.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', '_Nih..._').catch(err => console.log('[ERROR] send image'))
                        break
            case '!joox':
            case '!lagu':
            if (!isPremium) return client.reply(from, mess.prem, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!joox _lagunya_*, untuk contoh silahkan kirim perintah *!readme*')
            const quernyanyi = body.slice(6)
            try {
                client.reply(from, mess.joox, id)
                const bahannyanyi = await fetch(`https://api.vhtear.com/music?query=${quernyanyi}&apikey=botnolepbydandyproject`)
                if (!bahannyanyi) throw new Error(`Err nyanyi :( ${bahannyanyi.statusText}`)
                const datanyanyi = await bahannyanyi.json()
                console.log(datanyanyi)
                client.reply(from, `_Mengambil Data.._`)
                if (!datanyanyi.result[0].judul == '') {
                    client.sendFileFromUrl(from, datanyanyi.result[0].linkImg, 'Thumbnyanyi.jpg',`_Name Song_ : ${datanyanyi.result[0].judul}\n_Artist_ : ${datanyanyi.result[0].penyanyi}\n_Durasi_ : ${datanyanyi.result[0].duration}`)
                    await client.sendFileFromUrl(from, datanyanyi.result[0].linkMp3, 'Laginyanyi.mp3', '', id).catch((errs) => console.log(errs))
                } else {
                    client.reply(from, `_Bot ga bisa nyanyi lagunya nih,cari yg lain aja_`, id)
                }
            } catch (err) {
                console.log(err)
                client.reply(from, `_Aku gak tau lagunya, kasih nama artisnya coba.._`, id)
            }
            break
           case '!dadu':
          const dice = Math.floor(Math.random() * 6) + 1
          await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
          break
             case '!ytsearch':
        case '!searchyt':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!searchyt* _Channel/Title YT yang akan dicari_')
            const keywot = body.slice(10)
            try {
                client.reply(from, '_Sedang mencari data..._')
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(keywot)}&apikey=botnolepbydandyproject`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*Hasil pencarian dari ${keywot}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*URL* : ${result[i].urlyt}\n*Durasi* : ${result[i].duration}\n*Views* : ${result[i].views}\n`
                }
                await client.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
            } catch (err) {
                    console.log(err)
            }
            break
             case '!cak':
        case '!caklontong':
            const sicak = await get.get('https://api.vhtear.com/funkuis&apikey=botnolepbydandyproject').json()
            const isicak = `*TTS CAK LONTONG*\n\n*Pertanyaan* : ${sicak.result.soal}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*Jawaban* : ${sicak.result.jawaban}\n*Penjelasan* : ${sicak.result.desk}`
            client.reply(from, isicak, id)            
            break
        case '!ytmp3':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!ytmp3 [linkYt]*, untuk contoh silahkan kirim perintah *!readme*')
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get(`https://mhankbarbar.herokuapp.com/api/yta?url=${args[1]}&apiKey=${apiKey}`).json()
                if (resp.error) {
                    client.reply(from, resp.error, id)
                } else {
                    const { title, thumb, filesize, result } = await resp
                    if (Number(filesize.split(' MB')[0]) >= 30.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl(from, thumb, 'thumb.jpg', `➸ *Title* : ${title}\n➸ *Filesize* : ${filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, result, `${title}.mp3`, '', id).catch(() => client.reply(from, mess.error.Yt3, id))
                    //await client.sendAudio(from, result, id)
                }
            } catch (err) {
                client.sendText(ownerNumber[0], 'Error ytmp3 : '+ err)
                client.reply(from, mess.error.Yt3, id)
            }
            break
        case '!ytmp4':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!ytmp4 [linkYt]*, untuk contoh silahkan kirim perintah *!readme*')
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const ytv = await get.get(`https://mhankbarbar.herokuapp.com/api/ytv?url=${args[1]}&apiKey=${apiKey}`).json()
                if (ytv.error) {
                    client.reply(from, ytv.error, id)
                } else {
                    if (Number(ytv.filesize.split(' MB')[0]) > 40.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl(from, ytv.thumb, 'thumb.jpg', `➸ *Title* : ${ytv.title}\n➸ *Filesize* : ${ytv.filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, ytv.result, `${ytv.title}.mp4`, '', id).catch(() => client.reply(from, mess.error.Yt4, id))
                }
            } catch (er) {
                client.sendText(ownerNumber[0], 'Error ytmp4 : '+ er)
                client.reply(from, mess.error.Yt4, id)
            }
            break
        case '!wiki':
        if (!isPremium) return client.reply(from, mess.prem, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!wiki [query]*\nContoh : *!wiki jason statham*', id)
            const query_ = body.slice(6)
            const wiki = await get.get(`https://mhankbarbar.herokuapp.com/api/wiki?q=${query_}&lang=id&apiKey=${apiKey}`).json()
            if (wiki.error) {
                client.reply(from, wiki.error, id)
            } else {
                client.reply(from, `*Judul* : ${query_}\n\n➸ *Hasil* : ${wiki.result}`, id)
            }
            break
        case '!cuaca':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca tangerang', id)
            const tempat = body.slice(7)
            const weather = await get.get(`https://mhankbarbar.herokuapp.com/api/cuaca?q=${tempat}&apiKey=${apiKey}`).json()
            if (weather.error) {
                client.reply(from, weather.error, id)
            } else {
                client.reply(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desk}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, id)
            }
            break
        case '!fbdl':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!fbdl [linkFb]*\ncontoh silahkan kirim perintah *!tutor*', id)
            if (!args[1].includes('facebook.com')) return client.reply(from, mess.error.Iv, id)
            client.reply(from, mess.wait, id)
            const epbe = await get.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${args[1]}&apiKey=${apiKey}`).json()
            if (epbe.error) return client.reply(from, epbe.error, id)
            client.sendFileFromUrl(from, epbe.result, 'epbe.mp4', epbe.title, id)
            break
        case '!owner':
            client.sendContact(from, '6281282810290@c.us')
            break
            case '!loc':
            case '!shareloc':
            client.sendLocation(from, '6.1864271106148153214z')
            break
        case '!igdl':
            if (args.length === 1) return client.reply(from, 'Kirim perintah !igdl [linkIg] contoh silahkan kirim perintah !tutor', id)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get(`https//dandyproject.herokuapp.com/api/ig=${args[1]}`).json()
                if (resp.result.includes('.mp4')) {
                    var ext = '.mp4'
                } else {
                    var ext = '.jpg'
                }
                await client.sendFileFromUrl(from, resp.result, `igeh${ext}`, '', id)
            } catch {
                client.reply(from, mess.error.Ig, id)
                }
            break
            case '/igdl':
          if (!isPremium) return await client.reply(from, 'Fitur ini hanya bisa digunakan premium user, silahkan gunakan selain di list premium',id) 
            if (args.length === 1) return client.reply(from, 'Kirim perintah !ig [linkIg] untuk contoh silahkan kirim perintah !readme')
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const respe = await get.get(`https//dandyproject..herokuapp.com/api/ig?url=${args[1]}`).json()
                if (respe.result.includes('.mp4')) {
                    var ext = '.mp4'
                } else {
                    var ext = '.jpg'
                }
                await client.sendFileFromUrl(from, respe.result, `igeh${ext}`, 'Sukses by Bot Nolep', id)
            } catch {
                client.reply(from, mess.error.Ig, id)
                }
            break
        case '!nsfw':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *!nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
            case '!teksmaker':
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                client.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then((serialized) => console.log(`Sukses Mengirim File dengan id: ${serialized} diproses selama ${processTime(t, moment())}`))
                    .catch((err) => conole.error(err))
            } else {
                await client.reply(from, 'Tidak ada gambar! Untuk membuka cara penggnaan kirim #menu [Wrong Format]', id)
            }
            break
        case '!welcome':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable bodat!', id)
            }
            break
        case '!menunakal':
            if (!isNsfw) return
            client.reply(from, '1. !randomHentai\n2. !randomNsfwNeko', id)
            break
        case '!cekig':
            if (args.length === 1)  return client.reply(from, 'Kirim perintah *!cekig @username*\nConntoh *!igStalk @duar_amjay*', id)
            const stalk = await get.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${args[1]}&apiKey=${apiKey}`).json()
            if (stalk.error) return client.reply(from, stalk.error, id)
            const { Biodata, Jumlah_Followers, Jumlah_Following, Jumlah_Post, Name, Username, Profile_pic } = stalk
            const caps = `➸ *Nama* : ${Name}\n➸ *Username* : ${Username}\n➸ *Jumlah Followers* : ${Jumlah_Followers}\n➸ *Jumlah Following* : ${Jumlah_Following}\n➸ *Jumlah Postingan* : ${Jumlah_Post}\n➸ *Biodata* : ${Biodata}`
            await client.sendFileFromUrl(from, Profile_pic, 'Profile.jpg', caps, id)
            break
        case '!anime':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!anime [query]*\nContoh : *!anime darling in the franxx*', id)
            const animek = await get.get(`https://mhankbarbar.herokuapp.com/api/kuso?q=${body.slice(7)}&apiKey=${apiKey}`).json()
            if (animek.error) return client.reply(from, animek.error, id)
            const res_animek = `Title: *${animek.title}*\n\n${animek.info}\n\nSinopsis: ${animek.sinopsis}\n\nLink Download:\n${animek.link_dl}`
            client.sendFileFromUrl(from, animek.thumb, 'kusonime.jpg', res_animek, id)
            break
        case '!nuklir':
            //if (isGroupMsg) return client.reply(from, 'Sorry this command for private chat only!', id)
            if (!isPremium) return client.reply(from, mess.prem, id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                client.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                        client.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id)
                        client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, (() => `${title}.pdf`, '', id)).catch(() => 
                        client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                        if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        client.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    client.reply(from, '[❗] Kode nuClear Salah!')
                }
            } else {
                client.reply(from, '[ WRONG ] Kirim perintah *!nuklir [nuClear]* untuk contoh kirim perintah *!readme*')
            }
        	break
         case '!ask':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
        case '!wait':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Apakah ini anime yang kamu maksud?* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Error !', id)
                })
            } else {
                client.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case '!buatquote':
        case '!buatquotes':
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                client.reply(from, mess.wait, id)
                const quotes = encodeURIComponent(arg[1])
                const author = encodeURIComponent(arg[2])
                const theme = encodeURIComponent(arg[3])
                await quotemaker(quotes, author, theme).then(amsu => {
                    client.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       client.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                client.reply(from, 'Usage: \n!buatquote |teks|watermark|theme\n\nEx :\n!buatquote |ini contoh|lokub|moon\n\nUntuk tema pakai yg simpe seperti : moon,sun,anime,play,help,alone dll', id)
            }
            break
        case '!linkgroup':
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
        case '!bc':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `[ Lokub ]\n_${msg}_`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case '!adminlist':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await client.sendTextWithMentions(from, mimin)
            break
        case '!ownergroup':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await client.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case '!mentionall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = 'Merapat kalian..\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += 'Merapat kalian..'
            await client.sendTextWithMentions(from, hehe)
            break
        case '!kickall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Admin')
                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Kick All Member Sukses', id)
            break
            case '!kudeta':
            if (!isGroupMsg) return client.reply(from, '_Hanya bisa di gunakan dalam group.._', id)
            if (!isBotGroupAdmins) return client.reply(from, '_Jadiin w admin bre.._', id)
            const allMems = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMems.length; i++) {
                if (groupAdmins.includes(allMems[i].id)) {
                    console.log('Admin')
                } else {
                    await client.removeParticipant(groupId, allMems[i].id)
                }
            }
            client.reply(from, '_Sukses Terkudeta.._', id)
            break
        case '!leaveall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(from, 'Succes leave all group!', id)
            break
        case '!clearall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Succes clear all chat!', id)
            break
        case '!add':
            const orang = args[1]
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!add* 628xxxxx (tanpa +/-)', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await client.addParticipant(from,`${orang}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '!kick':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *!kick* @tagmember', id)
            await client.sendText(from, `Cie dikeluarin :\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return client.reply(from, mess.error.Ki, id)
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case '!leave':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await client.sendText(from,'See You Later🙋‍♂️').then(() => client.leaveGroup(groupId))
            break
        case '!promote':
        case '!pm':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '!demote':
        case '!dm':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *!demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '!join':
            //return client.reply(from, 'Jika ingin meng-invite bot ke group anda, silahkan izin ke wa.me/6285892766102', id)
            if (args.length < 2) return client.reply(from, 'Kirim perintah *!join linkgroup key*\n\nEx:\n!join https://chat.whatsapp.com/ *kodejoin* \nkamu bisa dapat kode hanya dengan donasi 5k', id)
            const link = args[1]
            const key = args[2]
            const tGr = await client.getAllGroups()
            const minMem = 2
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            if (key !== 'kodejoin04') return client.reply(from, '*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid', id)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Ini link? 👊🤬', id)
            if (check.size < minMem) return client.reply(from, 'Member group tidak melebihi 30, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await client.joinGroupViaLink(link).then(() => client.reply(from, 'Bot akan segera masuk!'))
            } else {
                client.reply(from, 'Link group tidak valid!', id)
            }
            break
        case '!delete':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return client.reply(from, 'Salah!!, kirim perintah *!delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case '!kepo':
        if (!isPremium) return client.reply(from, mess.prem, id)
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', 'Here is you session..', id)
            break
        case '!lirik':
            if (args.length == 1) return client.reply(from, 'Kirim perintah *!lirik [optional]*, contoh *!lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            client.reply(from, lirik, id)
            break
        case '!chord':
       if (!isPremium) return client.reply(from, mess.prem, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!chord [query]*, contoh *!chord menepi*', id)
            const query__ = body.slice(7)
            const chord = await get.get(`https://mhankbarbar.herokuapp.com/api/chord?q=${query__}&apiKey=${apiKey}`).json()
            if (chord.error) return client.reply(from, chord.error, id)
            client.reply(from, chord.result, id)
            break
        case '!listdaerah':
            const listDaerah = await get('https://mhankbarbar.herokuapp.com/daerah').json()
            client.reply(from, listDaerah.result, id)
            break
        case '!listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(from, hih, id)
            break
        case '!jadwalshalat':
            if (args.length === 1) return client.reply(from, '[❗] Kirim perintah *!shalat [daerah]*\ncontoh : *!shalat Tangerang*\nUntuk list daerah kirim perintah *!listDaerah*')
            const daerah = body.slice(14)
            const jadwalShalat = await get.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${daerah}&apiKey=${apiKey}`).json()
            if (jadwalShalat.error) return client.reply(from, jadwalShalat.error, id)
            const { Imsyak, Subuh, Dhuha, Dzuhur, Ashar, Maghrib, Isya } = await jadwalShalat
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `Jadwal shalat di ${daerah}, ${tgl}-${arrbulan[bln]}-${thn}\n\nImsyak : ${Imsyak}\nSubuh : ${Subuh}\nDhuha : ${Dhuha}\nDzuhur : ${Dzuhur}\nAshar : ${Ashar}\nMaghrib : ${Maghrib}\nIsya : ${Isya}`
            client.reply(from, resultJadwal, id)
            break
        case '!listchannel':
            client.reply(from, listChannel, id)
            break
        case '!jadwaltv':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!Tv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            client.reply(from, jadwal, id)
            break
        case '!tvnow':
            const jadwalNow = await get.get('https://api.haipbis.xyz/jadwaltvnow').json()
            client.reply(from, `Jam : ${jadwalNow.jam}\n\nJadwalTV : ${jadwalNow.jadwalTV}`, id)
            break
        case '!loli':
            const loli = await get.get('https://mhankbarbar.herokuapp.com/api/randomloli').json()
            client.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'Lolinya om', id)
            break
        case '!waifu':
            const waifu = await get.get(`https://mhankbarbar.herokuapp.com/api/waifu?apiKey=${apiKey}`).json()
            client.sendFileFromUrl(from, waifu.image, 'Waifu.jpg', `➸ Name : ${waifu.name}\n➸ Description : ${waifu.desc}\n\n➸ Source : ${waifu.source}`, id)
            break
        case '!husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
            case '!trap':
            const trap = await randomNimek('trap')
            if (trap.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, trap, `trapnime${ext}`, 'Trapnime!', id)
            break
        case '!randomhentai':
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
                break
            } else {
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
            }
        case '!randomnsfwneko':
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            } else {
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            }
            break
        case '!randomnekonime':
            const nekonime = await get.get('https://mhankbarbar.herokuapp.com/api/nekonime').json()
            if (nekonime.result.endsWith('.png')) {
                var ext = '.png' 
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
         case '!wallhp':
            client.sendFileFromUrl(from, 'https://source.unsplash.com/1080x1920/?views','wp.jpeg')
           break
           case '!walldekstop':
            client.sendFileFromUrl(from, 'https://source.unsplash.com/1920x1080/?nature','wp.jpeg')
            break
          case '!ptl':
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            client.sendFileFromUrl(from, pep, 'pptl.jpg', 'Follow ig : https://www.instagram.com/ptl_repost untuk mendapatkan penyegar timeline lebih banyak', message.id)
            break
        case '!randomanime':
            const nime = await randomNimek('anime')
            if (nime.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nime, `Randomanime${ext}`, 'Randomanime!', id)
            break
        case '!anjing':
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            break
        case '!kucing':
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case '!kirimhandlerbgst':
            client.sendFile(from, './msgHndlr.js', 'msgHndlr.js')
            break
            case '!audio':
          ayat = "ayat"
          bhs = ""
          if (body.length > 6) {
            const response = await axios.get('https://api.quran.sutanlab.id/surah')
            const surah = response.data
            var idx = surah.data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                return true;
            });
            nmr = surah.data[idx].number
            if(!isNaN(nmr)) {
              if(args.length > 3) {
                ayat = args[2]
              }
              if (args.length == 3) {
                var last = function last(array, n) {
                  if (array == null) return void 0;
                  if (n == null) return array[array.length - 1];
                  return array.slice(Math.max(array.length - n, 0));
                };
                ayat = last(args)
              } 
              pesan = ""
              if(isNaN(ayat)) {
                const responsi2 = await axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/'+nmr+'.json')
                const {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsi2.data
                pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                client.sendText(from, pesan)
              } else {
                const responsi2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                const {data} = responsi2.data
                var last = function last(array, n) {
                  if (array == null) return void 0;
                  if (n == null) return array[array.length - 1];
                  return array.slice(Math.max(array.length - n, 0));
                };
                bhs = last(args)
                pesan = ""
                pesan = pesan + data.text.arab + "\n\n"
                if(bhs == "en") {
                  pesan = pesan + data.translation.en
                } else {
                  pesan = pesan + data.translation.id
                }
                pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[2]+")"
                await client.sendFileFromUrl(from, data.audio.secondary[0])
                await client.sendText(from, pesan)
              }
          }
          }
          break
          case '!resep':
            if (args.length == 0) return client.reply(from, `Untuk mencari resep makanan\nCaranya ketik: !resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
            const cariresep = body.slice(7)
            const hasilresep = await resep.resep(cariresep)
            client.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)
            break
                  case '!random ayat':
                  case '!randomayat':
          if (body.length > 6) {
            const response = await axios.get('https://api.quran.sutanlab.id/surah')
            const { data } = response.data
            nmr = Math.floor(Math.random() * 115);
            maks = data[nmr-1].numberOfVerses
            ayat = Math.floor(Math.random() * maks) + 1;
            if(!isNaN(nmr)) {
              const responsi2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
              const {data} = responsi2.data
              var last = function last(array, n) {
                if (array == null) return void 0;
                if (n == null) return array[array.length - 1];
                return array.slice(Math.max(array.length - n, 0));
              };
              bhs = last(args)
              pesan = ""
              pesan = pesan + data.text.arab + "\n\n"
              if(bhs == "en") {
                pesan = pesan + data.translation.en
              } else {
                pesan = pesan + data.translation.id
              }
              pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+ayat+")"
              client.sendText(from, pesan)
            }
          }
          break
          case 'assalamualaikum':
          client.reply(from, 'Waalaikumsalam')
          break
           case '!tafsir':
          if (body.length > 7) {
            const respons = await axios.get('https://api.quran.sutanlab.id/surah')
            const {data} = respons.data
            var idx = data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                return true;
            });
            nmr = data[idx].number
            if(!isNaN(nmr)) {
              const responsi = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
              const {data} = responsi.data
              pesan = ""
              pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
              pesan = pesan + data.text.arab + "\n\n"
              pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
              client.sendText(from, pesan)
          }
        }
          break
        case '!imgweb':
            const _query = body.slice(9)
            if (!_query.match(isUrl)) return client.reply(from, mess.error.Iv, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!imgweb [web]*\nContoh *!imgweb https://kitabisa.com*', id)
            const url2img = await get.get(`https://mhankbarbar.herokuapp.com/api/url2image?url=${_query}&apiKey=${apiKey}`).json()
            if (url2img.error) return client.reply(from, url2img.error, id)
            client.sendFileFromUrl(from, url2img.result, 'kyaa.jpg', null, id)
            break
            case '!wallanime':
            case '!wallnime':
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
            console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered Command from', color(pushname))
            break
        case '!quote':
        case '!quotes':
            const quotes = await get.get('https://mhankbarbar.herokuapp.com/api/randomquotes').json()
            client.reply(from, `➸ *Quotes* : ${quotes.quotes}\n➸ *Author* : ${quotes.author}`, id)
            break
        case '!meme':
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
        case '!help':
            client.sendText(from, help)
            break
            case '!menugrup':
            client.sendText(from, grup)
            break
        case '!tutor':
        case '!readme':
            client.reply(from, readme, id)
            break
        case '!info':
            client.sendLinkWithAutoPreview(from, 'https://instagram.com/lokubplace', info)
            break
        case '!premium':
            client.reply(from, `_Minat? Ketik *!donasi*`)
            break
            case '!bokep':
            client.reply(from, `bokap bokep pala bapak kau pecah`)
            break
            case '!bmkg':
            const bmkg = await get.get(`https://mhankbarbar.herokuapp.com/api/infogempa?apiKey=${apiKey}`).json()
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg
            const hasilgempa = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            client.sendFileFromUrl(from, map, 'shakemap.jpg', hasilgempa, id)
            break
            case '!howpremium':
            client.reply(from, `Unlocked in premium\n\n*!nobg*\nMembuat sticker tanpa background\n\n*!nulis*\nFitur nulis untuk gabut maupun tugas pendek\n\n*!nuklir (kode)*\nMenampilkan link dan info dari kode nuklir yang dituju\n\n*!kepo*\nMelihat situasi real time dari bot\n\n*!chord (judul)*\nMenampilkan chord lagu\n\n*!wiki* Mencari info dari wikipedia contoh !wiki jason statham\n\nQ : Kenapa Sekarang Ada Fitur Premium?\n\nA : Karena API KEY Sekarang tuh bayar beb`)
            break
       case '!next':
            client.reply(from, snk, id)
            break
            case '!surah':
          if (body.length > 6) {
            const response = await axios.get('https://api.quran.sutanlab.id/surah')
            const { data } = response.data
            var idx = data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                return true;
            });
            nmr = data[idx].number
            if(!isNaN(nmr)) {
              const responsi2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
              const {data} = responsi2.data
              var last = function last(array, n) {
                if (array == null) return void 0;
                if (n == null) return array[array.length - 1];
                return array.slice(Math.max(array.length - n, 0));
              };
              bhs = last(args)
              pesan = ""
              pesan = pesan + data.text.arab + "\n\n"
              if(bhs == "en") {
                pesan = pesan + data.translation.en
              } else {
                pesan = pesan + data.translation.id
              }
              pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[2]+")"
              client.sendText(from, pesan)
            }
          }
          break
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //client.kill().then(a => console.log(a))
    }
}