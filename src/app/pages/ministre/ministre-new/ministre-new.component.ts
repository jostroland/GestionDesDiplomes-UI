import {Component, OnInit} from '@angular/core';
import {MinistreDto} from "../../../services/models/ministre-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {MinistresService} from "../../../services/services/ministres.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-ministre-new',
  templateUrl: './ministre-new.component.html',
  styleUrls: ['./ministre-new.component.css']
})
export class MinistreNewComponent implements OnInit{
  errorMessages: Array<string> = [];

  ministre: MinistreDto = {civilite: 'M', datePriseFonction: "", nom: "", prenoms: ""};



  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private ministreService: MinistresService
  ) {
  }


  save(){
    this.errorMessages = [];

    this.ministreService.saveMinistre({
      body:this.ministre
      }).subscribe({
         next: async ()=>{
           await this.router.navigate(['main/ministre-list']);
         },
         error:(err:HttpErrorResponse)=>{
           //this.errorMessages = err.error.validationErrors;
           console.log(this.errorMessages)
         }
      })

  }

  async cancel(){
    await this.router.navigate(['main/ministre-list']);
  }

  ngOnInit(): void {
    const ministreId = this.activatedRoute.snapshot.params['id'];
    if (ministreId) {
      this.ministreService.findMinistreById({
        'id': ministreId
      }).subscribe({
        next: (data) => {
          this.ministre = data;
        }
      });
    }
  }

}
