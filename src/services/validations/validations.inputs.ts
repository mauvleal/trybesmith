import Login from '../../interfaces/login.interface';
import Product from '../../interfaces/product.interface';
import Users from '../../interfaces/user.interface';
import { 
  userNameSchema, passwordSchema, productSchema, userSchema, productsIdsSchema } from './schemas';

const verifyLogin = async ({ username, password }: Login) => {
  const { error } = userNameSchema.validate(username);

  if (error) {
    return { type: 'BAD_REQUEST', message: '"username" is required' };
  }

  const error2 = passwordSchema.validate(password);

  if (error2.error) {
    return { type: 'BAD_REQUEST', message: '"password" is required' };
  }

  return { type: null, message: '' };
};

const verifyProduct = async (product: Product) => {
  const { error } = productSchema.validate(product);
  
  if (error && error.details[0].message.includes('required')) {
    return { type: 'BAD_REQUEST', message: error.details[0].message };
  }
  
  if (error) {
    return { type: 'INVALID_VALUE', message: error.details[0].message };
  }

  return { type: null, message: '' };
};

const verifyUser = async (user: Users) => {
  const { error } = userSchema.validate(user);

  if (error && error.details[0].message.includes('required')) {
    return { type: 'BAD_REQUEST', message: error.details[0].message };
  }
  
  if (error) {
    return { type: 'INVALID_VALUE', message: error.details[0].message };
  }

  return { type: null, message: '' };
};

const verifyProductsIds = async (productsIds: number[]) => {
  const { error } = productsIdsSchema.validate(productsIds);
  
  if (error && error.details[0].message.includes('required')) {
    return { type: 'BAD_REQUEST', message: '"productsIds" is required' };
  }
  
  if (error) {
    return { type: 'INVALID_VALUE', message: '"productsIds" must be an array' };
  }

  if (!productsIds.length) {
    return { type: 'INVALID_VALUE', message: '"productsIds" must include only numbers' };
  }

  return { type: null, message: '' };
};

export {
  verifyLogin,
  verifyProduct,
  verifyUser,
  verifyProductsIds,
};