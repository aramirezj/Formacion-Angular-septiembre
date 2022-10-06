import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Libro } from '../../../interfaces/Libro';
import { LibroService } from '../../../services/libro.service';

@Component({
    selector: 'app-edicion-libro',
    templateUrl: './edicion-libro.component.html',
    styleUrls: ['./edicion-libro.component.scss']
})
export class EdicionLibroComponent implements OnInit {
    libro: Libro;
    formularioEdicion: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<EdicionLibroComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private libroService: LibroService
    ) {
        this.libro = data.libro;
    }

    ngOnInit(): void {

        this.formularioEdicion = new FormGroup({
            titulo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
            stock: new FormControl(null, [Validators.required, Validators.min(1)]),
            autor: new FormControl(null),
            precio: new FormControl(null, [Validators.required, Validators.min(1)])
        });

        this.formularioEdicion.setValue(this.libro);

    }


    guardar() {
        if (this.formularioEdicion.valid) {

            this.libroService.actualizaLibroBBDD(this.libro, this.formularioEdicion.value).subscribe(libroPersistido => {
                this.libro = libroPersistido;
                this.dialogRef.close(this.libro);
            });

        }

    }

    cancelar() {
        this.dialogRef.close(this.libro);
    }

}
