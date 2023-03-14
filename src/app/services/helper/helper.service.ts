import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  private decodedToken: any;
  private readonly item: string;

  constructor() {
     this.item = localStorage.getItem('token') as string;
    this.decodedToken = this.jwtHelper.decodeToken(this.item);
  }

  get userId(): number {
    return this.decodedToken.userId;
  }

  get userRoleName(): string {
    return this.decodedToken.roleName;
  }

  get userFullname(): string {
    return this.decodedToken.fullName;
  }

  public tokenEpired(): boolean{
    return this.decodedToken.isTokenExpired(this.item);
  }

  public removeToken(): void{
    localStorage.removeItem('token');
    //localStorage.clear();
  }


}
