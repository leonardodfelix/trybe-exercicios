const service = require('./service')

test('Exercício 1', () => {
  service.randomNum = jest.fn().mockReturnValue(10);
  expect(service.randomNum()).toBe(10);
  expect(service.randomNum).toHaveBeenCalledTimes(1);
})

test('Exercício 2', () => {
  service.randomNum = jest.fn().mock
  expect(service.randomNum()).toBe(10);
  expect(service.randomNum).toHaveBeenCalledTimes(1);
})