export class Address {
  private city: string;
  private state: string;
  private zip: string;

  constructor(city: string, state: string, zip: string) {
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
