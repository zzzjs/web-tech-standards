export class UserAccountModel {
  public id: number;
  public email: string;
  public password: string;

  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
