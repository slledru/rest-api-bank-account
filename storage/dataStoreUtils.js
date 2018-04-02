const fs = require('fs')
const uuid = require('uuid')
const httpErrors = require('http-errors')

function loadDataStore(dbFile, load) {
  fs.readFile(dbFile, 'utf8', (err, data) => {
    if (err) {
      saveDataStore(dbFile)
    }
    else {
      try {
        load(JSON.parse(data)['data'])
      }
      catch (ex) {
        saveDataStore(dbFile)
      }
    }
  })
}

function saveDataStore(dbFile, data = []) {
  const stored = { data: data }
  fs.writeFile(dbFile, JSON.stringify(stored), 'utf8', (err) => {
    if (err) {
      throw httpErrors(500, 'Unable to save the data')
    }
  })
}

module.exports = {
  loadDataStore,
  saveDataStore
}
