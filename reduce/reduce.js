function reduce(array, callback, initialValue = array[0]) {
  let accumulator = initialValue

  for(let i = 0; i < array.length; i++ ) {
    accumulator = callback(accumulator, array[i])
  }

  return accumulator
}

module.exports = reduce;
