// Prática
// 1 de 3
const personData = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { nomeCompleto: name, email: `${email}@trybe.com` }
};

const newEmployees = (personData) => {
  const employees = {
    id1: personData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: personData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: personData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(personData));

// 2 de 3
const randomNumber = Math.floor((Math.random() * 5) + 1);

const checkNumber = (lotoNumber) => (randomNumber === lotoNumber);

const lotoResult = (lotoNumber, checkNumber) => (checkNumber(lotoNumber)) ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(lotoResult(2, checkNumber));

// 3 de 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (rightAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') return 0;
  if (studentAnswer === rightAnswer) return 1;
  return -0.5;
}

const calculateGrade = (rightAnswers, studentAnswers, checkAnswer) => {
  let grade = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    grade += checkAnswer(rightAnswers[index], studentAnswers[index]);
  }
  return grade;
};

console.log(calculateGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));