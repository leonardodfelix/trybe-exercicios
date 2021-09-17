// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// npm install node-fetch@^2

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");