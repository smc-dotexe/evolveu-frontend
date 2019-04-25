import CommunityClass from './CommunityClass'

test('test if community class functions work.', () => {
  let cc = new CommunityClass()

    expect(cc.counterIncrease()).toBe(1)

    cc.addCity('BlackDiamond', 50.6884, 114.2326, 2700)

    expect(cc.communityArr)
      .toEqual([{id: 2, latitude: 50.6884, longitude: 114.2326, name: "BlackDiamond", population: 2700}])

    cc.addCity('Someplace', 20.0005, -130.1215, 15000)
    cc.addCity('Another Place', -11.3934, 88.2855, 50000)
    expect(cc.communityArr[1].name).toEqual('Someplace')

    expect(cc.whichSphere(4)).toEqual('Southern Hemisphere')

    expect(cc.getMostNorthern()).toEqual('BlackDiamond')
    expect(cc.getMostSouthern()).toEqual('Another Place')

    expect(cc.getPopulation()).toEqual(67700)

    cc.deleteCity(3)
    expect(cc.communityArr)
    .toEqual([{id: 2, latitude: 50.6884, longitude: 114.2326, name: "BlackDiamond", population: 2700},
              {id: 4, latitude: -11.3934, longitude: 88.2855, name: "Another Place", population: 50000}])

})

test('test equator', () => {
  let comm = new CommunityClass()
  comm.addCity('testing', 0, 0, 100)
  expect(comm.whichSphere(1)).toEqual('On the Equator')
})
