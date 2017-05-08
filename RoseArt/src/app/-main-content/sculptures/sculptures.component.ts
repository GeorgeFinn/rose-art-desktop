import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.scss']
})
export class SculpturesComponent implements OnInit {

  public sculptures = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
