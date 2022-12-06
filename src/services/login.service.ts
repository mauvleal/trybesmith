import Login from '../interfaces/login.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import createToken from '../utils/jwt.util';
import verifyLogin from './validations/validations.inputs';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async serviceLogin(login: Login) {
    const error = await verifyLogin(login);

    if (error.type) {
      return error;
    }

    const newLogin = await this.model.modelLogin(login);

    if (!newLogin.length) {
      return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }

    const token = createToken(newLogin);

    return { type: null, message: token };
  }
}

export default LoginService;