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
import { EventosCulturalesComponent } from './eventos-culturales/eventos-culturales.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from '../components/scroll-top/scroll-top.component';
import { DireccionComponent } from '../components/direccion/direccion.component';
import { LlamanosComponent } from '../components/llamanos/llamanos.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    CervezasComponent,
    BebidasComponent,
    FooterComponent,
    ContactanosComponent,
    HorarioAtencionComponent,
    EventosCulturalesComponent,
    ScrollTopComponent,
    DireccionComponent,
    LlamanosComponent
    
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
