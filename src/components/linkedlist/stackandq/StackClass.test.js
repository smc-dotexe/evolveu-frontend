import Stack from './StackClass'

test('testing the stack class', () => {
  let stack = new Stack()
  expect(stack.arr.length).toBe(0)

  stack.add('a')
  stack.add('b')
  stack.add('c')

  expect(stack.display()).toEqual(['a','b','c'])

  stack.pop()
  expect(stack.display()).toEqual(['a','b'])

  expect(stack.showLast()).toEqual('b')

  stack.pop()
  stack.pop()
  expect(stack.showLast()).toEqual('array is empty')
  expect(stack.pop()).toEqual('array is empty')
})
