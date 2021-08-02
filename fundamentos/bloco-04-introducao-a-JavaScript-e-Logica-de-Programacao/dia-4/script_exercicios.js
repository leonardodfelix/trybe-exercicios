// Parte I

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Ex.1

console.log('Bem-vinda, ' + info.personagem);

// Ex.2

info['recorrente'] = 'Sim';

console.log(info);

// Ex.3

for (let key in info){
    console.log(key);
}

// Ex.4

for (let key in info){
  console.log(info[key]);
}
