import {Birthday} from './birthday.model';
import {Address} from './address.model';

export class PrivateInfo {
  private gender: string;
  private birthday: Birthday;
  private address: Address;

  constructor(gender: string, birthday: Birthday, address: Address) {
    this.gender = gender;
    this.birthday = birthday;
    this.address = address;
  }
}
