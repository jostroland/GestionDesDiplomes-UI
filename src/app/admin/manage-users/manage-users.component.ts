import {Component, OnInit} from '@angular/core';
import {NewLightUtilisateurDto} from "../../services/models/new-light-utilisateur-dto";
import {UtilisateursService} from "../../services/services/utilisateurs.service";
import {Router} from "@angular/router";
import {ToastMessageService} from "../../types/toast-message.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  customers: Array<NewLightUtilisateurDto> = [];
  showInactiveUserOnly = false;
  userIdToUpdate = -1;
  updateState: boolean | undefined;
  customerIdToDelete: number | undefined = -1;

  constructor(
    private userService: UtilisateursService,
    private router: Router,
    private message: ToastMessageService
  ) {
  }

  ngOnInit(): void {
    this.findAllCustomers();
  }

  private findAllCustomers() {
    this.userService.findAllUsers()
      .subscribe({
        next: (value) => {
          this.customers = value;
        }
      });
  }

  filterCustomers() {
    if (this.showInactiveUserOnly) {
      this.customers = this.customers.filter((c) => !c.active);
    } else {
      this.findAllCustomers();
    }
  }

  changeUserState(active: boolean | undefined, id: number | undefined) {
    this.userIdToUpdate = id as number;
    this.updateState = active;
  }

  updateUserState() {
    if (this.updateState) {
      this.userService.activeUser({
        'id': this.userIdToUpdate as number
      }).subscribe({
        next: () => {
          this.message.showSuccess('Utilisateur activé avec succes', 'Enregistrements !');
          this.findAllCustomers();
        }
      });
    } else {
      this.userService.desactiveUser({
        'id': this.userIdToUpdate as number
      }).subscribe({
        next: () => {
          this.message.showSuccess('Utilisateur désactivé avec succes', 'Enregistrements !');
        }
      });
    }
  }

  cancelUpdate() {
    const user = this.customers.find((c) => c.id === this.userIdToUpdate);
    if (user) {
      user.active = !user.active
    }
    this.userIdToUpdate = -1;
    this.updateState = undefined
  }


  async update(id: number | undefined) {
    await this.router.navigate(['admin', 'user-new', id]);
  }

  delete() {
    if (this.customerIdToDelete) {
      this.userService.deleteUser({
        'id': this.customerIdToDelete as number
      }).subscribe({
        next: () => {
          this.findAllCustomers();
        }
      });
    }
  }
}
