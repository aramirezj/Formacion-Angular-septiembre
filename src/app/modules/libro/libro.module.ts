import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { CreacionLibrosComponent } from './creacion-libros/creacion-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibroService } from 'src/app/services/libro.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ExpositorLibrosComponent,
        CreacionLibrosComponent,
        LibroComponent,
        EdicionLibroComponent,
    ],
    imports: [
        CommonModule,
        LibroRoutingModule,
        SharedModule
    ],
    providers: [LibroService]
})
export class LibroModule { }
