const fetchProduct = require('../async.js');

describe('Async', () => {
  const object = { item: 'Milk', price: 200 };

  // 지양
  it('async - done', (done) => {
    fetchProduct('milk').then(product => {
      expect(product).toEqual(object);
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct('milk').then(product => {
      expect(product).toEqual(object);
    });
  });


  it('async - await', async () => {
    const product = await fetchProduct('milk');
    expect(product).toEqual(object);
  });

  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual(object);
  });

  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');

  });
})

