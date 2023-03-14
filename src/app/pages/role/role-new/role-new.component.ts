import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RolesService} from "../../../services/services/roles.service";
import {RoleDto} from "../../../services/models/role-dto";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-role-new',
  templateUrl: './role-new.component.html',
  styleUrls: ['./role-new.component.css']
})
export class RoleNewComponent implements OnInit{
  errorMessages: Array<string> = [];
  role: RoleDto = {role: ""};
  roleId: number = -1;



  async cancel() {
      await this.router.navigate(["admin/role-list"]);
  }

  ngOnInit(): void {
     this.roleId = this.activatedRoute.snapshot.params['id'];
    if (this.roleId){
      this.roleService.findRoleById({
        'id': this.roleId
      }).subscribe({
        next: (data)=>{
          data.role = data.role?.replace('ROLE_', '');
          this.role = data;
        }
      });
    }
  }

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private roleService:RolesService,
    private message: ToastMessageService
  ) {
  }


  save() {
    this.errorMessages = [];

    //Gestion de la mise  jours
    if(this.roleId){
      this.roleService.updateRole({
        'id': this.roleId,body:this.role
      }).subscribe({
        next: async ()=>{
          this.message.showSuccess('Role modifier avec succes', 'Modifications !')
          await this.router.navigate(["admin/role-list"])
        },
        error:(err)=>{
          this.message.showError("Erreur lors de l'enregitrement du role", 'Erreurs !')
          this.errorMessages = err.error.validationMessage;
        }
      })
    }

    this.roleService.saveRole({
      body: this.role
    }).subscribe({
      next: async ()=>{
        // @ts-ignore
        this.message.showSuccess('Information enregistre avec succes', 'Enregistrements !')
        await this.router.navigate(["admin/role-list"])
      },
      error:(err)=>{
        // @ts-ignore
        this.message.showError("Erreurs lors de l'enregistrement du role", 'Erreurs !')
        this.errorMessages = err.error.validationMessage;
      }
    })
  }


}
