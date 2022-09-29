import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../Libro';
import { LibroService } from '../services/libro.service';

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
        private libroService: LibroService
    ) {
        console.log(this.libroService.miLibroFavorito);
    }

    ngOnInit(): void {


        this.formularioCreacion = new FormGroup({
            titulo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
            stock: new FormControl(null, [Validators.required, Validators.min(1)]),
            autor: new FormControl(null),
            precio: new FormControl(null, [Validators.required, Validators.min(1)])
        });

        this.formularioCreacion.valueChanges.subscribe(valorActualFormulario => {
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

            });
        }
    }

}
