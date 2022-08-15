const { getPostsById } = require("../src/services/post.service");
const { WrongParamsError } = require("../src/helpers/errors");
const { Post } = require("../src/db/models/postModel");

describe("Posts service getPostById test", () => {
  it("should return post data by provider ID", async () => {
    const mPostId = "1";

    const post = {
      _id: mPostId,
      userId: 1,
      title: "title",
      body: "body",
      price: 10,
      isVisible: true,
    };

    jest.spyOn(Post, "findOne").mockImplementationOnce(async () => post);

    const results = await getPostsById(mPostId);

    expect(results._id).toEqual(mPostId);
    expect(results.title).toBeDefined();
    expect(results.body).toBeDefined();
    expect(results.price).toBeDefined();
    expect(results.isVisible).toBeDefined();
  });
});
