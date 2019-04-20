import AccountCtrl from './accountCtrl'

test('account control functions', () => {
  let acctCtrl = new AccountCtrl

  // expect(acctCtrl.createAccount(2, 'savings', 1))
  // .toEqual([{accountName: 'savings', balance: 2, accountId: 1}])
  //
  // expect(acctCtrl.createAccount(5, 'chequings', 2))
  // .toEqual([{accountName: 'savings', balance: 2, accountId: 1},
  //           {accountName: 'chequings', balance: 5, accountId: 2}])
  //           console.log(acctCtrl.accountArr)
  //
  // expect(acctCtrl.deleteAccount(1))
  // .toEqual([{accountName: 'chequings', balance: 5, accountId: 2}])
  //
  // expect(acctCtrl.createAccount(30, 'savings', 3))
  // .toEqual([{accountName: 'chequings', balance: 5, accountId: 2},
  //           {accountName: 'savings', balance: 30, accountId: 3}])
  //
  // expect(acctCtrl.createAccount(25, 'savings', 4))
  // .toEqual([{accountName: 'chequings', balance: 5, accountId: 2},
  //           {accountName: 'savings', balance: 30, accountId: 3},
  //           {accountName: 'savings', balance: 25, accountId: 4}])
  //
  // expect(acctCtrl.createAccount(45, 'savings', 5))
  // .toEqual([{accountName: 'chequings', balance: 5, accountId: 2},
  //           {accountName: 'savings', balance: 30, accountId: 3},
  //           {accountName: 'savings', balance: 25, accountId: 4},
  //           {accountName: 'savings', balance: 45, accountId: 5}])
  //
  // expect(acctCtrl.findAccount(5)).toBe(3)
  //
  // expect(acctCtrl.totalAccounts()).toBe(105)
  //
  // expect(acctCtrl.highestAccount()).toEqual({accountName: 'savings', balance: 45, accountId: 5})
  //
  // expect(acctCtrl.lowestAccount()).toEqual({accountName: 'chequings', balance: 5, accountId: 2})

  acctCtrl.createAccount('shane', 5)
  acctCtrl.createAccount('eva', 10)

  expect(acctCtrl.accountArr[0].accountId).toEqual(1)
  expect(acctCtrl.accountArr[0].accountName).toEqual('shane')
  expect(acctCtrl.accountArr[0].balance).toBe(5)

  expect(acctCtrl.accountArr).toEqual([{accountId: 1, accountName: "shane", balance: 5}, {accountId: 2, accountName: "eva", balance: 10}])

  acctCtrl.deleteAccount(1)
  expect(acctCtrl.accountArr).toEqual([{accountId: 2, accountName: "eva", balance: 10}])

  acctCtrl.createAccount('dima', 15)
  acctCtrl.createAccount('john', 100)
  acctCtrl.createAccount('marly', 2)

  expect(acctCtrl.totalAccounts()).toBe(127)

  expect(acctCtrl.highestAccount()).toEqual({accountId: 4, accountName: 'john', balance: 100})

  expect(acctCtrl.lowestAccount()).toEqual({accountId: 5, accountName: 'marly', balance: 2})

  expect(acctCtrl.findAccountIndex(2)).toBe(0)

  expect(acctCtrl.depositUpdate(1, 15)).toBe(30)

  expect(acctCtrl.withdrawalUpdate(1, 5)).toBe(10)

  // .toEqual({accountArr: [{accountId: 1, accountName: "shane", balance: 5},
  // {accountId: 2, accountName: "eva", balance: 10}], counter: 2})
  // .toEqual([{accountId: 1, accountName: "shane", balance: 5}, {accountId: 2, accountName: "eva", balance: 10}])
})
