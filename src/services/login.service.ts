import jwt from 'jsonwebtoken';
import { Login } from '../interfaces/login.interface';
import UserModel from '../models/user.model';

export default class LoginService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  validateLoginBody = async (params: Login) => {
    const userData = await this.userModel.getUserLoginData(params);
    if (!userData) {
      return ({ type: 401, message: 'Username or password invalid' });
    }
    const tokenCreated = jwt.sign(params, process.env.JWT_SECRET as string, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
    return ({ type: null, message: tokenCreated });
  };
}