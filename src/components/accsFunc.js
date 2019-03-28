const accObj = {
    balance: 0
}


function displayValue () {
  return accObj.balance
}

function deposit(a) {
  return accObj.balance += a
}

function withdraw(a) {
  return accObj.balance -= a
}

const accountsArr = []

function addAccount(b) {
  const accountsArr = []
  accountsArr.push(b)
  return accountsArr
}





export default { displayValue, deposit, withdraw }
