import Users from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { verifyUser } from './validations/validations.inputs';
// import createToken from '../middlewares/auth.middleware';

class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(users: Users) {
    const error = await verifyUser(users);

    if (error.type) {
      return error;
    }

    const usersService = await this.model.postModelUsers(users);

    return { type: null, message: usersService };
  }
}

export default UsersService;