import AccountClass from './accountClass'

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
