'use strict'

function pluck(inputArr, property) {
  return inputArr.map( (obj) => {
    return obj[property]
  })
}

module.exports = pluck
