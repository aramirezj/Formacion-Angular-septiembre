import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'formacionAngular';

    tituloNavegacion: string;

    constructor(
        private libroService:LibroService
    ) {
        this.libroService.tituloWeb.subscribe(nuevoTitulo => {
            this.tituloNavegacion = nuevoTitulo;
        })
    }


}
