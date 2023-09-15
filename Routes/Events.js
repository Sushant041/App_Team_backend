const express = require("express");
const {postEvent, getEvent, deleteEvent, updateEvent} = require("../controllers/Events_Controller");

const router = express.Router();


router.post("/postEvent", postEvent);
router.get("/getEvent", getEvent);
router.delete("/deleteEvent/:id", deleteEvent);
router.patch("/updateEvent/:id", updateEvent);

module.exports = router;