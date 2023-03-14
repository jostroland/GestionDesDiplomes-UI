import {Component, OnInit} from '@angular/core';
import {RoleDto} from "../../../services/models/role-dto";
import {Router} from "@angular/router";
import {RolesService} from "../../../services/services/roles.service";
import {ToastMessageService} from "../../../types/toast-message.service";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit{
  roleIdToDelete: any = -1;
  roles:RoleDto[] = [];
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];



  constructor(
    private rolesService: RolesService,
    private router: Router,
    private message: ToastMessageService

  ) { }

  ngOnInit(): void {
    this.findAllRoles();
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

  private findAllRoles() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.rolesService.findAllRolesByPage(params)
      .subscribe({
        next: response => {
          const {roleDtos, totalItems } = response;
          // @ts-ignore
          this.roles = roleDtos;
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
    this.findAllRoles();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.findAllRoles();
  }

  async update(id: number | undefined) {
    await this.router.navigate(['admin','role-new', id]);
  }

  delete() {
    if(this.roleIdToDelete) {
      this.rolesService.deleteRole({
        'id': this.roleIdToDelete
      }).subscribe({
        next: () => {
          this.message.showSuccess('Suppresion avec succes', 'Suppression !')
          this.findAllRoles();
        }
      });
    }
  }
}
