import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CervezasComponent } from '../components/cervezas/cervezas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MatRadioModule} from '@angular/material/radio';
import { ContactanosComponent } from './contactanos/contactanos.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HorarioAtencionComponent } from '../components/horario-atencion/horario-atencion.component';


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    CervezasComponent,
    BebidasComponent,
    FooterComponent,
    ContactanosComponent,
    HorarioAtencionComponent
    
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
