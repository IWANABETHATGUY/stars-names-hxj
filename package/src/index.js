const names = require('./name');

const random = () => {
  const nameArray = JSON.parse(JSON.stringify(names));
  return nameArray[Math.floor(Math.random() * nameArray.length)];
};
const unique = arr => [...new Set(arr)];
module.exports = {
  unique,
  random,
};
