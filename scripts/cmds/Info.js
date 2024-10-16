module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "SK-SIDDIK-KHAN",
    countDown: 5,
    role: 0,
    category: "auto",
  },

  onStart: async function () {},

  onStart: async function ({ event, message, getLang, usersData, threadsData }) {
  
      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://graph.facebook.com/100059026788061/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const msg = `✨𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐖𝐚𝐥𝐚𝐢𝐤𝐮𝐦✨
 
╭─────────────|
╰‣ ❏ 𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ❏
 
╭─────────────|
╰‣ ❏ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐒𝐊_𝐒𝐈𝐃𝐃𝐈𝐊_⓿❼
 
╭─────────────|
╰‣ ❏ 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐒𝐤 𝐒𝐢𝐝𝐝𝐢𝐤
 
╭─────────────|
╰‣ ❏ 𝐂𝐨𝐧𝐜𝐚𝐭𝐞𝐭
 
╭─────────────|
╰‣ ❏ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : m.me/TERA.PAPPA.IS.BUSY
 
╭─────────────|
╰‣ ❏ 𝐓𝐠  : t.me/@rdxprem12
 
╭─────────────|
╰‣ ❏ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
