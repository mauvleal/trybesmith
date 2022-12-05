import jwt from 'jsonwebtoken';
import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import Users from '../interfaces/user.interface';

const createToken = async (login: Users) => {
  const token = jwt
    .sign({ login }, process.env.JWT_SECRET as string);
  return token;
};

const validation = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  next();
};
  
export default {
  createToken, 
  validation,
};