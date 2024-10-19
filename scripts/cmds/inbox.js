module.exports = {
  config: {
    name: "inbox",
    aliases: ["comeinbox", "in"],
    version: "1.0",
    author: " SK-SIDDIK-KHAN",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("𝐏𝐋𝐀𝐂𝐄 𝐂𝐇𝐄𝐂𝐊 𝐘𝐎𝐔𝐑 𝐈𝐍𝐁𝐎𝐗", event.threadID);
      api.sendMessage("𝐂𝐀𝐍 𝐈 𝐇𝐄𝐋𝐏 𝐘𝐎𝐔 𝐁𝐀𝐁𝐘", event.senderID);
    } catch (error) {
      console.error("𝐄𝐑𝐑𝐎𝐑 𝐁𝐑𝐎𝐓𝐇𝐄𝐑" + error);
    }
  }
};
