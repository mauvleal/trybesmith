import { Request, Response } from 'express';
import UserService from '../services/users.service';
import createToken from '../utils/jwt.util';

class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const users = req.body;
    const token = createToken([users]);
    await this.userService.createUser(users);
    return res.status(201).json({ token });
  };
}

export default UserController;