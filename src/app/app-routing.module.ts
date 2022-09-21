import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';

const routes: Routes = [
    { path: 'expositorLibros', component: ExpositorLibrosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
