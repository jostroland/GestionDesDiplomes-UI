import {Component, OnInit} from '@angular/core';
import {DiplomeDto} from "../../../services/models/diplome-dto";
import {DiplomesService} from "../../../services/services/diplomes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diplome-list',
  templateUrl: './diplome-list.component.html',
  styleUrls: ['./diplome-list.component.css']
})
export class DiplomeListComponent implements OnInit{
  diplomeIdToDelete: any = -1;
  diplomes: Array<DiplomeDto> = [];

  constructor(
    private router: Router,
    private diplomeService: DiplomesService
  ) {
  }

  async update(id: number | undefined) {
    await this.router.navigate(['main','diplome-new', id]);
  }

  ngOnInit(): void {
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
      })
    }
  }

  private findAllDiplomes() {
    this.diplomeService.findAllDiplomes()
      .subscribe({
        next:(data)=>{
          this.diplomes = data
        }
      });
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
}
