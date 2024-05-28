const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_13_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyY0FIeWZYNlh4eUJTd0VXd2U2aUJuUVRVY092K2tWUXl0QllrcG5La3ZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5ODY5ODM2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODcwQTg2RTY5QjhFNzM2NEI0NEE3ODNDMURBQUUxNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2ODkxMjE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1jZ2Y3MlVBUkJlZnhweWMybGdqRGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDg1YmY3NTEtMmI5NS00MjEwLTkzYzUtZTgwMjQwODcyZjE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDM2LFxuICAgICAgMjUzLFxuICAgICAgNzQsXG4gICAgICA4OCxcbiAgICAgIDEzNixcbiAgICAgIDExMCxcbiAgICAgIDI4LFxuICAgICAgMjUxLFxuICAgICAgMTM2LFxuICAgICAgMTM3LFxuICAgICAgOTMsXG4gICAgICA5NSxcbiAgICAgIDI5LFxuICAgICAgMTcwLFxuICAgICAgMjQ5LFxuICAgICAgMjM1LFxuICAgICAgOTQsXG4gICAgICAxNyxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMyxcbiAgICAgIDYxLFxuICAgICAgMTQ4LFxuICAgICAgNDcsXG4gICAgICA2MSxcbiAgICAgIDEyNyxcbiAgICAgIDI0NCxcbiAgICAgIDE0MyxcbiAgICAgIDIwMyxcbiAgICAgIDE3NixcbiAgICAgIDE3MixcbiAgICAgIDk4LFxuICAgICAgNDAsXG4gICAgICAyMyxcbiAgICAgIDE5MyxcbiAgICAgIDM4LFxuICAgICAgMjA3LFxuICAgICAgNDEsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5R1pTMVpOV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk4Njk4MzYwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0NDYxNzY5OTIwNjcxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVucnkgTHVzd2V0aVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thVGpJc0VFTVhjMXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYSs4VjZUWDVscjZ3M0hIQnhSdFhkdmdhYklPSHplb0tHdC9jbmprcXdFdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyUStXNjFGc2ZIc1pKNytQK296TGpsWWxYbkVuMEE0MmxGUTRwaElMdDI0NWRIZ0todmx4ZnJZM2tnZ1l1RzJhdk5RS1VGRlJ6Y2huaXNsUC9GSVVEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJETXFua0g0NGhSWXB3bnQxNndHOFpGOWhkRUFQa3VKd1U2T083OUhpYWduYm9JMi83aGRXekM0Y0dSWktVV21oRVUyN0tpZDAwN3J2Qmcxa0JTcHBCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTg2OTgzNjA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODkxMjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1h3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3bWpkdUk1NEZCS2FqSkRXU0p5Y1F5MC9jc1hlV05ibnJlUmxheCtHYUJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTcwMDk1NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjg5MTIxMzQ2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
