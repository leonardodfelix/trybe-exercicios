// function vowelToNum(char) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let nums = ['1', '2', '3', '4', '5'];
//   for (let index in vowels) {
//     if (char === vowels[index]) {
//       return nums[index];
//     }
//   }
//   return char;
// }

// function encode(string) {
//   let encodedString = '';
//   for (let char of string) {
//     encodedString += vowelToNum(char);
//   }
//   return encodedString;
// }

// function numToVowel(char) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let nums = ['1', '2', '3', '4', '5'];
//   for (let index in nums) {
//     if (char === nums[index]) {
//       return vowels[index];
//     }
//   }
//   return char;
// }

// function decode(string) {
//   let decodedString = '';
//   for (let char of string) {
//     decodedString += numToVowel(char);
//   }
//   return decodedString;
// }

const code1 = { a: 1, e: 2, i: 3, o: 4, u: 5 };
const encode = (string) => [...string].map(l => (code1[l]) ? code1[l] : l).join('');

const code2 = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
const decode = (string) => [...string].map(l => (code2[l]) ? code2[l] : l).join('');

describe('Para as funções encode e decode crie os testes', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('aeiou')).toBe('aeiou');
    expect(encode('12345')).toBe('12345');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('aeiou').length).toBe(5);
    expect(decode('12345').length).toBe(5);
  });
});