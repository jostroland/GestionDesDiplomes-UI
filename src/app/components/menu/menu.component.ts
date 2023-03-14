import {Component, Input, OnInit} from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{

  @Input() isAdmin = false;
  role = 'main';
  userFullname = '';

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.helperService.userRoleName === 'ROLE_ADMIN'? true : false;
    if (this.isAdmin) {
      this.role = 'admin';
    }else{
      this.role = 'main';
    }
  }

}
