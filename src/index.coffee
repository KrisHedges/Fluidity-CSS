express = require 'express'
assets = require 'connect-assets'
stylus  = require 'stylus'
fluidity = require 'fluidity'
fs = require 'fs'

publicDir = "./public"

app = express()
app.use assets()
app.use "/phimages", express.static './public/phimages'
app.use "/images", express.static './public/images'
app.set "view engine", "jade"
app.set('view options', { debug: true, pretty: true })

app.get '/', (req, res) ->
  res.render 'index'

app.get '/two-column-example', (req, res) ->
  res.render 'two_column_example'

app.get '/three-column-example', (req, res) ->
  res.render 'three_column_example'

app.get '/three-column-fixed-example', (req, res) ->
  res.render 'three_column_example_fixed'
port = process.env.PORT or process.env.VMC_APP_PORT or 3000
app.listen port, ->
  console.log "Listening on #{port}\nPress CTRL-C to stop server."
