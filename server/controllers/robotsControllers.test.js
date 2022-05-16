const mockRobots = require("../mocks/robots");
const getRobots = require("./robotsControllers");

jest.mock("../../db/models/robot", () => ({
  ...jest.requireActual("../../db/models/robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe(" Given a getRobots funtion", () => {
  describe(" Whenit`s invoked with a response", () => {
    test("hen it should call the response method status with 200", async () => {
      const expectStatus = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectStatus);
    });
  });
  test("Then it should call the method json with a list to robots", () => {
    const expetecRobots = [
      {
        id: 1,
        name: "valdimir",
        yearCreation: 1998,
        energy: "98%",
        image:
          "https://d3lqdljps13i2n.cloudfront.net/recursos/109/3518975/imagen_1_1518624548.jpg",
      },
    ];
    getRobots(null, res);

    expect(res.json).toHaveBeenCalledWith({ robots: expetecRobots });
  });
});
