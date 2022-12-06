import jwt from 'jsonwebtoken';
import Users from '../interfaces/user.interface';

const createToken = (users: Users[]) => {
  const data = { 
    id: users[0].id, username: users[0].username, classe: users[0].classe, level: users[0].level };
  return jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
};

const verifyToken = (token: string) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    
    return { type: null, data };
  } catch (_e) {
    return { type: 'UNAUTHORIZED', message: 'Invalid token' };
  }
};

export {
  createToken,
  verifyToken,
};