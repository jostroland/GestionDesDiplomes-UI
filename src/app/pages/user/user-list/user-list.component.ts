import {Component, OnInit} from '@angular/core';
import {UtilisateurDto} from "../../../services/models/utilisateur-dto";
import {UtilisateursService} from "../../../services/services/utilisateurs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userIdToDelete: any = -1;
  users: Array<UtilisateurDto> = [];


  ngOnInit(): void {
    this.findAllUsers();
  }

  constructor(
    private userService:UtilisateursService,
    private router:Router
  ) {
  }


  async update(id: number | undefined) {
    await this.router.navigate(['main','user-new', id]);
  }

  delete() {
    if (this.userIdToDelete){
      this.userService.deleteUser({
        'id': this.userIdToDelete
      }).subscribe({
        next:()=>{
          this.findAllUsers();
        }
      })
    }
  }







  private findAllUsers() {
    this.userService.findAllUsers().subscribe(
      {
        next:(data)=>{
          this.users = data;
        }
      }
    )
  }
}
