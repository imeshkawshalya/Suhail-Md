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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴɪᴋɪʏᴀ²²¹-ᴍᴅ" 


global.devs = "94742627972" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94742627972";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94742627972";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_01_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0RlBRWE40MERYM1NwaDhDS2h2NTUra2FaOVpFdENGek5jRWFQQjdWT2RRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQyNjI3OTcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QzJCMjU3Q0JERjYzNTI0NEU0MTNBMTFENTg1NDY2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MzUyNzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MjYyNzk3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjEzMjJEMTAyRUVGN0U1NzAxQUU2NUM2NTM4OThFRDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzM1MjcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm40Y1hSSzRhUjBtUFpvakVadXlvSVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjhjMzA5ZjItYzRiMC00Y2M0LWE2ZWItOWY2Nzk3OTc5OTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDYsXG4gICAgICA1NCxcbiAgICAgIDI0LFxuICAgICAgMTI5LFxuICAgICAgNTksXG4gICAgICAxNTgsXG4gICAgICAyMjgsXG4gICAgICAyNTIsXG4gICAgICAyNTAsXG4gICAgICAyMjIsXG4gICAgICA1NixcbiAgICAgIDkyLFxuICAgICAgMjIzLFxuICAgICAgMjM1LFxuICAgICAgMTcsXG4gICAgICAxMTgsXG4gICAgICAxNzgsXG4gICAgICAxMSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDIxNSxcbiAgICAgIDgzLFxuICAgICAgNTAsXG4gICAgICAxNDksXG4gICAgICAzMyxcbiAgICAgIDE3OSxcbiAgICAgIDE1NixcbiAgICAgIDE0MCxcbiAgICAgIDE1MSxcbiAgICAgIDI4LFxuICAgICAgMTgyLFxuICAgICAgMTA3LFxuICAgICAgMjU1LFxuICAgICAgMTAyLFxuICAgICAgMCxcbiAgICAgIDE3MSxcbiAgICAgIDE1MCxcbiAgICAgIDIwMSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhXNVhGUFhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjYyNzk3Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTAzMjMzNTU1NDk3NDE6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOaWtpeWFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKRHN6ZE1HRUtDc3diUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVwV3l1MjVFcWR1cWpCTEtTdnRCQTBQNVVsMVJsSmJvQkkzMk1MeHdMQk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1VrNGdJcm5WTEp1cTJtR1pzOFg2ejhwVFJWb2I5cG5XRm41NmZQZE5JQjJtSXB1RGtCbmNwbUpwWkZ6Y0RLN05FYXBKbHhBZ0R4L0lWL3p5NWJkQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGNuUUhIcTc2S2dOR2w1UWRyUkM0MjRqd0ZKTXBZanBOQi9reml1RUNhZjlPY2dnNUZsTmZUMXI2R1lqMGphWSszMjFSUTh6K0F4akZDaFYxV3dIamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDI2Mjc5NzI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDczNTI2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXgrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnhpaFltRWdoOFJrYlJsTmNQSjV6dDJYRWRpM1JVZHc4M1UzNzRSUTNBND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg1OTUxNzYwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MjcxMzg4MTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ɴɪᴋɪʏᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Nikiya",


  errorChat : process.env.ERROR_CHAT || "",
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
