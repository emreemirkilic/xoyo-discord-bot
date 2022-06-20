const { Message } = require('discord.js');
const { Client } = require('discord.js-commando');
const { create } = require('domain');
const fs = require('fs');
const path = require('path');

const client = new Client({
    commandPrefix: '< ',
    owner: '688816048006365189',
    invite: 'https://discord.gg/C9dFYbcWAs',
    unknownCommandResponse: false,
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['party','Party'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands')
);

client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
        client.user.setActivity('< help', {type: 'PLAYING'});
});

client.on('error', console.error);

client.login(process.env.DISCORD_JS_TOKEN);