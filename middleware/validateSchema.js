import userSchema from "../schemas/userSchema.js";
import postSchema from "../schemas/postSchema.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const validateUserSchema = async (req, res, next) => {
  try {
    const { error } = await userSchema.validateAsync(req.body);
    if (error) {
      return next(new ErrorResponse(error.message, 404));
    }
  } catch (error) {
    return next(new ErrorResponse(error.message, 404));
  }
  next();
};

const validatePostSchema = async (req, res, next) => {
  try {
    const { error } = await postSchema.validateAsync(req.body);
    if (error) {
      return next(new ErrorResponse(error.message, 404));
    }
  } catch (error) {
    return next(new ErrorResponse(error.message, 404));
  }
  next();
};

export { validateUserSchema, validatePostSchema };
