'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var names = require('./name');

var random = function random() {
  var nameArray = JSON.parse(JSON.stringify(names));
  return nameArray[Math.floor(Math.random() * nameArray.length)];
};
var unique = function unique(arr) {
  return [].concat(_toConsumableArray(new Set(arr)));
};
module.exports = {
  unique: unique,
  random: random
};