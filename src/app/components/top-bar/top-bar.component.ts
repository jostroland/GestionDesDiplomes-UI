import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{

  @Input() nomEtPrenoms: string = '';

  constructor(
    private router: Router,
    private helperService: HelperService
  ) {
  }

  async logout() {
    this.helperService.removeToken();
    await this.router.navigate(['/login']);
  }

}
