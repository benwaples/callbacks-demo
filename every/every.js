function every(array, callback) {
  let passable = true;

  for( item of array) {
    if(!callback(item)) 
    passable = false;
  }

  return passable;
}

module.exports = every;
