import AccountClass from './accountClass'

// test('check if all the functions work for the AccountClass', () => {
//   let acct = new AccountClass(25, 'savings', 0)
//   expect(acct).toEqual({accountId: 0, accountName: "savings", balance: 25})
//   expect(acct.deposit(25, 'savings')).toBe(50)
//   expect(acct.withdrawal(10, 'savings')).toBe(40)
//   expect(acct.currentBalance()).toBe(40)
//   expect(acct).toEqual({accountId: 0, accountName: "savings", balance: 40})
// })
//
// test('check for default name and balance', () => {
//   let acct = new AccountClass
//   expect(acct).toEqual({accountId: 0, accountName: 'Shane', balance: 0})
// })

test('check if functions work ', () => {
  let acct = new AccountClass(0, 'savings', 25)
  expect(acct).toEqual({accountId: 0, accountName: 'savings', balance: 25})
  acct.deposit(10)
  expect(acct).toEqual({accountId: 0, accountName: 'savings', balance: 35})
  acct.withdrawal(5)
  expect(acct.balance).toBe(30)
  acct.accountIdIncrease()
  expect(acct.accountId).toBe(1)
})
