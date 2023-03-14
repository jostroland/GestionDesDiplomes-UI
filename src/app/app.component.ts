import {Component, OnInit} from '@angular/core';
import {HelperService} from "./services/helper/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GestionDiplomeUI';

  constructor(
    private helperService: HelperService,
    private router: Router
  ) {
  }

   async ngOnInit(): Promise<void> {
    /*if (this.helperService.tokenEpired) {
      this.helperService.removeToken();
      await this.router.navigate(['/login']);
    }*/
  }
}
