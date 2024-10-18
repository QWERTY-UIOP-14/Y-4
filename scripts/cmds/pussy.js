module.exports = {
	config: {
		name: "pussy",
		version: "1.0",
		author: "SK-SIDDIK-KHAN",
		countDown: 5,
		role: 0,
		category: "user",
	},
 
	 onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;
 
    const loadingMessage = await message.reply({
      body: "Loading Pussy Pic... Please Wait ⏰",
    });
     
	 var link = [ 
"https://i.ibb.co/jfqMF07/image.jpg",
"https://i.ibb.co/tBBCS4y/image.jpg",
"https://i.ibb.co/3zpyMVY/image.jpg",
"https://i.ibb.co/gWbWT8k/image.jpg",
"https://i.ibb.co/mHtyD1P/image.jpg",
"https://i.ibb.co/vPHNhdY/image.jpg",
"https://i.ibb.co/rm6rPjb/image.jpg",
"https://i.ibb.co/7GpN2GW/image.jpg",
"https://i.ibb.co/CnfMVpg/image.jpg",
	]
let img = link[Math.floor(Math.random()*link.length)]

if (senderID !== null) {
      message.reply({
        body: '🔰𝐏𝐔𝐒𝐒𝐘 𝐏𝐈𝐂𝐓𝐔𝐑𝐄𝐜🔰',
        attachment: await global.utils.getStreamFromURL(img)
      });
 
      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 800);
    }
  },
};
