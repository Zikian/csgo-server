const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')

app.set('port', 3000)
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const ancientNades = JSON.parse(fs.readFileSync(__dirname + '/public/nades/ancient.json'));
const mirageNades = JSON.parse(fs.readFileSync(__dirname + '/public/nades/mirage.json'));
const overpassNades = JSON.parse(fs.readFileSync(__dirname + '/public/nades/overpass.json'));

app.get('/ancient', function(req, res) {
	res.render('radar.ejs', {nades : ancientNades, radarImg: "Ancient.png"})
})

app.get('/mirage', function(req, res) {
	res.render('radar.ejs', {nades : mirageNades, radarImg: "Mirage.png"})
})

app.get('/overpass', function(req, res) {
	res.render('radar.ejs', {nades : overpassNades, radarImg: "Overpass.png"})
})

app.get('/ancient/edit', function(req, res) {
	res.render('radaredit.ejs', {nades : ancientNades, radarImg: "Ancient.png"})
})

app.get('/mirage/edit', function(req, res) {
	res.render('radaredit.ejs', {nades : mirageNades, radarImg: "Mirage.png"})
})

app.get('/overpass/edit', function(req, res) {
	res.render('radaredit.ejs', {nades : overpassNades, radarImg: "Overpass.png"})
})

app.listen(app.get('port'), function () {
  console.log('App is running on port: ' + app.get('port'))
})

app.post('/postrecieve', function(req, res) {
	console.log(req.url)
})