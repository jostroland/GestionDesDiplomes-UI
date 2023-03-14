import { Component } from '@angular/core';
import {NewLightUtilisateurDto} from "../../../services/models/new-light-utilisateur-dto";
import {RoleDto} from "../../../services/models/role-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/services/authentication.service";
import {RolesService} from "../../../services/services/roles.service";
import {HelperService} from "../../../services/helper/helper.service";
import {UtilisateursService} from "../../../services/services/utilisateurs.service";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {
  userDto: NewLightUtilisateurDto = {active: false, email: "", motDePasse: "", nom: "", prenoms: "", roleId: 0};


  errorMessages: Array<string> = [];

  roles: Array<RoleDto> = [];
  userId: number = -1;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private utilisateursService: UtilisateursService,
    private activatedRoute: ActivatedRoute,
    private roleService: RolesService,
    private helperService: HelperService,
    private message: ToastMessageService

  ) {
  }

  ngOnInit(): void {
     this.userId = this.activatedRoute.snapshot.params['id'];
    if (this.userId) {
      this.utilisateursService.findUserById({
        'id': this.userId
      }).subscribe({
        next: (data) => {
          this.userDto = data;
        }
      });
    }

    this.findAllRoles();
  }

  async login() {
    await this.router.navigate(['login']);
  }


  register() {
    this.errorMessages = [];

    if (this.userId) {
      this.utilisateursService.updateUser({
        'id': this.userId, body: this.userDto
      }).subscribe({
        next: async () => {
          this.message.showSuccess('Utilisateur modifier avec succes', 'Modifications !')
          await this.router.navigate(["admin/user-list"])
        },
        error: (err) => {
          this.errorMessages = err.error.validationMessage;
        }
      });
    }
      this.authService.register({
          body: this.userDto
        }
      ).subscribe({
        next: async () => {
          if (this.helperService.userRoleName === 'ROLE_ADMIN') {
            this.message.showSuccess('Utilisateur modifier avec succes', 'Modifications !')
            await this.router.navigate(['admin/user-list']);
          }
          await this.router.navigate(['confirm-register']);
        },
        error: (err) => {
          this.message.showError('Erreur lors de la modification des informations', 'Erreurs de Modifications !')
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
