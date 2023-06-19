import Joi from "joi";

export default (req, res, next) => {
  const addBookSchema = Joi.object({
    name: Joi.string().required,
  });
  const { error } = addBookSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).send;
  next();
};
