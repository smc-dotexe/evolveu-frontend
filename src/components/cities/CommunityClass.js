import CityClass from './CityClass'

class Community {
  constructor(cityArr, counter) {
    this.communityArr = []
    this.counter = 0
  }
    counterIncrease() {
      this.counter += 1
      return this.counter
    }

    addCity(counter, name, latitude, longitude, population) {
      this.counterIncrease()
      let city = new CityClass(counter, name, latitude, longitude, population)
      this.communityArr.push(city)
      return this.communityArr
    }

    whichSphere(a) {
      if (this.cityArr[a].longitude > 0) {
        return 'Northern Hemisphere'
      } else if (this.cityArr[a].longitude < 0) {
        return 'Southern Hemisphere'
      } else {
        return 'On the Equator'
      }
    }
}

export default Community
