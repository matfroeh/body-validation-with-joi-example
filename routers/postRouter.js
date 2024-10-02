import { Router } from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/posts.js';
import { validatePostSchema } from '../middleware/validateSchema.js';

const postRouter = Router();

postRouter.route('/').get(getPosts).post(validatePostSchema, createPost);
postRouter.route('/:id').get(getPostById).put(validatePostSchema, updatePost).delete(deletePost);

export default postRouter;
