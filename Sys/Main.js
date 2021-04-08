const djs = require('discord.js');
const { API } = require('../Modules/API/Main-API.js');
const client = new API({disableEveryone: true});
const Data = client.config;

require(`../Modules/API/Uptime.js`)(client);
require(`../Modules/Handler/Command.js`)(client);
require(`../Modules/Handler/Event.js`)(client);

client.conf = new client.db.table("Configuration")
client.job = new client.db.table("JobsData")
client.eco = new client.db.table("Economy")
client.mod = new client.db.table("Moderator")