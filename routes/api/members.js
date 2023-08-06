const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const members = require("../../Members");

// Gets all members
router.get("/", (req, res) => {
  res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(
      members.filter((member) => {
        return member.id === parseInt(req.params.id);
      })
    );
  } else {
    res.status(404).json({
      msg: `Member with the id: ${req.params.id} not found!`,
    });
  }
});

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({
      msg: "Please include a name and email",
    });
  }

  members.push(newMember);
  res.status(201).json(members);
});

module.exports = router;
