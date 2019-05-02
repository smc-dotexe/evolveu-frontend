import LinkedListCtrl from './LinkedListCtrlClass'
import Node from './NodeClass'

test('functions for linked list ctrl class ', () => {
  let linkedList = new LinkedListCtrl

  linkedList.insert('hi', 1)
  linkedList.insert('bye', 2)
  linkedList.insert('try', 3)
  linkedList.insert('guy', 4)

  expect(linkedList.first().subject).toEqual('hi')
  expect(linkedList.last().subject).toEqual('guy')

  linkedList.previous()
  linkedList.previous()
  expect(linkedList.previous().subject).toEqual('hi')

  linkedList.next()
  linkedList.next()
  linkedList.next()
  expect(linkedList.next().subject).toEqual('guy')

  linkedList.previous()
  linkedList.previous()
  linkedList.insert('newest', 6)
  console.log(linkedList)
})
