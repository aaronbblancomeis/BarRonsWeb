import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './components/animation/animation.component';
import { MenuCardComponent } from './components/menu/menu-card/menu-card.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    AnimationComponent,
    MenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
