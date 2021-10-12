export class JwtResponse {
  public token!: string;
  public username!: string;
  public password!: string;
  public roles!: any[];


  constructor(token: string, username: string, password: string, roles: any[]) {
    this.token = token;
    this.username = username;
    this.password = password;
    this.roles = roles;
  }
}
