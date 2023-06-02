import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { EventosCulturalesComponent } from './pages/eventos-culturales/eventos-culturales.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {path:'nosotros',component:NosotrosComponent},
  {path:'cervezas',component:CervezasComponent},
  {path:'home' , component:HomeComponent},
  {path:'contacto',component:ContactanosComponent},
  {path:'eventosCulturales',component:EventosCulturalesComponent},
  {path:'',component:NosotrosComponent, pathMatch:'full'},
  {path:'**',component:NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
