function findIndex(array, callback) {
  let position = undefined
  for(let i = 0; i < array.length; i++) {
    position = callback(array[i]) ? i : undefined
  }

  return position
}

module.exports = findIndex