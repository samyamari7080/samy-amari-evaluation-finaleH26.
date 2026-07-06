const request = require('supertest');

describe('API Produits', () => {
  it('GET /api/products devrait retourner un statut 200 et une liste de produits', async () => {
    const response = await request('http://127.0.0.1:3000')
      .get('/api/products');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});