const { Router } = require('express')
const router = new Router()
const { db } = require('./../database')

router.get('/', (req, res) => {
    let events = db.get('events').value()
    res.send({events: events})
})

module.exports = router;