class Scooter{
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random()*1000+1)
    this.charge = Math.floor(Math.random()*100+1)
    this.isBroken = false
    this.docked = true
  }

  rent() {
    if (this.isBroken === false && this.charge > 20) {
        this.docked = false
        console.log("Enjoy the ride!")
    } else if (this.charge <=20) {
      throw "Scooter low on battery, please charge."
    } else {
      throw "Scooter is broken, please send a repair request."
    }
  }
}

module.exports = Scooter
