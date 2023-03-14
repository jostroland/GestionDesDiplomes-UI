import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  page: string = '';
  nomEtPrenoms: string = this.helperService.userFullname;

  constructor(
    private router: Router,
    private helperService: HelperService
  ) {
  }
  async ngOnInit(): Promise<void> {

    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const isTokenExpired = helper.isTokenExpired(token);

    if (isTokenExpired || !this.helperService.userId){
      this.nomEtPrenoms =  '';
    }
     this.nomEtPrenoms = this.helperService.userFullname;
  }


}
