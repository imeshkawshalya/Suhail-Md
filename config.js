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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94768704257";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94768704257";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_12_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLT2oxdyt1OXhxRlRzWkJmM0NsemRjRFVPUmRBNzhhWHRGcDFkTVQ1aGdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY4NzA0MjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RTQzODcxQjdFNEVFMjQ0NUFDREFDMjc1QjBDNEVBNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTgzNjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2ODcwNDI1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkE1NTE0QjU1NjUzRjZGNTRBRDY1NjQwMkU0Mzg0NDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODU4MzY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlE0N3FFeTNkUkphUDNHbDhBeTNJbmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWJhZTMxZGMtMDY3OC00MWMxLWJhODctY2U3NDE2OTQ1NWY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE0NCxcbiAgICAgIDE0MyxcbiAgICAgIDE5NSxcbiAgICAgIDE1MCxcbiAgICAgIDIzMixcbiAgICAgIDEyLFxuICAgICAgMjMwLFxuICAgICAgMTc1LFxuICAgICAgMjUwLFxuICAgICAgMTU3LFxuICAgICAgMjEzLFxuICAgICAgMjE1LFxuICAgICAgMjEyLFxuICAgICAgMTQ1LFxuICAgICAgMTYzLFxuICAgICAgMCxcbiAgICAgIDgsXG4gICAgICA1LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxOSxcbiAgICAgIDQyLFxuICAgICAgMTYsXG4gICAgICAxMzIsXG4gICAgICAxNjksXG4gICAgICA0OCxcbiAgICAgIDE3NyxcbiAgICAgIDE1MixcbiAgICAgIDI0OSxcbiAgICAgIDEsXG4gICAgICAyMDYsXG4gICAgICA2NixcbiAgICAgIDQ3LFxuICAgICAgOTYsXG4gICAgICAzNCxcbiAgICAgIDI1MCxcbiAgICAgIDI0NCxcbiAgICAgIDIzOSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1YSlRDTkxSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2ODcwNDI1Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjfCdkKLwnZCk8J2QovCdkLLwnZCaXCIsXG4gICAgXCJsaWRcIjogXCI2MDI3NjEyNDcxNzEwNjo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0sycmhva0JFUHJ0eUxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMk00RDFXTjR3Q1kvSWIvZzJ6d29sT0d2OW14dDVXTmdxOWZkeDZ0SGRIMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDcnJyaE5YQ2I2b2lvMlkxZ2x3S2VQdzY5WGlkd0c2ZU9ialU2ZUVxWDhXZ3dGcEY1dmdhVWlSVkk0MjVDeE8yZW82c1VxSFl2Vmtra0srYTFvWUFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoWTA0b1lDRStTME13cTR1Z3R6UWNWamF0dWtWc0RpRTE0ZDFyWG1WNEhUWmhlYkNiUnV2SzQrNVdUVURKU2dQTUp6ck5mbkVySlpPc2R1TFE1N1ZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2ODcwNDI1Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg1ODM2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlQYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVBiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGFHVHBONXpuOFB1dmNJakpjN2tubUFNQzF2a2JhbFh5a0puNnZHUDNPcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODc0MTM2NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
