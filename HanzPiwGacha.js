//PERINGATAN NO HAPUS FILE PENTING YANG DI ENC NTAR ERROR GABISA JALAN NO SEBAR NO KASIH FREE BUY ONLY!!
//KETAHUAN? GW ENC ALL SEBAR TANGGUNG AKIBATNYA 



const config = require('./config');
const BOT_TOKEN = config.TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const JavaScriptObfuscator = require('javascript-obfuscator');
const pendingDeploy = {};
const os = require('os');
const path = require("path");
const fs = require('fs-extra');
const yts = require("yt-search");
const axios = require('axios');
const sharp = require("sharp");
const chalk = require("chalk");
const archiver = require("archiver");
const AdmZip = require("adm-zip");
const { JSDOM } = require("jsdom");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { TOKEN, OWNER, USERNAME_OWNER, APIKEY, CHANNEL_ID, CHANNEL_LINK, NAMA_BOT, USERNAME_BOT, VERSION, GETCHANNELID_USERNAME } = require('./config');
const moment = require('moment-timezone');
const bot = new TelegramBot(TOKEN, { polling: true });

const mediaGroups = {};
const groupsFile = path.join(__dirname, "database/jasher.json");
const dbAntiShare = path.join(__dirname, "./database/antishare.json");
const dbAntiLink = path.join(__dirname, './database/antilink.json');
const adminFile = path.join(__dirname, "./database/admin.json");
const filterFile = './database/filters.json';
const dbFile = "./database/users.json";
const cpremFile = './database/cpremCodes.json';
const GACHA_FOLDER = path.join(__dirname, 'gacha');
const DATA_FOLDER = path.join(__dirname, 'database');
const ITEMS_FILE = path.join(DATA_FOLDER, 'items.json');
const USERS_FILE = path.join(DATA_FOLDER, 'users.json');
const CODES_FILE = path.join(DATA_FOLDER, 'codes.json');
const db = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
const admins = JSON.parse(fs.readFileSync('./database/admin.json', 'utf8')).admins;
const usersFile = path.join(__dirname, "database", "users.json");

function _0x45c5(_0x451247,_0x2cecd5){const _0x17a3a8=_0x17a3();return _0x45c5=function(_0x45c526,_0x20631f){_0x45c526=_0x45c526-0x158;let _0x4a6e04=_0x17a3a8[_0x45c526];return _0x4a6e04;},_0x45c5(_0x451247,_0x2cecd5);}const _0x4e95aa=_0x45c5;function _0x17a3(){const _0x2cdc56=['3978432tyOMDA','7244856DNLuRi','.txt','.json','readFileSync','.webp','.html','.yml','2XlWVoe','19296827xsoGZT','ensureDirSync','2390MUTJkc','.jpeg','existsSync','136707pfpWSQ','.zip','parse','.py','414ipVKbU','237810pooZlb','.htm','27qbRRIM','.js','.yaml','.sh','19089EqXYnZ','9068PczJmB','.env','.pdf','writeJsonSync','.png','.jpg'];_0x17a3=function(){return _0x2cdc56;};return _0x17a3();}(function(_0x2b3895,_0x570f0a){const _0xdb4b57=_0x45c5,_0xef7caf=_0x2b3895();while(!![]){try{const _0x4fe115=parseInt(_0xdb4b57(0x177))/0x1*(-parseInt(_0xdb4b57(0x171))/0x2)+parseInt(_0xdb4b57(0x169))/0x3+parseInt(_0xdb4b57(0x163))/0x4*(-parseInt(_0xdb4b57(0x174))/0x5)+-parseInt(_0xdb4b57(0x15b))/0x6*(parseInt(_0xdb4b57(0x162))/0x7)+-parseInt(_0xdb4b57(0x16a))/0x8+-parseInt(_0xdb4b57(0x15e))/0x9*(parseInt(_0xdb4b57(0x15c))/0xa)+parseInt(_0xdb4b57(0x172))/0xb;if(_0x4fe115===_0x570f0a)break;else _0xef7caf['push'](_0xef7caf['shift']());}catch(_0xd2c210){_0xef7caf['push'](_0xef7caf['shift']());}}}(_0x17a3,0xa9aab),fs[_0x4e95aa(0x173)](GACHA_FOLDER),fs[_0x4e95aa(0x173)](DATA_FOLDER));let filters={},khodamList=[],chatSessions={},cpremCodes=[],items=fs[_0x4e95aa(0x176)](ITEMS_FILE)?JSON['parse'](fs[_0x4e95aa(0x16d)](ITEMS_FILE)):[],users=fs[_0x4e95aa(0x176)](USERS_FILE)?JSON[_0x4e95aa(0x159)](fs[_0x4e95aa(0x16d)](USERS_FILE)):{};function saveItems(){const _0x2818ed=_0x4e95aa;fs[_0x2818ed(0x166)](ITEMS_FILE,items,{'spaces':0x2});}function saveUsers(){fs['writeJsonSync'](USERS_FILE,users,{'spaces':0x2});}function saveCodes(){fs['writeJsonSync'](CODES_FILE,codes,{'spaces':0x2});}const isMaintenance=![],ALLOWED_EXT=[_0x4e95aa(0x15f),_0x4e95aa(0x158),'.txt','.html',_0x4e95aa(0x15d),_0x4e95aa(0x168),_0x4e95aa(0x175),_0x4e95aa(0x167),_0x4e95aa(0x16e),_0x4e95aa(0x165),_0x4e95aa(0x16b),_0x4e95aa(0x15f),_0x4e95aa(0x16c),'.md',_0x4e95aa(0x15a),_0x4e95aa(0x16f),'.css',_0x4e95aa(0x164),'.csv',_0x4e95aa(0x170),_0x4e95aa(0x160),_0x4e95aa(0x161),'.sql'],WEEKLY_LIMIT=0x15,EXPIRATION_MINUTES=0xf,GACHA_COOLDOWN=0xa*0x3e8,ITEMS_PER_PAGE=0xa,LISTITEM_PER_PAGE=0x32;
function _0x2410(_0x5f162a,_0x64aa30){const _0x1463a8=_0x1463();return _0x2410=function(_0x24109e,_0x45ba6c){_0x24109e=_0x24109e-0xc9;let _0x2a5e97=_0x1463a8[_0x24109e];return _0x2a5e97;},_0x2410(_0x5f162a,_0x64aa30);}function _0x1463(){const _0x3f7152=['TOKEN','red','138AuWqQr','95977HlctVH','55PuwRno','blue','2419185wQnRkw','tokens.json','exit','2139216SyyDKX','⛔\x20TOKEN\x20INVALID!\x20Hubungi\x20@hanzxstr\x20untuk\x20beli\x20akses/script.','1WLbZsf','3368HddzjA','fahri121108','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','log','error','DBGACHA','4596710PREDnZ','message','1352845NRgPJu','data','https://raw.githubusercontent.com/Naila-rgb/Gojo/refs/heads/main/Bojo.json','12438SMoBbQ','🔍\x20Memeriksa\x20apakah\x20token\x20bot\x20valid...','❌\x20Gagal\x20ambil\x20token\x20dari\x20GitHub:','479286kiXMzv'];_0x1463=function(){return _0x3f7152;};return _0x1463();}const _0x4f35d7=_0x2410;(function(_0x46e221,_0x3cd979){const _0x12b171=_0x2410,_0x2f88af=_0x46e221();while(!![]){try{const _0x1a0fc7=parseInt(_0x12b171(0xcc))/0x1*(parseInt(_0x12b171(0xdb))/0x2)+-parseInt(_0x12b171(0xe2))/0x3+-parseInt(_0x12b171(0xca))/0x4+-parseInt(_0x12b171(0xd5))/0x5+parseInt(_0x12b171(0xde))/0x6*(parseInt(_0x12b171(0xdf))/0x7)+-parseInt(_0x12b171(0xcd))/0x8*(parseInt(_0x12b171(0xd8))/0x9)+parseInt(_0x12b171(0xd3))/0xa*(parseInt(_0x12b171(0xe0))/0xb);if(_0x1a0fc7===_0x3cd979)break;else _0x2f88af['push'](_0x2f88af['shift']());}catch(_0x8d7dc1){_0x2f88af['push'](_0x2f88af['shift']());}}}(_0x1463,0xa1131));const GITHUB_TOKEN=_0x4f35d7(0xcf),REPO_OWNER=_0x4f35d7(0xce),REPO_NAME=_0x4f35d7(0xd2),FILE_PATH=_0x4f35d7(0xe3),GITHUB_TOKEN_LIST_URL=_0x4f35d7(0xd7);async function fetchValidTokens(){const _0xac87c=_0x4f35d7;try{const _0x3815d3=await axios['get'](GITHUB_TOKEN_LIST_URL);return _0x3815d3[_0xac87c(0xd6)]['tokens']||[];}catch(_0x213683){return console[_0xac87c(0xd1)](chalk[_0xac87c(0xdd)](_0xac87c(0xda),_0x213683[_0xac87c(0xd4)])),[];}}async function validateToken(){const _0xd0bd54=_0x4f35d7;console[_0xd0bd54(0xd0)](chalk[_0xd0bd54(0xe1)](_0xd0bd54(0xd9)));const _0x5ab53f=await fetchValidTokens();!_0x5ab53f['includes'](config[_0xd0bd54(0xdc)])&&(console[_0xd0bd54(0xd0)](chalk[_0xd0bd54(0xdd)](_0xd0bd54(0xcb))),process[_0xd0bd54(0xc9)](0x1)),console[_0xd0bd54(0xd0)](chalk['green']('✅\x20TOKEN\x20TERVERIFIKASI\x20THANKS\x20FOR\x20ORDER\x20'));}
// awas jangan di hapus error ntar soalnya di dalemnya ada data base file penting jalanin bot dengan tanpa error gw dah kaitin semuanya di dalem ntat error nyalahin gw bot ko error ko jelek halah bacot memek Create @hanzxstr

//===================== PENCEGAH MATI SAAT ERROR ===================
process.on("uncaughtException", (err) => {
  console.error("⚠️ Uncaught Exception:", err.message);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection:", reason);
});

//===================== FUNCTION INFO =====================

async function getChannelId() {
  try {
    const chat = await bot.getChat(`${GETCHANNELID_USERNAME}`);

    const info = `<blockquote>𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 𝗗𝗘𝗧𝗔𝗜𝗟 𝗕𝗢𝗧
━━━━━━━━━━━━━━━
🌐 Versi Bot : ${VERSION}
🤖 Nama Bot : ${NAMA_BOT}
📛 Nama Channel : ${chat.title || '-'}
🆔 ID Channel : <code>${chat.id}</code>
🧩 Tipe : ${chat.type}
🕒 Waktu : ${new Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'medium', timeZone: 'Asia/Jakarta' }).format(new Date())}

𝙽𝙾𝚃𝙴 : 𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙸𝙳 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙿𝙰𝚂𝙰𝙽𝙶 𝙳𝙸 𝙲𝙾𝙽𝙵𝙸𝙶.𝙹𝚂
𝙲𝙷𝙰𝙽𝙽𝙴𝙻_𝙸𝙳: 𝙸𝙳 𝙳𝙸𝚂𝙸𝙽𝙸, 𝙷𝙰𝚁𝚄𝚂 𝚂𝙴𝚂𝚄𝙰𝙸 𝙳𝙴𝙽𝙶𝙰𝙽 𝙲𝙷𝙰𝙽𝙽𝙴𝙻
𝙰𝙽𝙳𝙰, 𝙹𝙸𝙺𝙰 𝚃𝙸𝙳𝙰𝙺 𝚂𝙴𝚂𝚄𝙰𝙸 𝙱𝙾𝚃 𝚃𝙸𝙳𝙰𝙺 𝙰𝙺𝙰𝙽 𝚁𝙴𝚂𝙿𝙾𝙽
</blockquote>`;

    console.log('✅ ID Channel:', chat.id);
    await bot.sendMessage(7135669179, info, { parse_mode: 'HTML' });
    console.log('✅ Detail channel dikirim ke owner.');

  } catch (err) {
    console.error('❌ Gagal mendapatkan ID channel/Grup:', err.message);
    await bot.sendMessage(7135669179, `⚠️ <b>Gagal mendapatkan ID channel:</b> ${err.message}`, { parse_mode: 'HTML' });
  }
}

const getUptime = () => {
    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
};

//===================== FUNCTION MAINTENANCE =====================

function maintenanceCheck(bot, msgOrQuery) {
  const chatId = msgOrQuery.chat?.id || msgOrQuery.message?.chat?.id;
  const userId = msgOrQuery.from?.id;

  if (isMaintenance && userId !== 7135669179) {
    bot.sendMessage(chatId, `<blockquote>🚧 Bot sedang dalam mode maintenance.\nSilakan coba lagi nanti.</blockquote>`, {
      parse_mode: "HTML",
    });
    return true;
  }
  return false;
}

//===================== FUNCTION DOWNLOAD =====================

async function uploadToCatbox(fileBuffer, filename) {
  const form = new FormData();
  form.append("reqtype", "fileupload");
  form.append("fileToUpload", new Blob([fileBuffer]), filename);

  const res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: form,
  });

  const text = await res.text();
  if (!res.ok || text.startsWith("ERROR")) {
    throw new Error("Upload gagal: " + text);
  }
  return text.trim();
}

async function tiktok(url) {
  try {
    const encodedParams = new URLSearchParams();
    encodedParams.set("url", url);
    encodedParams.set("hd", "1");

    const response = await axios.post("https://tikwm.com/api/", encodedParams, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie": "current_language=en",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
      },
    });

    if (!response.data || !response.data.data) {
      throw new Error("Gagal mendapatkan data TikTok");
    }

    const videos = response.data.data;
    return {
      title: videos.title,
      cover: videos.cover,
      origin_cover: videos.origin_cover,
      no_watermark: videos.play,
      watermark: videos.wmplay,
      music: videos.music,
    };
  } catch (error) {
    throw error;
  }
}

function extractUrl(text) {
  if (!text) return null;
  const urlMatch = text.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=[\w\-]+|youtu\.be\/[\w\-]+)/i);
  return urlMatch ? urlMatch[0] : null;
}

//===================== FUNCTION GACHA EVENT =====================

function escapeHtml(text) {
  if (typeof text !== "string") return text ?? "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
    
}

function sanitizeFilename(name) {
  if (typeof name !== "string") return "file";
  return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").slice(0, 100);
}

function sanitizeFilename(name){
  return path.basename(name);
}

function isSafeFile(relPath) {
  try {
    const fullPath = path.join(GACHA_FOLDER, relPath);
    const stat = fs.statSync(fullPath);
    return stat.isFile();
  } catch {
    return false;
  }
}

function loadItemsFromFolder(){
  const files = fs.readdirSync(GACHA_FOLDER);
  const valid = files.filter(f => isSafeFile(f)).map(f => ({ filename: f }));
  items = valid;
  saveItems();
  return items;
}

function getRandomInt(max){ return Math.floor(Math.random() * max); }

function resetWeeklyIfNeeded(userData) {
  const now = new Date();
  const lastReset = userData.lastReset ? new Date(userData.lastReset) : null;

  if (!lastReset || (now - lastReset) >= 7 * 24 * 60 * 60 * 1000) {
    userData.count = 0;
    userData.lastReset = now.toISOString();
  }
}

function getNextResetDate(lastReset) {
  if (!lastReset) return "Belum Pernah Gacha";
  const resetDate = new Date(lastReset);
  resetDate.setDate(resetDate.getDate() + 7);
  return resetDate.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta"
  });
}

function ensureUserRecord(userId){
  if(!users[userId]) {
    users[userId] = {
      history: [],
      count: 0,
      lastReset: null,
      totalWins: 0,
      extraLimit: 0, 
      extraLimitInitial: 0,
      refCount: 0
    };
  }
  return users[userId];
}

function extAllowed(filename) {
  if (!filename) return false;
  const ext = path.extname(filename).toLowerCase();
  return ALLOWED_EXT.includes(ext);
}

function saveDB() {
  fs.writeFileSync(dbFile, JSON.stringify(users, null, 2));
}

function xpNeeded(level) {
  return level * 800;
}

function getRole(level) {
  if (level <= 1) return "Pemula🤓";
  if (level <= 3) return "Okelah👌";
  if (level <= 5) return "Elit😱";
  if (level <= 7) return "Sepuh☠️";
  if (level <= 8) return "Dewa💫";
  if (level <= 10) return "Veteran🥶";
  return "Legenda Tak Terkalahkan..";
}

function getBar(current, needed) {
  const totalBlocks = 10;
  const filled = Math.floor((current / needed) * totalBlocks);
  const empty = totalBlocks - filled;
  return `[${"█".repeat(filled)}${"-".repeat(empty)}] ${(current / needed * 800).toFixed(1)}%`;
}

if (!fs.existsSync(dbAntiShare)) fs.writeFileSync(dbAntiShare, "{}");
let antiforward = JSON.parse(fs.readFileSync(dbAntiShare));

if (!fs.existsSync(dbAntiLink)) fs.writeFileSync(dbAntiLink, '{}');
let antilink = JSON.parse(fs.readFileSync(dbAntiLink));

if (!fs.existsSync(CODES_FILE)) fs.writeJsonSync(CODES_FILE, [], { spaces: 2 });
let codes = fs.readJsonSync(CODES_FILE);

if (fs.existsSync(filterFile)) {
  filters = JSON.parse(fs.readFileSync(filterFile));
}

if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, "{}");

if(!items.length) loadItemsFromFolder();

function isPremiumActive(user) {
  if (!user.premiumUntil) return false;
  return new Date(user.premiumUntil) > new Date();
}

function parseDuration(str) {
  const match = str.match(/^(\d+)([hdwm])$/i);
  if (!match) return null;

  const value = parseInt(match[1]);
  const unit = match[2].toLowerCase();

  const hours = {
    h: 1,
    d: 24,
    w: 24 * 7,
    m: 24 * 30 
  }[unit];

  return value * hours * 60 * 60 * 1000;
}

function parseDuration(str) {
  const match = str.match(/^(\d+)([hdwm])$/i);
  if (!match) return null;
  const val = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  switch (unit) {
    case 'h': return val * 60 * 60 * 1000; 
    case 'd': return val * 24 * 60 * 60 * 1000;
    case 'w': return val * 7 * 24 * 60 * 60 * 1000;
    case 'm': return val * 30 * 24 * 60 * 60 * 1000;
    default: return null;
  }
}

try {
  const data = JSON.parse(fs.readFileSync(cpremFile, 'utf8'));
  cpremCodes = Array.isArray(data) ? data : [];
} catch { cpremCodes = []; }

function saveCpremCodes() {
  fs.writeFileSync(cpremFile, JSON.stringify(cpremCodes, null, 2));
}


function loadAdmins() {
  try {
    const data = fs.readFileSync(adminFile, "utf8");
    return JSON.parse(data).admins || [];
  } catch {
    return [];
  }
}

function saveAdmins(adminList) {
  fs.writeFileSync(adminFile, JSON.stringify({ admins: adminList }, null, 2));
}

let ADMIN_BOT_IDS = loadAdmins();

//===================== FUNCTION TOOLS =====================

function encryptJS(code) {
  const watermark = `// 🔒 Encrypted by HanzPiw\n`;
  const withWM = watermark + code;

  const obfuscated = JavaScriptObfuscator.obfuscate(withWM, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
    debugProtection: true,
    debugProtectionInterval: 4000,
    disableConsoleOutput: false,
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: true,
    selfDefending: true,
    splitStrings: true,
    splitStringsChunkLength: 4,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 1,
    stringArrayRotate: true,
    transformObjectKeys: true,
    unicodeEscapeSequence: true
  });

  return obfuscated.getObfuscatedCode();
}



function sendHistoryPage(bot, chatId, user, pageIndex) {
  const start = pageIndex * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageData = user.history.slice(start, end);

  const totalPages = Math.ceil(user.history.length / ITEMS_PER_PAGE);
  const pageText = pageData.map((h, i) =>
    `${start + i + 1}. 🎁 ${h.filename}\n🔑 ${h.code} — 📅 ${h.time}`
  ).join('\n\n');

  const text = `<blockquote>📜 Riwayat Gacha Kamu (Halaman ${pageIndex + 1}/${totalPages}):\n\n${pageText}</blockquote>`;

  const buttons = [];
  if (pageIndex > 0) buttons.push({ text: '⬅️ Prev', callback_data: `history_${pageIndex - 1}` });
  if (end < user.history.length) buttons.push({ text: 'Next ➡️', callback_data: `history_${pageIndex + 1}` });

  bot.sendMessage(chatId, text, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [buttons] }
  });
}

const OWNER_ID = 7945628710; // Ganti dengan ID Telegram owner kamu
const THREE_DAYS = 3 * 24 * 60 * 60 * 1000; // 3 hari dalam milidetik

// Fungsi untuk menampilkan leaderboard
function showLeaderboardPage(chatId, page, messageId = null) {
  const allRanks = Object.entries(users)
    .map(([uid, u]) => ({
      id: uid,
      username: escapeHtml(u.username ? `@${u.username}` : (u.name || `User_${uid}`)),
      gacha: u.totalWins || 0,
      teman: u.referrals || 0
    }))
    .sort((a, b) => b.gacha - a.gacha || b.teman - a.teman);

  const totalUsers = allRanks.length;
  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);

  if (totalUsers === 0) {
    return bot.sendMessage(chatId, `<blockquote>📭 Belum ada data leaderboard.</blockquote>`, { parse_mode: "HTML" });
  }

  const ranks = allRanks.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const lines = ranks.map((r, i) => {
    const rank = page * ITEMS_PER_PAGE + i + 1;
    const medal = rank === 1 ? "👑" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "🎯";
    return `${medal} <b>#${rank}</b> ${r.username}\n🎲 <b>Gacha:</b> ${r.gacha}x | 👥 <b>Teman:</b> ${r.teman}`;
  }).join("\n\n");

  const text = `
<blockquote>💎 <b>LEADERBOARD GACHA PREMIUM</b> 💎</blockquote>

${lines}

📊 <b>Total Pengguna:</b> ${totalUsers}
📖 <b>Halaman:</b> ${page + 1}/${totalPages}
`;

  const buttons = [];
  if (page > 0) buttons.push({ text: "⬅️ Prev", callback_data: `leaderboard_${page - 1}` });
  if (page < totalPages - 1) buttons.push({ text: "Next ➡️", callback_data: `leaderboard_${page + 1}` });

  const opts = {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [buttons] }
  };

  if (messageId) {
    bot.editMessageText(text, { chat_id: chatId, message_id: messageId, ...opts }).catch(console.log);
  } else {
    bot.sendMessage(chatId, text, opts);
  }
}

// Fungsi otomatis umumkan Top 1 ke Owner tiap 3 hari
function announceTop1ToOwner() {
  const allRanks = Object.entries(users)
    .map(([uid, u]) => ({
      id: uid,
      username: u.username ? `@${u.username}` : (u.name || `User_${uid}`),
      gacha: u.totalWins || 0,
      teman: u.referrals || 0
    }))
    .sort((a, b) => b.gacha - a.gacha || b.teman - a.teman);

  if (allRanks.length === 0) return;

  const top1 = allRanks[0];
  const now = new Date();
  const tanggal = now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const message = `
╔═━「 👑 <b>𝗧𝗢𝗣 𝟭 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗</b> 」━═╗

🥇 <b>Username:</b> ${top1.username}
🤖 <b>Total Gacha:</b> ${top1.gacha}x
👥 <b>Total Teman:</b> ${top1.teman}
📅 <b>Tanggal:</b> ${tanggal}

🏆 sᴇʟᴀᴍᴀᴛ ᴜɴᴛᴜᴋ ${top1.username} ᴛᴇʟᴀʜ ᴍᴇɴᴊᴀᴅɪ 
<b>Toᴘ 1 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ ɢᴀᴄʜᴀ ᴘʀᴇᴍɪᴜᴍ ᴠᴠɪᴘ!</b>

⏰ Update otomatis setiap <b>3 hari sekali</b>.
╚═════════════════════════╝
`;

  bot.sendMessage(OWNER_ID, message, { parse_mode: "HTML" }).catch(console.log);
}

// Jalankan pengumuman otomatis tiap 3 hari
setInterval(announceTop1ToOwner, THREE_DAYS);

// Bisa juga dijalankan langsung saat bot hidup pertama kali
announceTop1ToOwner();

function sendItemPage(bot, chatId, pageIndex) {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / LISTITEM_PER_PAGE);
  const start = pageIndex * LISTITEM_PER_PAGE;
  const end = start + LISTITEM_PER_PAGE;

  const pageItems = items.slice(start, end);
  const listText = pageItems
    .map((it, i) => `${start + i + 1}. ${it.filename}`)
    .join('\n');

  const text = `<blockquote>📦 Daftar Item (Halaman ${pageIndex + 1}/${totalPages}) — Total: ${totalItems}\n\n${listText}</blockquote>`;

  const buttons = [];
  if (pageIndex > 0) buttons.push({ text: "⬅️ Prev", callback_data: `listitem_${pageIndex - 1}` });
  if (end < totalItems) buttons.push({ text: "Next ➡️", callback_data: `listitem_${pageIndex + 1}` });

  bot.sendMessage(chatId, text, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [buttons] }
  });
}

async function pinMessage(bot, chatId, messageText, options = {}) {
  try {

    const newMessage = await bot.sendMessage(chatId, messageText, options);

    const users = getUsers();
    const userIdKey = chatId.toString();
    const oldMessageId = users[userIdKey]?.pinnedMessageId;

    if (oldMessageId) {
      try {
        await bot.deleteMessage(chatId, oldMessageId);
      } catch (err) {

        console.log(`⚠️ Gagal hapus pesan lama (ID: ${oldMessageId}):`, err.message);
      }
    }

    if (!users[userIdKey]) {
      users[userIdKey] = ensureUserRecord(userIdKey);
    }
    users[userIdKey].pinnedMessageId = newMessage.message_id;
    fs.writeJsonSync(USERS_FILE, users, { spaces: 2 });

    console.log(`✅ Pesan baru dipin di chat ${chatId}, ID: ${newMessage.message_id}`);
    return newMessage;

  } catch (error) {
    console.error("❌ Gagal memproses pin pesan:", error);
    await bot.sendMessage(chatId, `<blockquote>❌ Gagal memproses pesan pin: ${error.message}</blockquote>`, { parse_mode: "HTML" });
  }
}

function getUsers() {
  if (fs.existsSync(USERS_FILE)) {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("❌ Error parsing users.json, returning empty object:", e.message);
      return {};
    }
  }
  return {};
}

//===================== FUNCTION BACKUP =====================

async function backupAndSend() {
  const foldersToBackup = [
  'database',
  'gacha',
  'stickers'
  ];
  const filesToBackup = [
    'config.js',
    'HanzPiwGacha.js',
    'package.json',
    'package-lock.json'
  ];

  const zipFileName = 'BACKUP SC GACHA VIP HANZPIW OFFICIAL ( NO ENC ).zip';

  const output = fs.createWriteStream(zipFileName);
  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });

  output.on('close', async () => {
    await sendBackupToTelegram(zipFileName);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  for (const folder of foldersToBackup) {
    const folderPath = `./${folder}`;
    if (fs.existsSync(folderPath)) {
      archive.directory(folderPath, folder);
    } else {
      console.log(`📂 Folder '${folderPath}' tidak ditemukan.`);
    }
  }

  for (const file of filesToBackup) {
    const filePath = `./${file}`;
    if (fs.existsSync(filePath)) {
      archive.file(filePath, {
        name: file
      });
    } else {
      console.log(`📄 File '${filePath}' tidak ditemukan.`);
    }
  }

  archive.finalize();
}

async function sendBackupToTelegram(zipFileName) {
  try {
    const ownerId = 7135669179[0];

    if (!ownerId || isNaN(ownerId)) {
      console.error('❌ ID Owner tidak valid atau tidak ditemukan.');
      return;
    }

    const fileSize = fs.statSync(zipFileName).size / (1024 * 1024);
    const formattedDate = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta'
    });

    const caption = `📦 *Backup Bot Berhasil!* 📦\n\n📁 *Ukuran*: 1 TB\n📆 *Tanggal*: 99-99-9999\n\n✅ Simpan backup ini dengan baik!`;

await bot.telegram.sendDocument(ownerId, {
  source: zipFileName
}, {
  caption,
  parse_mode: 'Markdown'
});
    console.log(`📤 Backup dikirim ke owner: ${ownerId}`);

    fs.unlinkSync(zipFileName);
  } catch (error) {
    console.error('❌ Gagal mengirim backup ke Telegram:', error.message);
  }
}

//===================== FUNCTION GROUP =====================

async function loadCekKhodam() {
  try {
    const url = "https://raw.githubusercontent.com/angkasanotdev/DatabaseRaw/refs/heads/main/cekkhodam.json";
    const res = await axios.get(url);
    cekKhodam = res.data;
    console.log("✅ Berhasil load List Cek Khodam:", cekKhodam.length, "item");
  } catch (err) {
    console.error("❌ Gagal load List Cek Khodam:", err.message);
  }
}

const stickerDir = path.join(__dirname, "stickers");
if (!fs.existsSync(stickerDir)) fs.mkdirSync(stickerDir);

loadCekKhodam();

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}    

function komentarTampan(nilai) {
  if (nilai >= 100) return "💎 Ganteng dewa, mustahil diciptakan ulang.";
  if (nilai >= 94) return "🔥 Ganteng gila! Mirip artis Korea!";
  if (nilai >= 90) return "😎 Bintang iklan skincare!";
  if (nilai >= 83) return "✨ Wajahmu memantulkan sinar kebahagiaan.";
  if (nilai >= 78) return "🧼 Bersih dan rapih, cocok jadi influencer!";
  if (nilai >= 73) return "🆒 Ganteng natural, no filter!";
  if (nilai >= 68) return "😉 Banyak yang naksir nih kayaknya.";
  if (nilai >= 54) return "🙂 Lumayan sih... asal jangan senyum terus.";
  if (nilai >= 50) return "😐 Gantengnya malu-malu.";
  if (nilai >= 45) return "😬 Masih bisa lah asal percaya diri.";
  if (nilai >= 35) return "🤔 Hmm... mungkin bukan harinya.";
  if (nilai >= 30) return "🫥 Sedikit upgrade skincare boleh tuh.";
  if (nilai >= 20) return "🫣 Coba pose dari sudut lain?";
  if (nilai >= 10) return "😭 Yang penting akhlaknya ya...";
  return "😵 Gagal di wajah, semoga menang di hati.";
}

function komentarCantik(nilai) {
  if (nilai >= 100) return "👑 Cantiknya level dewi Olympus!";
  if (nilai >= 94) return "🌟 Glowing parah! Bikin semua iri!";
  if (nilai >= 90) return "💃 Jalan aja kayak jalan di runway!";
  if (nilai >= 83) return "✨ Inner & outer beauty combo!";
  if (nilai >= 78) return "💅 Cantik ala aesthetic tiktok!";
  if (nilai >= 73) return "😊 Manis dan mempesona!";
  if (nilai >= 68) return "😍 Bisa jadi idol nih!";
  if (nilai >= 54) return "😌 Cantik-cantik adem.";
  if (nilai >= 50) return "😐 Masih oke, tapi bisa lebih wow.";
  if (nilai >= 45) return "😬 Coba lighting lebih terang deh.";
  if (nilai >= 35) return "🤔 Unik sih... kayak seni modern.";
  if (nilai >= 30) return "🫥 Banyak yang lebih butuh makeup.";
  if (nilai >= 20) return "🫣 Mungkin inner beauty aja ya.";
  if (nilai >= 10) return "😭 Cinta itu buta kok.";
  return "😵 Semoga kamu lucu pas bayi.";
}

function komentarKaya(nilai) {
  if (nilai >= 100) return "💎 Sultan auto endorse siapa aja.";
  if (nilai >= 90) return "🛥️ Jet pribadi parkir di halaman rumah.";
  if (nilai >= 80) return "🏰 Rumahnya bisa buat konser.";
  if (nilai >= 70) return "💼 Bos besar! Duit ngalir terus.";
  if (nilai >= 60) return "🤑 Kaya banget, no debat.";
  if (nilai >= 50) return "💸 Kaya, tapi masih waras.";
  if (nilai >= 40) return "💳 Lumayan lah, saldo aman.";
  if (nilai >= 30) return "🏦 Kayanya sih... dari tampang.";
  if (nilai >= 20) return "🤔 Cukup buat traktir kopi.";
  if (nilai >= 10) return "🫠 Kaya hati, bukan dompet.";
  return "🙃 Duitnya imajinasi aja kayaknya.";
}

function komentarMiskin(nilai) {
  if (nilai >= 100) return "💀 Miskin absolut, utang warisan.";
  if (nilai >= 90) return "🥹 Mau beli gorengan mikir 3x.";
  if (nilai >= 80) return "😩 Isi dompet: angin & harapan.";
  if (nilai >= 70) return "😭 Bayar parkir aja utang.";
  if (nilai >= 60) return "🫥 Pernah beli pulsa receh?";
  if (nilai >= 50) return "😬 Makan indomie aja dibagi dua.";
  if (nilai >= 40) return "😅 Listrik token 5 ribu doang.";
  if (nilai >= 30) return "😔 Sering nanya *gratis ga nih?*";
  if (nilai >= 20) return "🫣 Semoga dapet bansos.";
  if (nilai >= 10) return "🥲 Yang penting hidup.";
  return "😵 Gaji = 0, tagihan = tak terbatas.";
}

function komentarJanda(nilai) {
  if (nilai >= 100) return "🔥 Janda premium, banyak yang ngantri.";
  if (nilai >= 90) return "💋 Bekas tapi masih segel.";
  if (nilai >= 80) return "🛵 Banyak yang ngajak balikan.";
  if (nilai >= 70) return "🌶️ Janda beranak dua, laku keras.";
  if (nilai >= 60) return "🧕 Pernah disakiti, sekarang bersinar.";
  if (nilai >= 50) return "🪞 Masih suka upload status galau.";
  if (nilai >= 40) return "🧍‍♀️ Janda low-profile.";
  if (nilai >= 30) return "💔 Ditinggal pas lagi sayang-sayangnya.";
  if (nilai >= 20) return "🫥 Baru ditinggal, masih labil.";
  if (nilai >= 10) return "🥲 Janda lokal, perlu support moral.";
  return "🚫 Masih istri orang, bro.";
}

function komentarPacar(nilai) {
  if (nilai >= 95) return "💍 Sudah tunangan, tinggal nikah.";
  if (nilai >= 85) return "❤️ Pacaran sehat, udah 3 tahun lebih.";
  if (nilai >= 70) return "😍 Lagi anget-angetnya.";
  if (nilai >= 60) return "😘 Sering video call tiap malam.";
  if (nilai >= 50) return "🫶 Saling sayang, tapi LDR.";
  if (nilai >= 40) return "😶 Dibilang pacaran, belum tentu. Tapi dibilang nggak, juga iya.";
  if (nilai >= 30) return "😅 Masih PDKT, nunggu sinyal.";
  if (nilai >= 20) return "🥲 Sering ngechat, tapi dicuekin.";
  if (nilai >= 10) return "🫠 Naksir diam-diam.";
  return "❌ Jomblo murni, nggak ada harapan sementara ini.";
}

function komentarSabar(nilai) {
  if (nilai >= 100) return "🌟 Wah, kamu luar biasa sabar dan hebat!";
  if (nilai >= 94) return "👍 Tetap sabar, kesuksesan sudah dekat.";
  if (nilai >= 90) return "😊 Sabar itu kunci, terus semangat ya!";
  if (nilai >= 83) return "💪 Kamu kuat, sabar sedikit lagi.";
  if (nilai >= 78) return "🌱 Sabar tumbuh jadi kekuatan.";
  if (nilai >= 73) return "✨ Jangan lelah bersabar, hasilnya manis.";
  if (nilai >= 68) return "🧘‍♂️ Tenang, sabar membawa kedamaian.";
  if (nilai >= 54) return "🌸 Sabar itu indah, teruslah berusaha.";
  if (nilai >= 50) return "🌈 Percaya deh, sabar ada hadiahnya.";
  if (nilai >= 45) return "☀️ Sabar sedikit lagi, kamu pasti bisa.";
  if (nilai >= 35) return "🌻 Jangan putus asa, sabar selalu membantu.";
  if (nilai >= 30) return "🕊️ Sabar itu pelajaran berharga.";
  if (nilai >= 20) return "🌿 Terus sabar ya, jangan menyerah.";
  if (nilai >= 10) return "🤲 Sedikit sabar, banyak berkah.";
  return "🙏 Sabar ya, setiap ujian ada hikmahnya.";
}

function komentarTolol(nilai) {
  if (nilai >= 100) return "🤪 Wah, level tololmu sudah master, salut!";
  if (nilai >= 94) return "😂 Udah pinter, tapi masih suka kocak.";
  if (nilai >= 90) return "😜 Kreatif banget, tolol yang menghibur!";
  if (nilai >= 83) return "😅 Santai aja, semua orang kadang tolol.";
  if (nilai >= 78) return "😆 Lumayan kocak, jangan berubah ya.";
  if (nilai >= 73) return "😉 Tolol tapi charming, kombinasi keren.";
  if (nilai >= 68) return "😎 Asal jangan kebanyakan mikir, santuy.";
  if (nilai >= 54) return "🤭 Jangan sedih, tolol itu manusiawi.";
  if (nilai >= 50) return "🙂 Santuy, semua ada waktunya.";
  if (nilai >= 45) return "😬 Masih wajar kok, jangan dipikirin.";
  if (nilai >= 35) return "🤔 Kadang tolol itu bikin lucu, ya kan?";
  if (nilai >= 30) return "😴 Santai, jangan terlalu serius.";
  if (nilai >= 20) return "😐 Bisa jadi tolol pintar, coba terus.";
  if (nilai >= 10) return "🙃 Hidup terlalu singkat buat terlalu serius.";
  return "😵 Wah, kamu jago banget jadi tolol, jangan berubah!";
}

function komentarMati(nilai) {
  if (nilai >= 100) return "💀 1 tahun lagi, kamu bakal jadi legenda!";
  if (nilai >= 94) return "☠️ 5 tahun lagi, siap-siap jadi juara!";
  if (nilai >= 90) return "🪦 10 tahun lagi, perjalanan masih panjang.";
  if (nilai >= 83) return "😵 15 tahun lagi, jangan berhenti berusaha.";
  if (nilai >= 78) return "🦴 20 tahun lagi, kesabaranmu diuji.";
  if (nilai >= 73) return "⚰️ 25 tahun lagi, semangat terus ya!";
  if (nilai >= 68) return "🕯️ 30 tahun lagi, jangan patah semangat.";
  if (nilai >= 54) return "🪦 40 tahun lagi, masih banyak waktu buat berkarya.";
  if (nilai >= 50) return "💤 50 tahun lagi, tetap jaga kesehatan dan mimpi.";
  if (nilai >= 45) return "🛌 60 tahun lagi, santai tapi jangan malas.";
  if (nilai >= 35) return "🌫️ 70 tahun lagi, teruslah berjuang.";
  if (nilai >= 30) return "😶‍🌫️ 80 tahun lagi, perjalanan panjang menanti.";
  if (nilai >= 20) return "🌙 90 tahun lagi, semangat terus hidupnya!";
  if (nilai >= 10) return "🌑 100 tahun lagi, kamu bakal jadi legenda abadi.";
  return "🌌 Lebih dari 100 tahun lagi, perjalananmu baru mulai.";
}

//===================== FUNCTION START =====================

function generateUserCaption({ nama, userId, waktuRunPanel, jumlahFitur, user, refLink, totalRef, totalUsers }) {

  let role = "👤 User";
  if (userId == OWNER) role = "👑 Owner";
  else if (user.isPremium && isPremiumActive(user)) role = "🌟 Premium";

  return `<blockquote>
🜲━━━━━━━〔 👤 <b>𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗨𝗦𝗘𝗥</b> 〕━━━━━━━🜲
🆔 <b>ID :</b> <code>${userId}</code>    
💠 <b>Role :</b> ${role}    
🎯 <b>Limit :</b> ${WEEKLY_LIMIT}x + ${user.extraLimit || 0} Referral  
⚙️ <b>Bot :</b> ${escapeHtml(NAMA_BOT)} v${escapeHtml(VERSION)}  
👨‍💻 <b>Dev :</b> @hanzxstr
🜲━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━🜲
🜲━━━━━━━〔 📊 <b>sʏsᴛᴇᴍ ɢᴀᴄʜᴀ </b> 〕━━━━━━━🜲  
👤 <b>Username :</b> ${nama}  
📦 <b>Active Modules :</b> ${jumlahFitur}  
👥 <b>Registered Users :</b> ${totalUsers}  
🌐 <b>Uptime System :</b> ${waktuRunPanel}  
💾 <b>Database Sync :</b> Stable ✅  
⚡ <b>Performance :</b> Optimal ⚙️  
👨‍💻 <b>Maintained By :</b> ${USERNAME_OWNER}  
🜲━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━🜲
</blockquote>`;
}

function generateMainMenu() {
  return {
    inline_keyboard: [
  [
    { text: "✨ɢᴀᴄʜᴀ ᴍᴇɴᴜ", callback_data: "eventsatu" },
    { text: "🔱ᴏᴡɴᴇʀ ᴍᴇɴᴜ", callback_data: "eventdua" }
  ],
  [
    { text: "🔰ᴍᴇɴᴜ ɢʀᴜᴘ", callback_data: "group" },
    { text: "🛠ᴛᴏᴏʟs", callback_data: "tools" }
  ],
  [
    { text: "🎮ᴍᴇɴᴜ 𝙶𝙰𝙼𝙴", callback_data: "more" },
    { text: "💫ᴛʜᴀɴᴋs", callback_data: "tqto" }
  ],
  [
    { text: "👥𝚁𝙴𝙵𝙵𝙴𝚁𝙰𝙻", callback_data: "referral" },
    { text: "👤𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁", url: "https://t.me/hanzxstr" }
  ],
  [
    { text: "💵𝙱𝚄𝚈 𝚂𝙲 𝙳𝙻𝙻", callback_data: "buy_access" },
    { text: "💰𝙳𝙾𝙽𝙰𝚂𝙸", callback_data: "donasi" }
  ],
  [
   
    { text: "🥇𝚃𝙾𝙿 𝟷 𝙶𝙰𝙲𝙷𝙰", callback_data: "top1" }
  ],
  [
    { text: "🔩𝙽𝙴𝚆 𝙵𝙸𝚃𝚄𝚁", callback_data: "info" }
  ],
]
}
};
function backButton() {
  return { inline_keyboard: [[{ text: "🔙 Kembali", callback_data: "back_home" }]] };
}

function getMenuCaption(type, nama, waktuRunPanel) {
  const baseHeader = `──────────────────────────────
─  🐦‍🔥 𝐈𝐍𝐅𝐎 𝐃𝐀𝐑𝐈 𝐌𝐔
───────────────────────────────
─  🪪 𝐍𝐀𝐌𝐄 : ʙᴏᴛ ɢᴀᴄʜᴀ ᴘʀᴇᴍɪᴜᴍ ʜᴀɴᴢᴘɪᴡ
─  👤 𝐔𝐒𝐄𝐑 : ${nama}
─  👨‍💻 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 : @hanzxstr
─  🛠 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${VERSION}
─  🔋 𝐎𝐍𝐋𝐈𝐍𝐄 : ${waktuRunPanel}
───────────────────────────────`;

  switch (type) {
    case "eventsatu":
      return `<blockquote>${baseHeader}
╭──〔 🎰 𝐌𝐄𝐍𝐔 𝐆𝐀𝐂𝐇𝐀 🎰 〕──╮
│ ⌬ /gacha
│ ╰─▸ 𝙼𝙴𝙽𝙳𝙰𝙿𝙰𝚃𝙺𝙰𝙽 𝙷𝙰𝙳𝙸𝙰𝙷 𝚁𝙰𝙽𝙳𝙾𝙼
│ ⌬ /autogacha
│ ╰─▸ 𝙰𝚄𝚃𝙾 𝙶𝙰𝙲𝙷𝙰 25𝚇 ( 𝙵𝙾𝚁 𝚄𝚂𝙴𝚁 )
│ ⌬ /history
│ ╰─▸ 𝚁𝙸𝚆𝙰𝚈𝙰𝚃 𝙿𝙴𝙽𝙳𝙰𝙿𝙰𝚃𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /clearhistory
│ ╰─▸ 𝙷𝙰𝙿𝚄𝚂 𝚁𝙸𝚆𝙰𝚈𝙰𝚃 𝙿𝙴𝚁 𝚄𝚂𝙴𝚁
│ ⌬ /leaderboard
│ ╰─▸ 𝟷𝟶 𝚃𝙾𝙿 𝚃𝙴𝚁𝚃𝙸𝙽𝙶𝙶𝙸 𝙶𝙰𝙲𝙷𝙰 𝙴𝚅𝙴𝙽𝚃
│ ⌬ /listitem
│ ╰─▸ 𝙳𝙰𝙵𝚃𝙰𝚁 𝙻𝙸𝚂𝚃 𝙷𝙰𝙳𝙸𝙰𝙷 𝙶𝙰𝙲𝙷𝙰
│ ⌬ /redeem
│ ╰─▸ 𝚁𝙴𝙳𝙴𝙴𝙼 𝙲𝙾𝙳𝙴 𝙵𝚁𝙴𝙴 𝙻𝙸𝙼𝙸𝚃
│ ⌬ /info
│ ╰─▸ 𝙸𝙽𝙵𝙾 𝙳𝙰𝚃𝙰 𝚄𝚂𝙴𝚁
│ ⌬ /sendlimit
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝙻𝙸𝙼𝙸𝚃 𝙺𝙴 𝚄𝚂𝙴𝚁 𝙻𝙰𝙸𝙽
│ ⌬ /cekprem
│ ╰─▸ 𝙲𝙴𝙺 𝙸𝙽𝙵𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼
╰──〔 ✨ 𝙈𝙀𝙉𝙐 𝙂𝘼𝘾𝙃𝘼✨ 〕──╯</blockquote>`;
    case "eventdua":
      return `<blockquote>${baseHeader}
╭──〔 🔱 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑 🔱 〕──╮
│ ⌬ /addlimit
│ ╰─▸ 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙺𝙰𝙽 𝙻𝙸𝙼𝙸𝚃 𝚄𝙽𝚃𝚄𝙺 𝚄𝚂𝙴𝚁
│ ⌬ /dellimit
│ ╰─▸ 𝙼𝙴𝙽𝙶𝚄𝚁𝙰𝙽𝙶𝙸 𝙻𝙸𝙼𝙸𝚃 𝚄𝚂𝙴𝚁
│ ⌬ /additem
│ ╰─▸ 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙺𝙰𝙽 𝙷𝙰𝙳𝙸𝙰𝙷 𝙶𝙰𝙲𝙷𝙰
│ ⌬ /delitem
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙰𝙿𝚄𝚂 𝙳𝙰𝙵𝚃𝙰𝚁 𝙷𝙰𝙳𝙸𝙰𝙷
│ ⌬ /addprem
│ ╰─▸ 𝙼𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚄𝚂𝙴𝚁 𝚃𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼
│ ⌬ /delprem
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙰𝙿𝚄𝚂 𝚄𝚂𝙴𝚁 𝙿𝚁𝙴𝙼𝙸𝚄𝙼
│ ⌬ /addadmin
│ ╰─▸ 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙺𝙰𝙽 𝙰𝙳𝙼𝙸𝙽
│ ⌬ /deladmin
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙰𝙿𝚄𝚂 𝙰𝙳𝙼𝙸𝙽
│ ⌬ /listadmin
│ ╰─▸ 𝙳𝙰𝙵𝚃𝙰𝚁 𝙰𝙳𝙼𝙸𝙽
│ ⌬ /createprem
│ ╰─▸ 𝙼𝙴𝙼𝙱𝚄𝙰𝚃 𝙲𝙾𝙳𝙴 𝚁𝙴𝙳𝙴𝙴𝙼 𝙿𝚁𝙴𝙼𝙸𝚄𝙼
│ ⌬ /createcode
│ ╰─▸ 𝙼𝙴𝙼𝙱𝚄𝙰𝚃 𝙲𝙾𝙳𝙴 𝚁𝙴𝙳𝙴𝙴𝙼 𝙻𝙸𝙼𝙸𝚃
│ ⌬ /delcode
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙰𝙿𝚄𝚂 𝙲𝙾𝙳𝙴 𝚁𝙴𝙳𝙴𝙴𝙼
│ ⌬ /listcode
│ ╰─▸ 𝙻𝙸𝚂𝚃 𝙲𝙾𝙳𝙴 𝚁𝙴𝙳𝙴𝙴𝙼
│ ⌬ /info
│ ╰─▸ 𝙸𝙽𝙵𝙾 𝙳𝙰𝚃𝙰 𝚄𝚂𝙴𝚁
│ ⌬ /pengumuman
│ ╰─▸ 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝙺𝙴 𝚂𝙴𝙼𝚄𝙰 𝚄𝚂𝙴𝚁
╰──〔 ✨ 𝙈𝙀𝙉𝙐 𝙂𝘼𝘾𝙃𝘼✨ 〕──╯</blockquote>`;
    case "group":
      return `<blockquote>${baseHeader}
╭──〔 🔰 𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔 🔰 〕──╮
│ ⌬ /jasher
│ ╰─▸ 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝙿𝙴𝚂𝙰𝙽 𝙺𝙴 𝙶𝚁𝙾𝚄𝙿
│ ⌬ /brat
│ ╰─▸ 𝙱𝙸𝙺𝙸𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁
│ ⌬ /iqc
│ ╰─▸ 𝙸𝙿𝙷𝙾𝙽𝙴 𝚀𝚄𝙾𝚃𝙴 𝙲𝙷𝙰𝚃 𝚃𝙴𝚇𝚃
│ ⌬ /play
│ ╰─▸ 𝙽𝚈𝙰𝚁𝙸 𝙻𝙰𝙶𝚄 𝚂𝙴𝚂𝚄𝙰𝙸 𝙹𝚄𝙳𝚄𝙻
│ ⌬ /tiktok
│ ╰─▸ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝚅𝙸𝙳𝙸𝙾 𝙳𝙰𝚁𝙸 𝙻𝙸𝙽𝙺 𝚃𝚃
│ ⌬ /youtube
│ ╰─▸ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝚅𝙸𝙳𝙸𝙾 𝙳𝙰𝚁𝙸 𝙻𝙸𝙽𝙺 𝚈𝚃
│ ⌬ /cariyoutube
│ ╰─▸ 𝙲𝙰𝚁𝙸 𝙻𝙰𝙶𝚄 𝙱𝙴𝙱𝙰𝚂
│ ⌬ /hytamkan
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙸𝚃𝙰𝙼𝙺𝙰𝙽 𝙺𝚄𝙻𝙸𝚃
│ ⌬ /cecan
│ ╰─▸ 𝙵𝙾𝚃𝙾 𝙲𝙴𝙲𝙰𝙽
│ ⌬ /promote
│ ╰─▸ 𝙼𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚂𝚃𝙰𝚃𝚄𝚂 𝙼𝙴𝙼𝙱𝙴𝚁
│ ⌬ /demote
│ ╰─▸ 𝙼𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚂𝚃𝙰𝚃𝚄𝚂 𝙰𝙳𝙼𝙸𝙽
│ ⌬ /pin
│ ╰─▸ 𝙼𝙴𝙽𝚈𝙴𝙼𝙰𝚃𝙺𝙰𝙽 𝙿𝙴𝚂𝙰𝙽
│ ⌬ /unpin
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝟺𝙿𝚄𝚂 𝚂𝙴𝙼𝙰𝚃𝙰𝙽
╰──〔 ✨ 𝙈𝙀𝙉𝙐 𝙂𝘼𝘾𝙃𝘼✨ 〕──╯</blockquote>`;
    case "tools":
      return `<blockquote>${baseHeader}
╭──〔 ⚙️ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ⚙️ 〕──╮
│ ⌬ /id
│ ╰─▸ 𝙲𝙴𝙺 𝙸𝙳 𝚄𝚂𝙴𝚁
│ ⌬ /hacknik
│ ╰─▸ 𝙲𝙴𝙺 𝙳𝙰𝚃𝙰 𝙽𝙸𝙺
│ ⌬ /gethtml
│ ╰─▸ 𝙰𝙼𝙱𝙸𝙻 𝙲𝙾𝙳𝙴 𝙷𝚃𝙼𝙻 𝚆𝙴𝙱
│ ⌬ /tourl
│ ╰─▸ 𝙼𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝙼𝙴𝙳𝙸𝙰 𝚃𝙾 𝚄𝚁𝙻
│ ⌬ /nglspam
│ ╰─▸ 𝚂𝙿𝙰𝙼 𝙻𝙸𝙽𝙺 𝙽𝙶𝙻
│ ⌬ /antishare
│ ╰─▸ 𝙳𝙴𝙻𝙴𝚃𝙴 𝚂𝙷𝙰𝚁𝙴 𝚃𝙴𝚇𝚃
│ ⌬ /antilink
│ ╰─▸ 𝙳𝙴𝙻𝙴𝚃𝙴 𝚂𝙷𝙰𝚁𝙴 𝙻𝙸𝙽𝙺
│ ⌬ /hubungiowner
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝚄𝙱𝚄𝙽𝙶𝙸 𝙾𝚆𝙽𝙴𝚁 𝚅𝙸𝙰 𝙱𝙾𝚃
│ ⌬ /bypass
│ ╰─▸ 𝙼𝙴𝙼𝙰𝚂𝙰𝙽𝙶 𝙱𝚈𝙿𝙰𝚂𝚂 𝙱𝚄𝙰𝚃 𝚂𝙲 𝙳𝙱
│ ⌬ /filter
│ ╰─▸ 𝚁𝙴𝚂𝙿𝙾𝙽 𝙺𝙰𝚃𝙰 𝚈𝙰𝙽𝙶 𝙳𝙸 𝙵𝙸𝙻𝚃𝙴𝚁
│ ⌬ /pw
│ ╰─▸ 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙺𝙰𝙽 𝚂𝙸𝚂𝚃𝙴𝙼 𝙿𝚆
│ ⌬ /rasukbot
│ ╰─▸ 𝙺𝙸𝚁𝙸𝙼 𝚃𝙴𝚇𝚃 𝙱𝙾𝚃 𝙾𝚁𝙰𝙽𝙶
│ ⌬ /enchard
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙰𝙲𝙰𝙺 𝙵𝙸𝙻𝙴 𝙿𝙴𝙽𝚃𝙸𝙽𝙶
│ ⌬ /filebackup
│ ╰─▸ 𝙼𝙴𝙽𝚈𝙸𝙼𝙿𝙰𝙽 𝙵𝙸𝙻𝙴 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴
│ ⌬ /cweb
│ ╰─▸ 𝙼𝙴𝙼𝙱𝚄𝙰𝚃 𝚆𝙴𝙱𝚂𝙸𝚃𝙴
│ ⌬ /delweb
│ ╰─▸ 𝙼𝙴𝙽𝙶𝙷𝙰𝙿𝚄𝚂 𝚆𝙴𝙱𝚂𝙸𝚃𝙴
│ ⌬ /listweb
│ ╰─▸ 𝙻𝙸𝚂𝚃 𝚆𝙴𝙱 𝚃𝙴𝚁𝙳𝟺𝙵𝚃𝙰𝚁
╰──〔 ✨ 𝙈𝙀𝙉𝙐 𝙂𝘼𝘾𝙃𝘼✨ 〕──╯</blockquote>`;
    case "more":
      return `<blockquote>${baseHeader}
╭──〔 🎮 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 🎮 〕──╮
│ ⌬ /cekkhodam (nama)
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙾𝙳𝙰𝙼 𝚄𝚂𝙴𝚁
│ ⌬ /cektampan
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝚃𝙰𝙼𝙿𝙰𝙽𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cekcantik
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝙲𝙰𝙽𝚃𝙸𝙺𝙰𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cekkaya
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝙺𝙰𝚈𝙰𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cekmiskin
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝙼𝙸𝚂𝙺𝙸𝙽𝙰𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cekjanda
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝙹𝙰𝙽𝙳𝙰𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cekpacar
│ ╰─▸ 𝙲𝙴𝙺 𝙿𝙰𝙲𝙰𝚁 𝚄𝚂𝙴𝚁
│ ⌬ /ceksabar
│ ╰─▸ 𝙲𝙴𝙺 𝙺𝙴𝚂𝙰𝙱𝙰𝚁𝙰𝙰𝙽 𝚄𝚂𝙴𝚁
│ ⌬ /cektolol
│ ╰─▸ 𝙲𝙴𝙺 𝚃𝙾𝙻𝙾𝙻 𝚄𝚂𝙴𝚁
│ ⌬ /cekmati
│ ╰─▸ 𝙲𝙴𝙺 𝙼𝙰𝚃𝙸 𝚄𝚂𝙴𝚁
╰──〔 ✨ 𝙈𝙀𝙉𝙐 𝙂𝘼𝘾𝙃𝘼✨ 〕──╯</blockquote>`;
    case "tqto":
      return `<blockquote>${baseHeader}
╭──〔 💫 𝐂𝐑𝐄𝐃𝐈𝐓 𝐁𝐘 〕──╮
│ ⌬ 𝙳𝙴𝚅 : ʜᴀɴᴢᴘɪᴡ ᴏғғɪᴄɪᴀʟ  
│ ⌬ 𝚂𝙾𝚄𝚁𝙲𝙴 : ʙᴏᴛ ɢᴀᴄʜᴀ ᴘʀᴇᴍɪᴜᴍ ʜᴀɴᴢᴘɪᴡ
│ ⌬ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 5.0.0
│ ⌬ 𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴 : 25 ɴᴏᴠᴇᴍʙᴇʀ 𝟸𝟶𝟸𝟻  
╰──────────────────╯

╭──〔 ❤ 𝐌𝐘 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 〕──╮
├• 𝙰𝙻𝙻𝙰𝙷 𝚂𝚆𝚃  
├• 𝙼𝚈 𝙿𝙴𝚁𝚂𝙾𝙽  
├• ʜᴀɴᴢᴘɪᴡ ᴏғғɪᴄɪᴀʟ ( 𝙾𝚆𝙽𝙴𝚁 )  
├• sᴇɪᴋʏᴏᴜ ᴏғғɪᴄɪᴀʟ ( 𝙾𝚆𝙽𝙴𝚁² ) 
├• 𝚂𝙴𝙼𝚄𝙰 𝙿𝙴𝙽𝙶𝙶𝚄𝙽𝙰 𝚂𝙲𝚁𝙸𝙿𝚃  
├• 𝚂𝙴𝙼𝚄𝙰 𝙱𝚄𝚈𝙴𝚁  
╰──────────────────╯</blockquote>`;
    default:
      return `<blockquote>${baseHeader}\nMenu tidak dikenal.</blockquote>`;
  }
}

//===================== COMMAND ====================
bot.onText(/^\/resetgacha$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (userId !== OWNER_ID)
    return bot.sendMessage(chatId, "🚫 Hanya owner yang bisa mereset total gacha.");

  await bot.sendMessage(chatId, `
⚠️ <b>Konfirmasi Reset TOTAL GACHA</b>

Apakah kamu yakin ingin mereset semua <b>TOTAL GACHA</b> user ke 0?
Leaderboard akan dimulai dari awal lagi!
`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ YA, RESET GACHA", callback_data: "confirm_reset_gacha" },
          { text: "❌ BATAL", callback_data: "cancel_reset_gacha" }
        ]
      ]
    }
  });
});

// 📍 Command utama untuk Owner
bot.onText(/^\/resetlimitall$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Cek apakah pengirim Owner
  if (userId !== OWNER_ID) {
    return bot.sendMessage(chatId, "<blockquote>🚫 Akses ditolak!\nHanya <b>Owner</b> yang dapat mereset semua limit user.</blockquote>", {
      parse_mode: "HTML"
    });
  }

  // Kirim konfirmasi
  await bot.sendMessage(chatId, `
⚠️ <b>Konfirmasi Reset Limit</b>

Apakah kamu yakin ingin <b>mereset semua limit user</b> ke 0?
Tindakan ini tidak bisa dibatalkan!
  `, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ YA, RESET SEMUA", callback_data: "confirm_reset_limit_all" },
          { text: "❌ BATAL", callback_data: "cancel_reset_limit" }
        ]
      ]
    }
  });
});

bot.onText(/^\/start(?: (.+))?/, async (msg, match) => {
  const userId = msg.from.id.toString();
  const chatId = msg.chat.id;
  const refId = match[1];
  const waktuRunPanel = getUptime();
  const jumlahFitur = "80";
  const nama = escapeHtml(msg.from.first_name || "User");
  const totalUsers = Object.keys(users).length;
  
  if (maintenanceCheck(bot, msg)) return;

  const user = ensureUserRecord(userId);

  if (refId && refId !== userId && !user.referredBy) {
    const refUser = ensureUserRecord(refId);
    user.referredBy = refId;
    refUser.referrals = (refUser.referrals || 0) + 1;
    refUser.extraLimit = (refUser.extraLimit || 0) + 250;
    saveUsers();

    await bot.sendMessage(refId, `<blockquote>🎉 Seseorang baru join lewat link referral kamu!\n📈 Total referral: ${refUser.referrals}\n✨ Limit gacha kamu bertambah 250!</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  let role = "👤 User";
  if (userId == 7135669179) role = "👑 Owner";
  else if (user.isPremium && isPremiumActive(user)) role = "🌟 Premium";

  const me = await bot.getMe();
  const refLink = `https://t.me/${USERNAME_BOT}?start=${userId}`;
  const totalRef = user.referrals || 0;

  const caption = `<blockquote>
🜲━━━━━━〔 👤 <b>𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗨𝗦𝗘𝗥</b> 〕━━━━━━━🜲
🆔 <b>ID :</b> <code>${userId}</code>    
💠 <b>Role :</b> ${role}    
🎯 <b>Limit :</b> ${WEEKLY_LIMIT}x + ${user.extraLimit || 0} Referral  
⚙️ <b>Bot :</b> ${escapeHtml(NAMA_BOT)} 
📡 <b>Versi : </b> v${escapeHtml(VERSION)}  
👨‍💻 <b>Dev :</b> @hanzxstr 
🜲━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━🜲
🜲━━━━━━━〔 🤖 <b>𝗦𝗜𝗦𝗧𝗘𝗠 𝗗𝗔𝗥𝗞</b> 〕━━━━━━━🜲  
👤 <b>Username :</b> ${nama}  
📦 <b>Active Modules :</b> ${jumlahFitur}  
👥 <b>Registered Users :</b> ${totalUsers}  
🌐 <b>Uptime System :</b> ${waktuRunPanel}  
💾 <b>Database Sync :</b> Stable ✅  
⚡ <b>Performance :</b> Optimal ⚙️  
👨‍💻 <b>Maintained By :</b> ${USERNAME_OWNER}  
🜲━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━🜲
</blockquote>`;

  const menu = {  
    caption,  
    parse_mode: 'HTML',  
    reply_markup: {  
inline_keyboard: [
  [
    { text: "✨ɢᴀᴄʜᴀ ᴍᴇɴᴜ", callback_data: "eventsatu" },
    { text: "🔱ᴏᴡɴᴇʀ ᴍᴇɴᴜ", callback_data: "eventdua" }
  ],
  [
    { text: "🔰ᴍᴇɴᴜ ɢʀᴜᴘ", callback_data: "group" },
    { text: "🛠ᴛᴏᴏʟs", callback_data: "tools" }
  ],
  [
    { text: "🎮ᴍᴇɴᴜ 𝙶𝙰𝙼𝙴", callback_data: "more" },
    { text: "💫ᴛʜᴀɴᴋs", callback_data: "tqto" }
  ],
  [
    { text: "👥𝚁𝙴𝙵𝙵𝙴𝚁𝙰𝙻", callback_data: "referral" },
    { text: "👤𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁", url: "https://t.me/hanzxstr" }
  ],
  [
    { text: "💵𝙱𝚄𝚈 𝚂𝙲 𝙳𝙻𝙻", callback_data: "buy_access" },
    { text: "💰𝙳𝙾𝙽𝙰𝚂𝙸", callback_data: "donasi" }
  ],
  [
   
    { text: "🥇𝚃𝙾𝙿 𝟷 𝙶𝙰𝙲𝙷𝙰", callback_data: "top1" }
  ],
  [
    { text: "🔩𝙽𝙴𝚆 𝙵𝙸𝚃𝚄𝚁", callback_data: "info" }
  ],
]
}
};
  await bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", menu);

  await bot.sendAudio(chatId, "./database/HanzPiw.mp3", {
    title: "HanzPiw Official",
    performer: "𝗕𝗢𝗧 𝗚𝗔𝗖𝗛𝗔 𝗩𝗩𝗜𝗣",
    caption: "🎶 𝙀𝙉𝙅𝙊𝙔 𝙂𝘼𝘾𝙃𝘼 𝙑𝙄𝙋",
  });
});

bot.on("callback_query", async (query) => {
  try {
    const data = query.data;
    const userId = query.from.id.toString();
    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;
    const nama = escapeHtml(query.from.first_name || "User");
    const waktuRunPanel = getUptime();
    const jumlahFitur = "64";

    const skipPrefixes = [
      "leaderboard_",
      "history_",
      "gacha_",
      "admin_",
      "listitem_",
      "lang_",
    ];

    // Lewati prefix tertentu
    if (skipPrefixes.some((prefix) => data.startsWith(prefix))) return;

    // Jika maintenance aktif
    if (maintenanceCheck(bot, query)) return;

    await bot.answerCallbackQuery(query.id);
    await bot.deleteMessage(chatId, messageId);

    const user = ensureUserRecord(userId);
    const me = await bot.getMe();
    const refLink = `https://t.me/${me.username}?start=${userId}`;
    const totalRef = user.referrals || 0;

    // Tombol kembali ke menu utama
    if (data === "back_home") {
      const users = JSON.parse(fs.readFileSync("./database/users.json"));
      const totalUsers = Object.keys(users).length;

      const caption = generateUserCaption({
        nama,
        userId,
        waktuRunPanel,
        jumlahFitur,
        user,
        refLink,
        totalRef,
        totalUsers,
      });

      return bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
        caption,
        parse_mode: "HTML",
        reply_markup: generateMainMenu(),
      });
    }

    // Menu referral
    if (data === "referral") {
      const caption = `<blockquote>🎯 <b>Link Referral Kamu:</b>\n<code>${refLink}</code>\n📊 Total Referral: ${totalRef}\n\n🎁 Setiap referral nambah 250 limit gacha harian!</blockquote>`;
      return bot.sendMessage(chatId, caption, {
        parse_mode: "HTML",
        reply_markup: backButton(),
      });
    }

    // Menu pembelian akses
if (data === "buy_access") {
  await bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
    caption: `
╭───〔 💎 <b>𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐒𝐂 & 𝐀𝐊𝐒𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌</b> 〕───╮

💾 <b>𝐒𝐢𝐚𝐩 𝐏𝐚𝐤𝐚𝐢 (𝐓𝐚𝐧𝐩𝐚 𝐀𝐝𝐝 𝐅𝐢𝐥𝐞)</b>
⚙️ <b>𝐒𝐂 𝐍𝐎 𝐄𝐍𝐂</b> — <code>15K</code>
⚙️ <b>𝐒𝐂 𝐍𝐎 𝐄𝐍𝐂 + 𝐅𝐔𝐋𝐋 𝐔𝐏 + 𝐅𝐔𝐋𝐋 𝐅𝐈𝐋𝐄</b> — <code>20K</code>
⚙️ <b>𝐑𝐄𝐒𝐒 𝐒𝐂 + 𝐅𝐑𝐄𝐄 𝐑𝐄𝐍𝐀𝐌𝐄 + 80 𝐁𝐀𝐒𝐄,𝐒𝐂𝐑𝐈𝐏𝐓,𝐌𝐓 𝐃𝐀𝐑𝐈 𝐆𝐖</b> — <code>25K</code>

💎 <b>𝐏𝐑𝐄𝐌𝐈𝐔𝐌 / 𝐀𝐃𝐌𝐈𝐍 𝐆𝐀𝐂𝐇𝐀</b>
🔱 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝟏 𝐁𝐮𝐥𝐚𝐧 = <code>1K</code>
✨ 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧 = <code>2K</code>
🛡️ 𝐀𝐝𝐦𝐢𝐧 𝟏 𝐁𝐮𝐥𝐚𝐧 = <code>3K</code>
👑 𝐀𝐝𝐦𝐢𝐧 𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧 = <code>5K</code>

💰 <b>𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍</b>
🏦 𝐃𝐀𝐍𝐀: <code>085358652147</code>
👤 𝐀/𝐍: <i>Na***</i>

╰───────────────────────╯
    `,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { 
            text: "💳 Beli Sekarang", 
            url: "https://t.me/hanzxstr?text=𝙬𝙤𝙞%20𝗺𝗮𝘀%2C%20𝙜𝙬%20𝗶𝗻𝗴𝗶𝗻%20𝗯𝗲𝗹𝗶%20𝗦𝗰%20%2F%20𝗔𝗸𝘀𝗲𝘀%20𝗟𝗮𝗶𝗻𝗻𝘆𝗮%20𝗗𝗼𝗻𝗴𝗴." 
          }
        ],
        [
          { text: "🔙 Kembali", callback_data: "back_home" }
        ]
      ]
    }
  });
}
if (data === "top1") {
  await bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
    caption: `
╭───〔 🏆 <b>𝐓𝐎𝐏 𝟏 𝐋𝐄𝐀𝐃𝐄𝐑𝐁𝐎𝐀𝐑𝐃</b> 〕───╮

— <b>@hanzxstr</b> — <code>9628 GACHA</code>

╰──────────────────────────────╯

🤖 <b>𝐏𝐞𝐧𝐠𝐞𝐧 𝐌𝐚𝐬𝐮𝐤 𝐋𝐢𝐬𝐭?</b>
Mainkan gacha setiap hari dan kumpulkan poin kemenanganmu!
    `,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🎮 Main Gacha Sekarang",
            callback_data: "eventsatu"
          }
        ],
        [
          { text: "🔙 Kembali", callback_data: "back_home" }
        ]
      ]
    }
  });
}
if (data === "info") {
  await bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
    caption: `
────────────────────────────────────────
─  🛠️  𝐔𝐏𝐃𝐀𝐓𝐄 𝐅??𝐓𝐔𝐑 𝐁𝐎𝐓
────────────────────────────────────────
📅 𝐓𝐀𝐍𝐆𝐆𝐀𝐋 𝐔𝐏𝐃𝐀𝐓𝐄 : 29 November 2025  
👨‍💻 𝐃𝐄𝐕 : @hanzxstr
───────────────────────────────────────────────
─  ✨ 𝐅𝐈𝐓𝐔𝐑 𝐁𝐀𝐑𝐔
────────────────────────────────────────
💬 /stor — Kirim pesan otomatis ke Channel sambil reply  
🎟️ Notifikasi otomatis ke Owner, Admin, & User Premium setelah createcode  
🔘 Button interaktif: ✅ Udah Share & 🚀 OTW Share  
────────────────────────────────────────
─  ⚙️ 𝐔𝐏𝐃𝐀𝐓𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃
────────────────────────────────────────
🎰 /allgacha — Gacha otomatis semua limit (User Biasa)  
🎟️ /createcode — Buat kode redeem + auto share + notifikasi lengkap  
💎 /addlimitall — Tambah limit semua user  
👑 /addpremall — Jadikan semua user Premium  
❌ /delpremall — Hapus semua status Premium  
💬 /stor — Kirim setoran otomatis ke channel dengan caption terformat  
────────────────────────────────────────

`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Kembali", callback_data: "back_home" }]
      ]
    }
  });
}
     

    if (data === "donasi") {
      await bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
        caption: `𝗕𝗮𝗴𝗶 𝗬𝗮𝗻𝗴 𝗨𝗱𝗮𝗵 𝗗𝗼𝗻𝗮𝘀𝗶, 𝗦𝗲𝗺𝗼𝗴𝗮 𝗗𝗶𝗹𝗮𝗻𝗰𝗮𝗿𝗸𝗮𝗻 𝗥𝗲𝘇𝗲𝗸𝗶𝗻𝘆𝗮, 𝗗𝗶𝗯𝗲𝗿𝗶 𝗞𝗲𝘀𝗲𝗵𝗮𝘁𝗮𝗻, 𝗗𝗮𝗻 𝗣𝗮𝗻𝗷𝗮𝗻𝗴 𝗨𝗺𝘂𝗿, 𝗔𝗮𝗺𝗶𝗶𝗻..`, // isi teks donasi kamu di sini
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ 𝗦𝗨𝗗𝗔𝗛 𝗗𝗢𝗡𝗔𝗦𝗜", callback_data: "donasi_yes" },
              { text: "❌ 𝗕𝗘𝗟𝗨𝗠 𝗗𝗢𝗡𝗔𝗦𝗜", callback_data: "donasi_no" }
            ],
            [{ text: "⬅️ 𝐊𝐄𝐌𝐁𝐀𝐋𝐈", callback_data: "back_home" }]
          ]
        }
      });
    }

    if (data === "donasi_yes") {
      await bot.sendMessage(chatId, `🎉 <b>Terima kasih banyak atas donasimu!</b>`, { parse_mode: "HTML" });
    }

    if (data === "donasi_no") {
      await bot.sendMessage(chatId, `😄 <b>Gapapa!</b>`, { parse_mode: "HTML" });
    }

    
    // RESET GACHA
    if (data === "confirm_reset_gacha") {
      for (let uid in users) {
        if (users[uid]) users[uid].totalWins = 0;
      }
      fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2));
      await bot.sendMessage(chatId, "✅ Semua TOTAL GACHA telah direset!");
      showLeaderboardPage(chatId, 0);
      return bot.answerCallbackQuery(query.id);
    }

    // RESET LIMIT
if (data === "confirm_reset_limit_all") {
  try {
    const usersPath = "./database/users.json";
    const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

    let totalReset = 0;
    const WEEKLY_LIMIT = 70; // Ganti sesuai limit mingguanmu

    for (const uid in users) {
      const user = users[uid];
      if (!user) continue;

      // Lewati admin & premium
      if (user.role === "admin" || user.role === "Premium") continue;

      // Reset ke limit mingguan (isi ulang)
      user.count = WEEKLY_LIMIT;
      user.extraLimit = 0;
      totalReset++;
    }

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    await bot.sendMessage(
      chatId,
      `✅ Semua sisa gacha user telah direset ulang ke *${WEEKLY_LIMIT}x*!\n👥 Total user direset: ${totalReset}`,
      { parse_mode: "Markdown" }
    );

    await showLeaderboardPage(chatId, 0);
    await bot.answerCallbackQuery(query.id);
  } catch (err) {
    console.error("❌ Error saat reset count:", err);
    await bot.sendMessage(chatId, "❌ Terjadi kesalahan saat reset sisa gacha user.");
  }
}

    // CANCEL RESET
    if (data === "cancel_reset_gacha" || data === "cancel_reset_limit") {
      await bot.sendMessage(chatId, "❌ Reset dibatalkan.");
      return bot.answerCallbackQuery(query.id);
    }


    // MENU LAIN
    const validMenus = ["eventsatu", "eventdua", "group", "tools", "more", "tqto"];
    if (validMenus.includes(data)) {
      const caption = getMenuCaption(data, "User", "Runtime");
      return bot.sendPhoto(chatId, "https://files.catbox.moe/xc4s5b.jpg", {
        caption,
        parse_mode: "HTML",
        reply_markup: backButton(),
      });
    }
  } catch (err) {
    console.error("Error di callback_query:", err);
  }
});


//===================== COMMAND EVENT MENU =====================
bot.onText(/^\/gacha\b/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (msg.chat.type !== "private") {
    return bot.sendMessage(chatId, "⚠️ Hanya bisa digunakan di private chat.");
  }

  if (maintenanceCheck(bot, msg)) return;

  const member = await bot.getChatMember(CHANNEL_ID, userId);
  if (member.status === "left" || member.status === "kicked") {
    return bot.sendMessage(chatId, `🚫 Kamu harus join Channel dulu.`, {
      reply_markup: {
        inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]]
      }
    });
  }

  if (items.length === 0)
    return bot.sendMessage(chatId, "❌ Belum ada item di gacha.");

  const user = ensureUserRecord(userId);
  const now = Date.now();
  const cooldown = 4000; // 4 detik cooldown
  if (user.lastGacha && now - user.lastGacha < cooldown) {
    const sisa = ((cooldown - (now - user.lastGacha)) / 1000).toFixed(1);
    return bot.sendMessage(chatId, `🕐 Tunggu ${sisa} detik lagi mas/mbak, baru bisa gacha lagi.`);
  }

  user.lastGacha = now;
  user.count = (user.count || 0) + 1;
  saveUsers();

  // 🎞️ ANIMASI GACHA DENGAN PROGRESS BAR
  const animasi = [
    "🏛️ Mengacak item gacha...\n░░░░░░░░░░ 0%",
    "🏛️ Mengacak item gacha...\n██░░░░░░░░░ 20%",
    "🏛️ Mengacak item gacha...\n████░░░░░░░ 40%",
    "🔄 Sedang menentukan hadiah...\n██████░░░░░ 60%",
    "🎁 Hampir keluar hadiahnya!\n████████░░░ 80%",
    "👑 Siap-siap mas/mbak, hasilnya muncul!\n██████████ 100%",
  ];

  const waitMsg = await bot.sendMessage(chatId, animasi[0]);
  for (let i = 1; i < animasi.length; i++) {
    await new Promise(r => setTimeout(r, 800));
    await bot.editMessageText(animasi[i], {
      chat_id: chatId,
      message_id: waitMsg.message_id,
    });
  }

  // 🎲 PILIH HADIAH RANDOM
  const item = items[Math.floor(Math.random() * items.length)];
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  const filepath = path.join(GACHA_FOLDER, item.filename);
  const ext = path.extname(item.filename).toLowerCase();

  // 🧾 FORMAT HASIL GACHA
  const resultText = `
✅ <b>GACHA SUKSES !</b>
🎁 <b>HADIAH:</b> ${escapeHtml(item.filename)}
📦 <b>SUMBER:</b> Bonus
🔑 <b>KODE:</b> <code>${code}</code>

📊 <b>LIMIT:</b> ${user.count || 0}
🎟️ <b>BONUS:</b> ${user.extraLimit || 0}
`;

  await new Promise(r => setTimeout(r, 700));
  await bot.editMessageText(resultText, {
    chat_id: chatId,
    message_id: waitMsg.message_id,
    parse_mode: "HTML",
  });

  await new Promise(r => setTimeout(r, 1000));

  // 💌 CAPTION FILE HADIAH
  const caption = `
🎁 <b>HADIAH GACHA KAMU</b>
━━━━━━━━━━━━━━━━━
📦 <b>ITEM YG DI DAPAT:</b>
${escapeHtml(item.filename)}

👑 <b>BY :</b> @BotGachaVVIP_hanzpiwbot
`;

  try {
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      await bot.sendPhoto(chatId, filepath, { caption, parse_mode: "HTML" });
    } else {
      await bot.sendDocument(chatId, filepath, { caption, parse_mode: "HTML" });
    }

  } catch (err) {
    console.error("❌ Gagal kirim file:", err);
    bot.sendMessage(chatId, "⚠️ Gagal kirim file, owner cek folder gacha.");
  }
});

const userCooldowns = new Map();
bot.onText(/^\/autogacha(?:\s+(\d+))?/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const jumlah = Math.min(parseInt(match[1]) || 20, 20); // default 15, max 15

  // private only
  if (msg.chat.type !== 'private') {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Hanya bisa digunakan di private chat.</blockquote>`, { parse_mode: "HTML" });
  }

  if (maintenanceCheck(bot, msg)) return;

  // global cooldown per-user (10s)
  const now = Date.now();
  const cooldown = 10 * 1000;
  const lastUsed = userCooldowns.get(userId) || 0;
  if (now - lastUsed < cooldown) {
    const remaining = Math.ceil((cooldown - (now - lastUsed)) / 1000);
    return bot.sendMessage(chatId, `<blockquote>⏳ Tunggu ${remaining} detik sebelum melakukan auto gacha lagi, bosku!</blockquote>`, { parse_mode: "HTML" });
  }
  userCooldowns.set(userId, now);

  // must be joined
  const member = await bot.getChatMember(CHANNEL_ID, userId);
  if (member.status === 'left' || member.status === 'kicked') {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
    });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return bot.sendMessage(chatId, `<blockquote>❌ Belum ada item di gacha.</blockquote>`, { parse_mode: "HTML" });
  }

  const user = ensureUserRecord(userId);
  resetWeeklyIfNeeded(user);

  // status counters
  let berhasil = 0;
  let gagal = 0;

  // initial auto message (we will edit this to show progress)
  const autoMsg = await bot.sendMessage(chatId, `<blockquote>🎰 Auto Gacha Dimulai!\nJumlah: ${jumlah}\nBerhasil: 0/${jumlah}\nGagal: 0\n⏳ Menyiapkan...</blockquote>`, { parse_mode: "HTML" });

  // per-spin loop
  for (let i = 1; i <= jumlah; i++) {
    // small progress animation array per spin (kasino style)
    const spinAnim = [
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[░░░░░░░░░░] 0%\n🔄 Memutar...`,
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[██░░░░░░░░] 20%\n🔄 Mesin berputar...`,
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[████░░░░░░] 40%\n🎲 Makin cepat...`,
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[██████░░░░] 60%\n🎯 Hampir ditentukan...`,
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[████████░░] 80%\n🎁 Hampir muncul hadiahnya...`,
      `🎰 Auto Gacha — Spin ${i}/${jumlah}\n[██████████] 100%\n👑 Menentukan hadiah...`
    ];

    // play spin animation (edit message step-by-step)
    for (let s = 0; s < spinAnim.length; s++) {
      try {
        await bot.editMessageText(`<blockquote>${spinAnim[s]}</blockquote>`, {
          chat_id: chatId,
          message_id: autoMsg.message_id,
          parse_mode: "HTML"
        });
      } catch (e) {
        // ignore edit errors (message may be deleted)
      }
      // progressively longer delays toward the end for suspense
      await new Promise(r => setTimeout(r, 350 + s * 90));
    }

    // Check cooldown/limit/premium for each spin
    const nowSpin = Date.now();
    user.lastGacha = nowSpin;

    let isPremium = false;
    if (user.isPremium && user.premiumUntil) {
      const expire = new Date(user.premiumUntil);
      if (expire > new Date()) isPremium = true;
      else { user.isPremium = false; user.premiumUntil = null; }
    }

    const hasFreeLimit = (user.count || 0) < WEEKLY_LIMIT;
    const hasExtraLimit = (user.extraLimit || 0) > 0;

    if (!isPremium && !hasFreeLimit && !hasExtraLimit) {
      gagal++;
      // edit status and break
      try {
        await bot.editMessageText(`<blockquote>🎰 Auto Gacha:\nJumlah: ${jumlah}\nProgres: ${i}/${jumlah}\nBerhasil: ${berhasil}\nGagal: ${gagal}\n❌ Limit kamu habis pada spin ke-${i}.</blockquote>`, {
          chat_id: chatId,
          message_id: autoMsg.message_id,
          parse_mode: "HTML"
        });
      } catch (e) {}
      break;
    }

    // consume limit
    if (user.extraLimit && user.extraLimit > 0) user.extraLimit--;
    else if (user.count < WEEKLY_LIMIT) user.count++;

    // attempt to pick item and send
    try {
      // pick random item
      const idx = getRandomInt(items.length);
      const item = items[idx];
      if (!item || !isSafeFile(item.filename)) throw new Error('File hadiah tidak valid');

      const filepath = path.join(GACHA_FOLDER, item.filename);
      const code = Math.random().toString(36).slice(2, 8).toUpperCase();

      // update user history
      user.totalWins = (user.totalWins || 0) + 1;
      user.history = user.history || [];
      user.history.unshift({
        time: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
        filename: item.filename,
        code
      });
      saveUsers();

      berhasil++;

      // edit status to show picked item
      try {
        await bot.editMessageText(`<blockquote>🎰 Auto Gacha:\nJumlah: ${jumlah}\nProgres: ${i}/${jumlah}\nBerhasil: ${berhasil}\nGagal: ${gagal}\n🎁 Hadiah: ${escapeHtml(item.filename)}\n🔑 Kode: <code>${escapeHtml(code)}</code></blockquote>`, {
          chat_id: chatId,
          message_id: autoMsg.message_id,
          parse_mode: "HTML"
        });
      } catch (e) {}

      // short suspense before sending file
      await new Promise(r => setTimeout(r, 700));

      // prepare caption like screenshot (gambar + caption) or document
      const caption = `
✅ <b>GACHA SUKSES!</b>
🎁 <b>HADIAH:</b> ${escapeHtml(item.filename)}
📦 <b>SUMBER:</b> Bonus
🔑 <b>KODE:</b> <code>${escapeHtml(code)}</code>

📊 <b>Gacha Minggu Ini:</b> ${user.count || 0}/${WEEKLY_LIMIT}
💫 <b>Sisa Limit:</b> ${Math.max(0, (WEEKLY_LIMIT - (user.count || 0)) + (user.extraLimit || 0))}
📊 <b>Total Gacha:</b> ${user.totalWins || 0}
`;

      const ext = path.extname(item.filename).toLowerCase();

      // send photo or document with caption
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await bot.sendPhoto(chatId, filepath, { caption, parse_mode: "HTML" });
      } else {
        // for documents, sendDocument + a shorter user-facing caption like screenshot
        const docCaption = `🎁 <b>HADIAH GACHA KAMU</b>\n\n📦 <b>ITEM DI DAPAT:</b>\n${escapeHtml(item.filename)}\n\n👑 <b>BY :</b> @BotGachaVVIP_hanzpiwbot`;
        await bot.sendDocument(chatId, filepath, { caption: docCaption, parse_mode: "HTML" });
      }


    } catch (err) {
      gagal++;
      try {
        await bot.editMessageText(`<blockquote>🎰 Auto Gacha:\nJumlah: ${jumlah}\nProgres: ${i}/${jumlah}\nBerhasil: ${berhasil}\nGagal: ${gagal}\n⚠️ Gagal pada spin ke-${i}: ${escapeHtml(err.message || 'error')}</blockquote>`, {
          chat_id: chatId,
          message_id: autoMsg.message_id,
          parse_mode: "HTML"
        });
      } catch (e) {}
    }

    // short pause between spins so UI doesn't spam
    await new Promise(r => setTimeout(r, 1200));
  } // end loop

  // final summary
  try {
    await bot.editMessageText(`<blockquote>✅ Auto Gacha Selesai!
Jumlah Gacha: ${jumlah}
Berhasil: ${berhasil}
Gagal: ${gagal}
📊 Total Gacha Keseluruhan: ${user.totalWins || 0}</blockquote>`, {
      chat_id: chatId,
      message_id: autoMsg.message_id,
      parse_mode: "HTML"
    });
  } catch (e) {}

  saveUsers();
});
bot.onText(/^\/allgacha$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const username = msg.from.username || msg.from.first_name || "User";

  if (maintenanceCheck(bot, msg)) return;

  const user = ensureUserRecord(userId);
  const isAdminBot = Array.isArray(admins) && admins.includes(userId);

  // Cek admin
  if (isAdminBot) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Admin tidak diperbolehkan menggunakan fitur ini.</blockquote>`, { parse_mode: "HTML" });
  }

  // Cek premium
  let isPremium = false;
  if (user.isPremium && user.premiumUntil) {
    const now = new Date();
    const expire = new Date(user.premiumUntil);
    if (expire > now) isPremium = true;
    else {
      user.isPremium = false;
      user.premiumUntil = null;
    }
  }

  if (isPremium) {
    return bot.sendMessage(chatId, `<blockquote>👑 Pengguna premium tidak perlu menggunakan perintah ini (limit tidak terbatas).</blockquote>`, { parse_mode: "HTML" });
  }

  resetWeeklyIfNeeded(user);

  const freeLeft = Math.max(0, WEEKLY_LIMIT - (user.count || 0));
  const extraLeft = Math.max(0, user.extraLimit || 0);
  const totalSisa = freeLeft + extraLeft;

  if (totalSisa <= 0) {
    return bot.sendMessage(chatId, `<blockquote>📭 Kamu tidak memiliki sisa gacha minggu ini untuk dikonversi.</blockquote>`, { parse_mode: "HTML" });
  }

  // Tambahkan semua sisa ke leaderboard
  user.totalWins = (user.totalWins || 0) + totalSisa;

  // Reset sisa gacha setelah dikonversi
  user.count = WEEKLY_LIMIT;
  user.extraLimit = 0;

  saveUsers();

  await bot.sendMessage(chatId, `<blockquote>✅ ALL GACHA BERHASIL DIJALANKAN!

👤 User: ${username}
📊 User Free Diproses: ${freeLeft}
🎯 Total Gacha Ditambahkan: ${totalSisa}x
📈 Semua sisa gacha telah dikonversi ke leaderboard.

✨ Sekarang posisi leaderboard otomatis terupdate.
</blockquote>`, { parse_mode: "HTML" });

  // panggil fungsi leaderboard
  updateLeaderboard();
});
bot.onText(/^\/history$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const user = ensureUserRecord(userId);

  if (maintenanceCheck(bot, msg)) return;

  if (!user.history || user.history.length === 0) {
    return bot.sendMessage(chatId, `<blockquote>Belum ada riwayat gacha.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  sendHistoryPage(bot, chatId, user, 0);
});

bot.on('callback_query', async (query) => {
  const data = query.data;
  if (!data.startsWith('history_')) return; 
  
  const chatId = query.message.chat.id;
  const userId = query.from.id;
  const messageId = query.message.message_id;

  const pageIndex = parseInt(data.split('_')[1]) || 0;

  const user = ensureUserRecord(userId);
  if (!user.history || user.history.length === 0) {
    await bot.answerCallbackQuery(query.id, { text: "Belum ada riwayat gacha!", show_alert: true });
    return;
  }

  const start = pageIndex * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const totalPages = Math.ceil(user.history.length / ITEMS_PER_PAGE);
  const pageData = user.history.slice(start, end);

  const pageText = pageData.map((h, i) =>
    `${start + i + 1}. 🎁 ${h.filename}\n🔑 ${h.code} — 📅 ${h.time}`
  ).join('\n\n');

  const text = `<blockquote>📜 Riwayat Gacha Kamu (Halaman ${pageIndex + 1}/${totalPages}):\n\n${pageText}</blockquote>`;

  const buttons = [];
  if (pageIndex > 0) buttons.push({ text: '⬅️ Prev', callback_data: `history_${pageIndex - 1}` });
  if (end < user.history.length) buttons.push({ text: 'Next ➡️', callback_data: `history_${pageIndex + 1}` });

  try {
    await bot.editMessageText(text, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [buttons] }
    });
  } catch (err) {
    console.error('❌ Gagal update halaman history:', err.message);
  }

  await bot.answerCallbackQuery(query.id);
});


bot.onText(/^\/clearhistory$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const user = ensureUserRecord(userId);

  if (maintenanceCheck(bot, msg)) return;

  if (!user.history || user.history.length === 0) {
    return bot.sendMessage(chatId, `<blockquote>📭 Riwayat kamu sudah kosong.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  user.history = [];
  saveUsers();

  return bot.sendMessage(chatId, `<blockquote>✅ Riwayat gacha kamu berhasil dihapus!</blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/leaderboard$/i, (msg) => {
  const chatId = msg.chat.id;

  if (maintenanceCheck(bot, msg)) return;

  showLeaderboardPage(chatId, 0);
});

bot.on('callback_query', async (query) => {
  const data = query.data;
  if (!data.startsWith('leaderboard_')) return;

  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const page = parseInt(data.split('_')[1]);

  const totalUsers = Object.keys(users).length;
  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);

  if (page < 0 || page >= totalPages) {
    return bot.answerCallbackQuery(query.id, { 
      text: "📄 Tidak ada halaman lagi!", 
      show_alert: false 
    });
  }

  showLeaderboardPage(chatId, page, messageId);
  await bot.answerCallbackQuery(query.id);
});
bot.onText(/^\/listitem$/i, async (msg) => {
  const chatId = msg.chat.id;

  if (maintenanceCheck(bot, msg)) return;

  if (!items.length) {
    return bot.sendMessage(chatId, `<blockquote>Belum Ada Daftar Hadiah Yang Di Tambahkan</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  sendItemPage(bot, chatId, 0);
});

bot.on("callback_query", async (query) => {
  const data = query.data;
  if (!data.startsWith("listitem_")) return;

  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const pageIndex = parseInt(data.split("_")[1]);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / LISTITEM_PER_PAGE);
  const start = pageIndex * LISTITEM_PER_PAGE;
  const end = start + LISTITEM_PER_PAGE;

  const pageItems = items.slice(start, end);
  const listText = pageItems
    .map((it, i) => `${start + i + 1}. ${it.filename}`)
    .join('\n');

  const text = `<blockquote>📦 Daftar Item (Halaman ${pageIndex + 1}/${totalPages}) — Total: ${totalItems}\n\n${listText}</blockquote>`;

  const buttons = [];
  if (pageIndex > 0) buttons.push({ text: "⬅️ Prev", callback_data: `listitem_${pageIndex - 1}` });
  if (end < totalItems) buttons.push({ text: "Next ➡️", callback_data: `listitem_${pageIndex + 1}` });

  try {
    await bot.editMessageText(text, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [buttons] }
    });
  } catch (err) {
    console.error("❌ Gagal update halaman item:", err.message);
  }

  bot.answerCallbackQuery(query.id);
});

bot.onText(/^\/redeem(?:\s+([A-Za-z0-9_-]+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const codeStr = match[1] ? match[1].toUpperCase() : null;

  if (maintenanceCheck(bot, msg)) return;

  let member;
  try {
    member = await bot.getChatMember(CHANNEL_ID, userId);
  } catch (err) {
    console.error("Error getChatMember:", err.message);
    return bot.sendMessage(chatId, `<blockquote>⚠️ Gagal memeriksa keanggotaan channel.</blockquote>`, { parse_mode: "HTML" });
  }

  if (!member || member.status === "left" || member.status === "kicked") {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] },
    });
  }

  if (!codeStr) {
    return bot.sendMessage(chatId, `<blockquote>⚙️ Cara pakai:\n/redeem KODE\nContoh:\n/redeem BONUS50 atau /redeem PREMIUM3D</blockquote>`, { parse_mode: "HTML" });
  }

  const user = ensureUserRecord(userId);

  let codeObj = codes.find(c => c.code === codeStr);
  let isPremiumCode = false;

  if (!codeObj) {
    codeObj = cpremCodes.find(c => c.code === codeStr);
    if (codeObj) isPremiumCode = true;
  }

  if (!codeObj)
    return bot.sendMessage(chatId, `<blockquote>❌ Kode ${codeStr} tidak valid.</blockquote>`, { parse_mode: "HTML" });

  const now = new Date();
  const expiresAt = new Date(codeObj.expiresAt);
  if (expiresAt < now) {
    return bot.sendMessage(chatId, `<blockquote>⏰ Kode ${codeStr} sudah expired.</blockquote>`, { parse_mode: "HTML" });
  }

  if (!Array.isArray(codeObj.redeemedBy)) codeObj.redeemedBy = [];
  if (codeObj.redeemedBy.includes(userId)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Kamu sudah pernah redeem kode ini sebelumnya.</blockquote>`, { parse_mode: "HTML" });
  }

  // 🚫 Blokir kalau kode premium
  if (isPremiumCode) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Kode <code>${codeStr}</code> adalah <b>kode Premium</b>.\nGunakan perintah khusus:\n<b>/claimprem ${codeStr}</b></blockquote>`, { parse_mode: "HTML" });
  }

  // ✅ Kalau bukan premium → proses normal
  user.extraLimit = (user.extraLimit || 0) + codeObj.amount;
  codeObj.redeemedBy.push(userId);

  saveUsers();
  saveCodes();

  bot.sendMessage(chatId, `<blockquote>✅ Berhasil redeem <code>${codeStr}</code>!\n🎟 Kamu mendapatkan +${codeObj.amount} extraLimit.\n📊 Total extraLimit sekarang: ${user.extraLimit}</blockquote>`, { parse_mode: 'HTML' });
});

bot.onText(/^\/info$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

  if (maintenanceCheck(bot, msg)) return;

  let db = JSON.parse(fs.readFileSync("./database/users.json", "utf8"));
  const user = db[userId];

  if (!user) {
    return bot.sendMessage(chatId, `<blockquote>❌ Kamu belum punya data! Kirim pesan dulu biar sistem nyimpen datamu.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  resetWeeklyIfNeeded(user);
  db[userId] = user;
  fs.writeFileSync("./database/users.json", JSON.stringify(db, null, 2));

  const need = xpNeeded(user.level);
  const bar = getBar(user.xp, need);
  const name = escapeHtml(user.name || msg.from.first_name || "Pengguna");
  const role = escapeHtml(user.role || "Pemula");

  const isPremium = user.isPremium || false;
  const weeklyLimit = WEEKLY_LIMIT || 3;
  const bonusLimit = user.extraLimitInitial || 0;
  const usedWeekly = user.count || 0;
  const usedBonus = bonusLimit - (user.extraLimit || 0);
  const totalLimit = isPremium ? "∞" : weeklyLimit + bonusLimit;
  const sisaGacha = isPremium ? "Tanpa batas" : Math.max(0, totalLimit - (usedWeekly + usedBonus));

  const totalGachaKeseluruhan = user.totalWins || 0;

  const now = new Date();
  const nextReset = new Date(now);
  const diff = (5 - now.getDay() + 7) % 7 || 7;
  nextReset.setDate(now.getDate() + diff);
  nextReset.setHours(0, 0, 0, 0);

  const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const tglReset = `${hariList[nextReset.getDay()]}, ${nextReset.getDate()} ${bulanList[nextReset.getMonth()]} ${nextReset.getFullYear()}`;

  const text = `<blockquote>📜 𝙸𝙽𝙵𝙾 𝚄𝚂𝙴𝚁 ${name}
  
🆔 𝙸𝙳: <code>${userId}</code>
👤 𝙽𝙰𝙼𝙰: ${name}
🎟️ 𝚂𝚃𝙰𝚃𝚄𝚂: ${isPremium ? "👑 Premium" : "👤 Free"}
💫 𝚂𝙸𝚂𝙰 𝙶𝙰𝙲𝙷𝙰: ${sisaGacha}
🎲 𝚃𝙾𝚃𝙰𝙻 𝙶𝙰𝙲𝙷𝙰 MINGGU INI: ${usedWeekly + usedBonus}/${isPremium ? "∞" : totalLimit}
📊 𝚃𝙾𝚃𝙰𝙻 𝙶𝙰𝙲𝙷𝙰 KESELURUHAN: ${totalGachaKeseluruhan}
🏅 𝙻𝙴𝚅𝙴𝙻: ${user.level}
💠 𝚁𝙾𝙻𝙴: ${role}
⚡ 𝚇𝙿: ${user.xp} / ${need}
${bar}
🔁 𝚁𝙴𝚂𝙴𝚃 𝙼𝙸𝙽𝙶𝙶𝚄𝙰𝙽: ${tglReset}</blockquote>`;

  try {
    await bot.sendMessage(chatId, text, { parse_mode: "HTML" });
  } catch (err) {
    console.error(`⚠️ Gagal kirim info ke ${userId}: ${err.message}`);
    bot.sendMessage(chatId, `Profil Kamu: ${name}, Level ${user.level}, XP ${user.xp}/${need}`);
  }
});

bot.onText(/^\/sendlimit$/i, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/sendlimit [id_user] [jumlah].\nPastikan Anda User Biasa, Atau Admin + Premium Untuk Send Limit</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/sendlimit\s+(\d+)\s+(\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const targetId = Number(match[1]);
  const jumlahLimit = parseInt(match[2]);

  if (maintenanceCheck(bot, msg)) return;

  const sender = ensureUserRecord(senderId);
  const target = ensureUserRecord(targetId);

  let isPremium = false;
  if (sender.isPremium && sender.premiumUntil) {
    const now = new Date();
    const expire = new Date(sender.premiumUntil);
    if (expire > now) {
      isPremium = true;
    } else {
      sender.isPremium = false;
      sender.premiumUntil = null;
      saveUsers();
    }
  }

  const isAdminBot = ADMIN_BOT_IDS.includes(senderId);

  if (isPremium && !isAdminBot) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu premium, tapi belum jadi admin bot.
Kamu tidak bisa kirim limit ke orang lain sebelum owner menambahkan kamu jadi admin bot.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  if (!isPremium && !isAdminBot) {
    if ((sender.extraLimit || 0) < jumlahLimit) {
      return bot.sendMessage(chatId, `<blockquote>🚫 Limit kamu tidak cukup! Sisa: ${sender.extraLimit || 0}</blockquote>`, {
        parse_mode: "HTML"
      });
    }

    sender.extraLimit -= jumlahLimit;
    target.extraLimit = (target.extraLimit || 0) + jumlahLimit;
    saveUsers();

    bot.sendMessage(chatId, `<blockquote>✅ Kamu berhasil kirim ${jumlahLimit} limit ke user ${targetId}.</blockquote>`, { parse_mode: "HTML" });
    return bot.sendMessage(targetId, `<blockquote>🎁 Kamu menerima ${jumlahLimit} limit dari user ${senderId}!</blockquote>`, { parse_mode: "HTML" });
  }

  if (isPremium && isAdminBot) {
    target.extraLimit = (target.extraLimit || 0) + jumlahLimit;
    saveUsers();

    bot.sendMessage(chatId, `<blockquote>💎 Kamu (admin premium) berhasil kirim ${jumlahLimit} limit ke user ${targetId} tanpa batas!</blockquote>`, {
      parse_mode: "HTML"
    });

    return bot.sendMessage(targetId, `<blockquote>🎁 Admin Premium mengirim ${jumlahLimit} limit ke kamu!</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  if (!isPremium && isAdminBot) {
    if ((sender.extraLimit || 0) < jumlahLimit)
      return bot.sendMessage(chatId, `<blockquote>🚫 Limit kamu tidak cukup! Sisa: ${sender.extraLimit || 0}</blockquote>`, { parse_mode: "HTML" });

    sender.extraLimit -= jumlahLimit;
    target.extraLimit = (target.extraLimit || 0) + jumlahLimit;
    saveUsers();

    bot.sendMessage(chatId, `<blockquote>🧩 Kamu (admin biasa) berhasil kirim ${jumlahLimit} limit ke user ${targetId}.</blockquote>`, {
      parse_mode: "HTML"
    });

    return bot.sendMessage(targetId, `<blockquote>🎁 Kamu menerima ${jumlahLimit} limit dari admin ${senderId}!</blockquote>`, {
      parse_mode: "HTML"
    });
  }
});
// 🔹 Kirim pesan ke CHANNEL (bisa dipakai semua user)
bot.onText(/^\/stor$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const reply = msg.reply_to_message;

  // ⚙️ Grup yang diperbolehkan pakai command /stor
  const ALLOWED_GROUPS = [
    -1002948880713, // ganti dengan ID grup kamu
    -1002948880713
  ];

  // 🧾 ID Channel & Owner
  const CHANNEL_ID = "--1003400580937"; // Channel tujuan
  

  // ⚠️ Kalau user gak reply pesan
  if (!reply) {
    return bot.sendMessage(chatId, '<blockquote>⚠️ Balas foto yang ingin kamu kirim ke Channel, lalu ketik <code>/stor</code></blockquote>', {
      parse_mode: "HTML"
    });
  }

  // 🚫 Hanya grup tertentu
  if (!ALLOWED_GROUPS.includes(chatId)) {
    return bot.sendMessage(chatId, '<blockquote>🚫 Command ini hanya bisa digunakan di grup tertentu.</blockquote>', {
      parse_mode: "HTML"
    });
  }

  // 🚫 Hanya boleh foto (bukan dokumen/video/text)
  if (!reply.photo) {
    return bot.sendMessage(chatId, '<blockquote>⚠️ Hanya foto yang bisa dikirim!<br>Balas foto lalu ketik <code>/stor</code>.</blockquote>', {
      parse_mode: "HTML"
    });
  }

  try {
    // 🧍 Info user
    const username = msg.from.username ? `@${msg.from.username}` : msg.from.first_name || "Tanpa Nama";
    const groupName = msg.chat.title || "Grup Tidak Diketahui";

    // 🕒 Waktu lokal (WIB)
    const now = new Date();
    const tanggal = now.toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour12: false
    });

    // 🏷️ Caption otomatis untuk Channel
    const caption = `
📦 <b>Setoran Baru!</b>

👤 <b>Dari:</b> ${username}
🆔 <b>ID:</b> <code>${userId}</code>
📅 <b>Tanggal:</b> ${tanggal}
💬 <b>Dari GB:</b> ${groupName}
`;

    // 📨 Kirim foto ke Channel
    await bot.copyMessage(CHANNEL_ID, chatId, reply.message_id, {
      caption,
      parse_mode: "HTML"
    });

    // ✅ Konfirmasi ke grup
    await bot.sendMessage(chatId, '<blockquote>✅ Foto berhasil dikirim ke Channel & Owner!</blockquote>', {
      parse_mode: "HTML"
    });

    // 💌 Kirim log ke Owner
    const ownerNotif = `
────────────────────────────────────────────
👑 <b>PRIVATE GACHA VVIP By RezaOfficial</b> 👑
────────────────────────────────────────────
📬 <b>ADA SETORAN BARU NIH!</b>

👤 <b>Nama:</b> ${username}
🆔 <b>ID:</b> <code>${userId}</code>
💬 <b>Dari Grup:</b> ${groupName}
📅 <b>Waktu:</b> ${tanggal}

🪄 Foto sudah otomatis dikirim ke Channel.
────────────────────────────────────────────
`;
    await bot.sendMessage(OWNER_ID, ownerNotif, { parse_mode: "HTML" });

  } catch (err) {
    console.error("❌ Gagal kirim ke channel:", err);

    let errMsg;
    if (err.response && err.response.statusCode === 403) {
      errMsg = "❌ Gagal kirim: Bot belum menjadi anggota atau admin di Channel tujuan.";
    } else {
      errMsg = `❌ Gagal kirim ke Channel.\nError: ${err.message}`;
    }

    await bot.sendMessage(chatId, `<blockquote>${errMsg}</blockquote>`, {
      parse_mode: "HTML"
    });

    // 🧾 Kirim log error ke owner
    const username = msg.from.username ? `@${msg.from.username}` : msg.from.first_name || "Tanpa Nama";
    await bot.sendMessage(OWNER_ID, `<blockquote>⚠️ Gagal kirim setoran dari <b>${username}</b> (<code>${userId}</code>) di grup <b>${msg.chat.title}</b>.\n\nError: ${err.message}</blockquote>`, {
      parse_mode: "HTML"
    });
  }
});
bot.onText(/^\/cekprem(?:\s+(\d+))?$/i, (msg, match) => {
  const chatId = msg.chat.id;
  const targetId = match[1] || msg.from.id;
  const user = ensureUserRecord(targetId);
  
  if (maintenanceCheck(bot, msg)) return;

  if (!user.isPremium || !isPremiumActive(user))
    return bot.sendMessage(chatId, `<blockquote>🚫 User ID <code>${targetId}</code> bukan premium atau sudah expired.</blockquote>`, {
    parse_mode: "HTML"
    });

  const now = new Date();
  const expire = new Date(user.premiumUntil);

  let tahun = expire.getFullYear() - now.getFullYear();
  let bulan = expire.getMonth() - now.getMonth();
  let hari = expire.getDate() - now.getDate();
  let jam = expire.getHours() - now.getHours();
  let menit = expire.getMinutes() - now.getMinutes();

  if (menit < 0) {
    menit += 60;
    jam -= 1;
  }
  if (jam < 0) {
    jam += 24;
    hari -= 1;
  }

  if (hari < 0) {
    const prevMonth = new Date(expire.getFullYear(), expire.getMonth(), 0);
    hari += prevMonth.getDate();
    bulan -= 1;
  }

  if (bulan < 0) {
    bulan += 12;
    tahun -= 1;
  }

  const parts = [];
  if (tahun > 0) parts.push(`${tahun} tahun`);
  if (bulan > 0) parts.push(`${bulan} bulan`);
  if (hari > 0) parts.push(`${hari} hari`);
  if (jam > 0) parts.push(`${jam} jam`);
  if (menit > 0) parts.push(`${menit} menit`);

  const sisaText = parts.length ? parts.join(' ') : 'kurang dari 1 menit';

  bot.sendMessage(chatId, `<blockquote>⭐ User ID: <code>${targetId}</code>
Masih aktif selama: ${sisaText}
📅 Berakhir: ${expire.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}</blockquote>`, {
    parse_mode: "HTML"
  });
});

//===================== COMMAND MENU OWNER EVENT =====================
bot.onText(/^\/addlimit$/i, (msg) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  const isAdminBot = ADMIN_BOT_IDS.includes(senderId);
  if (!ownerId && !isAdminBot) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Menambahkan Limit.</blockquote>', {
    parse_mode: "HTML"
    });
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/addlimit [id_user] [jumlah]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/addlimit (\d+) (\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  const senderId = msg.from.id;
  const isAdminBot = ADMIN_BOT_IDS.includes(senderId);
  const targetId = parseInt(match[1]);
  const jumlah = parseInt(match[2]);
  
  if (!ownerId && !isAdminBot) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Menambahkan Limit.</blockquote>', {
    parse_mode: "HTML"
    });

  if (!targetId || isNaN(targetId) || !jumlah || isNaN(jumlah)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah!\n\nGunakan:\n<code>/addlimit [id_user] [jumlah]</code></blockquote>`, {
    parse_mode: "HTML"
    });
  }

  if (!users[targetId]) {
    users[targetId] = {
      id: targetId,
      limit: WEEKLY_LIMIT,
      extraLimit: 0,
      extraLimitInitial: 0,
      refCount: 0
    };
  }

  users[targetId].extraLimitInitial = (users[targetId].extraLimitInitial || 0) + jumlah;
  users[targetId].extraLimit = (users[targetId].extraLimit || 0) + jumlah;
  saveUsers();

  const totalLimit = WEEKLY_LIMIT + (users[targetId].extraLimit || 0);

  const text = `<blockquote>✅ Limit user <code>${targetId}</code> telah ditambah ${jumlah}x!
📊 Sisa limit user hari ini: ${totalLimit}\n
🎟 Bonus tambahan: ${users[targetId].extraLimit}</blockquote>`;

  await bot.sendMessage(chatId, text, { parse_mode: "HTML" });

  await bot.sendMessage(targetId, `<blockquote>🎁 Limit kamu telah ditambah sebanyak ${jumlah}x oleh owner!\n📊 Total limit harianmu sekarang: ${totalLimit}</blockquote>`, {
  parse_mode: "HTML"
  });
});
// 🔹 Tambah limit untuk SEMUA USER (Khusus Owner)
bot.onText(/^\/addlimitall (\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const jumlah = parseInt(match[1]);

  // 🛡️ Cek hanya Owner yang boleh
  if (senderId !== OWNER_ID) {
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner yang dapat menambah limit semua user.</blockquote>', {
      parse_mode: "HTML"
    });
  }

  // ⚠️ Validasi jumlah
  if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah!\n\nGunakan:\n<code>/addlimitall [jumlah]</code></blockquote>`, {
      parse_mode: "HTML"
    });
  }

  let totalUser = 0;

  // 🔁 Loop semua user
  for (const id in users) {
    if (!users[id]) continue;
    users[id].extraLimitInitial = (users[id].extraLimitInitial || 0) + jumlah;
    users[id].extraLimit = (users[id].extraLimit || 0) + jumlah;
    totalUser++;
  }

  saveUsers();

  // ✅ Notifikasi sukses ke Owner
  await bot.sendMessage(chatId, `<blockquote>✅ Berhasil menambah ${jumlah}x limit ke ${totalUser} user!</blockquote>`, {
    parse_mode: "HTML"
  });

  // 📨 Kirim notifikasi ke setiap user
  for (const id in users) {
    try {
      const totalLimit = WEEKLY_LIMIT + (users[id].extraLimit || 0);
      await bot.sendMessage(id, `<blockquote>🎁 Limit kamu telah ditambah sebanyak ${jumlah}x oleh Owner!\n📊 Total limit kamu sekarang: ${totalLimit}</blockquote>`, {
        parse_mode: "HTML"
      });
      await new Promise(resolve => setTimeout(resolve, 300)); // ⏳ jeda biar aman dari flood
    } catch (e) {
      console.log(`Gagal kirim ke user ${id}:`, e.message);
    }
  }
});
bot.onText(/^\/dellimit$/i, (msg) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const ownerId = msg.from.id;
  const isAdminBot = ADMIN_BOT_IDS.includes(senderId);
  if (!ownerId && !isAdminBot) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Mengurangi Limit.</blockquote>', {
    parse_mode: "HTML"
    });
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/dellimit [id_user] [jumlah]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/dellimit (\d+) (\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  const isAdminBot = ADMIN_BOT_IDS.includes(senderId);
  const targetId = parseInt(match[1]);
  const jumlah = parseInt(match[2]);

  if (!ownerId && !isAdminBot)
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner yang dapat menghapus limit.</blockquote>', {
      parse_mode: "HTML"
    });

  if (!targetId || isNaN(targetId) || !jumlah || isNaN(jumlah)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah!\n\nGunakan:\n<code>/dellimit [id_user] [jumlah]</code></blockquote>`, {
      parse_mode: "HTML"
    });
  }

  if (!users[targetId]) {
    return bot.sendMessage(chatId, `<blockquote>❌ User dengan ID <code>${targetId}</code> belum terdaftar.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  const currentExtra = users[targetId].extraLimit || 0;
  const currentExtraInitial = users[targetId].extraLimitInitial || 0;

  if (currentExtra <= 0) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ User ini tidak memiliki limit tambahan untuk dihapus.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  const newExtra = Math.max(0, currentExtra - jumlah);
  const newExtraInitial = Math.max(0, currentExtraInitial - jumlah);
  const removed = currentExtra - newExtra;

  users[targetId].extraLimit = newExtra;
  users[targetId].extraLimitInitial = newExtraInitial; 
  saveUsers();

  const totalLimit = WEEKLY_LIMIT + newExtra;

  const text = `<blockquote>✅ Limit user <code>${targetId}</code> telah dikurangi ${removed}x.
📊 Sisa total limit harian: ${totalLimit}
🎟 Bonus tambahan sekarang: ${newExtra}</blockquote>`;

  await bot.sendMessage(chatId, text, { parse_mode: "HTML" });

  try {
    await bot.sendMessage(targetId, `<blockquote>⚠️ Limit tambahan kamu dikurangi sebanyak ${removed}x oleh owner.\n📊 Sisa limit harianmu sekarang: ${totalLimit}</blockquote>`, {
      parse_mode: "HTML"
    });
  } catch {
    console.log(`⚠️ Tidak bisa kirim pesan ke user ${targetId} (mungkin belum start bot).`);
  }
});

bot.onText(/^\/additem(?: (.+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const reply = msg.reply_to_message;
  const argName = match[1]?.trim();
  const userId = msg.from.id;

  if (userId !== OWNER) return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Hanya Owner yang dapat menambahkan item.</blockquote>`, {
    parse_mode: "HTML"
  });

  if (!reply || (!reply.document && !reply.photo && !reply.video && !reply.audio)) {
    return bot.sendMessage(chatId,
      `<blockquote>⚠️ Reply ke file atau foto yang mau dijadikan hadiah gacha.\n\nContoh:\nKirim foto lalu reply dengan /additem</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  try {
    let fileId, fileName, isPhoto = false;

    if (reply.document) {
      fileId = reply.document.file_id;
      fileName = argName || reply.document.file_name || `file_${Date.now()}`;
    } else if (reply.photo) {
      const photo = reply.photo.pop();
      fileId = photo.file_id;
      isPhoto = true;

      const existingFiles = fs.readdirSync(GACHA_FOLDER)
        .filter(f => /^JACKPOT\d+\.jpg$/i.test(f));
      let nextNum = existingFiles.length > 0
        ? Math.max(...existingFiles.map(f => parseInt(f.match(/\d+/)[0]))) + 1
        : 1;

      fileName = `JACKPOT${nextNum}.jpg`;
    } else if (reply.video) {
      fileId = reply.video.file_id;
      fileName = argName || reply.video.file_name || `video_${Date.now()}.mp4`;
    } else if (reply.audio) {
      fileId = reply.audio.file_id;
      fileName = argName || reply.audio.file_name || `audio_${Date.now()}.mp3`;
    } else {
      return bot.sendMessage(chatId, '❌ Format file tidak dikenali.');
    }

    const fileLink = await bot.getFileLink(fileId);
    const savePath = path.join(GACHA_FOLDER, fileName);
    const res = await axios.get(fileLink, { responseType: 'arraybuffer' });
    fs.writeFileSync(savePath, res.data);

    if (!items.find(i => i.filename === fileName)) {
      items.push({ filename: fileName });
      saveItems();
    }

    bot.sendMessage(chatId, `<blockquote>✅ 1 file berhasil ditambahkan:\n${fileName}</blockquote>`, {
      parse_mode: 'HTML'
    });

    let users = JSON.parse(fs.readFileSync('./database/users.json', 'utf8'));
    const notifText = `<blockquote>📢 Item Baru Telah Ditambahkan ke Gacha!\n\n🎁 Nama Item: <code>${fileName}</code>\n\nKamu bisa coba keberuntunganmu pakai /gacha ✨</blockquote>`;
    let deletedCount = 0;

    for (const id of Object.keys(users)) {
      try {
        await bot.sendMessage(id, notifText, { parse_mode: "HTML" });
        await new Promise(r => setTimeout(r, 400));
      } catch (err) {
        const msg = err.message || "";
        console.log(`⚠️ Gagal kirim ke ${id}: ${msg}`);

        if (
          msg.includes("bot was blocked") ||
          msg.includes("bot can't initiate conversation with a user") ||
          msg.includes("chat not found") ||
          msg.includes("user is deactivated") ||
          msg.includes("not enough rights")
        ) {
          delete users[id];
          deletedCount++;
          console.log(`🧹 User ${id} dihapus permanen (blokir / gak valid)`);
        }
      }
    }

    if (deletedCount > 0) {
      fs.writeFileSync('./database/users.json', JSON.stringify(users, null, 2));
      console.log(`💾 Database users.json diperbarui (${deletedCount} user dihapus).`);
    }

    
  } catch (err) {
    console.error('❌ AddItem Error:', err);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal menyimpan file, coba lagi.</blockquote>`, {
      parse_mode: "HTML"
    });
  }
});
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // hanya owner
  if (userId !== 7135669179) return;

  // deteksi file (foto, dokumen, video, audio)
  const fileTypes = ["document", "photo", "video", "audio"];
  const hasFile = fileTypes.some(type => msg[type]);
  if (!hasFile) return;

  try {
    let fileId, fileName;

    if (msg.document) {
      fileId = msg.document.file_id;
      fileName = msg.document.file_name || `file_${Date.now()}`;
    } else if (msg.photo) {
      const photo = msg.photo.pop();
      fileId = photo.file_id;

      const existingFiles = fs.readdirSync(GACHA_FOLDER)
        .filter(f => /^JACKPOT\d+\.jpg$/i.test(f));
      let nextNum = existingFiles.length > 0
        ? Math.max(...existingFiles.map(f => parseInt(f.match(/\d+/)[0]))) + 1
        : 1;

      fileName = `JACKPOT${nextNum}.jpg`;
    } else if (msg.video) {
      fileId = msg.video.file_id;
      fileName = `video_${Date.now()}.mp4`;
    } else if (msg.audio) {
      fileId = msg.audio.file_id;
      fileName = `audio_${Date.now()}.mp3`;
    } else {
      return bot.sendMessage(chatId, "❌ Format file tidak dikenali.");
    }

    // ambil file dari Telegram
    const fileLink = await bot.getFileLink(fileId);
    const savePath = path.join(GACHA_FOLDER, fileName);
    const res = await axios.get(fileLink, { responseType: 'arraybuffer' });
    fs.writeFileSync(savePath, res.data);

    // simpan ke database item
    if (!items.find(i => i.filename === fileName)) {
      items.push({ filename: fileName });
      saveItems();
    }

    bot.sendMessage(chatId, `<blockquote>✅ File otomatis ditambahkan permanen:\n<code>${fileName}</code></blockquote>`, {
      parse_mode: "HTML"
    });

    // broadcast ke semua user
    let users = JSON.parse(fs.readFileSync('./database/users.json', 'utf8'));
    const notifText = `<blockquote>📢 Item Baru Telah Ditambahkan ke Gacha!\n\n🎁 Nama Item: <code>${fileName}</code>\n\nCoba keberuntunganmu pakai /gacha ✨</blockquote>`;
    let deletedCount = 0;

    for (const id of Object.keys(users)) {
      try {
        await bot.sendMessage(id, notifText, { parse_mode: "HTML" });
        await new Promise(r => setTimeout(r, 400));
      } catch (err) {
        const msg = err.message || "";
        console.log(`⚠️ Gagal kirim ke ${id}: ${msg}`);

        if (
          msg.includes("bot was blocked") ||
          msg.includes("bot can't initiate conversation with a user") ||
          msg.includes("chat not found") ||
          msg.includes("user is deactivated") ||
          msg.includes("not enough rights")
        ) {
          delete users[id];
          deletedCount++;
          console.log(`🧹 User ${id} dihapus permanen (blokir / gak valid)`);
        }
      }
    }

    if (deletedCount > 0) {
      fs.writeFileSync('./database/users.json', JSON.stringify(users, null, 2));
      console.log(`💾 Database users.json diperbarui (${deletedCount} user dihapus).`);
    }

  } catch (err) {
    console.error("❌ AutoAdd Error:", err);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal auto-add file, coba lagi.</blockquote>`, { parse_mode: "HTML" });
  }
});
bot.onText(/^\/delitem(?: (.+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const arg = match[1]?.trim();

  if (userId !== 7135669179) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Hanya Owner yang dapat menghapus item.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  if (!arg) {
    const listText = items.length
      ? items.map((i, idx) => `${idx + 1}. ${i.filename}`).join("\n")
      : "Belum ada item yang tersimpan.";

    return bot.sendMessage(chatId, `<blockquote>⚠️ Gunakan format yang benar!\n\n<code>/delitem [nama_file]</code>\n\nContoh:\n<code>/delitem JACKPOT5.jpg</code>\n\n📦 Daftar Item Saat Ini:\n${listText}</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  try {
    const itemIndex = items.findIndex(i => i.filename.toLowerCase() === arg.toLowerCase());
    if (itemIndex === -1) {
      return bot.sendMessage(chatId, `<blockquote>❌ Item <code>${arg}</code> tidak ditemukan di database.</blockquote>`, {
        parse_mode: "HTML"
      });
    }

    const item = items[itemIndex];
    const filePath = path.join(GACHA_FOLDER, item.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🗑️ File ${item.filename} berhasil dihapus dari folder.`);
    } else {
      console.warn(`⚠️ File ${item.filename} tidak ditemukan di folder.`);
    }

    items.splice(itemIndex, 1);
    saveItems();

    bot.sendMessage(chatId, `<blockquote>✅ Item <code>${item.filename}</code> berhasil dihapus dari sistem!</blockquote>`, {
      parse_mode: "HTML"
    });

  } catch (err) {
    console.error("❌ DelItem Error:", err);
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat menghapus item. Cek log console.</blockquote>`, {
      parse_mode: "HTML"
    });
  }
});
bot.onText(/^\/addprem(?:\s+(\d+))?(?:\s+(\d+[hdwm]))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const idArg = match[1];
  const durationStr = match[2];
  const reply = msg.reply_to_message;
  const fs = require('fs');
  const ownerList = Array.isArray(7135669179) ? 7135669179 : [7135669179];
  const isAdminBot = (id) => {
    try {
      const data = JSON.parse(fs.readFileSync('./database/admin.json'));
      return Array.isArray(data.admins) && data.admins.includes(id);
    } catch {
      return false;
    }
  };
  if (!ownerList.includes(adminId) && !isAdminBot(adminId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Hanya Owner & Admin yang dapat menggunakan perintah ini.</blockquote>`, { parse_mode: "HTML" });
  const userId = idArg || (reply ? reply.from.id : null);
  if (!userId)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Gunakan:\n\n- /addprem iduser durasi\n- atau reply ke user lalu ketik: /addprem 3d</blockquote>`, { parse_mode: "HTML" });
  if (!durationStr)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Harap masukkan durasi!\nContoh: /addprem 3d atau /addprem 12h</blockquote>`, { parse_mode: "HTML" });
  const ms = parseDuration(durationStr);
  if (!ms)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format durasi salah! Gunakan satuan: h/d/w/m</blockquote>`, { parse_mode: "HTML" });
  const user = ensureUserRecord(userId);
  const now = new Date();
  const expire = new Date(now.getTime() + ms);
  if (user.isPremium && user.premiumUntil && new Date(user.premiumUntil) > now) {
    const oldExpire = new Date(user.premiumUntil);
    user.premiumUntil = new Date(oldExpire.getTime() + ms).toISOString();
  } else {
    user.isPremium = true;
    user.premiumUntil = expire.toISOString();
  }
  saveDB();
  const wibTime = new Date(user.premiumUntil).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  bot.sendMessage(chatId, `<blockquote>✅ User ID: <code>${userId}</code>\n⭐ Status: Premium aktif selama ${durationStr}\n📅 Berakhir: ${wibTime}</blockquote>`, { parse_mode: "HTML" });
  bot.sendMessage(userId, `<blockquote>🎉 Selamat!\nKamu mendapatkan akses Premium selama ${durationStr}!\n📅 Aktif hingga: ${wibTime}\n✨ Nikmati fitur tanpa batas!</blockquote>`, { parse_mode: "HTML" });
});

bot.onText(/^\/addpremall(?:\s+(\d+[hdwm]))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const fs = require("fs");
  const ownerList = Array.isArray(7135669179) ? 7135669179 : [7135669179];
  const durationStr = match[1];
  if (!ownerList.includes(adminId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya Owner yang dapat menambah semua Premium.</blockquote>`, { parse_mode: "HTML" });
  if (!durationStr)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Masukkan durasi!\nContoh: /addpremall 3d</blockquote>`, { parse_mode: "HTML" });
  const ms = parseDuration(durationStr);
  if (!ms)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format durasi salah! Gunakan satuan: h/d/w/m</blockquote>`, { parse_mode: "HTML" });
  const path = "./database/users.json";
  if (!fs.existsSync(path))
    return bot.sendMessage(chatId, `<blockquote>⚠️ Database tidak ditemukan!</blockquote>`, { parse_mode: "HTML" });
  const db = JSON.parse(fs.readFileSync(path, "utf8"));
  const now = new Date();
  const expire = new Date(now.getTime() + ms).toISOString();
  let count = 0;
  for (const id in db) {
    db[id].isPremium = true;
    db[id].premiumSince = now.toISOString();
    db[id].premiumUntil = expire;
    count++;
  }
  fs.writeFileSync(path, JSON.stringify(db, null, 2));
  const wibTime = new Date(expire).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  bot.sendMessage(chatId, `<blockquote>✅ Semua user (${count}) telah menjadi Premium selama ${durationStr}\n📅 Berakhir: ${wibTime}</blockquote>`, { parse_mode: "HTML" });
});

function parseDuration(str) {
  const match = str.match(/^(\d+)(min|h|d|w|m)$/i);
  if (!match) return null;
  const num = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  switch (unit) {
    case 'min': return num * 60 * 1000;
    case 'h': return num * 60 * 60 * 1000;
    case 'd': return num * 24 * 60 * 60 * 1000;
    case 'w': return num * 7 * 24 * 60 * 60 * 1000;
    case 'm': return num * 30 * 24 * 60 * 60 * 1000;
    default: return null;
  }
}

bot.onText(/^\/delprem(?:\s+(\d+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const idArg = match[1];
  const reply = msg.reply_to_message;
  const fs = require("fs");

  if (maintenanceCheck(bot, msg)) return;

  const ownerList = Array.isArray(7135669179) ? 7135669179 : [7135669179];
  if (!ownerList.includes(adminId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang dapat menghapus status premium.</blockquote>`, { parse_mode: "HTML" });

  const userId = idArg || (reply ? reply.from.id : null);
  if (!userId)
    return bot.sendMessage(chatId, `<blockquote>⚠️ Gunakan:\n\n- /delprem id_user\n- atau reply ke user lalu ketik: /delprem</blockquote>`, { parse_mode: "HTML" });

  const user = ensureUserRecord(userId);
  if (!user.isPremium)
    return bot.sendMessage(chatId, `<blockquote>❌ User ID <code>${userId}</code> tidak memiliki status premium.</blockquote>`, { parse_mode: "HTML" });

  user.isPremium = false;
  user.premiumUntil = null;
  saveDB();

  bot.sendMessage(chatId, `<blockquote>✅ Status premium user <code>${userId}</code> telah dihapus.</blockquote>`, { parse_mode: "HTML" });

  try {
    await bot.sendMessage(userId, `<blockquote>⚠️ Status Premium kamu telah dicabut oleh owner.\nKamu kembali menjadi pengguna Free.</blockquote>`, { parse_mode: "HTML" });
  } catch (err) {
    const msg = err.message || "";
    console.log(`[DELPREM] Gagal kirim ke ${userId}: ${msg}`);
    if (msg.includes("bot was blocked") || msg.includes("chat not found") || msg.includes("user is deactivated") || msg.includes("not enough rights")) {
      const users = JSON.parse(fs.readFileSync("./database/users.json", "utf8"));
      delete users[userId];
      fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2));
      console.log(`🧹 Hapus user ${userId} karena blokir/nonaktif`);
    }
  }
});

bot.onText(/^\/delpremall$/i, async (msg) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const fs = require("fs");

  const ownerList = Array.isArray(7135669179) ? OWNER : [OWNER];
  if (!ownerList.includes(adminId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya Owner yang dapat menghapus semua Premium.</blockquote>`, { parse_mode: "HTML" });

  const path = "./database/users.json";
  if (!fs.existsSync(path))
    return bot.sendMessage(chatId, `<blockquote>⚠️ Database tidak ditemukan!</blockquote>`, { parse_mode: "HTML" });

  const db = JSON.parse(fs.readFileSync(path, "utf8"));
  let count = 0;

  for (const id in db) {
    if (db[id].isPremium) {
      db[id].isPremium = false;
      db[id].premiumSince = null;
      db[id].premiumUntil = null;
      count++;
      try {
        await bot.sendMessage(id, `<blockquote>⚠️ Status Premium kamu telah dicabut oleh owner.\nKamu kembali menjadi pengguna Free.</blockquote>`, { parse_mode: "HTML" });
      } catch (err) {
        const msgErr = err.message || "";
        if (msgErr.includes("bot was blocked") || msgErr.includes("chat not found") || msgErr.includes("user is deactivated") || msgErr.includes("not enough rights")) {
          delete db[id];
          console.log(`🧹 Hapus user ${id} karena blokir/nonaktif`);
        }
      }
    }
  }

  fs.writeFileSync(path, JSON.stringify(db, null, 2));
  bot.sendMessage(chatId, `<blockquote>✅ Semua status Premium (${count} user) telah dihapus.</blockquote>`, { parse_mode: "HTML" });
});
bot.onText(/^\/addadmin$/i, (msg) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  if (ownerId !== 7135669179) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Menambah Kan Admin.</blockquote>', {
    parse_mode: "HTML"
    });
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/addadmin [id_user]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/addadmin\s+(\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;

  const ownerList = Array.isArray(7135669179) ? OWNER : [OWNER];
  if (!ownerList.includes(ownerId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa menambahkan admin bot!</blockquote>`, {
      parse_mode: "HTML"
    });

  const targetId = Number(match[1]);

  if (ADMIN_BOT_IDS.includes(targetId))
    return bot.sendMessage(chatId, `<blockquote>⚠️ User <code>${targetId}</code> sudah menjadi admin bot.</blockquote>`, {
      parse_mode: "HTML"
    });

  ADMIN_BOT_IDS.push(targetId);
  saveAdmins(ADMIN_BOT_IDS);

  const user = ensureUserRecord(targetId);
  user.isPremium = true;
  user.premiumUntil = "9999-12-31T23:59:59.999Z";
  saveDB();

  await bot.sendMessage(
    chatId,
    `<blockquote>✅ User <code>${targetId}</code> sekarang menjadi <b>Admin Bot</b> dan otomatis mendapatkan status <b>Premium Permanen</b>.</blockquote>`,
    { parse_mode: "HTML" }
  );

  try {
    await bot.sendMessage(
      targetId,
      `<blockquote>🎉 Selamat! Kamu baru saja dijadikan <b>Admin Bot</b> oleh owner.\n\n💎 Status kamu juga ditingkatkan menjadi <b>Premium Permanen</b>.\n\n✨ Sekarang kamu bisa:\n• Kirim limit ke user lain\n• Jual limit premium\n• Akses semua fitur admin premium\n\nGunakan command <code>/send [user_id] [jumlah]</code> untuk kirim limit.</blockquote>`,
      { parse_mode: "HTML" }
    );
  } catch (err) {
    const msg = err.message || "";
    console.error(`[ADDADMIN] Gagal kirim pesan ke ${targetId}: ${msg}`);

    if (
      msg.includes("bot was blocked") ||
      msg.includes("chat not found") ||
      msg.includes("user is deactivated") ||
      msg.includes("not enough rights")
    ) {
      const users = JSON.parse(fs.readFileSync("./database/users.json", "utf8"));
      delete users[targetId];
      fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2));
      console.log(`🧹 User ${targetId} dihapus karena blokir/nonaktif.`);
    }
  }
});

bot.onText(/^\/deladmin$/i, (msg) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  if (ownerId !== 7135669179) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Menghapus Admin.</blockquote>', {
    parse_mode: "HTML"
    });
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/deladmin [id_user]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/deladmin\s+(\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;

  const ownerList = Array.isArray(7135669179) ? OWNER : [OWNER];
  if (!ownerList.includes(ownerId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa mencabut admin bot!</blockquote>`, { parse_mode: "HTML" });

  const targetId = Number(match[1]);
  if (isNaN(targetId))
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah.\nGunakan: <code>/deladmin [user_id]</code></blockquote>`, { parse_mode: "HTML" });

  const idx = ADMIN_BOT_IDS.indexOf(targetId);
  if (idx === -1)
    return bot.sendMessage(chatId, `<blockquote>⚠️ User <code>${targetId}</code> bukan admin bot.</blockquote>`, { parse_mode: "HTML" });

  ADMIN_BOT_IDS.splice(idx, 1);
  saveAdmins(ADMIN_BOT_IDS);

  const dbPath = "./database/users.json";
  const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const userData = db[targetId] || users?.[targetId];

  if (userData) {
    userData.isPremium = false;
    userData.premiumUntil = null;

    db[targetId] = userData;
    if (users[targetId]) users[targetId] = userData;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    if (typeof saveDB === "function") saveDB();
  }

  await bot.sendMessage(chatId, `<blockquote>✅ User <code>${targetId}</code> berhasil dicabut dari admin dan status Premium-nya juga telah dihapus sepenuhnya.</blockquote>`, { parse_mode: "HTML" });

  try {
    await bot.sendMessage(targetId, `<blockquote>⚠️ Status <b>Admin</b> dan <b>Premium</b> kamu telah dicabut oleh owner.\nKamu sekarang kembali menjadi pengguna biasa (Free).</blockquote>`, { parse_mode: "HTML" });
  } catch (err) {
    const msgErr = err.message || "";
    console.error(`[DELADMIN] Gagal kirim ke ${targetId}: ${msgErr}`);

    if (
      msgErr.includes("bot was blocked") ||
      msgErr.includes("chat not found") ||
      msgErr.includes("user is deactivated") ||
      msgErr.includes("not enough rights")
    ) {
      delete db[targetId];
      delete users[targetId];
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
      console.log(`🧹 User ${targetId} dihapus dari database (blokir/nonaktif).`);
    }
  }
});

bot.onText(/^\/listadmin$/i, async (msg) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;

  const ownerList = Array.isArray(7135669179) ? OWNER : [OWNER];
  if (!ownerList.includes(senderId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa melihat daftar admin bot!</blockquote>`, { parse_mode: "HTML" });

  const dbPath = "./database/users.json";
  const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const adminList = ADMIN_BOT_IDS || [];

  if (adminList.length === 0) {
    return bot.sendMessage(chatId, `<blockquote>❌ Belum ada admin yang terdaftar.</blockquote>`, { parse_mode: "HTML" });
  }

  let text = `<blockquote>👑 <b>DAFTAR ADMIN BOT (${adminList.length})</b>\n\n`;

  for (const id of adminList) {
    const user = db[id] || users?.[id] || {};
    const name = user.name || user.username || `User ${id}`;
    const isPremium = user.isPremium ? "⭐ Premium" : "👤 Free";
    text += `• <b>${name}</b> (<code>${id}</code>)\n  └ ${isPremium}\n\n`;
  }

  text += `</blockquote>`;

  bot.sendMessage(chatId, text, { parse_mode: "HTML" });
});
bot.onText(/^\/listprem$/i, async (msg) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;

  const ownerList = Array.isArray(7135669179) ? OWNER : [OWNER];
  if (!ownerList.includes(senderId))
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa melihat daftar user premium!</blockquote>`, {
      parse_mode: "HTML"
    });

  const dbPath = "./database/users.json";
  if (!fs.existsSync(dbPath)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ File database users.json tidak ditemukan.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const premiumUsers = Object.entries(db).filter(([_, user]) => user.isPremium);

  if (premiumUsers.length === 0) {
    return bot.sendMessage(chatId, `<blockquote>📭 Belum ada user premium terdaftar.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  let text = `<blockquote>👑 <b>DAFTAR USER PREMIUM (${premiumUsers.length})</b>\n\n`;

  for (const [id, user] of premiumUsers) {
    const name = user.name || user.username || `User ${id}`;
    const expire = user.premiumUntil
      ? new Date(user.premiumUntil).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
      : "Tidak ada tanggal kadaluarsa";

    text += `• <b>${name}</b> (<code>${id}</code>)\n  └ 📅 Exp: ${expire}\n\n`;
  }

  text += `</blockquote>`;

  bot.sendMessage(chatId, text, { parse_mode: "HTML" });
});


bot.onText(/^\/createprem\s+([A-Za-z0-9_-]+)\s+(\d+)([hdwm])$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const fromId = msg.from.id;

  if (fromId !== 7135669179) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa membuat kode premium.</blockquote>`, { parse_mode: "HTML" });
  }

  const codeStr = match[1].toUpperCase();
  const amount = parseInt(match[2], 10);
  const unit = match[3].toLowerCase();

  if (!codeStr || isNaN(amount) || amount <= 0) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah.\nGunakan: /createprem CODE DURASI[h/d/w/m]\nContoh: /createprem PREMIUM2HARI 2h</blockquote>`, { parse_mode: "HTML" });
  }

  if (cpremCodes.find(c => c.code === codeStr)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Kode ${codeStr} sudah ada.</blockquote>`, { parse_mode: "HTML" });
  }

  const durationMs = {
    h: amount * 60 * 60 * 1000,
    d: amount * 24 * 60 * 60 * 1000,
    w: amount * 7 * 24 * 60 * 60 * 1000,
    m: amount * 30 * 24 * 60 * 60 * 1000,
  }[unit];

  const now = new Date();
  const EXPIRATION_MINUTES = 30;
  const expiresAt = new Date(now.getTime() + EXPIRATION_MINUTES * 60 * 1000);

  const newCode = {
    code: codeStr,
    durationMs,
    createdBy: fromId,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    claimedBy: [],
    verifiedUsers: []
  };

  cpremCodes.push(newCode);
  saveCpremCodes();

  const expiresAtWIB = new Date(expiresAt).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  // Kirim ke channel info
  const promoText = `<b>🎁 KODE PREMIUM BARU!</b>\n\n🪄 Kode: <code>${codeStr}</code>\n⭐ Durasi: ${amount}${unit}\n⏰ Berlaku sampai: ${expiresAtWIB} WIB\n\nGunakan perintah: <b>/claimprem ${codeStr}</b>\n\n#Premium #ClaimPrem`;
  await bot.sendMessage(CHANNEL_ID, promoText, { parse_mode: "HTML" });

  bot.sendMessage(chatId, `<blockquote>✅ Kode <code>${codeStr}</code> berhasil dibuat!\n⭐ Member bisa redeem premium selama ${amount}${unit}.\n⏰ Berlaku Redeem sampai: ${expiresAtWIB} WIB (30 menit)\n🌎 Hanya bisa diklaim dengan /claimprem ${codeStr}</blockquote>`, { parse_mode: "HTML" });

  setTimeout(() => {
    const index = cpremCodes.findIndex(c => c.code === codeStr);
    if (index !== -1) {
      cpremCodes.splice(index, 1);
      saveCpremCodes();
      console.log(`🕒 Kode premium ${codeStr} otomatis dihapus (expired setelah 30 menit).`);
    }
  }, EXPIRATION_MINUTES * 60 * 1000);
});

bot.onText(/^\/claimprem\s+(\S+)/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const code = match[1].toUpperCase();
  const userName = msg.from.username ? `@${msg.from.username}` : msg.from.first_name;

  const codeData = cpremCodes.find(c => c.code === code);
  if (!codeData) return bot.sendMessage(chatId, `<blockquote>❌ Kode tidak valid atau sudah kadaluarsa.</blockquote>`, { parse_mode: "HTML" });

  if (codeData.claimedBy.includes(userId))
    return bot.sendMessage(chatId, `<blockquote>⚠️ Kamu sudah klaim kode ini.</blockquote>`, { parse_mode: "HTML" });

  // Belum diverifikasi → kirim bukti share
  if (!codeData.verifiedUsers.includes(userId)) {
    await bot.sendMessage(chatId, `<blockquote>📢 Sebelum klaim, bantu share Grup Channel RezaOfficial ke grup/story kamu.\n\n📸 Kirim screenshot atau forward postingan ke sini untuk verifikasi.</blockquote>`, { parse_mode: "HTML" });

    bot.once("message", async proofMsg => {
      if (!proofMsg.photo && !proofMsg.forward_from_chat) {
        return bot.sendMessage(chatId, `<blockquote>⚠️ Kirim screenshot atau forward postingan dari channel ya.</blockquote>`, { parse_mode: "HTML" });
      }

      const proofText = `🧾 Bukti share dari ${userName}\nUserID: <code>${userId}</code>\nKode: <code>${code}</code>`;
      const opts = {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Verifikasi", callback_data: `verify_${userId}_${code}` },
              { text: "❌ Tolak", callback_data: `deny_${userId}_${code}` }
            ]
          ]
        }
      };

      // Kirim bukti ke owner
      if (proofMsg.photo) {
        const fileId = proofMsg.photo[proofMsg.photo.length - 1].file_id;
        await bot.sendPhoto(7135669179, fileId, { caption: proofText, ...opts });
      } else if (proofMsg.forward_from_chat) {
        await bot.forwardMessage(7135669179, chatId, proofMsg.message_id);
        await bot.sendMessage(7135669179, proofText, opts);
      }

      await bot.sendMessage(chatId, `<blockquote>📨 Bukti share sudah dikirim ke owner. Tunggu verifikasi ya.</blockquote>`, { parse_mode: "HTML" });
    });
    return;
  }

  // ✅ Jika sudah diverifikasi
  codeData.claimedBy.push(userId);
  saveCpremCodes();

  const activeUntil = new Date(Date.now() + codeData.durationMs).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  bot.sendMessage(chatId, `<blockquote>🎉 Selamat! Kode <code>${code}</code> berhasil diklaim.\n⭐ Premium aktif sampai: ${activeUntil} WIB</blockquote>`, { parse_mode: "HTML" });
});


// ===================================================
// ✅ CALLBACK VERIFIKASI OWNER
// ===================================================
bot.on("callback_query", async query => {
  const data = query.data;
  if (!data.startsWith("verify_") && !data.startsWith("deny_")) return;

  const [action, userIdStr, code] = data.split("_");
  const userId = parseInt(userIdStr);
  const codeData = cpremCodes.find(c => c.code === code);

  if (!codeData) return bot.answerCallbackQuery(query.id, { text: "Kode tidak ditemukan / expired" });

  if (action === "verify") {
    if (!codeData.verifiedUsers.includes(userId)) codeData.verifiedUsers.push(userId);
    saveCpremCodes();
    await bot.sendMessage(userId, `<blockquote>✅ Bukti share kamu diverifikasi!\nSekarang kamu bisa klaim kode <code>${code}</code> dengan perintah:\n/claimprem ${code}</blockquote>`, { parse_mode: "HTML" });
    await bot.answerCallbackQuery(query.id, { text: "Verifikasi berhasil ✅" });
  } else {
    await bot.sendMessage(userId, `<blockquote>❌ Bukti kamu ditolak.\nSilakan kirim ulang bukti yang benar (screenshot/forward dari channel).</blockquote>`, { parse_mode: "HTML" });
    await bot.answerCallbackQuery(query.id, { text: "Ditolak ❌" });
  }
});

// 🔹 /createcode hanya Owner
bot.onText(/^\/createcode$/i, (msg) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  if (ownerId !== 7135669179)
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Membuat Code Redeem.</blockquote>', {
      parse_mode: "HTML"
    });

  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/createcode [nama_code] [jumlah_limit]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

// 🔹 /createcode [nama_code] [jumlah]
bot.onText(/^\/createcode\s+([A-Za-z0-9_-]+)\s+(\d+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const fromId = msg.from.id;

  // 🔒 Hanya Owner
  if (fromId !== 7135669179) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa membuat kode bonus.</blockquote>`, { parse_mode: "HTML" });
  }

  const codeStr = match[1].toUpperCase();
  const amount = parseInt(match[2], 10);

  // ⚠️ Validasi
  if (!codeStr || isNaN(amount) || amount <= 0) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah!\n\nGunakan: <code>/createcode CODE AMOUNT</code>\nContoh: <b>/createcode BONUS50 50</b></blockquote>`, {
      parse_mode: "HTML"
    });
  }

  

  // 🕒 Exp time
  const now = new Date();
  const expiresAt = new Date(now.getTime() + EXPIRATION_MINUTES * 60 * 1000);
  const localTime = new Date(expiresAt.getTime() + 7 * 60 * 60 * 1000);
  const formattedTime = localTime.toLocaleTimeString('id-ID', { hour12: false });

  // 💾 Simpan kode baru
  const newCode = {
    code: codeStr,
    amount,
    createdBy: fromId,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    redeemedBy: []
  };
  codes.push(newCode);
  saveCodes();

  // 💬 Pesan konfirmasi owner
  const ownerMsg = `
<blockquote>
🎉 <b>Kode Baru Berhasil Dibuat!</b>

🆔 <b>Kode:</b> <code>${codeStr}</code>
💰 <b>Bonus:</b> +${amount} Extra Limit
⏰ <b>Berlaku Sampai:</b> ${formattedTime} WIB
📅 <b>Durasi:</b> ${EXPIRATION_MINUTES} menit
🌍 <b>Redeem:</b> Semua user bisa 1x

📢 Segera gunakan di bot <b>@BotGachaVVIP_hanzpiwbot</b>!
</blockquote>`;
  await bot.sendMessage(chatId, ownerMsg, { parse_mode: "HTML" });

  // 📣 Kirim otomatis ke channel
  const channelMsg = `
🎟️ <b>Kode Bonus Baru!</b>

🆔 <b>Kode:</b> <code>${codeStr}</code>
💰 <b>Bonus:</b> +${amount} Extra Limit
⏰ <b>Berlaku sampai:</b> ${formattedTime} WIB
🧭 <b>Durasi:</b> ${EXPIRATION_MINUTES} menit

Buruan redeem di bot <b>@BotGachaVVIP_hanzpiwbot</b> sebelum kadaluarsa!
`;
  try {
    await bot.sendMessage(CHANNEL_ID, channelMsg, { parse_mode: "HTML" });
  } catch (err) {
    console.error("❌ Gagal kirim ke channel:", err);
  }

  // 📨 Kirim notifikasi ke Owner, Admin, dan Premium
  const notifText = `
<blockquote>
📢 <b>Kode Berhasil Dibuat!</b>

🆔 Kode: <code>${codeStr}</code>
💰 Bonus: +${amount} Extra Limit

📣 Sudah share ke Channel belum?
</blockquote>`;

  const notifButtons = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Udah Share", callback_data: `share_done_${fromId}` },
          { text: "🚀 OTW Share", callback_data: `share_otw_${fromId}` }
        ]
      ]
    },
    parse_mode: "HTML"
  };

  // 🔁 Kirim ke Owner, Admin, dan Premium
  for (const id in users) {
    const u = users[id];
    if (parseInt(id) === 7135669179 || ADMIN_BOT_IDS.includes(parseInt(id)) || u?.premium) {
      try {
        await bot.sendMessage(id, notifText, notifButtons);
        await new Promise(r => setTimeout(r, 500)); // biar ga flood
      } catch (err) {
        console.log(`Gagal kirim notifikasi ke ${id}:`, err.message);
      }
    }
  }
});

// 🔹 Callback tombol share
bot.on("callback_query", async (query) => {
  const data = query.data;
  const userId = query.from.id;
  const msgId = query.message.message_id;
  const chatId = query.message.chat.id;

  if (data === `share_done_${userId}`) {
    await bot.answerCallbackQuery(query.id, { text: "🔥 Mantap! Terima kasih udah share!", show_alert: true });
    await bot.editMessageText(`<blockquote>✅ Terima kasih ${query.from.first_name}! Kamu sudah share kode 🎉</blockquote>`, {
      chat_id: chatId,
      message_id: msgId,
      parse_mode: "HTML"
    });
  }

  if (data === `share_otw_${userId}`) {
    await bot.answerCallbackQuery(query.id, { text: "🚀 Semangat! Jangan lupa share ke Channel ya!", show_alert: true });
    await bot.editMessageText(`<blockquote>🚀 Siap ${query.from.first_name}! Ditunggu share kodenya 💪</blockquote>`, {
      chat_id: chatId,
      message_id: msgId,
      parse_mode: "HTML"
    });
  }
});
bot.onText(/^\/delcode$/i, (msg) => {
  const chatId = msg.chat.id;
  const ownerId = msg.from.id;
  if (ownerId !== 7135669179) 
    return bot.sendMessage(chatId, '<blockquote>🚫 Akses ditolak! Hanya Owner Yang Dapat Menghapus Code.</blockquote>', {
    parse_mode: "HTML"
    });
  
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/delcode [nama_code]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/delcode\s+([A-Za-z0-9_-]+)$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const fromId = msg.from.id;

  if (fromId !== 7135669179)
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa menghapus code.</blockquote>`, {
      parse_mode: "HTML"
    });

  const codeStr = match[1].toUpperCase();

  if (!codeStr) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format salah.\nGunakan: /delcode CODE\nContoh: /delcode BONUS50</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  const index = codes.findIndex(c => c.code === codeStr);

  if (index === -1) {
    return bot.sendMessage(chatId, `<blockquote>❌ Kode <code>${codeStr}</code> tidak ditemukan.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  codes.splice(index, 1);

  saveCodes();

  bot.sendMessage(chatId, `<blockquote>🗑️ Kode <code>${codeStr}</code> berhasil dihapus dari database.</blockquote>`, {
    parse_mode: "HTML"
  });

  console.log(`🧹 Kode ${codeStr} dihapus manual oleh owner.`);
});

bot.onText(/^\/listcode$/i, (msg) => {
  const chatId = msg.chat.id;

  if (msg.from.id !== 7135669179)
    return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Hanya Owner yang dapat melihat daftar kode.</blockquote>`, { parse_mode: "HTML" });

  if (!codes.length)
    return bot.sendMessage(chatId, `<blockquote>📭 Belum ada kode redeem yang aktif.</blockquote>`, { parse_mode: "HTML" });

  const now = new Date();

  const lines = codes.map(c => {
    const expireDate = new Date(c.expiresAt);
    const expired = expireDate < now ? '❌ Expired' : '✅ Aktif';
    const localExpire = new Date(expireDate.getTime() + 7 * 60 * 60 * 1000);
    const expireTime = localExpire.toLocaleTimeString('id-ID', { hour12: false });
    const redeemedCount = c.redeemedBy ? c.redeemedBy.length : 0;

    return `<blockquote>🎟️ ${c.code}\n💰 Bonus: +${c.amount} extraLimit\n👥 Sudah digunakan: ${redeemedCount} user\n${expired} — ⏰ Exp: ${expireTime} WIB</blockquote>`;
  });

  bot.sendMessage(chatId, `<blockquote>📜 Daftar Kode Redeem:\n\n${lines.join('\n')}</blockquote>`, { parse_mode: 'HTML' });
});


bot.onText(/^\/pengumuman(?:\s+([\s\S]+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const text = match[1]?.trim();

  const ownerList = Array.isArray(7135669179) ? 7135669179 : [7135669179];
  if (!ownerList.includes(senderId)) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa mengirim pengumuman.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  if (!text) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Gunakan format:\n\n<code>/pengumuman isi pesanmu</code></blockquote>`, {
      parse_mode: "HTML"
    });
  }

  try {
    const usersPath = "./database/users.json";
    const users = JSON.parse(fs.readFileSync(usersPath));
    let success = 0, failed = 0, deleted = 0;

    await bot.sendMessage(chatId, `<blockquote>📢 Mengirim pengumuman ke semua user...</blockquote>`, {
      parse_mode: "HTML"
    });

    for (const id in users) {
      try {
        await bot.sendMessage(id, `<blockquote>📣 Pengumuman!\n\n${text}</blockquote>`, {
          parse_mode: "HTML"
        });
        success++;
        await new Promise(r => setTimeout(r, 400));
      } catch (err) {
        failed++;
        const msg = err.message || "";
        console.log(`[PENGUMUMAN] Gagal kirim ke ${id}: ${msg}`);

        if (
          msg.includes("bot was blocked") ||
          msg.includes("bot can't initiate conversation with a user") ||
          msg.includes("chat not found") ||
          msg.includes("user is deactivated") ||
          msg.includes("not enough rights")
        ) {
          delete users[id];
          deleted++;
          console.log(`🧹 Hapus user ${id} (blokir / nonaktif)`);
        }
      }
    }

    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    await bot.sendMessage(chatId, `<blockquote>✅ Pengumuman selesai dikirim!

🟢 Berhasil: ${success}
🔴 Gagal: ${failed}
🧹 Dihapus dari database: ${deleted}</blockquote>`, {
      parse_mode: "HTML"
    });

  } catch (err) {
    console.error("Error pengumuman:", err);
    bot.sendMessage(chatId, "❌ Terjadi kesalahan saat mengirim pengumuman.");
  }
});

//===================== COMMAND MENU OWNER EVENT =====================

bot.onText(/^\/jasher$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (maintenanceCheck(bot, msg)) return;

  const member = await bot.getChatMember(CHANNEL_ID, userId);
  if (member.status === "left" || member.status === "kicked") {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]],
      },
    });
  }

  if (!fs.existsSync(groupsFile)) {
    return bot.sendMessage(chatId, `<blockquote>Belum ada grup terdaftar untuk menerima broadcast.</blockquote>`, {
      parse_mode: "HTML",
    });
  }

  const groups = JSON.parse(fs.readFileSync(groupsFile, "utf8"));
  if (!Array.isArray(groups) || !groups.length) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Tidak ada grup tersimpan untuk broadcast.</blockquote>`, {
      parse_mode: "HTML",
    });
  }

  bot.tempBroadcast = { userId, stage: "askMode" };

  await bot.sendMessage(chatId, `<blockquote>📢 Pilih mode pengiriman broadcast:</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📨 Kirim biasa (teks)", callback_data: "broadcast_text" },
          { text: "🔁 Teruskan pesan (forward)", callback_data: "broadcast_forward" },
        ],
      ],
    },
  });
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  const userId = query.from.id;

  if (!bot.tempBroadcast || bot.tempBroadcast.userId !== userId) return;

  const groups = JSON.parse(fs.readFileSync(groupsFile, "utf8"));

  if (data === "broadcast_text") {
    bot.tempBroadcast.stage = "waitingText";
    await bot.sendMessage(chatId, `<blockquote>✍️ Kirim teks broadcast yang ingin kamu sebarkan.</blockquote>`, {
      parse_mode: "HTML",
    });
  }

  if (data === "broadcast_forward") {
    bot.tempBroadcast.stage = "waitingForward";
    await bot.sendMessage(chatId, `<blockquote>📨 Kirim pesan apa saja yang ingin kamu teruskan ke semua grup (teks, foto, stiker, dll).</blockquote>`, {
      parse_mode: "HTML",
    });
  }

  if (data === "broadcast_no") {
    const text = bot.tempBroadcast.text;
    await bot.sendMessage(chatId, `<blockquote>📢 Mengirim broadcast ke ${groups.length} grup...</blockquote>`, { parse_mode: "HTML" });

    let success = 0;
    for (const groupId of groups) {
      try {
        await bot.sendMessage(groupId, `<blockquote>${text}</blockquote>`, { parse_mode: "HTML" });
        success++;
      } catch (err) {
        console.log(`⚠️ Gagal kirim ke ${groupId}: ${err.message}`);
      }
      await new Promise((r) => setTimeout(r, 300));
    }

    await bot.sendMessage(chatId, `<blockquote>✅ Broadcast selesai! Berhasil dikirim ke ${success}/${groups.length} grup.</blockquote>`, { parse_mode: "HTML" });
    delete bot.tempBroadcast;
  }

  if (data === "broadcast_yes") {
    bot.tempBroadcast.stage = "waitingPhoto";
    await bot.sendMessage(chatId, `<blockquote>📸 Kirimkan foto yang ingin kamu sertakan di broadcast ini.</blockquote>`, { parse_mode: "HTML" });
  }
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (!bot.tempBroadcast || msg.from.id !== bot.tempBroadcast.userId) return;

  const groups = JSON.parse(fs.readFileSync(groupsFile, "utf8"));
  const stage = bot.tempBroadcast.stage;

  if (stage === "waitingText") {
    bot.tempBroadcast.text = msg.text;
    bot.tempBroadcast.stage = "askPhoto";
    await bot.sendMessage(chatId, `<blockquote>🖼️ Apakah kamu ingin menambahkan foto ke broadcast ini?</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✅ Iya", callback_data: "broadcast_yes" },
            { text: "❌ Tidak", callback_data: "broadcast_no" },
          ],
        ],
      },
    });
  }

  if (stage === "waitingForward") {
    await bot.sendMessage(chatId, `<blockquote>📤 Meneruskan pesan ke ${groups.length} grup...</blockquote>`, { parse_mode: "HTML" });

    let success = 0;
    for (const groupId of groups) {
      try {
        await bot.forwardMessage(groupId, chatId, msg.message_id);
        success++;
      } catch (err) {
        console.log(`⚠️ Gagal forward ke ${groupId}: ${err.message}`);
      }
      await new Promise((r) => setTimeout(r, 300));
    }

    await bot.sendMessage(chatId, `<blockquote>✅ Selesai! Berhasil diteruskan ke ${success}/${groups.length} grup.</blockquote>`, { parse_mode: "HTML" });
    delete bot.tempBroadcast;
  }
});

bot.on("photo", async (msg) => {
  if (!bot.tempBroadcast || bot.tempBroadcast.stage !== "waitingPhoto" || msg.from.id !== bot.tempBroadcast.userId) return;

  const chatId = msg.chat.id;
  const groups = JSON.parse(fs.readFileSync(groupsFile, "utf8"));
  const text = bot.tempBroadcast.text;
  const photoId = msg.photo[msg.photo.length - 1].file_id;

  await bot.sendMessage(chatId, `<blockquote>📢 Mengirim broadcast teks + foto ke ${groups.length} grup...</blockquote>`, { parse_mode: "HTML" });

  let success = 0;
  for (const groupId of groups) {
    try {
      await bot.sendPhoto(groupId, photoId, { caption: `<blockquote>${text}</blockquote>`, parse_mode: "HTML" });
      success++;
    } catch (err) {
      console.log(`⚠️ Gagal kirim ke ${groupId}: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  await bot.sendMessage(chatId, `<blockquote>✅ Broadcast teks + foto selesai! Berhasil dikirim ke ${success}/${groups.length} grup.</blockquote>`, { parse_mode: "HTML" });
  delete bot.tempBroadcast;
});


bot.onText(/^\/tiktok(?:\s+(.+))?$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const url = match[1];
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }
  
  if (!url) {
    return bot.sendMessage(chatId, `<blockquote>☘️ Link TikTok-nya Mana?</blockquote>`, { 
    parse_mode: "HTML" 
    });
  }

 
  const urlRegex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/\S*)?$/;
  if (!urlRegex.test(url)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Itu Bukan Link Yang Benar</blockquote>`, { 
    parse_mode: "HTML" 
    });
  }

  bot.sendMessage(chatId, `<blockquote>⏳ Tunggu sebentar, sedang mengambil video...</blockquote>`, {
        parse_mode: "HTML"
        });

  try {
  const res = await tiktok(url);

 
  let caption = `🎬 Judul: ${res.title}`;
     if (caption.length > 1020) {
     caption = caption.substring(0, 1017) + "...";
  }

await bot.sendVideo(chatId, res.no_watermark, { caption });
 
  if (res.music && res.music.trim() !== "") {
    await bot.sendAudio(chatId, res.music, { title: "tiktok_audio.mp3" });
  } else {
    await bot.sendMessage(chatId, `<blockquote>🎵 Video ini tidak memiliki audio asli.</blockquote>`, {
        parse_mode: "HTML"
        });
  }

} catch (error) {
  console.error(error);
  bot.sendMessage(chatId, `<blockquote>⚠️ Terjadi kesalahan saat mengambil video TikTok. Coba lagi nanti.</blockquote>`, {
        parse_mode: "HTML"
        });
}
});


bot.onText(/\/hytamkan/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }
  if (!msg.reply_to_message || !msg.reply_to_message.photo) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Reply foto dengan caption /hytamkan</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  bot.sendMessage(chatId, `<blockquote>⏱️ Sedang memproses...</blockquote>`, {
    parse_mode: "HTML"
    });

  try {
    const fileId = msg.reply_to_message.photo.pop().file_id;
    const file = await bot.getFile(fileId);

    const url = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const base64Image = buffer.toString("base64");

    const genAI = new GoogleGenerativeAI("AIzaSyDoMqqCBjo5wF4YLVnIJTX3h1hISR6NPKo"); // ganti API key
    const promptText =
      "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

    const contents = [
      { text: promptText },
      { inlineData: { mimeType: "image/jpeg", data: base64Image } },
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: { responseModalities: ["Text", "Image"] },
    });

    const result = await model.generateContent(contents);

    let resultImage;
    for (const part of result.response.candidates[0].content.parts) {
      if (part.inlineData) {
        resultImage = Buffer.from(part.inlineData.data, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./hytam_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await bot.sendPhoto(chatId, tempPath, {
        caption: `<blockquote>✅ berhasil menghitamkan</blockquote>`,
        parse_mode: "HTML",
      });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      bot.sendMessage(chatId, `<blockquote>❌ Gagal memproses gambar.</blockquote>`, {
    parse_mode: "HTML"
    });
    }
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, `<blockquote>⚠️ Error: ${error.message}</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cecan(?:\s+(.+))?$/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const negara = (match[1] || "").toLowerCase().trim();
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;

  const member = await bot.getChatMember(CHANNEL_ID, userId);
  if (member.status === "left" || member.status === "kicked") {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]],
      },
    });
  }

  const listNegara = [
    "china", "vietnam", "thailand", "indonesia", "korea",
    "japan", "malaysia", "justinaxie", "jeni", "jiso",
    "ryujin", "rose", "hijaber"
  ];

  if (!negara) {
    return bot.sendMessage(chatId, 
      `<blockquote>🌏 Pilih kategori cecan:\n\n${listNegara.map(n => `• <code>${n}</code>`).join('\n')}\n\nContoh: <code>/cecan korea</code></blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  if (!listNegara.includes(negara)) {
    return bot.sendMessage(chatId, 
      `<blockquote>❌ Kategori tidak ditemukan.\nGunakan salah satu:\n${listNegara.map(n => `• <code>${n}</code>`).join('\n')}</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const loading = await bot.sendMessage(chatId, `<blockquote>🖼️ Mengambil foto cecan ${negara}...</blockquote>`, { parse_mode: "HTML" });

  try {
    const apiUrl = `https://api.betabotz.eu.org/api/cecan/${negara}?apikey=${APIKEY}`;
    const res = await axios.get(apiUrl, { responseType: "arraybuffer", timeout: 20000 });

    await bot.sendPhoto(chatId, Buffer.from(res.data), {
      caption: `<blockquote>🌸 Cecan ${negara.charAt(0).toUpperCase() + negara.slice(1)} 😍</blockquote>`,
      parse_mode: "HTML",
    });

  } catch (err) {
    console.error("/cecan error:", err.message);
    await bot.sendMessage(chatId,
      `<blockquote>❌ Gagal mengambil foto:\n<code>${escapeHtml(err.message)}</code></blockquote>`,
      { parse_mode: "HTML" }
    );
  } finally {
    try { await bot.deleteMessage(chatId, loading.message_id); } catch (_) {}
  }
});

bot.onText(/^\/promote(?:\s+(.+))?$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const title = match[1] ? match[1].trim() : null;

  if (msg.chat.type === "private") {
    return bot.sendMessage(chatId, `<blockquote>❌ Perintah ini hanya bisa digunakan di grup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  try {

    const admins = await bot.getChatAdministrators(chatId);
    const isAdmin = admins.some(admin => admin.user.id === senderId);

    if (!isAdmin) {
      return bot.sendMessage(chatId, `<blockquote>❌ Hanya admin grup yang bisa menggunakan perintah ini.</blockquote>`, {
      parse_mode: "HTML"
      });
    }

    if (!msg.reply_to_message) {
      return bot.sendMessage(
        chatId,
        `<blockquote>⚠️ Reply pesan user yang ingin dipromote.\nContoh: /promote MODERATOR</blockquote>`,
        { parse_mode: "HTML" }
      );
    }

    const target = msg.reply_to_message.from;

    await bot.promoteChatMember(chatId, target.id, {
      can_change_info: true,
      can_post_messages: true,
      can_edit_messages: true,
      can_delete_messages: true,
      can_invite_users: true,
      can_restrict_members: true,
      can_pin_messages: true,
      can_promote_members: false,
    });

    if (title) {
      await bot.setChatAdministratorCustomTitle(chatId, target.id, title);
    }

    bot.sendMessage(
      chatId,
      `<blockquote>✅ User <b>${target.first_name}</b> sudah dipromote jadi admin${title ? ` dengan gelar <b>${title}</b>` : ""}.</blockquote>`, { 
      parse_mode: "HTML" 
      });
  } catch (err) {
    console.error("[PROMOTE ERROR]", err);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal promote user. Pastikan bot admin dan punya izin cukup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/demote$/, async (msg) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;

  if (msg.chat.type === "private") {
    return bot.sendMessage(chatId, `<blockquote>❌ Perintah ini hanya bisa digunakan di grup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  try {

    const admins = await bot.getChatAdministrators(chatId);
    const isAdmin = admins.some(admin => admin.user.id === senderId);

    if (!isAdmin) {
      return bot.sendMessage(chatId, `<blockquote>❌ Hanya admin grup yang bisa menggunakan perintah ini.</blockquote>`, {
      parse_mode: "HTML"
      });
    }

    if (!msg.reply_to_message) {
      return bot.sendMessage(chatId, `<blockquote>⚠️ Reply pesan user yang ingin didemote.</blockquote>`, {
      parse_mode: "HTML"
      });
    }

    const target = msg.reply_to_message.from;

    await bot.promoteChatMember(chatId, target.id, {
      can_change_info: false,
      can_post_messages: false,
      can_edit_messages: false,
      can_delete_messages: false,
      can_invite_users: false,
      can_restrict_members: false,
      can_pin_messages: false,
      can_promote_members: false,
    });

    bot.sendMessage(
      chatId,
      `<blockquote>✅ User <b>${target.first_name}</b> sudah didemote dari admin.</blockquote>`,{
      parse_mode: "HTML"
      });
  } catch (err) {
    console.error("[DEMOTE ERROR]", err);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal demote user. Pastikan bot admin dan punya izin cukup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/pin$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (userId !== 7135669179 && !ADMIN_BOT_IDS.includes(userId)) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Perintah ini hanya untuk Owner/Admin.</blockquote>`, { parse_mode: "HTML" });
  }

  if (maintenanceCheck(bot, msg)) return;

  let messageIdToPin;

  if (msg.reply_to_message) {
    messageIdToPin = msg.reply_to_message.message_id;
  } else {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Gunakan /pin sambil reply ke pesan yang ingin dilekatkan.</blockquote>`, { parse_mode: "HTML" });
  }

  try {

    await bot.pinChatMessage(chatId, messageIdToPin);

    bot.sendMessage(chatId, `<blockquote>✅ Pesan berhasil dilekatkan ke atas grup!</blockquote>`, { parse_mode: "HTML" });

    console.log(`📌 Pesan ID ${messageIdToPin} dipin di chat ${chatId}`);

  } catch (error) {
    console.error("❌ Gagal memproses pin:", error);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal melekatkan pesan: ${error.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

bot.onText(/^\/unpin$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (userId !== 7135669179 && !ADMIN_BOT_IDS.includes(userId)) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Akses ditolak! Perintah ini hanya untuk Owner/Admin.</blockquote>`, { parse_mode: "HTML" });
  }

  if (maintenanceCheck(bot, msg)) return;

  try {
    await bot.unpinChatMessage(chatId);

    bot.sendMessage(chatId, `<blockquote>✅ Pesan yang dilekatkan telah dilepas.</blockquote>`, { parse_mode: "HTML" });
    console.log(`📌 Semua pin di chat ${chatId} telah dilepas`);

  } catch (error) {
    console.error("❌ Gagal unpin:", error);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal melepas pin: ${error.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

//===================== COMMAND MENU TOOLS =====================

bot.onText(/\/id(?:\s+(@\w+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  let targetUser = msg.from;
  
  if (maintenanceCheck(bot, msg)) return;

  try {
    if (msg.reply_to_message) {
      targetUser = msg.reply_to_message.from;
    }

    else if (match[1]) {
      const username = match[1].replace('@', '');
      const members = await bot.getChatAdministrators(chatId);
      const found = members.find(m => m.user.username?.toLowerCase() === username.toLowerCase());

      if (found) {
        targetUser = found.user;
      } else {
        return bot.sendMessage(
          chatId,
          `<blockquote>❌ Tidak dapat menemukan info dari @${username}</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    }

    const userId = targetUser.id.toString();
    const name = targetUser.first_name
      ? escapeHtml(targetUser.first_name)
      : "-";
    const username = targetUser.username
      ? `@${escapeHtml(targetUser.username)}`
      : "-";
    const language = targetUser.language_code || "-";
    const userLink = `<a href="tg://user?id=${userId}">Klik di sini</a>`;

    const text = `<blockquote>👤 Informasi Pengguna:
• Nama     : ${name}
• Username : ${username}
• ID       : <code>${userId}</code>
• Bahasa   : ${language}
• User Link: ${userLink}</blockquote>`;

    await bot.sendMessage(chatId, text, { parse_mode: "HTML" });
  } catch (err) {
    console.error("Error /id command:", err);
    bot.sendMessage(chatId, `<blockquote>⚠️ Terjadi kesalahan saat mengambil data pengguna.</blockquote>`, {
      parse_mode: "HTML",
    });
  }
});

bot.onText(/^\/hacknik$/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/hacknik [nik_target]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/\/hacknik (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const nik = match[1];
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }

  if (!/^\d{16}$/.test(nik)) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Format NIK tidak valid! Harus 16 digit angka.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  try {
    const response = await axios.get(`https://api.siputzx.my.id/api/tools/nik-checker?nik=${nik}`);
    const data = response.data;

    if (!data.status || !data.data || data.data.status !== "success") {
      return bot.sendMessage(chatId, `<blockquote>❌ Data tidak ditemukan atau terjadi kesalahan pada server.</blockquote>`, {
      parse_mode: "HTML"
      });
    }

    const d = data.data.data;
    const text = `<blockquote> 𝗖𝗘𝗞 𝗡𝗜𝗞 𝗗𝗢𝗡𝗘 𝗕𝗔𝗡𝗚
👤 ${d.nama}
${d.kelamin === "PEREMPUAN" ? "♀️" : "♂️"} ${d.kelamin}
📅 Tanggal Lahir: ${d.tempat_lahir}
🎂 Usia: ${d.usia}
🏠 Alamat: ${d.alamat}
🏘️ Kelurahan: ${d.kelurahan}
🏞️ Kecamatan: ${d.kecamatan}
🏛️ Kabupaten: ${d.kabupaten}
🌍 Provinsi: ${d.provinsi}
🗳️ TPS: ${d.tps}
♎ Zodiak: ${d.zodiak}
📆 Ulang Tahun Berikutnya: ${d.ultah_mendatang}
📌 Koordinat: ${d.koordinat.lat}, ${d.koordinat.lon}
</blockquote>`;

    bot.sendMessage(chatId, text, { parse_mode: "HTML" });
  } catch (err) {
    console.error("Error cek NIK:", err.message);
    bot.sendMessage(chatId, "⚠️ Gagal mengambil data dari server!");
  }
});

bot.onText(/^\/get$/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/get [link]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/\/get (.+)?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const url = match[1];
  
  if (maintenanceCheck(bot, msg)) return;

  if (!/^https?:\/\//.test(url))
    return bot.sendMessage(chatId, `<blockquote>Ex: /get https://HanzPiwxzz.my.id</blockquote>`, {
      parse_mode: "HTML"
    });

  bot.sendMessage(chatId, `<blockquote>⚡ Mengambil semua file & folder dari URL...</blockquote>`, {
    parse_mode: "HTML"
  });

  try {
    const res = await fetch(url);
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const baseUrl = new URL(url);

    const assets = new Set();
    document.querySelectorAll("link[href], script[src], img[src]").forEach(el => {
      const attr = el.getAttribute("href") || el.getAttribute("src");
      if (attr && !attr.startsWith("data:")) {
        try {
          const fullUrl = new URL(attr, baseUrl).href;
          assets.add(fullUrl);
        } catch {}
      }
    });

    const folder = path.join(__dirname, `temp_${Date.now()}`);
    fs.mkdirSync(folder, { recursive: true });

    fs.writeFileSync(path.join(folder, "index.html"), html);

    let count = 0;
    for (const assetUrl of assets) {
      try {
        const relativePath = assetUrl.replace(baseUrl.origin, "");
        const filePath = path.join(folder, relativePath);
        const dirPath = path.dirname(filePath);
        fs.mkdirSync(dirPath, { recursive: true });

        const resp = await fetch(assetUrl);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

        const buffer = await resp.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));

        count++;
      } catch (err) {
        console.log("Gagal ambil:", assetUrl, err.message);
      }
    }

    const zip = new AdmZip();
    zip.addLocalFolder(folder);
    const zipPath = `${folder}.zip`;
    zip.writeZip(zipPath);

    await bot.sendDocument(chatId, zipPath, { caption: `📦 Semua file (${count} asset) + struktur folder berhasil diambil!` });

    fs.rmSync(folder, { recursive: true, force: true });
    fs.unlinkSync(zipPath);

  } catch (err) {
    console.error(err);
    bot.sendMessage(chatId, `❌ Gagal mengambil file: ${err.message || err}`);
  }
});

bot.onText(/\/tourl/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id; 
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }
    
  const replyMsg = msg.reply_to_message;
  if (!replyMsg) {
    return bot.sendMessage(chatId, `<blockquote>❌ Balas sebuah pesan yang berisi file/audio/video dengan perintah /tourl.</blockquote>`, {
    parse_mode: "HTML"
  });
  }

  if (!replyMsg.document && !replyMsg.photo && !replyMsg.video && !replyMsg.audio && !replyMsg.voice) {
    return bot.sendMessage(chatId,`<blockquote>❌ Pesan yang kamu balas tidak mengandung file/audio/video yang bisa diupload.</blockquote>`, {
    parse_mode: "HTML"
  });
  }

  try {
    let fileId, filename;

    if (replyMsg.document) {
      fileId = replyMsg.document.file_id;
      filename = replyMsg.document.file_name;
    } else if (replyMsg.photo) {
      const photoArray = replyMsg.photo;
      fileId = photoArray[photoArray.length - 1].file_id;
      filename = 'photo.jpg';
    } else if (replyMsg.video) {
      fileId = replyMsg.video.file_id;
      filename = replyMsg.video.file_name || 'video.mp4';
    } else if (replyMsg.audio) {
      fileId = replyMsg.audio.file_id;
      filename = replyMsg.audio.file_name || 'audio.mp3';
    } else if (replyMsg.voice) {
      fileId = replyMsg.voice.file_id;
      filename = 'voice.ogg';
    }

    const fileLink = await bot.getFileLink(fileId);
    const response = await fetch(fileLink);
    const fileBuffer = Buffer.from(await response.arrayBuffer());

    const catboxUrl = await uploadToCatbox(fileBuffer, filename);

    bot.sendMessage(chatId, `<blockquote>✅ File berhasil diupload ke Catbox:\n${catboxUrl}</blockquote>`, {
    parse_mode: "HTML"
  });
  } catch (err) {
    console.error(err);
    bot.sendMessage(chatId, `<blockquote>❌ Gagal upload file: ${err.message}</blockquote>`, {
    parse_mode: "HTML"
  });
  }
});

bot.onText(/^\/nglspam$/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/nglspam [link] [text] [jumlah]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/\/nglspam (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const args = match[1].trim().split(" ");
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }
  
    if (args.length < 3) {
      return bot.sendMessage(
        chatId, `<blockquote>Format Salah!\n\nContoh: /ngl link text jumlah\n/ngl https://ngl.link/HanzPiw lu jelek 20 </blockquote>`, {
        parse_mode: 'HTML' 
        });
    }

    const link = args[0];
    const jumlah = parseInt(args[args.length - 1]);
    const pesan = args.slice(1, -1).join(" ");

    if (!/^https?:\/\/ngl\.link\//i.test(link)) {
      return bot.sendMessage(chatId, `<blockquote>❌ Link NGL tidak valid! Pastikan formatnya https://ngl.link/username</blockquote>`, {
        parse_mode: 'HTML' 
        });
    }

    if (isNaN(jumlah) || jumlah < 1 || jumlah > 200) {
      return bot.sendMessage(chatId, `<blockquote>❌ Jumlah pesan harus angka 1 - 100.</blockquote>`, {
        parse_mode: 'HTML' 
        });
    }

    try {
      const processingMsg = await bot.sendMessage(chatId, `<blockquote>⏳ Mengirim ${jumlah} pesan ke NGL...</blockquote>`, {
        parse_mode: 'HTML' 
        });

      const apiUrl = `https://api.siputzx.my.id/api/tools/ngl`;
      let success = 0, failed = 0;

      for (let i = 0; i < jumlah; i++) {
        try {
          await axios.post(apiUrl, {
            link: link,
            text: pesan
          }, { timeout: 10000 });

          success++;
          await new Promise(r => setTimeout(r, 1500));
        } catch {
          failed++;
        }
      }

      await bot.deleteMessage(chatId, processingMsg.message_id);

      await bot.sendMessage(
        chatId,
        `<blockquote>✅ Selesai Kirim Pesan NGL\n\n📩 Pesan: "${pesan}"\n📦 Total: ${jumlah}\n☑️ Berhasil: ${success}\n❌ Gagal: ${failed}</blockquote>`, {
        parse_mode: 'HTML' 
        });

    } catch (err) {
      console.error('[NGL ERROR]', err.message);
      bot.sendMessage(chatId, `<blockquote>❌ Gagal kirim ke NGL: ${err.message}</blockquote>`, {
        parse_mode: 'HTML' 
        });
    }
});

bot.onText(/^\/antishare(?:\s+(on|off))?$/i, async (msg, match) => {
  const chatId = msg.chat.id.toString();
  const senderId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;

  if (msg.chat.type === "private") {
    return bot.sendMessage(chatId, `<blockquote>❌ Perintah ini hanya bisa digunakan di grup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  try {
    const admins = await bot.getChatAdministrators(chatId);
    const isAdmin = admins.some((admin) => admin.user.id === senderId);
    if (!isAdmin) {
      return bot.sendMessage(chatId, `<blockquote>❌ Hanya admin grup yang bisa mengatur AntiShare.</blockquote>`, {
    parse_mode: "HTML"
    });
    }

    const status = match[1] ? match[1].toLowerCase() : null;

    if (status === "on") {
      antiforward[chatId] = true;
      fs.writeFileSync(dbAntiShare, JSON.stringify(antiforward, null, 2));
      return bot.sendMessage(chatId, `<blockquote>✅ Antishare aktif di grup ini.</blockquote>`, {
    parse_mode: "HTML"
    });
    } else if (status === "off") {
      delete antiforward[chatId];
      fs.writeFileSync(dbAntiShare, JSON.stringify(antiforward, null, 2));
      return bot.sendMessage(chatId, `<blockquote>✅ AntiShare dimatikan di grup ini.</blockquote>`, {
    parse_mode: "HTML"
    });
    } else {
      return bot.sendMessage(chatId, `<blockquote>📌 Gunakan:\n/antishare on\n/antishare off</blockquote>`, {
    parse_mode: "HTML"
    });
    }
  } catch (err) {
    console.error("[ANTISHARE CMD ERROR]", err);
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat mengatur AntiShare.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id.toString();

  if (antiforward[chatId]) {
    if (msg.forward_from || msg.forward_from_chat) {
      const admins = await bot.getChatAdministrators(chatId);
      const isAdmin = admins.some((admin) => admin.user.id === msg.from.id);

      if (!isAdmin) {
        try {
          await bot.deleteMessage(chatId, msg.message_id);
        } catch (e) {
          console.error("❌ Gagal hapus pesan forward:", e.message);
        }
      }
    }
  }
});

bot.onText(/^\/antilink(?:\s+(on|off))?$/i, async (msg, match) => {
  const chatId = msg.chat.id.toString();
  const senderId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;

  if (msg.chat.type === 'private') {
      return bot.sendMessage(chatId, `<blockquote>❌ Perintah ini hanya bisa digunakan di grup.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  try {
    
    const admins = await bot.getChatAdministrators(chatId);
    const isAdmin = admins.some(admin => admin.user.id === senderId);
      if (!isAdmin) {
      return bot.sendMessage(chatId, `<blockquote>❌ Hanya admin grup yang bisa mengatur AntiLink.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

    const status = match[1] ? match[1].toLowerCase() : null;

    if (status === 'on') {
      antilink[chatId] = true;
      fs.writeFileSync(dbAntiLink, JSON.stringify(antilink, null, 2));
      return bot.sendMessage(chatId, `<blockquote>✅ AntiLink aktif di grup ini.</blockquote>`, {
    parse_mode: "HTML"
    });
      } else if (status === 'off') {
        delete antilink[chatId];
        fs.writeFileSync(dbAntiLink, JSON.stringify(antilink, null, 2));
        return bot.sendMessage(chatId, `<blockquote>✅ AntiLink dimatikan di grup ini.</blockquote>`, {
    parse_mode: "HTML"
    });
      } else {
        return bot.sendMessage(chatId, `<blockquote>📌 Gunakan:\n/antilink on\n/antilink off</blockquote>`, {
    parse_mode: "HTML"
    });
  }
    } catch (err) {
      console.error('[ANTILINK CMD ERROR]', err);
      bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat mengatur AntiLink.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id.toString();
  const text = msg.text || '';

  if (antilink[chatId]) {
    const linkPattern = /(https?:\/\/|t\.me\/|telegram\.me\/|chat\.whatsapp\.com|wa\.me\/)/i;

    if (linkPattern.test(text)) {
      const admins = await bot.getChatAdministrators(chatId);
      const isAdmin = admins.some(admin => admin.user.id === msg.from.id);

      if (!isAdmin) {
        try {
          await bot.deleteMessage(chatId, msg.message_id);
        } catch (e) {
          console.error('❌ Gagal hapus pesan:', e.message);
        }
      }
    }
  }
});

bot.onText(/\/hubungiowner/, async (msg) => {
  const chatId = msg.chat.id;
  const user = msg.from;
  let targetUser = msg.from;
  
  if (maintenanceCheck(bot, msg)) return;
  
  const username = targetUser.username
      ? `@${escapeHtml(targetUser.username)}`
      : "-";
  if (chatSessions[user.id]?.active) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Kamu sudah dalam sesi dengan owner.\nKetik /selesai untuk mengakhiri sesi ini.</blockquote>`, {
    parse_mode: "HTML"
    });
  }

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Terima", callback_data: `accept_${user.id}` },
          { text: "❌ Tolak", callback_data: `reject_${user.id}` }
        ]
      ]
    }
  };

  await bot.sendMessage(
    7135669179,
    `<blockquote>📞 Ada user ingin menghubungi anda\n\n👤 Nama: ${username} ${user.last_name || ""}\n🆔 ID: <code>${user.id}</code>\n\nIngin menerima?</blockquote>`,
    { parse_mode: "HTML", ...opts }
  );

  await bot.sendMessage(chatId, `<blockquote>⏳ Harap Tunggu respon dari owner...</blockquote>`, {
  parse_mode: "HTML"
  });
});

bot.on("callback_query", async (query) => {
  const data = query.data;
  const fromId = query.from.id;
  
  if (!data.startsWith("accept_") && !data.startsWith("reject_")) return;

  if (fromId !== 7135669179) {
    return bot.answerCallbackQuery(query.id, { text: "❌ Hanya owner yang bisa melakukan ini." });
  }

  const userId = parseInt(data.split("_")[1]);

  if (data.startsWith("accept_")) {
    chatSessions[userId] = { active: true, ownerId: 7135669179 };

    await bot.answerCallbackQuery(query.id, { text: "✅ Permintaan diterima" });
    await new Promise(r => setTimeout(r, 200));

    await bot.sendMessage(userId,
      `<blockquote>✅ Owner menerima permintaanmu!\nSekarang kamu bisa mengirim pesan langsung ke owner.\nKetik /selesai untuk mengakhiri sesi ini.</blockquote>`, {
      parse_mode: "HTML"
    });

    await bot.sendMessage(7135669179,
      `<blockquote>💬 Kamu kini terhubung dengan user ${userId}. Semua pesan akan diteruskan.</blockquote>`,
      { parse_mode: "HTML" }
    );
  } else if (data.startsWith("reject_")) {
    await bot.answerCallbackQuery(query.id, { text: "❌ Permintaan ditolak" });
    await bot.sendMessage(userId, `<blockquote>🚫 Owner sedang sibuk dan tidak dapat dihubungi saat ini.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.on("message", async (msg) => {
  const userId = msg.from.id;
  const chatId = msg.chat.id;

  if (msg.text === "/selesai" && chatSessions[userId]?.active) {
    delete chatSessions[userId];
    await bot.sendMessage(chatId, `<blockquote>✅ Sesi dengan owner telah diakhiri.</blockquote>`, {
    parse_mode: "HTML"
    });
    await bot.sendMessage(7135669179, `<blockquote>🔚 Sesi dengan user [${userId}] telah diakhiri.</blockquote>`, {
    parse_mode: "HTML"
    });
    return;
  }

  if (msg.text === "/selesai" && userId === 7135669179) {
    const targetId = Object.keys(chatSessions).find(id => chatSessions[id].ownerId === 7135669179);
    if (targetId) {
      delete chatSessions[targetId];
      await bot.sendMessage(7135669179, `<blockquote>✅ Kamu mengakhiri sesi dengan user.</blockquote>`, {
      parse_mode: "HTML"
      });
      await bot.sendMessage(targetId, `<blockquote>🔚 Owner mengakhiri sesi chat.</blockquote>`, {
      parse_mode: "HTML"
      });
    }
    return;
  }

  if (chatSessions[userId]?.active) {
    try {
      await bot.forwardMessage(7135669179, chatId, msg.message_id);
      return;
    } catch (err) {
      console.error("❌ Gagal meneruskan pesan ke owner:", err.message);
      await bot.sendMessage(
        7135669179,
        `<blockquote>📩 Dari ${msg.from.first_name} (ID: ${userId})\n\n${msg.text || "[non-text message]"}</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  }
  
  const targetUserId = Object.keys(chatSessions).find(id => chatSessions[id].ownerId === userId);
  if (targetUserId && chatSessions[targetUserId]?.active && userId === 7135669179 && msg.text) {
    await bot.sendMessage(targetUserId, `<blockquote>👑 Owner: ${msg.text}</blockquote>`, {
    parse_mode: "HTML"
    });
    return;
  }

  if (chatSessions[userId]?.active && msg.text?.startsWith("/")) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu sedang dalam sesi chat dengan owner. Ketik /selesai untuk keluar.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/bypass$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const reply = msg.reply_to_message;
  
  if (maintenanceCheck(bot, msg)) return;
  
  const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }

  if (!reply || !reply.document) {
    return bot.sendMessage(chatId, '❗ Reply ke file yang mau di bypass filenya, lalu kirim /bypass');
  }

  const doc = reply.document;
  const filename = doc.file_name || 'file.txt';

  if (!extAllowed(filename)) {
    return bot.sendMessage(chatId, `❗ File *${filename}* tidak didukung. Hanya file teks yang boleh.`, { parse_mode: 'Markdown' });
  }

  try {
    await bot.sendChatAction(chatId, 'typing');

    const fileLink = await bot.getFileLink(doc.file_id);
    const res = await axios.get(fileLink, { responseType: 'arraybuffer' });
    const originalText = res.data.toString('utf8');

    const newContent = SYSTEM_HEADER + originalText;

    const tmpDir = './tmp';
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
    const tmpPath = path.join(tmpDir, `${Date.now()}_${filename}`);
    fs.writeFileSync(tmpPath, newContent, 'utf8');

    await bot.sendDocument(chatId, tmpPath, {
      caption: `✅ Bypass system berhasil ditambahkan ke file *${filename}*`,
      parse_mode: 'Markdown'
    });

    fs.unlinkSync(tmpPath);
  } catch (err) {
    console.error('ERR /system:', err);
    bot.sendMessage(chatId, '⚠️ Gagal memproses file. Pastikan file berupa teks dan tidak terlalu besar.');
  }
});

bot.onText(/^\/filter (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const args = match[1].trim().split(' ');
  
  if (maintenanceCheck(bot, msg)) return;

  if (args.length < 2) {
    return bot.sendMessage(chatId, '❌ Format salah!\nGunakan: /filter <kata> <respon>');
  }

  const keyword = args.shift().toLowerCase();
  const response = args.join(' ');

  if (!filters[chatId]) filters[chatId] = {};

  filters[chatId][keyword] = response;

  fs.writeFileSync(filterFile, JSON.stringify(filters, null, 2));

  bot.sendMessage(chatId, `✅ Filter ditambahkan!\n\nKata: *${keyword}*\nRespon: *${response}*`, {
    parse_mode: 'Markdown'
  });
});

bot.on('message', (msg) => {
  if (!msg.text) return;
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (!filters[chatId]) return;

  for (const keyword in filters[chatId]) {
    if (text.includes(keyword)) {
      return bot.sendMessage(chatId, filters[chatId][keyword], {
        reply_to_message_id: msg.message_id
      });
    }
  }
});

bot.onText(/\/pw (.+)/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const password = (match[1] || '').trim();
  const reply = msg.reply_to_message;
  
  if (maintenanceCheck(bot, msg)) return;

  if (!password) {
    return bot.sendMessage(chatId, "⚠️ Contoh: /pw 12345 (reply ke file .js)");
  }

  if (!reply || !reply.document) {
    return bot.sendMessage(chatId, "📂 Reply command ini ke file .js kamu biar otomatis diproteksi password.");
  }

  try {
    const fileId = reply.document.file_id;
    const origFileName = reply.document.file_name || 'script.js';
    const fileUrl = await bot.getFileLink(fileId);

    const res = await axios.get(fileUrl, { responseType: 'arraybuffer' });
    const userScript = Buffer.from(res.data).toString('utf8');

    const ext = path.extname(origFileName) || '.js';
    const base = path.basename(origFileName, ext);
    const outName = `${base}.protected${ext}`;
    const tmpPath = path.join(os.tmpdir(), `${Date.now()}-${outName}`);

    const pwLiteral = JSON.stringify(password);

    const protectedScript = `const readline = require('readline');
const PW = ${pwLiteral};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
console.log('🔐 MASUKAN PASSWORD NYA:');

rl.question('', (inputPassword) => {
  if (inputPassword !== PW) {
    console.log('❌ PASSWORD SALAH');
    rl.close();
    process.exit(1);
  }

  console.log('✅ PASSWORD BENAR');
  console.log('WELCOME TO THE SCRIPT\\n');
  rl.close();
  runScript();
});

function runScript() {
${userScript}
}
`;

    fs.writeFileSync(tmpPath, protectedScript, 'utf8');

    await bot.sendDocument(chatId, tmpPath, {
      caption: `✅ Script berhasil diproteksi!\n🔒 Password: ${password}`
    });

    try { fs.unlinkSync(tmpPath); } catch {}

  } catch (err) {
    console.error(err);
    bot.sendMessage(chatId, `❌ Gagal memproses file:\n${err.message}`);
  }
});

bot.onText(/^\/rasukbot (.+)/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const input = match[1];

  if (maintenanceCheck(bot, msg)) return;

  if (!input.includes("|")) {
    return bot.sendMessage(chatId,
      "📩 Format salah!\n\nGunakan format:\n" +
      "<code>/message token|id|pesan|jumlah</code>\n\n" +
      "Contoh:\n<code>/message 123456:ABCDEF|987654321|Halo bro|5</code>",
      { parse_mode: "HTML" }
    );
  }

  try {
    const [token, targetId, pesan, jumlahStr] = input.split("|").map(x => x.trim());
    const jumlah = parseInt(jumlahStr);

    if (!token || !targetId || !pesan || isNaN(jumlah)) {
      return bot.sendMessage(chatId,
        "❌ Format salah!\nGunakan: <code>/message token|id|pesan|jumlah</code>",
        { parse_mode: "HTML" }
      );
    }

    await bot.sendMessage(chatId, "🚀 Mengirim pesan...");
    for (let i = 1; i <= jumlah; i++) {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: targetId,
        text: pesan
      });
    }

    bot.sendMessage(chatId, `✅ Berhasil mengirim ${jumlah} pesan ke ID <code>${targetId}</code>`, {
      parse_mode: "HTML"
    });

  } catch (err) {
    bot.sendMessage(chatId, `❌ Gagal mengirim pesan:\n<code>${err.message}</code>`, {
      parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/enchard$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;

  const member = await bot.getChatMember(CHANNEL_ID, userId);
  if (member.status === "left" || member.status === "kicked") {
    return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
    });
  }

  if (!msg.reply_to_message || !msg.reply_to_message.document) {
    return bot.sendMessage(chatId, `<blockquote>⚠️ Balas file .js dengan perintah /enchard untuk mengenkripsi.</blockquote>`, {
      parse_mode: "HTML"
    });
  }

  const file = msg.reply_to_message.document;
  const fileName = file.file_name || "unknown.js";

  if (!fileName.toLowerCase().endsWith(".js")) {
    return bot.sendMessage(chatId, `<blockquote>❌ File harus berformat .js</blockquote>`, { parse_mode: "HTML" });
  }


  const db = JSON.parse(fs.readFileSync("./database/users.json", "utf8"));
  const user = db[userId] || {};
  if (!user.isPremium || !isPremiumActive(user)) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Fitur ini hanya untuk pengguna Premium aktif.</blockquote>`, { parse_mode: "HTML" });
  }


  const loadingMsg = await bot.sendMessage(chatId, `<blockquote>🔒 Sedang mengenkripsi file ${fileName}...</blockquote>`, { parse_mode: "HTML" });

  try {

    const fileLink = await bot.getFileLink(file.file_id);
    const response = await axios.get(fileLink, { responseType: "text", timeout: 20000 });

    const encrypted = encryptJS(response.data);

    const outputName = fileName.replace(".js", "_enc.js");
    const outputPath = path.join(__dirname, outputName);
    fs.writeFileSync(outputPath, encrypted);

    await bot.deleteMessage(chatId, loadingMsg.message_id);
    await bot.sendDocument(chatId, outputPath, {}, { filename: outputName, contentType: "application/javascript" });

    fs.unlinkSync(outputPath);

  } catch (err) {
    console.error("/enchard error:", err.message);
    await bot.sendMessage(chatId, `<blockquote>❌ Gagal mengenkripsi file:\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
  } finally {
    try { await bot.deleteMessage(chatId, loadingMsg.message_id); } catch (_) {}
  }
});

bot.onText(/^\/filebackup$/i, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (userId !== 7135669179) {
    return bot.sendMessage(chatId, `<blockquote>🚫 Hanya owner yang bisa menjalankan backup!</blockquote>`, {
    parse_mode: "HTML"
  });
  }

  const backupName = `BACKUP By HanzPiw${Date.now()}.zip`;
  const outputPath = path.join(__dirname, backupName);
  const output = fs.createWriteStream(outputPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", async () => {
    await bot.sendDocument(chatId, outputPath, { caption: "📦 Backup selesai!" });
    fs.unlinkSync(outputPath);
  });

  archive.on("error", (err) => {
    bot.sendMessage(chatId, `❌ Gagal backup: ${err.message}`);
  });

  archive.pipe(output);

  const items = fs.readdirSync(__dirname);
  for (const item of items) {
    if (["node_modules"].includes(item)) continue;
    const fullPath = path.join(__dirname, item);
    if (fs.lstatSync(fullPath).isDirectory()) {
      archive.directory(fullPath, item);
    } else {
      archive.file(fullPath, { name: item });
    }
  }

  archive.finalize();
  bot.sendMessage(chatId, `<blockquote>🗂️ Membuat backup, mohon tunggu...</blockquote>`, {
  parse_mode: "HTML"
  });
});

bot.onText(/^\/cekidch$/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<blockquote>⚠️ Contoh penggunaan:\n\n<code>/cekidch [@usernamechannel]</code></blockquote>`, {
    parse_mode: "HTML"
  });
});

bot.onText(/^\/cekidch\s+(@[A-Za-z0-9_]+)/i, async (msg, match) => {
  const chatId = msg.chat.id;
  const username = match[1];

  try {

    const chat = await bot.getChat(username);

    await bot.sendMessage(chatId, `<b>📡 Info Channel</b>\n\n🆔 ID: <code>${chat.id}</code>\n🏷️ Username: ${username}`, {
      parse_mode: "HTML"
    });

  } catch (err) {

    console.error("Gagal ambil ID channel:", err);
    await bot.sendMessage(chatId, `❌ Gagal mendapatkan ID channel untuk ${username}\n\n<blockquote>${err.description || err.message}</blockquote>`, {
      parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cweb(?:\s+(.+))?$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const webName = match[1] ? match[1].trim().toLowerCase().replace(/[^a-z0-9-_]/g, "") : null;

  if (!webName) {
    return bot.sendMessage(
      chatId,
      `<blockquote>⚠️ Format salah!\nGunakan:\n/cweb namaweb (tanpa spasi)</blockquote>`, { 
      parse_mode: "HTML" 
      });
  }

  if (msg.reply_to_message && msg.reply_to_message.document) {
    return handleDeployFile(chatId, webName, msg.reply_to_message.document);
  }

  pendingDeploy[chatId] = { webName };
  return bot.sendMessage(
    chatId,
    `<blockquote>📂 Oke, sekarang kirim file .zip atau .html untuk deploy <b>${webName}</b></blockquote>`, {
    parse_mode: "HTML" 
    });
});

bot.on("document", async (msg) => {
  const chatId = msg.chat.id;
  const state = pendingDeploy[chatId];
  if (!state) return; 

  const { webName } = state;
  delete pendingDeploy[chatId];

  return handleDeployFile(chatId, webName, msg.document);
});

async function handleDeployFile(chatId, webName, document) {
  try {
    const fileId = document.file_id;
    const fileLink = await bot.getFileLink(fileId);

    const headers = {
      Authorization: `Bearer X2y02Pi8LWTmMyxffriXNk4L`,
      "Content-Type": "application/json",
    };

    let finalProjectName = webName;
    let projectExists = false;

    const checkProject = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
      headers,
    });

    if (checkProject.ok) {
      finalProjectName = `${webName}-angkasa`;
      const checkNewName = await fetch(`https://api.vercel.com/v9/projects/${finalProjectName}`, {
        headers,
      });
      if (checkNewName.ok) {
        return bot.sendMessage(
          chatId,
          `<blockquote>❌ Nama project <b>${webName}</b> dan <b>${finalProjectName}</b> sudah ada di akun kamu.
Silakan hapus project lama di Vercel atau gunakan nama lain.</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
      projectExists = true;
    }
    
    const res = await fetch(fileLink);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filesToUpload = [];

    if (document.mime_type.includes("zip")) {
      const directory = await unzipper.Open.buffer(buffer);
      for (const file of directory.files) {
        if (file.type === "File") {
          const content = await file.buffer();
          filesToUpload.push({
            file: file.path.replace(/^\/+/g, ""),
            data: content.toString("base64"),
            encoding: "base64",
          });
        }
      }

      if (!filesToUpload.some((x) => x.file.toLowerCase().endsWith("index.html"))) {
        return bot.sendMessage(
          chatId,
          `<blockquote>❌ index.html tidak ditemukan di dalam ZIP</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    } 
    else if (
      (document.mime_type && document.mime_type.includes("html")) ||
      (document.file_name && document.file_name.toLowerCase().endsWith(".html"))
    ) {
      filesToUpload.push({
        file: "index.html",
        data: buffer.toString("base64"),
        encoding: "base64",
      });
    } 
    else {
      return bot.sendMessage(
        chatId,
        `<blockquote>❌ File tidak dikenali. Kirim ZIP atau file .html</blockquote>`,
        { parse_mode: "HTML" }
      );
    }

    if (!projectExists) {
      const createRes = await fetch("https://api.vercel.com/v9/projects", {
        method: "POST",
        headers,
        body: JSON.stringify({ name: finalProjectName }),
      });
      if (!createRes.ok) {
        throw new Error("Gagal membuat proyek");
      }
    }

    const deployRes = await fetch("https://api.vercel.com/v13/deployments", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: finalProjectName,
        project: finalProjectName,
        files: filesToUpload,
        projectSettings: { framework: null },
      }),
    });

    const deployData = await deployRes.json().catch(() => null);
    if (!deployData || !deployData.url) {
      console.log("Deploy Error:", deployData);
      return bot.sendMessage(
        chatId,
        `<blockquote>❌ Deploy gagal:\n${JSON.stringify(deployData)}</blockquote>`,
        { parse_mode: "HTML" }
      );
    }

    const cleanUrl = `https://${finalProjectName}.vercel.app`;

    return bot.sendMessage(chatId, `<blockquote>✅ WEBSITE URL: ${cleanUrl}</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🌐 Kunjungi Web", url: cleanUrl }],
          [{ text: "📋 Salin URL", url: cleanUrl }],
        ],
      },
    });
  } catch (err) {
    console.error(err);
    return bot.sendMessage(
      chatId,
      `<blockquote>❌ Terjadi error saat deploy</blockquote>`,
      { parse_mode: "HTML" }
    );
  }
}

bot.on("callback_query", async (query) => {
  if (query.data.startsWith("copy:")) {
    const url = query.data.split(":")[1];
    await bot.answerCallbackQuery(query.id, { text: `Disalin: ${url}`, show_alert: true });
  }
});

bot.onText(/^\/delweb\s+(.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const projectName = match[1].trim();

  if (!projectName) {
    return bot.sendMessage(
      chatId,
      `<blockquote>⚠️ Format salah!\nGunakan:\n/delweb namaproject</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  try {
    const headers = {
      Authorization: `Bearer X2y02Pi8LWTmMyxffriXNk4L`,
      "Content-Type": "application/json",
    };

    const checkRes = await fetch(`https://api.vercel.com/v9/projects/${projectName}`, {
      headers,
    });

    if (!checkRes.ok) {
      return bot.sendMessage(
        chatId,
        `<blockquote>❌ Proyek <b>${projectName}</b> tidak ditemukan di akun kamu.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }

    const deleteRes = await fetch(`https://api.vercel.com/v9/projects/${projectName}`, {
      method: "DELETE",
      headers,
    });

    if (deleteRes.ok) {
      return bot.sendMessage(
        chatId,
        `<blockquote>✅ Proyek <b>${projectName}</b> berhasil dihapus dari Vercel.</blockquote>`,
        { parse_mode: "HTML" }
      );
    } else {
      throw new Error(`Delete API error: ${deleteRes.status}`);
    }
  } catch (err) {
    console.error(err);
    return bot.sendMessage(
      chatId,
      `<blockquote>❌ Gagal menghapus proyek <b>${projectName}</b>.</blockquote>`,
      { parse_mode: "HTML" }
    );
  }
});
 
bot.onText(/^\/listweb$/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const headers = {
      Authorization: `Bearer X2y02Pi8LWTmMyxffriXNk4L`,
      "Content-Type": "application/json",
    };

    const response = await fetch("https://api.vercel.com/v9/projects", {
      headers,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const projects = data.projects;

    if (!projects || projects.length === 0) {
      return bot.sendMessage(
        chatId,
        `<blockquote>❌ Tidak ada proyek ditemukan di akun kamu.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }

    let projectList = "📋 <b>Daftar Proyek:</b>\n\n";
    projects.forEach((project) => {
      const url = `https://${project.name}.vercel.app`;
      projectList += `• <b>${project.name}</b>\n  └ <code>${url}</code>\n\n`;
    });

    return bot.sendMessage(chatId, `<blockquote>${projectList.trim()}</blockquote>`, {
      parse_mode: "HTML",
    });
  } catch (err) {
    console.error(err);
    return bot.sendMessage(
      chatId,
      `<blockquote>❌ Gagal mengambil daftar proyek.</blockquote>`,
      { parse_mode: "HTML" }
    );
  }
});

bot.onText(/^\/cmtunban$/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    await bot.sendMessage(chatId, `<blockquote>⏳ Pilih bahasa untuk pesan unban:</blockquote>`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🇮🇩 Indonesia", callback_data: "lang_indo" },
            { text: "🇲🇾 Malaysia", callback_data: "lang_malaysia" },
          ],
          [
            { text: "🇬🇧 English", callback_data: "lang_english" },
            { text: "🇸🇦 Arab", callback_data: "lang_arab" },
          ],
          [
            { text: "🇻🇳 Vietnam", callback_data: "lang_vietnam" },
            { text: "🇹🇭 Thailand", callback_data: "lang_thailand" },
          ],
        ],
      },
    });
  } catch (err) {
    console.error("❌ Error:", err);
  }
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data.startsWith("lang_")) {
    let promptText = "";

    if (data === "lang_indo") 
      promptText = `Buatkan pesan permohonan unban WhatsApp yang sopan, bijaksana, dan profesional dalam bahasa Indonesia. Sertakan salam pembuka, isi pesan yang sopan, permohonan maaf jika perlu, dan penutup. TULIS HANYA teks pesannya, TANPA tips, instruksi, atau catatan tambahan.`;
    else if (data === "lang_malaysia") 
      promptText = `Sila buat 1 mesej permohonan buka sekatan WhatsApp dengan sopan dan profesional dalam bahasa Malaysia. Sertakan salam pembuka, isi mesej yang sopan, permohonan maaf jika perlu, dan penutup. TULIS HANYA teks mesej, TANPA tips atau nota tambahan.`;
    else if (data === "lang_english") 
      promptText = `Write a polite and professional WhatsApp unban request message in English. Include greeting, body of the message, apology if needed, and closing signature. ONLY provide the message text. DO NOT include tips, instructions, or extra notes.`;
    else if (data === "lang_arab") 
      promptText = `قم بإنشاء رسالة طلب رفع الحظر على WhatsApp بأسلوب مهذب ومحترف باللغة العربية. اشمل التحية، نص الرسالة، الاعتذار إذا لزم الأمر، والخاتمة. اكتب النص فقط، بدون أي تعليمات أو ملاحظات إضافية.`;
    else if (data === "lang_vietnam") 
      promptText = `Tạo một tin nhắn yêu cầu mở khóa WhatsApp lịch sự và chuyên nghiệp bằng tiếng Việt. Bao gồm lời chào, nội dung tin nhắn, lời xin lỗi nếu cần, và phần kết. CHỈ viết nội dung tin nhắn, KHÔNG kèm hướng dẫn hay chú thích.`; 
    else if (data === "lang_thailand") 
      promptText = `สร้างข้อความขอปลดบล็อก WhatsApp อย่างสุภาพและเป็นมืออาชีพเป็นภาษาไทย รวมถึงคำทักทาย เนื้อหาข้อความ ขอโทษหากจำเป็น และส่วนปิดท้าย. เขียนเฉพาะข้อความเท่านั้น, ไม่ต้องใส่คำแนะนำหรือบันทึกเพิ่มเติม.`;

    try {
      await bot.editMessageText(`<blockquote>⏳ Sedang membuat pesan unban...</blockquote>`, {
        chat_id: chatId,
        message_id: query.message.message_id,
        parse_mode: "HTML",
      });

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyCgBitS1kfNscc_5XmQyGAUQLA6pP7pUm8",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: promptText }] }] }),
        }
      );

      const raw = await response.text();
      const dataAI = JSON.parse(raw);
      const aiText = dataAI.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Tidak ada respon dari AI.";
      const waUrl = `https://wa.me/?text=${encodeURIComponent(aiText)}`;

      await bot.sendMessage(chatId,
        `<blockquote><b>🔓 Pesan Unban:</b>\n\n${aiText}</blockquote>`,
        { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "💬 Kirim via WhatsApp", url: waUrl }]] } }
      );
    } catch (err) {
      console.error("❌ Error:", err);
      await bot.sendMessage(chatId, `<blockquote>❌ Gagal membuat pesan unban.\n\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
    }

    await bot.answerCallbackQuery(query.id);
    return;
  }
});

//===================== COMMAND MENU MORE =====================

bot.onText(/^\/cekkhodam(?: (.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const nama = (match[1] || '').trim();
  
  if (maintenanceCheck(bot, msg)) return;

  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    if (member.status === 'left' || member.status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "📢 Channel", url: CHANNEL_LINK }]] }
      });
    }

    if (!nama) {
      return bot.sendMessage(chatId, `<blockquote>🤓 Namanya mana anjeng? ketik /cekkhodam nama</blockquote>`, { 
      parse_mode: 'HTML' 
      });
    }

    if (!cekKhodam.length) {
      return bot.sendMessage(chatId, `⚠️ List khodam kosong / gagal dimuat dari Database.`, {
      parse_mode: "HTML"
      });
    }

    const hasil = `<blockquote>𖤐 ʜᴀsɪʟ ᴄᴇᴋ ᴋʜᴏᴅᴀᴍ:
╭───────────────────────
├ • ɴᴀᴍᴀ : ${nama}
├ • ᴋʜᴏᴅᴀᴍɴʏᴀ : ${pickRandom(cekKhodam)}
├ • ɴɢᴇʀɪ ʙᴇᴛ ᴊɪʀ ᴋʜᴏᴅᴀᴍɴʏᴀ
╰────────────────────────
ɴᴇxᴛ ᴄᴇᴋ ᴋʜᴏᴅᴀᴍɴʏᴀ sɪᴀᴘᴀ ʟᴀɢɪ.
</blockquote>`;

    bot.sendMessage(chatId, hasil, { parse_mode: 'HTML' });
  } catch (error) {
    console.error("❌ Error cek khodam:", error);
    bot.sendMessage(chatId, `<blockquote>⚠️ Terjadi kesalahan saat cek khodam. Coba lagi nanti.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cektampan$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }

  const nilai = [10, 20, 30, 35, 45, 50, 54, 68, 73, 78, 83, 90, 94, 100][Math.floor(Math.random() * 14)];
  const teks = `<blockquote>📊 HASIL TES KETAMPANAN
👤 Nama: ${msg.from.first_name}
💯 Nilai: ${nilai}%
🗣️ Komentar: ${komentarTampan(nilai)}
</blockquote>`;
  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekcantik$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = [10, 20, 30, 35, 45, 50, 54, 68, 73, 78, 83, 90, 94, 100][Math.floor(Math.random() * 14)];
  const teks = `<blockquote>📊 HASIL TES KECANTIKAN
👤 Nama: ${msg.from.first_name}
💯 Nilai: ${nilai}%
🗣️ Komentar: ${komentarCantik(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekkaya$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100][Math.floor(Math.random() * 10)];
  const teks = `<blockquote>💵 HASIL TES KEKAYAAN
👤 Nama: ${msg.from.first_name}
💰 Nilai: ${nilai}%
🗣️ Komentar: ${komentarKaya(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekmiskin$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100][Math.floor(Math.random() * 10)];
  const teks = `<blockquote>📉 HASIL TES KEMISKINAN
👤 Nama: ${msg.from.first_name}
📉 Nilai: ${nilai}%
🗣️ Komentar: ${komentarMiskin(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekjanda$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = Math.floor(Math.random() * 101);
  const teks = `<blockquote>👠 HASIL TES KEJANDAAN
👤 Nama: ${msg.from.first_name}
📊 Nilai: ${nilai}%
🗣️ Komentar: ${komentarJanda(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekpacar$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = Math.floor(Math.random() * 101);
  const teks = `<blockquote>💕 HASIL TES KEPACARAN
👤 Nama: ${msg.from.first_name}
📊 Nilai: ${nilai}%
🗣️ Komentar: ${komentarPacar(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/ceksabar$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = Math.floor(Math.random() * 101);
  const teks = `<blockquote>💕 HASIL TES KESABARAN
👤 Nama: ${msg.from.first_name}
📊 Nilai: ${nilai}%
🗣️ Komentar: ${komentarSabar(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cektolol$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = Math.floor(Math.random() * 101);
  const teks = `<blockquote>💕 HASIL TES KETOLOLAN
👤 Nama: ${msg.from.first_name}
📊 Nilai: ${nilai}%
🗣️ Komentar: ${komentarTolol(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

bot.onText(/^\/cekmati$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (maintenanceCheck(bot, msg)) return;
  
  try {
    const member = await bot.getChatMember(CHANNEL_ID, userId);
    const status = member.status;

    if (status === 'left' || status === 'kicked') {
      return bot.sendMessage(chatId, `<blockquote>🚫 Kamu harus join Channel dulu supaya bisa pakai fitur ini.</blockquote>`, {
      parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[
            { text: "Channel", url: CHANNEL_LINK }
          ]]
        }
      });
    }
  const nilai = Math.floor(Math.random() * 101);
  const teks = `<blockquote>💕 HASIL TES KETOLOLAN
👤 Nama: ${msg.from.first_name}
📊 Nilai: ${nilai}%
🗣️ Komentar: ${komentarMati(nilai)}
</blockquote>`.trim();

  bot.sendMessage(chatId, teks, { parse_mode: 'HTML' });
  } catch (error) {
    bot.sendMessage(chatId, `<blockquote>❌ Terjadi kesalahan saat pengecekan status keanggotaan grup/channel.</blockquote>`, {
    parse_mode: "HTML"
    });
  }
});

//===================== HANDLER EVENT =====================

function formatTime(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  const h = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const s = date.getSeconds().toString().padStart(2, '0');
  return `${d}/${m}/${y}, ${h}.${min}.${s}`;
}

function getTotalRegisteredUsers() {
  return Object.values(users).filter(u => u.hasUsedCommand).length;
}

bot.on("message", (msg) => {
  if (msg.chat.type !== "private") return;

  const userId = msg.from.id;
  const name = msg.from.first_name || "Tidak diketahui";
  const username = msg.from.username ? `@${msg.from.username}` : "Tidak ada";
  const text = msg.text;

  if (!users[userId]) {
    users[userId] = {
      id: userId,
      name,
      xp: 0,
      level: 1,
      role: "Pemula",
      hasUsedCommand: false
    };
  }

  const user = users[userId];
  const isCommand = text && text.startsWith("/");

  if (isCommand) {
    if (!user.hasUsedCommand) {

      user.hasUsedCommand = true;
      saveDB();

      const totalUsers = getTotalRegisteredUsers();

      const waktu = moment().tz('Asia/Jakarta').format('DD MMMM YYYY HH:mm:ss');

      const displayName = `<b>${name}</b>`;

      const notif = `<blockquote>𝙰𝙳𝙰 𝚄𝚂𝙴𝚁 𝙱𝙰𝚁𝚄 𝙽𝙸𝙷!
━━━━━━━━━━━━━━━━━━━
👤 𝙽𝙰𝙼𝙰: ${displayName}
🪪 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴: ${username}
🆔 𝚄𝚂𝙴𝚁 𝙸𝙳: <code>${userId}</code>
⏰ 𝚆𝙰𝙺𝚃𝚄: ${waktu}
━━━━━━━━━━━━━━━━━━━
📊 Total Pengguna: ${totalUsers} user
━━━━━━━━━━━━━━━━━━━
🚀 Pantau pertumbuhan komunitas premiummu secara real-time!</blockquote>`;

      bot.sendMessage(7135669179, notif, { parse_mode: "HTML" });
    }
    return;
  }

  user.xp += 10;
  const need = xpNeeded(user.level);
  if (user.xp >= need) {
    user.xp -= need;
    user.level++;
    user.role = getRole(user.level);
    bot.sendMessage(
      msg.chat.id,
      `<blockquote>🎉 ${name} naik ke level ${user.level}!\nSekarang role kamu: ${user.role}</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  saveDB();
});

bot.on('new_chat_members', async (msg) => {
  const newMembers = msg.new_chat_members;
  if (!newMembers || !Array.isArray(newMembers)) return;

  if (msg.chat.type !== "private") return;

  if (!bot.botInfo) bot.botInfo = await bot.getMe();

  const botItself = newMembers.find(m => m.id === bot.botInfo.id);
  if (!botItself) return;

  const adder = msg.from;
  if (!adder) return;

  const adderId = adder.id;
  const adderName = adder.first_name || "User";
  const bonusExtra = 20;

  if (!users[adderId]) users[adderId] = { extraLimit: 0 };
  users[adderId].extraLimit = (users[adderId].extraLimit || 0) + bonusExtra;
  saveUsers();

  try {
    await bot.sendMessage(adderId, `<blockquote>🎉 Terima kasih sudah menambahkan bot ke grup!\n\n🎁 Kamu dapat bonus +${bonusExtra} extra limit.\n📊 Total extra limit kamu sekarang: ${users[adderId].extraLimit}</blockquote>`, {
      parse_mode: "HTML"
    });
  } catch {
    console.log(`⚠️ Gagal kirim pesan ke ${adderId}`);
  }

  console.log(`✅ ${adderName} (${adderId}) mendapat +${bonusExtra} extraLimit karena menambahkan bot ke grup ${msg.chat.title}.`);
});

//====================== CONSOLE AWAL CONNET BOT =============================
(async () => {
  await validateToken();
  await getChannelId();

  bot.on('message', (msg) => {
    const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    const nama = msg.from.first_name || 'Tanpa Nama';
    const username = msg.from.username ? `@${msg.from.username}` : '(tidak ada username)';
    const isiPesan = msg.text || 'Non-text message';
    const chatType = msg.chat.type;
    
    console.log(chalk.green(`┏━━━━━━━━━━━━━━━━━━━━`));
    console.log(chalk.blue(`┃𝗝𝗮𝗺 : [${waktu}]`));
    console.log(chalk.red(`┃𝗧𝘆𝗽𝗲 𝗖𝗵𝗮𝘁 : [${chatType}]`));
    console.log(chalk.grey(`┃𝗡𝗮𝗺𝗮 𝗨𝘀𝗲𝗿 : ${nama}`));
    console.log(chalk.red(`┃𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲 : ${username}`));
    console.log(chalk.blue(`┃𝗣𝗲𝘀𝗮𝗻 𝗨𝘀𝗲𝗿 : ${isiPesan}`));
    console.log(chalk.green(`┗━━━━━━━━━━━━━━━━━━━━`));
  });

  console.clear();
  console.log(chalk.blue(`⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⢿⡶⠶⣶⣶⣴⣯⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣏⣭⣭⣽⣿⣻⣿⣿⣿⣿⣿⣿⣿`));
  console.log(chalk.cyan.bold("==========================================="));
  console.log(chalk.greenBright.bold(`🤖 ${NAMA_BOT} 𝗩${VERSION}`));
  console.log(chalk.yellow(`📅 ${moment().tz('Asia/Jakarta').format('dddd, DD MMMM YYYY HH:mm:ss')}`));
  console.log(chalk.blueBright(`🧠 Developer: ${USERNAME_OWNER}`));
  console.log(chalk.magenta(`💻 Platform: ${os.type()} ${os.release()}`));
  console.log(chalk.white(`🧩 Node.js version: ${process.version}`));
  console.log(chalk.greenBright(`🚀 Status: Bot berhasil dijalankan dan sedang polling...`));
  console.log(chalk.cyan.bold("==========================================="));

})();