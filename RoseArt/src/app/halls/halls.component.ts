import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {
   names: string[] = ["olin", "myers", "moench", "crapo"];

  constructor() { }

  ngOnInit() {
  }
  

}
