const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://yner:whine123@ds113122.mlab.com:13122/yner')

const themeSchema = new mongoose.Schema({
  title: String,
  flex: Number,
  icon: String
})

const Theme = mongoose.model('Theme', themeSchema)

// Creation
const themes = []
themes.forEach((theme) => {
  Theme({title: theme.title, flex: theme.flex, icon: theme.icon}).save((err) => {
    if (err) throw err
    console.log('item saved')
  })
})
// --

app.get('/themes', (req, res) => {
  Theme.find({}, (err, themes) => {
    if (err) throw err
    var themeMap = {}

    themes.forEach((theme) => {
      themeMap[theme._id] = theme
    })

    res.send(themeMap)
  })
})

app.listen(process.env.PORT || 8081)
