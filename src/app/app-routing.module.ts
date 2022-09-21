import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionLibrosComponent } from './creacion-libros/creacion-libros.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { GestionaSesionComponent } from './gestiona-sesion/gestiona-sesion.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'expositorLibros', component: ExpositorLibrosComponent },
    { path: 'gestionaSesion', component: GestionaSesionComponent },
    { path: 'creacionLibros', component: CreacionLibrosComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
