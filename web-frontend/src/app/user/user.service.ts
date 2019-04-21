import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './models/user.model';
import {PrivateInfo} from './models/privateInfo.model';
import {Birthday} from './models/birthday.model';
import {Address} from './models/address.model';
import Favorite from './models/favorite.model';

@Injectable()
export class UserService {
  userChanged = new Subject<User>();
  private user: User = new User(
    'Tim',
    '',
    '',
    new PrivateInfo(
      '',
      new Birthday('6', '18', '2000'),
      new Address('Pittsburgh', 'PA', '15213')),
    [new Favorite('https://modern-ruby.glitch.me/uploads/photo-1555812363446.jpg', 'Steamed Pork Ribs in Lotus Leaf'),
      new Favorite('https://modern-ruby.glitch.me/uploads/photo-1555209541077.jpg', 'Fish-flavored shredded pork (Yu Xiang Rou Si)'),
      new Favorite('https://modern-ruby.glitch.me/uploads/photo-1555208767093.jpg', 'Honey Roasted BBQ Pork (Char Siu)')],
    []);

  getUser() {
    return this.user;
  }

  getFavorite() {
    return this.user.favorite;
  }
}
