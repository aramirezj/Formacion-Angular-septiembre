import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Libro } from "../Libro";


@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit, AfterViewInit {

    modoElegido: string = 'Comprar';

    misLibros: Libro[];


    librosComprados:Libro[] = [];




    constructor() {
        console.log('Soy el constructor');
    }

    ngOnInit(): void {


        const libro1: Libro = { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', precio: 10, stock: 5 };
        const libro2: Libro = { titulo: 'Lazarillo de Tormes', precio: 10, stock: 5 };
        this.misLibros = [libro1, libro2, { titulo: 'Relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 15, stock: 3 }];

        console.log('ejecuto ng OnInit');
        this.cambiaModo('Comprar');
    }

    ngAfterViewInit(): void {
        console.log('La vista se ha cargado');
        console.log(this.misLibros)
    }




    /**
     * Función que actualiza la variable modoElegido con la información recibida
     * @param modoNuevo Modo deseado a asignar
     */
    cambiaModo(modoNuevo: string): void {
        this.modoElegido = modoNuevo;
    }

    libroCompradoRecibido(libroComprado:Libro) {
        console.log(libroComprado);
        this.librosComprados.push(libroComprado);

    }

}
