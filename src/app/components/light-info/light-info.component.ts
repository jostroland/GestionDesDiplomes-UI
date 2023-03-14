import {Component, Input, OnInit} from '@angular/core';
import {LightInfoInput} from "../../types/LightInfoInput";



@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.css']
})
export class LightInfoComponent implements OnInit{

  @Input() inputLightInfo:LightInfoInput = {infoStyle: 'bg-primary', title: "", value: 0};


  constructor() {
  }

  ngOnInit() {
  }

}
