import { Component } from '@angular/core';
import {MinistreDto} from "../../../services/models/ministre-dto";
import {MinistresService} from "../../../services/services/ministres.service";
import {HelperService} from "../../../services/helper/helper.service";
import {Router} from "@angular/router";
import {RoleDto} from "../../../services/models/role-dto";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-ministre-list',
  templateUrl: './ministre-list.component.html',
  styleUrls: ['./ministre-list.component.css']
})
export class MinistreListComponent {

  //ministres: Array<MinistreDto> = [];
  ministres:MinistreDto[] = [];
  errorMessages: Array<string> = [];
  isAdmin: boolean = true;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  ministreIdToDelete: any = -1;
  constructor(
    private ministresService: MinistresService,
    private helperService: HelperService,
    private router: Router,
    private message: ToastMessageService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.helperService.userRoleName === 'ROLE_ADMIN'? true : false;
    this.findAllMinistres();
  }


  getRequestParams( page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  private findAllMinistres() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.ministresService.findAllMinistresByPage(params)
      .subscribe({
          next: (response) => {
            const {ministreDtos, totalItems } = response;
            // @ts-ignore
            this.ministres = ministreDtos;
            // @ts-ignore
            this.count = totalItems;
          },
        error:(msg: string)=> {
            console.log(msg);
        }
    });
  }


  handlePageChange(event: number): void {
    this.page = event;
    this.findAllMinistres();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.findAllMinistres();
  }


  async update(id: number | undefined) {
    await this.router.navigate(['main','ministre-new', id]);
  }

  delete() {
    if(this.ministreIdToDelete) {
      this.ministresService.deleteMinistre({
        'id': this.ministreIdToDelete
      }).subscribe({
        next: () => {
          this.message.showSuccess("Ministre supprimmer avec succès","Supprimer !");
          this.findAllMinistres();
        }
      });
    }
  }
}
