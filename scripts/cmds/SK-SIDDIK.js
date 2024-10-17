module.exports = {
    config: {
        name: "siddik",
        version: "1.0",
        author: "SK-SIDDIK-KHAN",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
    onStart: async function () {
    },
    onChat: async function ({ event, message, getLang }) {
        const input = event.body && event.body.toLowerCase();
        
        if (!input) return;

        switch (input) {
            case "owner":
                return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍\n╰╼|━━━━━━━━━━━━━━|╾╯");
            case "sk siddik":
            case "siddik khan":
                return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍\n╰╼|━━━━━━━━━━━━━━|╾╯");
            case "sk siddik khan":
            case "sk":
                return message.reply("╭╼|━━━━━━━━━━━━━━|╾╮\n          𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍\n╰╼|━━━━━━━━━━━━━━|╾╯");
        }
    }
};
