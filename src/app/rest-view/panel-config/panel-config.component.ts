import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-config',
  templateUrl: './panel-config.component.html',
  styleUrls: ['./panel-config.component.css']
})
export class PanelConfigComponent implements OnInit {

  test: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit(): void {
  }

}
