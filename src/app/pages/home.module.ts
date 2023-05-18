import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CervezasComponent } from '../components/cervezas/cervezas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CaffeComponent } from '../components/cafe/caffe.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MatRadioModule} from '@angular/material/radio';
import { ContactanosComponent } from './contactanos/contactanos.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    CervezasComponent,
    CaffeComponent,
    BebidasComponent,
    FooterComponent,
    ContactanosComponent
    
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
