const express = require('express')
const path = require('path')
const app = express()

app.set('port', 3000)
app.use(express.static(path.join(__dirname, '/public')))

app.get('/ancient', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/ancient.html'))
})

app.listen(app.get('port'), function () {
  console.log('App is running on port: ' + app.get('port'))
})
