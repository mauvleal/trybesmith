import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Users from '../interfaces/user.interface';
import connection from './connection';
import { Login } from '../interfaces/login.interface';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async newUser(users: Users): Promise<Users> {
    const { username, classe, level, password } = users;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, password };
  }

  async getByUsername(users: Users): Promise<Users> {
    const { username } = users;
    const [[rows]] = await this
      .connection
      .execute<Users[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    return rows;
  }

  async getUserLoginData(users: Login): Promise<Login> {
    const { username, password } = users;
    const [[rows]] = await this
      .connection
      .execute<Login[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username =? AND password =?',
      [username, password],
    );
    return rows;
  }
}