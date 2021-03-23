const findIndex = require('./findIndex')

describe('findIndex array method', () => {
  it('findIndex of certain item in a given array', () => {
    const items = [1, 2, 3, 4, 'hi', 3, 3, 5]

    const find5 = num => num === 5

    const actual = findIndex(items, find5)

    expect(actual).toEqual(7)
  })
})