function map(array, callback) {
  const copyArray = [...array]

  for(let i = 0; i < copyArray.length; i ++) {
    copyArray[i] = callback(copyArray[i])
    
  }

  return copyArray
}

module.exports = map
