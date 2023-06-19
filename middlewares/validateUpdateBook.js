import Joi from "joi";

export default (req, res, next) => {
  const updateBookSchema = Joi.object({
    name: Joi.string().required,
    author: Joi.string().required,
  });
  const { error } = updateBookSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).send({ok:'false', error: error});
  next();
};
