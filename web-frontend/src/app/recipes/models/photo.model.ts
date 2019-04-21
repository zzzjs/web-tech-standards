export class Photo {
  public link: string;
  public contentType: string;
  public name: string;

  constructor(link: string, contentType: string, name: string) {
    this.link = link;
    this.contentType = contentType;
    this.name = name;
  }
}