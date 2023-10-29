const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; // do not respond to bots (including myself)

        // respond only if mentioned first
        if (message.mentions.users.first() && message.mentions.users.first().id === process.env.DISCORD_BOT_APPLICATION_ID) {
            console.log('Mention received!');
            message.channel.sendTyping();

            // processing should happen here

            message.reply("I'm sorry, I'm not ready yet. But I'm alive!");
        }

    },
}
