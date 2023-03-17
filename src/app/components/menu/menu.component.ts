import {Component, Input, OnInit} from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import * as stream from "stream";

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

    /*const helper = new JwtHelperService();
    let token = localStorage.getItem('token') as string;

    const isTokenExpired = helper.isTokenExpired(token);
    if (!isTokenExpired) {
      const helper = new JwtHelperService();
      let decodedToken = helper.decodeToken(token);
      if (decodedToken != null){
        this.isAdmin = decodedToken.roleName === 'ROLE_ADMIN' ? true : false;
      }
    }*/

    this.isAdmin = this.helperService.idAdminTrue ? true : false;
  }

}
