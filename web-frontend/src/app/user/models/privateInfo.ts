import {Birthday} from './birthday.model';
import {Address} from './address.model';

export class PrivateInfo {
  public gender: string;
  public birthday: Birthday;
  public address: Address;

  constructor(gender: string, birthday: Birthday, address: Address) {
    this.gender = gender;
    this.birthday = birthday;
    this.address = address;
  }
}
