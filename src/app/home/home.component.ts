import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}
    headerName = "Angular 14 tutorial";
    salary = 1000;
    isDisabled = true;
    colorName="red";
    fontSize="10px"
    className="headclass";
    styleValue={"color":"blue", "font-size":"30px"}

  ngOnInit(): void {
    }

  Functionclick(name:string){
    alert(name)
  }
}
