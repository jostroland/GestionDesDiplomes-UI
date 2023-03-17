import {Component, OnInit} from '@angular/core';
import {RoleDto} from "../../../services/models/role-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {RolesService} from "../../../services/services/roles.service";
import {DiplomeDto} from "../../../services/models/diplome-dto";
import {DiplomesService} from "../../../services/services/diplomes.service";
import {MinistresService} from "../../../services/services/ministres.service";
import {MinistreDto} from "../../../services/models/ministre-dto";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-diplome-new',
  templateUrl: './diplome-new.component.html',
  styleUrls: ['./diplome-new.component.css']
})
export class DiplomeNewComponent implements OnInit{


  errorMessages: Array<string> = [];
  // @ts-ignore
  diplome: DiplomeDto = {
    beneficiaire: "",
    civilite: 'M',
    dateEdition: "",
    dateObtention: "",
    fonction: "",
    numeroEnreg: "string",
    titre: ""
  };
  ministres: Array<MinistreDto> = [];

  async cancel() {
    await this.router.navigate(["main/diplome-list"]);
  }



  ngOnInit(): void {
    const diplomeId = this.activatedRoute.snapshot.params['id'];
    if (diplomeId){
      this.diplomeService.findDiplomeById({
        'id': diplomeId
      }).subscribe({
        next: (data)=>{
          this.diplome = data;
        }
      });
    }

    this.findAllMinistres();
  }

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private diplomeService:DiplomesService,
    private ministreService:MinistresService,
    private message: ToastMessageService
  ) {
  }


  save() {
    this.errorMessages = [];

    this.diplomeService.saveDiplome({
      body: this.diplome
    }).subscribe({
      next: async ()=>{
        this.message.showSuccess('Diplome enregistrer avec succes', 'Enregistrer !');
        await this.router.navigate(["main/diplome-list"])
      },
      error:(err)=>{
        //this.errorMessages = err.error.validationMessage;
      }
    });
  }

  private findAllMinistres() {
    this.ministreService.findAllMinistres().subscribe({
      next:(data) => {
        this.ministres = data;
      }
    });
  }

}
