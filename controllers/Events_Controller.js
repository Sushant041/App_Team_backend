const Event = require("../models/EventModel");


const postEvent = async (req, res) =>{
    const event = req.body;
   
    try {
        const newEvent = await Event.create(event);
        res.status(201).json({message: "Event added", newEvent})
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const getEvent = async (req, res) =>{
    try {
        const events = await Event.find();
        res.status(201).json(events);
    } catch (error) {
        res.status(500).jason(error)
    }
}

const deleteEvent = (req, res) =>{
    res.send("hello");
    console.log("Event deleted successfully");
}

const updateEvent = (req, res) =>{
    res.send("hello");
    console.log("Event patched successfully");
}


module.exports = {postEvent, getEvent, deleteEvent, updateEvent};