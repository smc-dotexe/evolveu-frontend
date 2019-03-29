import Account from './accountclass'

const instObj = new Account(50, 'chequings')

test('account exists', () => {
  expect(instObj.accountName).toBe('chequings')
  expect(instObj.initBalance).toBe(50)
})

test('deposit adds', () => {
  expect(instObj.deposit(20)).toBe(70)
})

test('withdraw subtracts', () => {
  expect(instObj.withdraw(10)).toBe(60)
})
