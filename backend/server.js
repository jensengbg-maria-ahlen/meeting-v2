const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/meetup/dist/meetup/')))

const eventRoute = require('./routes/events')
app.use('/events', eventRoute)

const port = 8000
app.listen(port, () => {
    console.log('Server is running on port', + port + '!')
})