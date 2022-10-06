import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionLibrosComponent } from 'src/app/modules/libro/creacion-libros/creacion-libros.component';
import { ExpositorLibrosComponent } from 'src/app/modules/libro/expositor-libros/expositor-libros.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    { path: 'expositorLibros', component: ExpositorLibrosComponent },
    { path: 'creacionLibros', component: CreacionLibrosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
