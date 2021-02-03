require("dotenv").config();

require("./client/client")().then((client) => {
  client.login(process.env.TOKEN);
});
