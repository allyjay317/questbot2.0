module.exports.run = async (client, msg) => {
  const { prefix } = client.config;
  if (
    !msg.guild ||
    msg.author.bot ||
    !msg.content.startsWith(client.config.prefix)
  )
    return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  await cmd.run(client, msg);
};

module.exports.conf = {
  name: "message",
};
