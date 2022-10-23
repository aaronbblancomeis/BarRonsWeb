import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() categoria:any;
  hidden:boolean;
  constructor() {}

  ngOnInit(): void {
  }

  openDialog(){

  }
}
