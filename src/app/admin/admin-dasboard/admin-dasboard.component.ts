import {Component, OnInit} from '@angular/core';
import {LightInfoInput} from "../../types/LightInfoInput";





@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  userLightInfo: Array<LightInfoInput> = [];
  page: string = 'Dashboard';

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
