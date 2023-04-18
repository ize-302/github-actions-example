const request = require("supertest");
const app = require("./app.js");

// describe("GET / ", () => {
//   test('It should respond with message object', async () => {
//     // const response = await request(app).get('/')
//     // expect(response.body).toEqual({ message: 'Hello World!' });
//     // expect(response.statusCode).toBe(200);
//   })
// });


describe("GET / ", () => {
  describe('It should respond with message object', () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: 'Hello World!' });
    })
  })
});