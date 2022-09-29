import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Libro } from "../Libro";
import { LibroService } from "../services/libro.service";


@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit, AfterViewInit {

    modoElegido: string = 'Comprar';

    misLibros: Libro[];


    librosComprados: Libro[] = [];




    constructor(
        private libroService: LibroService
    ) {
        this.libroService.miLibroFavorito = 'Cronicas de una muerte anunciada';
    }

    ngOnInit(): void {

        /* this.libroService.recuperaLibros().then(librosRecibidos => {
             this.misLibros = librosRecibidos;
         }) */

        this.libroService.recuperaLibrosOBS().subscribe(librosRecibidos => {
            console.log(librosRecibidos);
            this.misLibros = librosRecibidos;
        });



        this.cambiaModo('Comprar');
    }

    ngAfterViewInit(): void {
    }




    /**
     * Función que actualiza la variable modoElegido con la información recibida
     * @param modoNuevo Modo deseado a asignar
     */
    cambiaModo(modoNuevo: string): void {
        this.modoElegido = modoNuevo;
    }

    libroCompradoRecibido(libroComprado: Libro) {
        console.log(libroComprado);
        this.librosComprados.push(libroComprado);

    }






}
