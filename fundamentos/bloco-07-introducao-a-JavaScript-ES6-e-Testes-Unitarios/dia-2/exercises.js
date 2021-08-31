// Parte I
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1 de 2
const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para:${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}

const result1 = customerInfo(order);
console.log(result1);

// 2 de 2
order.name = 'Luiz Silva';
order.payment = 50;

const orderModifier = (order) => {
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${order.order.drinks.coke.type} é R$ ${order.payment},00.`
}

const result2 = orderModifier(order);
console.log(result2);

// Parte 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 de 8
function addKeyValue(targetObj, key, value) {
  targetObj[key] = value;
}

addKeyValue(lesson2, 'turno', 'manhã');
console.table(lesson2);

// 2 de 8
function listKeys(targetObj) {
  console.log(Object.keys(targetObj));
}
listKeys(lesson1);

// 3 de 8
function showObjSize(targetObj) {
  console.log(Object.keys(targetObj).length);
}
showObjSize(lesson3);

// 4 de 8
function listValues(targetObj) {
  console.log(Object.values(targetObj));
}
listValues(lesson2);

// 5 de 8
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

// 6 de 8
function somaEstudantes(targetObj) {
  const lessons = Object.values(targetObj);
  let sum = 0;
  lessons.forEach((lesson) => sum += lesson.numeroEstudantes);
  return sum;
}

console.log(somaEstudantes(allLessons));

// 7 de 8
function getValueByNumber(lessonObj, num) {
  return Object.values(lessonObj)[num];
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8 de 8
function verifyPair(lessonObj, lessonKey, keyValue) {
  return (lessonObj[lessonKey] === keyValue) ? true : false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bônus
// 1 de 2
function somaEstudantesMat(targetObj) {
  const lessons = Object.values(targetObj);
  let sum = 0;
  lessons.forEach((lesson) => (lesson.materia === 'Matemática') ? sum += lesson.numeroEstudantes : sum);
  return sum;
}

console.log(somaEstudantesMat(allLessons));

// 2 de 2
function createReport(lessonsObj, professor) {
  const lessons = Object.values(lessonsObj);
  let estudantes = 0;
  let aulas = [];
  lessons.forEach((lesson) => {
    if (lesson.professor === professor) {
      estudantes += lesson.numeroEstudantes;
      aulas.push(lesson.materia);
    }
  });
  return {professor, aulas, estudantes};
}

console.log(createReport(allLessons, 'Maria Clara'));