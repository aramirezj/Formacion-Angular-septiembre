import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from '../../../interfaces/Libro';
import { LibroService } from '../../../services/libro.service';

@Component({
    selector: 'app-creacion-libros',
    templateUrl: './creacion-libros.component.html',
    styleUrls: ['./creacion-libros.component.scss']
})
export class CreacionLibrosComponent implements OnInit {

    formularioCreacion: FormGroup;
    libroCreado: Libro = {} as Libro;
    mensajeExito: string;
    constructor(
        private libroService: LibroService,
        private _snackBar: MatSnackBar
    ) {
        console.log(this.libroService.miLibroFavorito);
        this.libroService.tituloWeb.next('Creación de libros');
    }

    ngOnInit(): void {


        this.formularioCreacion = new FormGroup({
            titulo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
            stock: new FormControl(null, [Validators.required, Validators.min(1)]),
            autor: new FormControl(null),
            precio: new FormControl(null, [Validators.required, Validators.min(1)])
        });

        this.formularioCreacion.valueChanges.subscribe(valorActualFormulario => {
          //  console.log(valorActualFormulario);
            this.mensajeExito = null;
            this.libroCreado = valorActualFormulario;
        });

    }

    crearLibro() {
        if (this.formularioCreacion.valid) {
            this.libroCreado = this.formularioCreacion.value;
            this.libroService.creaLibroBBDD(this.libroCreado).subscribe(() => {
                console.log('Hola')
                this.mensajeExito = '!Libro guardado satisfactoriamente!';
                this.formularioCreacion.reset({}, { emitEvent: false });
                this.libroCreado = {} as Libro;
                this._snackBar.open('Libro creado correctamente', 'Cerrar');
            });
        } else {
            this._snackBar.open('Hay campos incorrectos, revisa el formulario', 'Cerrar');
        }
    }

}
