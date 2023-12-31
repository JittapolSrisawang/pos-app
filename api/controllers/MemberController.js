const express = require("express");
const MemberModel = require("../models/MemberModel");
const app = express();

app.post("/member/signin", async (req, res) => {
  try {
    const member = await MemberModel.findAll({
      where: {
        phone: req.body.phone,
        pass: req.body.pass,
      },
    });

    if (member.length > 0) {
      res.send({ id: member[0].id, message: "success" });
    }
    res.send({ message: "not found" });
  } catch (e) {
    res.send({ message: e });
  }
});

module.exports = app;
