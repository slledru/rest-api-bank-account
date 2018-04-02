const accountsFile = path.join(__dirname, 'accounts.json')
const {
  loadDataStore,
  saveDataStore
} = require('./dataStoreUtils')

let accounts = []

function loadAccounts() {
  loadDataStore(accountsFile, loadCallback)
}

function saveAccounts() {
  saveDataStore(accountsFile, accounts)
}

function loadCallback(data) {
  accounts = data
}

module.exports = {
  loadAccounts,
  saveAccounts
}
