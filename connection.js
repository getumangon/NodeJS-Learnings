const mongoose = require("mongoose");

async function connectWithMongo(url) {
  // Connection with mongoose
  mongoose
    .connect(url)
    .then(() => console.log(" MONDO DB Connected!"))
    .catch((e) => console.log("MONGO ERR:: ", e));
}

module.exports = { connectWithMongo };
