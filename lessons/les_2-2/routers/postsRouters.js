const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const config = require("../config");

const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const {
  ROUTERS: { POSTS, POST },
} = config;

router.get(POSTS, async (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get(`${POST}/:id`, async (req, res) => {
  const id = String(req.params.id);

  const [post] = posts.filter((item) => String(item.id) === id);

  if (!post) {
    return res.status(400).json({ status: `Not found post with id ${id}` });
  }

  res.status(200).json(post);
});

router.delete(`${POST}/:id`, async (req, res) => {
  try {
    const id = String(req.params.id);
    res.status(200).json(posts.filter((el) => String(el.id) !== id));
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post(POST, async (req, res) => {
  try {
    const { title, body } = req.body;

    const schema = Joi.object({
      title: Joi.string().alphanum().min(4).max(20).required(),
      body: Joi.string().alphanum().min(10).max(40).required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }

    res.status(200).json(posts.concat({ id: uuidv4(), title, body }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put(`${POST}/:id`, async (req, res) => {
  try {
    const id = String(req.params.id);
    const { title, body } = req.body;

    res
      .status(200)
      .json(
        posts.map((el) => (String(el.id) === id ? { ...el, title, body } : el))
      );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
