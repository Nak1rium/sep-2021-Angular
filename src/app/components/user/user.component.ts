import {Component, Input} from '@angular/core';

import {IUser} from '../../models/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  @Input()
  user : IUser;

}
