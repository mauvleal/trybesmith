import Joi from 'joi';

const userNameSchema = Joi.string().required();
const passwordSchema = Joi.string().required();

export {
  userNameSchema,
  passwordSchema,
};