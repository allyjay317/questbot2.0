const Discord = require("discord.js");

const load = require("./load");

module.exports = async () => {
  const client = new Discord.Client();
  client.commands = await load("./commands/");
  client.events = await load("./events/");
  client.config = require("./config.json");

  Array.from(client.events.values()).forEach((e) => {
    try {
      client.on(e.conf.name, e.run.bind(null, client));
      delete require.cache[require.resolve(`../events/${e.conf.name}.js`)];
    } catch (e) {
      console.error(e.stack);
    }
  });

  return client;
};
