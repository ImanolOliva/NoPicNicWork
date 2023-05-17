import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CervezasComponent } from '../components/cervezas/cervezas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CaffeComponent } from '../components/cafe/caffe.component';


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    CervezasComponent,
    CaffeComponent,
    BebidasComponent
    
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
