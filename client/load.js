const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const Discord = require("discord.js");

module.exports = async (path) => {
  const collection = new Discord.Collection();
  const cFiles = await readdir(path);
  cFiles.forEach((file) => {
    try {
      const f = require(`.${path}${file}`);
      if (file.split(".").slice(-1)[0] !== "js") return;

      collection.set(f.conf.name, f);
    } catch (e) {
      console.error(e.stack);
    }
  });
  return collection;
};
