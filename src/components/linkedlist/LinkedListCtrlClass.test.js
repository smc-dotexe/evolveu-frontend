import LinkedListCtrl from './LinkedListCtrlClass'
import Node from './NodeClass'

test('functions for linked list ctrl class ', () => {
  let linkedList = new LinkedListCtrl

  linkedList.insert('hi', 1)
  linkedList.insert('bye', 2)
  linkedList.insert('try', 3)
  linkedList.insert('guy', 4)

  linkedList.first()
  expect(linkedList.current().subject).toEqual('hi')
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


  linkedList.next()
  expect(linkedList.current().subject).toEqual('try')
  linkedList.delete()
  expect(linkedList.current().subject).toEqual('guy')

  expect(linkedList.first().subject).toEqual('hi')
  linkedList.insert('doodoo', 500)

  linkedList.delete()
  linkedList.delete()
  linkedList.delete()
  linkedList.delete()
  linkedList.delete()

})

test('test more functions ', () => {
  let linkedList = new LinkedListCtrl

  linkedList.insert('a', 1)
  linkedList.insert('b', 2)
  linkedList.insert('c', 3)

  linkedList.first()
  expect(linkedList.previous().subject).toEqual('a')

  linkedList.delete()
  linkedList.delete()
  linkedList.delete()
  linkedList.delete()

  linkedList.insert('a', 1)
  linkedList.insert('b', 2)
  linkedList.insert('c', 3)
  console.log(linkedList)
})
