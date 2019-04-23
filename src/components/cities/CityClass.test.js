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
