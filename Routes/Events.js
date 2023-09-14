const express = require("express");
const {postEvent, getEvent, deleteEvent, updateEvent} = require("../controllers/Events_Controller");

const router = express.Router();


router.post("/postevent", postEvent);
router.get("/getevent", getEvent);
router.delete("/deleteevent", deleteEvent);
router.patch("/updateevent", updateEvent);

module.exports = router;