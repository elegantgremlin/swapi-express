var Express = require('express')
var axios = require('axios');
var cache = require('memory-cache')
const path = require('path')
const APIHelper = require('./APIHelper')

var app = new Express()
const port = 5000

const folderPath =  path.join(__dirname, 'frontend', 'dist')

app.use(Express.static(folderPath))

app.get('/api/:id', async (req, res) => {
  var id = req.params.id

  var cachekey = `people${id}`
  var cached = cache.get(cachekey)

  if(cached) {
    return res.json(cached)
  } else {
    var char = await APIHelper.getCharacterById(id)

    cache.put(cachekey, char)

    return res.json(char)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(folderPath, 'index.html'));
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})