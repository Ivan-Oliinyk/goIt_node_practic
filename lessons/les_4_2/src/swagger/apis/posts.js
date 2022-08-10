/**
 * @swagger
 * components:
 *    schemas:
 *     Post:
 *        type: object
 *        required:
 *          - title
 *        properties:
 *          id:
 *            type: String
 *            description: The auto-generated id of the Post by MongoDB
 *          title:
 *            type: String
 *            description: The title of post
 *          body:
 *            type: String
 *            description: The post description
 *          createdAt:
 *            type: Date
 *            description: Generate data when post created automatically
 *        example:
 *          title: Poly
 *          body: Some text description,
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: The posts managing API
 */

// get all posts
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Returns the list of all the posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

// get one post by id
/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: The post was not found
 */

// create the post
/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

// remove post

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Remove the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *
 *     responses:
 *       200:
 *         description: The post was deleted
 *       404:
 *         description: The post was not found
 */
