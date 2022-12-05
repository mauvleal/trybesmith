import Users from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import createToken from '../middlewares/auth.middleware';

class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async createUser(login: Users) {
    const user = await this.userModel.newUser(login);
    if (!user || user.password !== login.password) {
      return ({ type: 400, message: 'usuário não encontrado' });
    }
    const token = await createToken(user);
    return token;
  }
}

export default UserService;