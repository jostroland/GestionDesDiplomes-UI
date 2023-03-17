import {Component, OnInit} from '@angular/core';
import {DiplomeDto} from "../../../services/models/diplome-dto";
import {DiplomesService} from "../../../services/services/diplomes.service";
import {Router} from "@angular/router";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-diplome-list',
  templateUrl: './diplome-list.component.html',
  styleUrls: ['./diplome-list.component.css']
})
export class DiplomeListComponent implements OnInit{
  diplomeIdToDelete: any = -1;
  diplomes: Array<DiplomeDto> = [];

  numeroEnreg?: string;
  beneficiaire?: string;

  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15,20,25,30,50];
  filtreSelected: any = 1;

  constructor(
    private router: Router,
    private diplomeService: DiplomesService,
    private message: ToastMessageService
  ) {
  }

  getRequestParams(numeroEnreg: string | undefined, beneficiaire: string | undefined,page: number, pageSize: number): any {
    let params: any = {};

    if (numeroEnreg) {
      params[`numeroEnreg`] = numeroEnreg;
    }

    if (beneficiaire) {
      params[`beneficiaire`]  = beneficiaire;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  async update(id: number | undefined) {
    await this.router.navigate(['main','diplome-new', id]);
  }

  ngOnInit(): void {
    this.filtreSelected = 'NUMERO';
    this.findAllDiplomes();
  }

  delete() {
    if(this.diplomeIdToDelete){
      this.diplomeService.deleteDiplome({
        'id': this.diplomeIdToDelete
      }).subscribe({
        next:()=>{
          this.findAllDiplomes();
        }
      });
    }
  }

  public findAllDiplomes() {



    const params = this.getRequestParams(this.numeroEnreg,this.beneficiaire,this.page, this.pageSize);

    console.log('beneficiaire '+ this.beneficiaire);
    console.log('numeroEnreg '+ this.numeroEnreg);

    this.diplomeService.findAllDiplomesByPage(params)
      .subscribe({
        next: response => {
          const {diplomeDtos, totalItems } = response;
          // @ts-ignore
          this.diplomes = diplomeDtos;
          // @ts-ignore
          this.count = totalItems;

        },
        error: err => {
          console.log(err);
        }
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.findAllDiplomes();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.findAllDiplomes();
  }

  diplomeNumeroEnregToExportPdf(numeroEnreg: string) {
    if(numeroEnreg.length > 0)
    this.diplomeService.exportToPdf({
      'numeroEnreg': numeroEnreg
    }).subscribe({
      next:()=>{
        //this.findAllDiplomes();
      }
    })
  }



  selectFiltre(value: string) {
      this.filtreSelected = value;
  }
}
