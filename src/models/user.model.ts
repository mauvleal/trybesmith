import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/user.interface';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async postModelUsers(users: Users): Promise<Users> {
    const { username, classe, level, password } = users;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...users };
  }
}

export default UsersModel;