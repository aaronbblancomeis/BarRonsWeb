import { Component, OnInit } from '@angular/core';
import carta from 'src/assets/carta/carta.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  carta:any = carta;
  constructor() { }

  ngOnInit(): void {
  }
}
