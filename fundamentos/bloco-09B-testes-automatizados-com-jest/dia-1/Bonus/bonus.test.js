const bonus = require('./bonus.js');

describe('função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities )', () => {
  it('Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada', () => {
    expect(bonus('8579-6', 'firstName')).toBe('Ana');
    expect(bonus('5569-4', 'lastName')).toBe('Jobs');
    expect(bonus('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  it('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
    expect(() => { bonus('666','firstName') }).toThrowError(new Error('ID não identificada'));
  });
  it('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível"', () => {
    expect(() => { bonus('4678-2','age') }).toThrowError(new Error('Informação indisponível'));
  });
})