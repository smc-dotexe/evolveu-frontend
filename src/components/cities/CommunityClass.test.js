import CommunityClass from './CommunityClass'

test('test if community class functions work.', () => {
  let cc = new CommunityClass()

    expect(cc.counterIncrease()).toBe(1)

    cc.addCity(1, 'BlackDiamond', 50.6884, 114.2326, 2700)

    expect(cc.communityArr)
      .toEqual([{id: 1, latitude: 50.6884, longitude: 114.2326, name: "BlackDiamond", population: 2700}])

    cc.addCity(2, 'Someplace', 20.0005, -130.1215, 15000)
    cc.addCity(3, 'Another Place', -11.3934, 88.2855, 50000)

    

})
