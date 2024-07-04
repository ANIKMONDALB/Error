//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "918617340627";
global.sudo = process.env.SUDO || "918617340627";
global.owner = process.env.OWNER_NUMBER || "918617340627";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "918617340627";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtQMDRibHJBamNPa2hsZnhNdXV0Yk83ZXpTQUNQYXhFZWxSb01jUmwyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHZBOWx5U3Y0V3BKUzFlZmFjZHd5dlZLdzY5OHBRSUFEVkpjT01jczhoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUHF5ai93Z2RYNHVVZURaNTY3NU1sS3RhaENUMURiTThUWGtTYzFoYkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUzQzYUswZUY1Wjh6VHhlUFU1blh0MXZyZjBoV0RqWjMwSURuSU41aW00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGLzVQaFVZSUl0dDJKMTdvV0l4VXZVWnc5ampsVkdMUXZRWkU0Zk5NbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhEYjhqNzAzdFFlTHpNRjYzQkNvRTl1MHVjOGlKZ05IVjN1MGpWcUc0aEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1ZODlCbWJJdEY5OVBZUjJtWnVjMDFxNHd3K0ljMmxyQ1ozZ2Nra25rZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFZxZGc3aUUzVjk5RUFpaG9taW9FekluMDJzeHVnU1d3ajQyMGlJUlRGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZjOTM1cEN4ZitpM01MaHVhOXhmcXQxMnVZNitKS1JFQit0R0hQWVUvM0dOQ0Y4ZVk1VkNEWGJRdTBuVTVZZTNwaTdlekRCcFNxUWRYVFNLU2dRUWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJMZVhnbGowbVgreFZGOXpOdzBYT1lLeTZMTkwzd2ExODRHT0FremdMZHJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6ME45QmRibFNJV1VSRGFsalJlN3h3IiwicGhvbmVJZCI6IjI4ZWZmODExLTE5MjMtNDczYS05YTQ1LWNiNDQ1MDQ1YWZmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SEVQZXVrWUVnbXFmang1UTZDZU9rdlEyaDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnd4Zkk4ejR5VC9yVGpPOUxYbm1odUZzN25VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNWQlFHSlFEIiwibWUiOnsiaWQiOiI5MTg2MTczNDA2Mjc6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4LySwrZBwrYgwrZuwrYgwrYhwrYgwrZLwrYgwrbCtiBeIMKrwrsgfiAu4LyS6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKT0h3YTRFRUsrMm1yUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLWksvSzkxalNxUlNaSm9STmpmOHdPQlJBM2dIanR1eHhsZEdGektTeG5JPSIsImFjY291bnRTaWduYXR1cmUiOiJBMlV2bEt6Umo4eXFOWGpIVURzbS8xUE1ORlNORWZ1MUhkVmszenNZQ2Nyd2RzTW9kS1ZpdjJ6aW5mRkQ2Mm1mcU9JRWRsaDVTVDQzWGlVZmRsTm9DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYTZTR2JMOFlkeHJnQ2dlN2lqSlJ4RmljWWRXY055VWt4SnBLQjBqYllTckNTdEdnYlhGc08xOU45T3lSaXBTSXRrbTA1UzNOVXpGUCtRWGZEVVIraWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg2MTczNDA2Mjc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU21Tdnl2ZFkwcWtVbVNhRVRZMy9NRGdVUU40QjQ3YnNjWlhSaGN5a3NaeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA5NzU5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWEQifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "꧁༒☬☠An!k☠︎☬༒꧂",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


