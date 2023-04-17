const request = require("supertest");
const app = require("./app");

describe("GET / ", () => {
  test('It should respond with message object', async () => {
    const response = await request(app).get('/')
    expect(response.body).toEqual({ message: 'Hello World!' });
    expect(response.statusCode).toBe(200);
  })
});
