const express = require('express')
const cors = require("cors");
const app = express()

//middleware

app.use(express.json())
app.use(cors());
const tourRoutes=('./routes/tour.route.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1/tours',tourRoutes)

module.exports = app;
