module.exports = {
 config: {
	 name: "fuckyoujoy",
	 version: "1.0",
	 author: "SK-SIDDIK-KHAN",
	 countDown: 5,
	 role: 0,
	 shortDescription: "",
	 longDescription: "",
	 category: "auto",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if ((event.body.toLowerCase() == "siddik er pola") || (event.body.toLowerCase() == "joy fuck you") || (event.body.toLowerCase() == "joyfuck")) {
 return message.reply({
 body: `
বান্দির পোলা জয় এর মাইরে চুদি ৩৬৫ দিন 🫦😂`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/xMzMebg.mp4")
 });
 }
 }
}
