import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  closeMenu :Boolean = false
  ngOnInit(): void {
  }

  navbar(){
    const btnView = document.getElementById("btn-menu");
    if(btnView !== null){
      if(btnView.getAttribute("aria-expanded") == 'true'){
        this.closeMenu = true;
      }else{
        this.closeMenu = false;
      }
    }
  }

}
