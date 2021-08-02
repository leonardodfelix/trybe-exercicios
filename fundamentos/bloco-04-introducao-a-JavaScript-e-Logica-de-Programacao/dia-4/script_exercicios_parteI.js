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

let infos = [info, otherInfo]

for (let key in infos){
  for (let keys in infos[key])
  if (infos[key][keys] === 'Sim'){
    console.log('Ambos');
  } else {
    console.log(infos[key][keys] + ' e ' + infos[key][keys]);
  }
}