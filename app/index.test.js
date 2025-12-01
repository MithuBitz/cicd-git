const request = require("supertest");
const app = require("./index");

describe("Express App", () => {
  it("GET / returns Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });

  it("GET /:id returns Hello World with ID", async () => {
    const res = await request(app).get("/mithu");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World mithu");
  });
});
