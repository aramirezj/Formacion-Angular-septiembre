import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit, AfterViewInit {

    modoElegido: string = 'Comprar';

    constructor() {
        console.log('Soy el constructor');
    }

    ngOnInit(): void {
        console.log('ejecuto ng OnInit');
        this.cambiaModo('Comprar');
    }

    ngAfterViewInit(): void {
        console.log('La vista se ha cargado');
    }




    /**
     * Función que actualiza la variable modoElegido con la información recibida
     * @param modoNuevo Modo deseado a asignar
     */
    cambiaModo(modoNuevo: string): void {
        this.modoElegido = modoNuevo;
    }

}
