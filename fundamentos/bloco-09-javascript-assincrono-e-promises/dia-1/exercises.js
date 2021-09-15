//#region 1 and 2
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
//#endregion

//#region 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos
//#endregion

//#region 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (getTemp) => {
  const temp = getTemp();
  const message = `Mars temperature is: ${temp} degree Celsius`;
  setTimeout(() => console.log(message), messageDelay());
};

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
//#endregion

//#region 5
const messageDelay5 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature5 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature5 = (callback) => {
  const temp = getMarsTemperature5();
  setTimeout(() => callback(temp), messageDelay());
};

sendMarsTemperature5(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
sendMarsTemperature5(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
//#endregion

//#region 6
const messageDelay6 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature6 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit6 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit6 = (temperature) =>
  console.log(`It is currently ${toFahrenheit6(temperature)}ºF at Mars`);

const greet6 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError6 = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const isSuccessfull = () => Math.random() < .6;

const sendMarsTemperature6 = (callback, error) => {
  const temp = getMarsTemperature6();
  setTimeout(() => (isSuccessfull()) ? callback(temp) : error('Mars exploded'), messageDelay6());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature6(temperatureInFahrenheit6, handleError6);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature6(greet6, handleError6);
//#endregion
