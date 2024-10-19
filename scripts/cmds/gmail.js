const { TempMail } = require("1secmail-api");

function generateRandomId() {
    const length = 6;
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId;
}

module.exports = {
    config: {
        name: 'tempmail',
        version: '2.1.0',
        author: "SK-SIDDIK-KHAN",
        aliases: ["email", "gmail"],
        countDown: 5,
        role: 0,
        shortDescription: 'Generate temporary email (auto get inbox)',
        category: 'generate',
        guide: {
            en: '[tempmail]'
        }
    },

    onStart: async function ({ api, event }) {
        const reply = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

        try {
            const mail = new TempMail(generateRandomId());

            mail.autoFetch();

            if (mail) reply("" + mail.address);

            const fetch = () => {
                mail.getMail().then((mails) => {
                    if (!mails[0]) {
                        return;
                    } else {
                        let b = mails[0];
                        const msg = `╰☻𝗙𝗥𝗢𝗠 : ${b.from}\n\n╰☻𝗦𝗨𝗕𝗝𝗘𝗖𝗧 : ${b.subject}`;
                        reply(msg);
                        return mail.deleteMail();
                    }
                });
            };

            fetch();
            setInterval(fetch, 3 * 1000); 

        } catch (err) {
            console.error(err);
            return reply(err.message);
        }
    }
};
