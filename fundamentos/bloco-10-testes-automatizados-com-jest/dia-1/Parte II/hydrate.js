function hydrate(string) {
  let numsFromString = string.match(/\d/g);
  let sum = 0;
  for (let elem of numsFromString) {
    sum += parseInt(elem, 10);
  }
  return (sum === 1) ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = hydrate;