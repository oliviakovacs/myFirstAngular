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

  ngOnInit(): void {
    }

  Functionclick(name:string){
    alert(name)
  }
}
