export class Address {
  public city: string;
  public state: string;
  public zip: string;

  constructor(city: string, state: string, zip: string) {
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
