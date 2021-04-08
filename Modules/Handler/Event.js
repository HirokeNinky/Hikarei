const fs = require("fs");

module.exports = client => {
  fs.readdir("./Modules/Events/", (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const evt = require(`../Events/${file}`);
      let evtName = file.split(".")[0];
      console.log(`『EventsHandler』 Loaded Events : ${evtName}`);
      client.on(evtName, evt.bind(null, client));
    });
  });
};