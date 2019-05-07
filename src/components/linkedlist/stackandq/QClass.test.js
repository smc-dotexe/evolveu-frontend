import QClass from './QClass'

test('testing qclass', () => {
  let q = new QClass()
    expect(q.qArr.length).toBe(0)

    q.add('a')
    q.add('b')
    q.add('c')
    expect(q.display()).toEqual(['a','b','c'])

    q.remove()
    expect(q.showFirst()).toEqual('b')

    q.remove()
    q.remove()
    expect(q.display()).toEqual('array is empty')
    expect(q.showFirst()).toEqual('array is empty')
    expect(q.remove()).toEqual('array is empty')
})
