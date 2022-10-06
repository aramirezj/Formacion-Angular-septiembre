import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { GestionaSesionComponent } from 'src/app/modules/usuario/gestiona-sesion/gestiona-sesion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GestionaSesionComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
