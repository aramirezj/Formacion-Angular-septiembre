import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionaSesionComponent } from 'src/app/modules/usuario/gestiona-sesion/gestiona-sesion.component';

const routes: Routes = [
    { path: 'gestionaSesion', component: GestionaSesionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
