module.exports = {
    config: {
        name: "sada",
        version: "1.0",
        author: "SK-SIDDIK-KHAN",
        countDown: 5,
        role: 2,
        category: "owner",
    },
 
    onStart: async function ({ api, event }) {
        const threadID = event.threadID; 
        const messageToSend = "🅂🄾🅁🅁🅈";
 
        for (let i = 0; i < 400; i++) {
            await api.sendMessage(messageToSend, threadID);
        }
    }
}
