import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.util';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
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

export default validateToken;