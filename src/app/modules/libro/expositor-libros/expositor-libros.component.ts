import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Autor } from "../../../interfaces/Autor";
import { Libro } from "../../../interfaces/Libro";
import { LibroService } from "../../../services/libro.service";


@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit, AfterViewInit, OnDestroy {

    modoElegido: string = 'Comprar';

    misLibros: Libro[];


    librosComprados: Libro[] = [];

    autores:Array<Autor>;
    columnasAutor:string[] = ['Nombre','Edad','Cantidad libros'];
    modeloAutor:string[] = ['nombre','edad','cantidadLibrosPublicados']

    suscripcionGet: Subscription;



    constructor(
        private libroService: LibroService
    ) {
        this.libroService.miLibroFavorito = 'Cronicas de una muerte anunciada';
        this.libroService.tituloWeb.next('Expositor de libros');

        const autor1:Autor = {nombre:'pepe',edad:50,cantidadLibrosPublicados:8};
        const autor2:Autor = {nombre:'manolo',edad:44,cantidadLibrosPublicados:2};
        const autor3:Autor = {nombre:'javier',edad:32,cantidadLibrosPublicados:50};

        this.autores = [autor1,autor2,autor3];
    }


    ngOnInit(): void {

      


        /* this.libroService.recuperaLibros().then(librosRecibidos => {
             this.misLibros = librosRecibidos;
         }) */

        this.suscripcionGet = this.libroService.recuperaLibrosOBS().subscribe(librosRecibidos => {
            console.log(librosRecibidos);
            this.misLibros = librosRecibidos;
        });



        this.cambiaModo('Comprar');
    }

    ngOnDestroy(): void {
        this.suscripcionGet.unsubscribe();
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
