const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const DEFAULT_IP = "";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const getRemoteIp = (req) => {
  return (
    req.headers["x-forwarded-for"] || req.connection.remoteAddress || DEFAULT_IP
  );
};

app.get("/", function (req, res) {
  res.json({ status: "Error" });
});

app.get("/api/v1/verify", function (req, res) {
  let ip = getRemoteIp(req);
  let token = req.query.token;
  res.json({ ip, token });
});

module.exports = app;
