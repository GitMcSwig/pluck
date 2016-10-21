'use strict'

function pluck(inputArr, property) {
  console.log(inputArr, property)
  if (inputArr) {
    return [ inputArr[0][property] ]
  }
  return []
}

module.exports = pluck
