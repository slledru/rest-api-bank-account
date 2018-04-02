const path = require('path')

const accountsFile = path.join(__dirname, 'accounts.json')
const {
  loadDataStore,
  saveDataStore
} = require('./dataStoreUtils')

let accounts = []

function loadAccounts() {
  console.log('loadAccounts');
  loadDataStore(accountsFile, loadCallback)
}

function saveAccounts() {
  console.log('saveAccounts');
  saveDataStore(accountsFile, accounts)
}

function loadCallback(data) {
  console.log(data);
  accounts = data
}

module.exports = {
  loadAccounts,
  saveAccounts
}
