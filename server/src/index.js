const dotenv = require("dotenv");

const app = require("./app");
require("./database");

async function main() {
  await app.listen(app.get("port"));
  console.log("Server on PORT", app.get("port"));
}

main();
