const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./controllers/PackageController"));
app.use(require("./controllers/MemberController"));


app.listen(port, () => {
  console.log(`Example app listening on port`, port);
});
