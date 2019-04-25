import CityClass from './CityClass'

class Community {
  constructor(communityArr, counter) {
    this.communityArr = []
    this.counter = 0
  }
    counterIncrease() {
      this.counter += 1
      return this.counter
  }

    addCity(name, latitude, longitude, population) {
      this.counterIncrease()
      let city = new CityClass(this.counter, name, latitude, longitude, population)
      this.communityArr.push(city)
      return this.communityArr
  }

    whichSphere(a) {
      console.log('a whichsphere ', a)
      let x = this.findCityIndex(a)
      console.log('x whichsphere ', x)
      if (this.communityArr[x].latitude > 0) {
        return 'Northern Hemisphere'
      } else if (this.communityArr[x].latitude < 0) {
        return 'Southern Hemisphere'
      } else {
        return 'On the Equator'
      }
  }

    getMostNorthern() {
      if (this.communityArr.length > 0) {
          const maxNorth = this.communityArr.reduce((a, b) => (a.latitude > b.latitude) ? a : b)
          return maxNorth.name
      } else {
          return null
      }
  }

    getMostSouthern() {
      if (this.communityArr.length > 0) {
          const maxSouth = this.communityArr.reduce((a, b) => (a.latitude < b.latitude) ? a : b)
          return maxSouth.name
      } else {
          return null
      }
  }

    getPopulation() {
      let h = this.communityArr.reduce((acc,val)=>acc+val.population, 0)
      return h
  }

    findCityIndex(s) {
      let x = this.communityArr.findIndex(function(e){return e.id === s})
      return x
  }

    deleteCity(a) {
      if (this.communityArr.length === 0) {
        return
      } else {
      let x = this.findCityIndex(a)
      this.communityArr.splice(x, 1)
      return this.communityArr
      }
  }

    showDetail(a) {
      let x = this.findCityIndex(a)
      let city = new CityClass()
      city.show(a)
  }
}

export default Community
