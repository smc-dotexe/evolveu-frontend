import CityClass from './CityClass'

test('test if CityClass functions work', () => {
  let city = new CityClass(1, 'Calgary', 51.0486, 114.0708, 500000)
    expect(city.show()).toBe('Name: Calgary, Latitude: 51.0486, Longitude: 114.0708, Population: 500000')
    city.movedIn(250000)
    expect(city.population).toBe(750000)
    city.movedOut(100000)
    expect(city.population).toBe(650000)
    expect(city.howBig()).toBe('City')
})

test('default values of CityClass', () => {
  let city = new CityClass()
  expect(city.name).toEqual('a place')
})

test('create myCity', () => {
  let myCity = new CityClass(1, 'mycity', 100, 100, 10000)
  expect(myCity.population).toBe(10000)

  let myFav = myCity
  expect(myFav.population).toBe(10000)

  myCity.movedIn(100)
  expect(myCity.population).toBe(10100)
  expect(myFav.population).toBe(10100)

  myFav.movedIn(500)
  expect(myCity.population).toBe(10600)
  expect(myFav.population).toBe(10600)
})

test('remaining test coverage lines ', () => {
  let city = new CityClass(1, 'City A', 100, 100, 101)

  expect(city.howBig()).toEqual('Village')
  city.movedOut(50)
  expect(city.howBig()).toEqual('Hamlet')
  city.movedIn(1500)
  expect(city.howBig()).toEqual('Town')
  city.movedIn(25000)
  expect(city.howBig()).toEqual('Large Town')
  city.movedOut(50000)
  expect(city.howBig()).toEqual(null)
})
