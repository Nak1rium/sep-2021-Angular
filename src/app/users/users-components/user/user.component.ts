import { Component, Input } from '@angular/core';

import { user } from '../../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

 @Input()
  user: user;

}
