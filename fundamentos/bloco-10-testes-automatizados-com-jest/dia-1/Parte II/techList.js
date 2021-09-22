// function techList(array, name1) {
//   let list = [];
//   array.sort();
//   for (let elem of array) {
//     let obj = {
//       tech: elem,
//       name: name1,
//     };
//     list.push(obj);
//   }
//   return (array[0]) ? list : 'Vazio!';
// }

const techList = (array, name1) => (array.length === 0) ? 'Vazio!' : array.sort().map(e => ({ tech: e, name: name1}));

module.exports = techList;