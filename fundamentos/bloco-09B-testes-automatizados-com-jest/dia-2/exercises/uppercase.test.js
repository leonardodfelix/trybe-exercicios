const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas', (done) => {
  uppercase('abc', (result) => {
    try {
      expect(result).toBe('ABC');
      done();
    } catch(error) {
      done(error);
    }
  });
});