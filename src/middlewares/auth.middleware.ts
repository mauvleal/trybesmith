import * as jwt from 'jsonwebtoken';
import Users from '../interfaces/user.interface';

const createToken = async (login: Users) => {
  console.log('olha eu no auth midle');
  const token = jwt
    .sign({ login }, process.env.JWT_SECRET as string);

  return token;
};

export default createToken;