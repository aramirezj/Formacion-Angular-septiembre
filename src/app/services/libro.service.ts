import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';

@Injectable()
export class LibroService {

    miLibroFavorito: string = 'Cien años de soledad';
    /** Actua de base de datos */
    librosOfrecidos: Libro[];

    tituloWeb:BehaviorSubject<string> = new BehaviorSubject('Mi libreria');

    constructor(
        private _snackBar: MatSnackBar
    ) {
        const libro1: Libro = { titulo: 'Cien años de soledadBBDD', autor: 'Gabriel Garcia Marquez', precio: 10, stock: 5 };
        const libro2: Libro = { titulo: 'Lazarillo de TormesBBDD', precio: 10, stock: 5 };
        const libro3: Libro = { titulo: 'Relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 15, stock: 3 };
        this.librosOfrecidos = [libro1, libro2, libro3]

        const librosCookie: string = localStorage.getItem('librosBBDD');
        if (librosCookie) {
            this.librosOfrecidos = JSON.parse(librosCookie);
        } else {
            localStorage.setItem('librosBBDD', JSON.stringify(this.librosOfrecidos));
        }

    }


    /**
    * Simula la creación de un libro en base de datos
    * @param libro Recibe un libro
    * @returns Libro ya asignado en base de datos
    */
    creaLibroBBDD(libro: Libro): Observable<Libro> {
        return new Observable(observer => {
            setTimeout(() => {
                this.librosOfrecidos.push(libro);
                localStorage.setItem('librosBBDD', JSON.stringify(this.librosOfrecidos));
                observer.next(libro);
                observer.complete();
            }, 3000);
        });
    }

    recuperaInfoExtra(titulo:string):string{
        const libroEncontrado:Libro = this.librosOfrecidos.find(libro => libro.titulo === titulo);
        return 'Pues el libro es muy interesante';
    }



    actualizaLibroBBDD(libroOriginal:Libro, libroModificado: Libro): Observable<Libro> {
        return new Observable(observer => {
            setTimeout(() => {
                const indiceLibroAModificar: number = this.librosOfrecidos.indexOf(libroOriginal);
                this.librosOfrecidos[indiceLibroAModificar] = libroModificado;
                localStorage.setItem('librosBBDD', JSON.stringify(this.librosOfrecidos));
                this._snackBar.open('Libro actualizado correctamente', 'Cerrar');
                observer.next(libroModificado);
                observer.complete();
            }, 1000);
        });
    }

    /**
     *  Función que recibe un libro, lo busca en base de datos, y si lo encuentra lo borra, y si no, alerta al usuario
     * @param libroABorrar Libro a borrar
     * @returns True si lo ha borrado satisfactoriamente
     */
    borraLibroBBDD(libroABorrar: Libro): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const indiceLibroABorrar: number = this.librosOfrecidos.indexOf(libroABorrar);
                if (indiceLibroABorrar !== -1) {
                    this.librosOfrecidos.splice(indiceLibroABorrar, 1);
                    localStorage.setItem('librosBBDD', JSON.stringify(this.librosOfrecidos));
                    this._snackBar.open('Libro borrado correctamente', 'Cerrar');
                    observer.next(true);
                } else {
                    this._snackBar.open('No se ha encontrado el libro a borrar', 'Cerrar');
                    observer.next(false);
                }

                observer.complete();

            }, 1000);
        });
    }



    /**
    * Función que devuelve un observable con el listado de libros de base de datos
    * @returns Listado de libros
    */
    recuperaLibrosOBS(): Observable<Libro[]> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.librosOfrecidos);
                observer.complete();
            }, 1000);
        });
    }








    /**
    *  Llama a una api que tira de base de datos y recupera los libros
    * @returns Devuelve un listado de libros
    */
    recuperaLibros(): Promise<Libro[]> {
        //ejecuto la api
        let miApiRecuperacion = new Promise<Libro[]>((resolve, eject) => {
            setTimeout(() => {
                //Recibo respuesta api
                resolve(this.librosOfrecidos);
            }, 3000);
        });
        return miApiRecuperacion;
    }


}
