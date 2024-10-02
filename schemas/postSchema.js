import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  content: Joi.string().max(5000).required(),
  userId: Joi.number().integer().required(),
});

export default postSchema;