const map = require('./map')

describe('make map function', () => {
  it('should alter ever element in array', () => {
    const numbers = [1,2,3,4,5]

    const actual = map(numbers, (i) => i + 1)

    expect(actual).toEqual([
      2,
      3,
      4,
      5,
      6
    ])

    expect(numbers).toEqual([1,2,3,4,5])
  })
})