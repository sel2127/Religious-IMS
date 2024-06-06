const request = require('supertest');  // Library for making HTTP requests
const app = require('../index');  // Your main application file

describe('Login tests', () => {
  it('should login with valid credentials', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'johndoe', password: 'secret123' })
      .expect(200);

    // Assertions about the response (e.g., token presence)
    expect(response.body).toHaveProperty('token');
  });

  it('should fail login with invalid credentials', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'invalid_user', password: 'wrong_password' })
      .expect(401);

    // Assertions about the error response
    expect(response.body).toHaveProperty('error');
  });
});