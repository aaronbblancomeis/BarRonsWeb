import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
  }

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('icon') icon: ElementRef;

    navbar() {
      const fixed = this.icon.nativeElement;
      const ico = this.icon.nativeElement.querySelector('mat-icon');
      this.menu.nativeElement.classList.toggle('menu-active');
      this.icon.nativeElement.classList.toggle('menu-btn-fixed');

      if(this.menu.nativeElement.classList.contains('menu-active')) {
        this.renderer.setProperty(ico, 'innerHTML', 'close')
      }else {
        this.renderer.setProperty(ico, 'innerHTML', 'menu')
      }
    }

}
