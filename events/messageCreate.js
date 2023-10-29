const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; // do not respond to bots (including myself)

        console.log('Message received!');
        message.channel.sendTyping();

        // processing should happen here

        if (message.mentions.users.first() && message.mentions.users.first().id === process.env.DISCORD_BOT_APPLICATION_ID) {
            message.reply(`Mention received`);
        } else if (message.channel.type === 1) {
            message.reply(`Direct message`);
        } else {
            message.reply(`General message`);
        }

        message.reply(`Here is what I see: \n\`\`\`${JSON.stringify(message)}\`\`\`  `);

    },
}
