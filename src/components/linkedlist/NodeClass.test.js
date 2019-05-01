import NodeClass from './NodeClass'

test('node class functions ', () => {
  let newNode = new NodeClass('hi', 300)
  expect(newNode.show()).toEqual("Subject: hi, Amount: 300")
})
