import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EdicionLibroComponent } from '../edicion-libro/edicion-libro.component';
import { Libro } from '../../../interfaces/Libro';
import { LibroService } from '../../../services/libro.service';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit, OnDestroy {
    /** Información del libro que tiene que mostrar recibida de su componente padre */
    @Input() libro: Libro;
    /** Modo de lectura del componente, que hace que, los botones se oculten */
    @Input() modoLectura: boolean = false;
    /** Modo de lectura del componente, que hace que, los botones se oculten */
    @Input() modoElegido: string;
    /** Evento de notificación a enviar cuando se compra un libro */
    @Output() notificacionCompra: EventEmitter<void> = new EventEmitter();

    constructor(
        private libroService: LibroService,
        public dialog: MatDialog
    ) { }

    //
    borrar() {
        this.libroService.borraLibroBBDD(this.libro).subscribe(resultado => {
            console.log(resultado);
        });
    }


    ngOnInit(): void {
    }

    ngOnDestroy():void{

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

    /** Función que invoca un dialogo de edición, y al guardarlo se actualiza */
    editar() {
        const configDialog: MatDialogConfig = { data: { libro: this.libro } };
        const dialogRef = this.dialog.open(EdicionLibroComponent, configDialog);

        dialogRef.afterClosed().subscribe(libroActualizado => {
            //if(libroActualizado){
            this.libro = libroActualizado;
            // }

        });

    }



}
