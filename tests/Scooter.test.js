const { TestWatcher } = require('jest')
const Scooter = require('../src/Scooter')
const User = require('../src/User')



//typeof scooter === object
describe('Creating a new Scooter', () => {
  let newScooter = new Scooter("Bristol", "Anisha")

  test("Scooter is an object", () => {
    expect(typeof newScooter).toBe("object")
  })

  test("User is correct", () => {
    expect(newScooter.user).toBe("Anisha")
  })
  test("Station is correct", () => {
    expect(newScooter.station).toBe("Bristol")
  })
  test("Serial is an integer between 1 and 1000", () => {
    expect(newScooter.serial).toBeGreaterThanOrEqual(1)
    expect(newScooter.serial).toBeLessThanOrEqual(1000)
  })
  test("Charge is an integer between 1 and 100", () => {
    expect(newScooter.charge).toBeGreaterThanOrEqual(1)
    expect(newScooter.charge).toBeLessThanOrEqual(100)
  })
  test("isBroken is set to false", () => {
    expect(newScooter.isBroken).toBe(false)
  })
  test("docked is set to true", () => {
    expect(newScooter.docked).toBe(true)
  })
})

describe("Methods", () => {
  describe("rent()", () => {
    let newScooter = new Scooter("Bristol", "Anisha")
    test("When isBroken is false and charge > 20", () => {
      newScooter.isBroken = false
      newScooter.charge = 23
      newScooter.rent()
      expect(newScooter.docked).toBe(false)
    })
    test("When charge <= 20", () => {
      newScooter.isBroken = false
      newScooter.charge = 18
      expect(() => {newScooter.rent()}).toThrow("Scooter low on battery, please charge.")
    })
    test("When isBroken is true and charge > 20", () => {
      newScooter.isBroken = true
      newScooter.charge = 25
      expect(() => {newScooter.rent()}).toThrow("Scooter is broken, please send a repair request.")
    })
  })
})
// describe('scooter methods', () => {
//   // tests here!

//   //rent method

//   //dock method

//   //requestRepair method

//   //charge method

// })
