import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { createToken } from '../utils/jwt.util';

class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const users = req.body;
    const token = createToken([users]);
    const { type, message } = await this.userService.createUser(users);
    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json({ token });
  };
}

export default UserController;