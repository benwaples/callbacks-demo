const every = require("./every")

describe('every array method', () => {
  it('should return true if all items pass callback evaluation', () => {
    const numbers = [1, 2, 3, 4, 5]

    const isNumber = number => typeof number === 'number'
    const actual = every(numbers, isNumber)

    expect(actual).toEqual(true)
  })

  it('should return false when one thing doesnt pass callback eval', () => {
    const numbers = [1, 2, 3, 4, 'hello world']

    const isNumber = number => typeof number === 'number'
    const actual = every(numbers, isNumber)
    
    expect(actual).toEqual(false)
  })
})