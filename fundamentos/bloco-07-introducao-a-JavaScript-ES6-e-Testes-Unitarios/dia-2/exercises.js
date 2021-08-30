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
