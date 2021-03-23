const reduce = require("./reduce")

describe('reduce array method', () => {
  it('should return a new array based evaluation in an array', () => {
    const numbers = [1, 2, 3, 4, 5, 6]

    const reducer = (acc, curr) => acc + curr

    const actual = reduce(numbers, reducer, 0)

    expect(actual).toEqual(21)
  })

  it('should return a new array based evaluation in an array without initial value', () => {
    const numbers = [1, 2, 3, 4, 5, 6]

    const reducer = (acc, curr) => acc + curr

    const actual = reduce(numbers, reducer)
    
    expect(actual).toEqual(22)
  })
})