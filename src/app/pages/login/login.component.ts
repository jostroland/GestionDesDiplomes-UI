import {Component, OnInit} from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest = {email: "", password: ""};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  async ngOnInit(): Promise<void> {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    const isTokenExpired = helper.isTokenExpired(token);
    if (isTokenExpired) {
      localStorage.clear();
      //await this.router.navigate(['login']);
    }
  }

  login() {
    this.errorMessages = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: async (data) => {

        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        // @ts-ignore
        let decodedToken = helper.decodeToken(data.token);

        // token valid
        if (decodedToken.roleName === 'ROLE_ADMIN') {
          await this.router.navigate(['admin/dashboard']);
        }

        if (decodedToken.roleName === 'ROLE_USER') {
          await this.router.navigate(['main/dashboard']);
        }




      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.validationMessage);
      }
    });
  }

  async register() {
    await this.router.navigate(['register']);
  }

}
