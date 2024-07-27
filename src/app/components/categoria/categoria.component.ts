import { Component, OnInit } from '@angular/core';
import carta from 'src/assets/carta/carta.json';

@Component({
  selector: 'app-categorias',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  carta:any = carta;
  constructor() { }

  ngOnInit(): void {
  }

}
