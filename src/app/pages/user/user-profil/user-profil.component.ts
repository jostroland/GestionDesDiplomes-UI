import { Component } from '@angular/core';
import {NewLightUtilisateurDto} from "../../../services/models/new-light-utilisateur-dto";
import {RoleDto} from "../../../services/models/role-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {RolesService} from "../../../services/services/roles.service";
import {UtilisateursService} from "../../../services/services/utilisateurs.service";
import {HelperService} from "../../../services/helper/helper.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {UtilisateurDto} from "../../../services/models/utilisateur-dto";
import {LightUtilisateurDto} from "../../../services/models/light-utilisateur-dto";



export interface ChangeMotDePasse{
    nouveauMotDePasse?: string;
    confirmeMotDePasse?: string;
}

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {

  userDto: NewLightUtilisateurDto = {email: '', nom: '', prenoms: '', motDePasse: ''};
  userDtoDetail: LightUtilisateurDto = {email: '', nom: '', prenoms: '', motDePasse: ''};


  changePassword: ChangeMotDePasse = {};

  // @ts-ignore

  errorMessages: Array<string> = [];

  roles: Array<RoleDto> = [];
  private userId: any = -1;
  nomEtPrenoms: any;



  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private utilisateursService: UtilisateursService,
    private roleService: RolesService,
    private toastr: ToastrService
  ) {
  }


  showSuccess() {
    this.toastr.success('Information modifier avec succes', 'Modifications !');
  }

  userDetail(): void{
    const userId = this.helperService.userId;

    if (userId){
      this.utilisateursService.findUserById({
        'id': userId
      }).subscribe({
        next: (data)=>{
          this.userDtoDetail = data;
        }
      });
    }

  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    if (this.userId){
      this.utilisateursService.findUserById({
        'id': this.userId
      }).subscribe({
        next: (data)=>{
          this.userDto = data;
        }
      });
    }

    this.nomEtPrenoms = this.helperService.userFullname;
    this.findAllRoles();
    this.userDetail();
  }

  async login() {
    await this.router.navigate(['login']);
  }

  update(id: any) {
    this.errorMessages = [];

    this.utilisateursService.updateUser({
        'id': id,body: this.userDtoDetail
      }
    ).subscribe({
      next: async (data) => {
        console.log("SUCCES");
        this.showSuccess();
        await this.router.navigate(['main']);
      },
      error: (e) => {
        //this.errorMessages = err.error.validationErrors;
        //console.error(e);
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



  updateMotDePasse() {

  }
}
