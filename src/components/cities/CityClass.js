class City {
  constructor(id, name, latitude, longitude, population){
    this.id = id
    this.name = name
    this.latitude = latitude
    this.longitude = longitude
    this.population = population
  }

  show() {
    let x = `Name: ${this.name}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`
    return x
  }

  movedIn(a) {
    let x = this.population += a
    return x
  }

  movedOut(a) {
    let x = this.population -= a
    return x
  }

  howBig(a) {
    if (this.population > 100000) {
        return 'City'
      } else if (this.population > 20000 && this.population <= 100000) {
        return 'Large Town'
      } else if (this.population > 1000 && this.population <= 20000) {
        return 'Town'
      } else if (this.population > 100 && this.population <= 1000) {
        return 'Village'
      } else if (this.population >= 1 && this.population <= 100) {
        return 'Hamlet'
      } else {
        return null
      }
  }

}

export default City
