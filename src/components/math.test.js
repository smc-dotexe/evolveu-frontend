import math from './math'

test('test the math functions', () => {
  expect(math.sum(1,2)).toBe(3)
  expect(math.subtract(5,2)).toBe(3)
  expect(math.multiply(1,3)).toBe(3)
  expect(math.divide(6,2)).toBe(3)

})
