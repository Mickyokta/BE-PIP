const { Users, Events } = require("../models")
const { Sequelize } = require("sequelize")

class EventsController {
    static async GetEvents(req, res) {

        try {
            let events = await Events.findAll(
                {
                    include: [{
                        model: Users
                    }]
                })
            res.status(200).json((events))
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
    static async PostEvents(req, res) {
        try {
            let { name, description, image, startDate, endDate, location, userId = 1 } = req.body
            location = Sequelize.fn('ST_GeomFromText', location)
            await Events.create({ name, description, image, startDate, endDate, location, userId })
            res.status(200).json({ status: "done" })
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err })
        }
    }
}

module.exports = EventsController