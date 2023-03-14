import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {NewLightUtilisateurDto} from "../../services/models/new-light-utilisateur-dto";
import {RoleDto} from "../../services/models/role-dto";
import {RolesService} from "../../services/services/roles.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userDto: NewLightUtilisateurDto = {email: '', nom: '', prenoms: '', motDePasse: ''};

  // @ts-ignore

  errorMessages: Array<string> = [];

  roles: Array<RoleDto> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private roleService: RolesService
  ) {
  }

  ngOnInit(): void {
    this.findAllRoles();
  }

  async login() {
    await this.router.navigate(['login']);
  }

  register() {
    this.errorMessages = [];
    this.authService.register({
        body: this.userDto
      }
    ).subscribe({
      next: async (data) => {
        await this.router.navigate(['confirm-register']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    });
  }

  private findAllRoles() {
    this.roleService.findAllRoles().subscribe({
      next:(data) => {
        this.roles = data;
      }
    });
  }
}
