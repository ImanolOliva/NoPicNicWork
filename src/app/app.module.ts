import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SliderEventosComponent } from './components/slider-eventos/slider-eventos.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MatButtonModule,
    MatMenuModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
