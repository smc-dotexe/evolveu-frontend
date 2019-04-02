import AccountsCtrl from './AccountsCtrl'

const accts = new AccountsCtrl(0, '')


test('accounts array exist', () => {
  expect(accts.addAccount(2000).length).toBe(1)
})

test('adds or removes an item in the array', () => {
  expect(accts.addAccount(500).length).toEqual(2)
  expect(accts.addAccount(1000).length).toEqual(3)
  expect(accts.removeAccount(1,1).length).toEqual(2)
})

test('find highest value in the account array', () => {
  accts.addAccount(500)
  accts.addAccount(1000)
  expect(accts.highestValue()).toBe(2000)
})

test('find lowest value in the account array', () => {
  accts.addAccount(25)
  accts.addAccount(245)
  expect(accts.lowestValue()).toBe(25)
})

test('create an account name', () => {
  expect(accts.nameAccount('savings')).toBe('savings')
})
