import AccsFunc from './accsFunc'

test('testing accounts functions', () => {
  expect(AccsFunc.displayValue()).toBe(0)
  expect(AccsFunc.deposit(10)).toBe(10)
  expect(AccsFunc.displayValue()).toBe(10)
  expect(AccsFunc.withdraw(5)).toBe(5)
  expect(AccsFunc.displayValue()).toBe(5)
})

// test('testing adding accounts'), () => {
//   expect(AccFunc.addAccount(b))
// }
