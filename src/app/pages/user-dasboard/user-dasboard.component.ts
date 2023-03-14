import {Component, OnInit} from '@angular/core';
import {LightInfoInput} from "../../types/LightInfoInput";



@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.css']
})
export class UserDasboardComponent implements OnInit {

  userLightInfo: Array<LightInfoInput> = [];

  constructor() {
  }

  ngOnInit() {
    this.initUserLightInfo();
  }

  private initUserLightInfo() {
    this.userLightInfo = [
      {
        title: 'Sales <span>| Today',
        value: 67686,
        infoStyle: 'bg-primary'
      },
      {
        title: 'Revenue <span>| This Month</span>',
        value: 67888,
        infoStyle: 'bg-success'
      },
      {
        title: 'Customers <span>| This Month</span>',
        value: 45559,
        infoStyle: 'bg-warning'
      }
    ];
  }
}
