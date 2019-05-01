import LinkedListCtrl from './LinkedListCtrlClass'
import Node from './NodeClass'

test('functions for linked list ctrl class ', () => {
  let linkedList = new LinkedListCtrl

  linkedList.insert('hi', 1)
  linkedList.insert('bye', 2)
  linkedList.insert('try', 3)

  expect(linkedList.first()).toEqual('hi')
  expect(linkedList.last()).toEqual('try')
  expect(linkedList.next()).toEqual('')

})
