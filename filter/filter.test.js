const filter = require('./filter')

describe('filter array method', () => {
  it('filter out certain items', () => {
    const words = ['hello', 
    'my', 
    'name', 'is', 'lavender', 'ben']

    function notL(word) {
      return word.charAt(0).toUpperCase() !== 'L' 
    }

    const actual = filter(words, notL)

    expect(actual).toEqual([
      'hello', 
      'my', 
      'name', 
      'is', 
      'ben'
    ])
  })
})