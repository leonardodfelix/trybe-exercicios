const { getRepos, URL } = require('./getRepos');

test('Verifica repositórios na lista', () => (
  getRepos(URL).then((result) => {
    const url1 = 'sd-01-week4-5-project-todo-list';
    const url2 = 'sd-01-week4-5-project-todo-list';
    expect(result.includes(url1) && result.includes(url2)).toBe(true);
  })
))

test('Verifica repositórios na lista', async () => {
  const result = await getRepos(URL);
  const url1 = 'sd-01-week4-5-project-todo-list';
  const url2 = 'sd-01-week4-5-project-todo-list';
  expect(result).toContain(url1);
  expect(result).toContain(url2);
});