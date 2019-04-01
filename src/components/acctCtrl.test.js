import AccountsCtrl from './AccountsCtrl'

const accts = new AccountsCtrl

test('accounts array exist', () => {
  expect(accts.addAccount('created Account')).toContain('created Account')
})

test('adds or removes an item in the array', () => {
  expect(accts.addAccount('test').length).toEqual(2)
  expect(accts.addAccount('test2').length).toEqual(3)
  expect(accts.removeAccount('test').length).toEqual(2)

})
