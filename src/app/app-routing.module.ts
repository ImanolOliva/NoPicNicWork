import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { CaffeComponent } from './components/cafe/caffe.component';
import { GinComponent } from './components/gin/gin.component';

const routes: Routes = [

  {path:'nosotros',component:NosotrosComponent},
  {path:'cervezas',component:CervezasComponent},
  {path: 'cafe', component:CaffeComponent},
  {path:'gin', component:GinComponent},
  {path:'home' , component:HomeComponent},
  {path:'' , redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
