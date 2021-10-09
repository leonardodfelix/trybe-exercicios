describe('Jest', () => {
  test('Brincando com expect', () => {
    const expectA = expect(true).toBeTruthy();
    const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
    const expectC = expect(Promise.reject(new Error('ERROR')))
      .rejects.toEqual(new Error('ERROR'));
    console.log('expect', expectA);
    console.log('expect.resolves', expectB);
    console.log('expect.rejects', expectC);
  });
});