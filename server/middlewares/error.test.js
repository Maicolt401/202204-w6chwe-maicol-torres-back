const { notFoundError } = require("./error");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe("Given a notFoundError function", () => {
  describe("When it's invoked with a responses", () => {
    test("Then it should call the response status method with a 404", () => {
      const expectedResult = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });

    test("Then it should call the response json method with a msg '404 Page Not Found'", () => {
      const expectedMsg = { msg: "404 endpoint Not Found" };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedMsg);
    });
  });
});
