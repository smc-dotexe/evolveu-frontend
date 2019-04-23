import CommunityClass from './CommunityClass'

test('test if community class functions work.', () => {
  let cc = new CommunityClass()

    expect(cc.counterIncrease()).toBe(1)

    cc.addCity(1, 'BlackDiamond', 50.6884, 114.2326, 2700)

    expect(cc.communityArr)
      .toEqual([{id: 1, latitude: 50.6884, longitude: 114.2326, name: "BlackDiamond", population: 2700}])

    cc.addCity(2, 'Someplace', 20.0005, -130.1215, 15000)
    cc.addCity(3, 'Another Place', -11.3934, 88.2855, 50000)

    expect(cc.whichSphere(3)).toEqual('Southern Hemisphere')

    expect(cc.getMostNorthern()).toEqual('BlackDiamond')
    expect(cc.getMostSouthern()).toEqual('Another Place')

    expect(cc.getPopulation()).toEqual(67700)

    expect(cc.deleteCity(2))
    .toEqual([{id: 1, latitude: 50.6884, longitude: 114.2326, name: "BlackDiamond", population: 2700},
              {id: 3, latitude: -11.3934, longitude: 88.2855, name: "Another Place", population: 50000}])

})

test('test equator', () => {
  let comm = new CommunityClass()
  comm.addCity(1, 'testing', 0, 0, 100)
  expect(comm.whichSphere(1)).toEqual('On the Equator')
})
