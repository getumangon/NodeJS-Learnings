const moment = require("moment");
const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\nTime: ${moment(Date.now()).format("DD/MM/YYYY h:mm:ss A")} Req type: ${
        req.method
      } ::URL:: ${req.url}`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = { logReqRes };
