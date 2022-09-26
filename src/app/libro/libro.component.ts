import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../Libro';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
    /** Información del libro que tiene que mostrar recibida de su componente padre */
    @Input() libro: Libro;
    /** Evento de notificación a enviar cuando se compra un libro */
    @Output() notificacionCompra: EventEmitter<void> = new EventEmitter();


    constructor() { }

    ngOnInit(): void {
        console.log(this.libro)
    }

    /** Método que resta una unidad del libro, y emite el evento */
    comprar() {
        if (this.restar()) {
            this.notificacionCompra.emit(null);
        }

    }

    /** Añadimos una unidad al stock */
    add() {
        this.libro.stock++;
    }

    /** Si tenemos suficiente stock, reducimos el stock y devolvemos
     * si se ha podido hacer satisfactoriamente
     */
    restar() {
        if (this.libro.stock > 0) {
            this.libro.stock--;
            return true;
        }
        return false;

    }

}
