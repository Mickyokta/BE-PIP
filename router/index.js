const express = require("express")
const EventsController = require("../controller/eventsController")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/events', EventsController.GetEvents)
router.post('/events', EventsController.PostEvents)

module.exports = router