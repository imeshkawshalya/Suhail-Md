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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94774574323";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94774574323";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94774574323";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_21_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYSVNhWU1WaUpCYTZwU3ZRaTI3MXJYZmN5RmRzWVlib3R6bWFCdFF3aTVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc0NTc0MzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUM5NUExODREMkM1QUE2QkFEMTY2MDY3Q0NDOUI4NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzODAwNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnJwZ0g3bUlRT3V6b3ZieWtvN2Jxd1wiLFxuICBcInBob25lSWRcIjogXCI2ZDlmYTc4Zi03OGQ1LTQ2YzItYjY0YS0wOGU3ZTZjMzJjYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTI4LFxuICAgICAgMjMxLFxuICAgICAgMTQ4LFxuICAgICAgMjMxLFxuICAgICAgMTMyLFxuICAgICAgMTk5LFxuICAgICAgMjEwLFxuICAgICAgMjgsXG4gICAgICA4MCxcbiAgICAgIDE0MCxcbiAgICAgIDExNixcbiAgICAgIDk3LFxuICAgICAgMTg2LFxuICAgICAgNDIsXG4gICAgICA1MyxcbiAgICAgIDc5LFxuICAgICAgMjEsXG4gICAgICAxMTUsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDEwNCxcbiAgICAgIDE2MSxcbiAgICAgIDIzMyxcbiAgICAgIDE0NyxcbiAgICAgIDExNSxcbiAgICAgIDI0LFxuICAgICAgMTYzLFxuICAgICAgMTg1LFxuICAgICAgMTI4LFxuICAgICAgMTA5LFxuICAgICAgMjI2LFxuICAgICAgMTk4LFxuICAgICAgMjAwLFxuICAgICAgMTI1LFxuICAgICAgNzksXG4gICAgICA4NCxcbiAgICAgIDM5LFxuICAgICAgNDMsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOE0zVlQxUDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc0NTc0MzIzOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjfCdkKLwnZCk8J2QovCdkLLwnZCaXCIsXG4gICAgXCJsaWRcIjogXCIxMzc0MDA4MTg5MDUxMTk6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXFkdnFrRkVKdlZxN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTQTNRdnJpYkZQTDB0RjdNZEVKTnFTa1JlNE8rejBhNUZvMkZhelREWEFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJMZnpHK0hwZHVvNjVOSlZuTlBXeEIvN1NnU0dqWWRsSCtKcDdabUJYUGFjVG1JKy93ZnVLK1FMYzdONGJpbUwweEdCY2FDZkMxWHp1RmY5TXljUENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9BdmdRUUV6Vm5DeUE0eTFkcjdKL1Nsb2xRMmxpSFpoaU8xby84M2YyampTcTRVN09Fc0JaMjNzZU1VVDNxd25LVHIzYWNETkhDdms0T3pOeVB0UGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc0NTc0MzIzOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM4MDA2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUphSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmFKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWFRNNXdYWldWTENLamFuYXAxKzBoWDIxdi9ISnpvZVcxNVRlM1FYdW5GOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI5MTgwMTA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzODAwNjY5NjZcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
