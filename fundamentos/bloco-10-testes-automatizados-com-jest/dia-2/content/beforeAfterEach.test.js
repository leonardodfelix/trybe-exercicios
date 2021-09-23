const {
  resetCities,
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
} = require('./beforeAfterEach');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  afterEach(() => {
    resetCities();
  });

  it('should have only 1 city after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1);
  });

  it('should have 2 cities after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from api', () => {
  beforeEach(() => requestCities());

  afterEach(() => {
    resetCities();
  });

  it('should have 8 cities after requesting from api', () => {
    const cities = getCities();
    expect(cities.length).toBe(8);
  });

  it('should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });

  it('should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });

  it('should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });

  it('should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });

  it('should have the city of Goiânia', () => {
    expect(isCity('Goiânia')).toBeTruthy();
  });

  it('should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });

  it('should have the city of Piauí', () => {
    expect(isCity('Piauí')).toBeTruthy();
  });
});