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

// Ex.5

let otherInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info){
  if (info[key] === 'Sim' && otherInfo[key] === 'Sim'){
    console.log('Ambos');
  } else {
    console.log(info[key] + ' e ' + otherInfo[key]);
  }
}