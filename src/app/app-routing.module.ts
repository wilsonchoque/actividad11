import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"**", pathMatch:"full", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
