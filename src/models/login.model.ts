import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import Users from '../interfaces/user.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async modelLogin(login: Login): Promise<Users[]> {
    const { username, password } = login;
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return result as Users[];
  }
}

export default LoginModel;