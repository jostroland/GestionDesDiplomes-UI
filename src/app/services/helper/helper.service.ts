import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper: JwtHelperService;
  private decodedToken: any;
  private item: string;

  constructor() {
    this.jwtHelper = new JwtHelperService();
     this.item = localStorage.getItem('token') as string;
    this.decodedToken = this.jwtHelper.decodeToken(this.item);
  }

  get userId(): number {
    if (!this.tokenEpired) {
      this.decodedToken = this.jwtHelper.decodeToken(this.item);
    }
    return this.decodedToken != null ? this.decodedToken.userId : -1;
  }

  get userRoleName(): string {
    if (!this.tokenEpired) {
      this.decodedToken = this.jwtHelper.decodeToken(this.item);
    }
    return this.decodedToken != null ? this.decodedToken.roleName : null;
  }

  get userFullname(): string {
    if (!this.tokenEpired) {
      this.decodedToken = this.jwtHelper.decodeToken(this.item);
    }
    return this.decodedToken != null ? this.decodedToken.fullName : null;
  }

  get tokenEpired(): boolean{
    this.item = localStorage.getItem('token') as string;
    const isTokenExpired = this.jwtHelper.isTokenExpired(this.item);
    return isTokenExpired;
  }

  get idAdminTrue(): boolean{
    if (!this.tokenEpired) {
      this.decodedToken = this.jwtHelper.decodeToken(this.item);
    }
    return this.decodedToken != null ? ((this.decodedToken.roleName === 'ROLE_ADMIN')? true : false) : false;

  }

  public removeToken(): void{
    localStorage.removeItem('token');
    //localStorage.clear();
  }


}
