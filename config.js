const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Asia/Colombo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "↲ ₂ͥ₀ͫ₂ͦ₄ Ꭵᵐ͟ᵒ׀Nikiya" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94742627972";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775461337";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94775461337";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94775461337,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHFQTldZQkY2ZzF6YXlOc3RUSjhra2RaU1Y3WnA2UG9YMFFKdXRQbmhQQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUZvUGg4T1ZTVG0wbUM4R09ZdFBxZ1wiLFxuICBcInBob25lSWRcIjogXCI3NGUxMWViMS0wYWU2LTQzOGUtYTQzNC1jMWNkNDA2OTQ5NzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMjA1LFxuICAgICAgMTM2LFxuICAgICAgMTcyLFxuICAgICAgMjIwLFxuICAgICAgMjE5LFxuICAgICAgMjA4LFxuICAgICAgMjM1LFxuICAgICAgNDksXG4gICAgICAyMzAsXG4gICAgICA3OCxcbiAgICAgIDk1LFxuICAgICAgMzEsXG4gICAgICAyOCxcbiAgICAgIDIwNyxcbiAgICAgIDExMSxcbiAgICAgIDU1LFxuICAgICAgMjA5LFxuICAgICAgNTksXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxNzksXG4gICAgICA5NCxcbiAgICAgIDEwNCxcbiAgICAgIDIyMixcbiAgICAgIDE0LFxuICAgICAgMTY4LFxuICAgICAgNjQsXG4gICAgICA1MyxcbiAgICAgIDE4NSxcbiAgICAgIDIzNixcbiAgICAgIDM1LFxuICAgICAgMjA1LFxuICAgICAgMjUzLFxuICAgICAgNyxcbiAgICAgIDI0NixcbiAgICAgIDE3NyxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlZYNjE5NjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NDYxMzM3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCN8J2QovCdkKTwnZCi8J2QsvCdkJpcIixcbiAgICBcImxpZFwiOiBcIjE0OTcxNDQzOTgxMTIyMTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tZHZxa0ZFSXZPbXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU0EzUXZyaWJGUEwwdEY3TWRFSk5xU2tSZTRPK3owYTVGbzJGYXpURFhBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMVDNkQWFzc0RTMCtSRldEK254UXZJZ3dGV3VYalRvV1U5cUhoc0NDdW1ab012OXR4OVh3cko4THUraUNIa2lYTWo5T3oySTZaYjJpcGtxd25IWjZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNUHJzbkxZUGVackVtN0ZCMWYwUkN6NzhMU2tUWUEreWNuVllBUG0wLzlLbkswcHhTQXBmNW9tL01HNHNWY01hSE9jYTUvNnF3WFNhWFdHVnQzQTFnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTQ2MTMzNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwMDYyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBSc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFJzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGYxMGFWTEpqVHpzZjBqUmNNSGp1QXVxYWNCNjIzODJLWFpqdk9Ya285ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI5MTgwMTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMDA2MjY1OTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "nikiya-Bot",
  ownername:process.env.OWNER_NAME|| "Nikiya",


  errorChat : process.env.ERROR_CHAT || ".",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
