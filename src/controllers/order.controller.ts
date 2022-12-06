import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public controllerLogin = async (req: Request, res: Response): Promise<Response> => {
    const login = req.body;
    const { type, message } = await this.loginService.serviceLogin(login);

    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'UNAUTHORIZED') {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  };
}

export default LoginController;