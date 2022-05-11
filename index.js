"use strict";

const http = require("http");
const app = require("./app");

const httpServer = http.createServer(app);

httpServer.listen(5001, "0.0.0.0", (error) => {
  if (error) {
    console.error(error);
  } else {
    const host = httpServer.address().address;
    const port = httpServer.address().port;
    console.info("==> 🌎 App listening at http://%s:%s", host, port);
  }
});
