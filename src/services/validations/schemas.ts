import Joi from 'joi';

const userNameSchema = Joi.string().required();
const passwordSchema = Joi.string().required();

const nameSchema = Joi.string().min(3).required();
const amountSchema = Joi.string().min(3).required();

const usernameSchema = Joi.string().min(3).required();
const classeSchema = Joi.string().min(3).required();
const levelSchema = Joi.number().min(1).required();
const passwordSchemas = Joi.string().min(8).required();
const productsIdsSchema = Joi.array().items(Joi.number()).required();

const productSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

const userSchema = Joi.object({
  username: usernameSchema,
  classe: classeSchema,
  level: levelSchema,
  password: passwordSchemas,
});

export {
  userNameSchema,
  passwordSchema,
  nameSchema,
  amountSchema,
  productSchema,
  userSchema,
  productsIdsSchema,
};