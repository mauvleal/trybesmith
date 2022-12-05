import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    console.log(req.body);
    const token = await this.userService.createUser(req.body);
    console.log(token);
    res.status(201).json({ token });
  };
}

export default UserController;