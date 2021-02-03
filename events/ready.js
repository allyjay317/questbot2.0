module.exports.run = async (client) => {
  console.log(`${client.user.username} is online`);
};

module.exports.conf = {
  name: "ready",
};
