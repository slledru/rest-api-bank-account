const transactionsFile = path.join(__dirname, 'transactions.json')
const {
  loadDataStore,
  saveDataStore
} = require('./dataStoreUtils')

let transactions = []

function loadTransactions() {
  loadDataStore(transactionsFile, loadCallback)
}

function saveTransactions() {
  saveDataStore(transactionsFile, transactions)
}

function loadCallback(data) {
  transactions = data
}

module.exports = {
  loadTransactions,
  saveTransactions
}
