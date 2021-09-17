const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => (response).json())
    .then(data => console.log(data));
};

const promise = new Promise((resolve, reject) => {
  const randomArr = [];
  for (let index = 1; index <= 10; index +=1) {
    const randomNum = Math.floor((Math.random() * 50) + 1);
    randomArr.push(randomNum*randomNum);
  }
  const arraySum = randomArr.reduce((acc, curr) => acc + curr);
  if (arraySum < 8000) {
    return resolve(arraySum);
  }
  reject(console.log(`Soma deu : ${arraySum}`));
})
.then((arraySum) => {
  const successArray = [parseFloat((arraySum / 2).toFixed(2)), 
  parseFloat((arraySum / 3).toFixed(2)), 
  parseFloat((arraySum / 5).toFixed(2)),
  parseFloat((arraySum / 10).toFixed(2)),];
  console.log(`Success, novo array: ${successArray}`);
  return arraySum;
})
.then((arraySum) => console.log(arraySum))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

window.onload = () => fetchJoke();