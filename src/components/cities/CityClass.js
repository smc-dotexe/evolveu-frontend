import CommunityClass from './CommunityClass'

// const commClass = new CommunityClass()
// const arr = commClass.communityArr
class City {
  constructor(id = 0, name = 'a place', latitude = 0, longitude = 0, population = 0){
    this.id = id
    this.name = name
    this.latitude = latitude
    this.longitude = longitude
    this.population = population
  }

  show() {
    return `Name: ${this.name}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`
  }

  movedIn(a, b) {
    return this.population += a
  }

  movedOut(a, b) {
    return this.population -= a
  }

  howBig() {
    let x = this.population
    if (x > 100000) {
        return 'City'
      } else if (x > 20000 && x <= 100000) {
        return 'Large Town'
      } else if (x > 1000 && x <= 20000) {
        return 'Town'
      } else if (x > 100 && x <= 1000) {
        return 'Village'
      } else if (x >= 1 && x <= 100) {
        return 'Hamlet'
      } else {
        return null
      }
  }

}

export default City
