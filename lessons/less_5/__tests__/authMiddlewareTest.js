const { authMiddleware } = require("../src/middlewares/authMiddleware");
const { NotAuthorizedError } = require("../src/helpers/errors");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

describe("Auth middleware test", () => {
  it("should call next() and add user token properties to req object", () => {
    const user = {
      _id: "1",
      createdAt: new Date().getTime(),
    };

    const token = jwt.sign(
      {
        _id: user._id,
        createdAt: user.createdAt,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    const mocReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const mocRes = {};

    const mocNext = jest.fn();

    authMiddleware(mocReq, mocRes, mocNext);

    expect(mocReq.token).toEqual(token);
    expect(mocReq.user._id).toEqual(user._id);
    expect(mocReq.user.createdAt).toEqual(user.createdAt);
    expect(mocNext).toHaveBeenCalled();
  });

  it("should call next() with error in case authorization header is absent", () => {
    const mocReq = {
      headers: {},
    };

    const mocRes = {};

    const mocNext = jest.fn();

    authMiddleware(mocReq, mocRes, mocNext);

    expect(mocNext).toHaveBeenCalledWith(
      new NotAuthorizedError("Please, provide a  Bearer token")
    );
  });
});
