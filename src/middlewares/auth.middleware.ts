import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Users from '../interfaces/user.interface';
import { verifyToken } from '../utils/jwt.util';

const createToken = async (login: Users) => {
  const token = jwt
    .sign({ login }, process.env.JWT_SECRET as string);
  return token;
};

const validation = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValid = verifyToken(token);

  if (tokenValid.type) {
    return res.status(401).json({ message: tokenValid.message });
  }

  req.body.user = tokenValid.data;

  next();
};
  
export default {
  createToken, 
  validation,
};