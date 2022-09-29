import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../Libro';

@Injectable()
export class LibroService {

    miLibroFavorito: string = 'Cien años de soledad';
    /** Actua de base de datos */
    librosOfrecidos: Libro[];
    constructor() {
        const libro1: Libro = { titulo: 'Cien años de soledadBBDD', autor: 'Gabriel Garcia Marquez', precio: 10, stock: 5 };
        const libro2: Libro = { titulo: 'Lazarillo de TormesBBDD', precio: 10, stock: 5 };
        const libro3: Libro = { titulo: 'Relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 15, stock: 3 };
        this.librosOfrecidos = [libro1, libro2, libro3]
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
            }, 3000);
        });
    }


    /**
     * Simula la creación de un libro en base de datos
     * @param libro Recibe un libro
     * @returns Libro ya asignado en base de datos
     */
    creaLibroBBDD(libro:Libro):Observable<Libro> {
        return new Observable(observer => {
            setTimeout(() => {
                this.librosOfrecidos.push(libro);
                observer.next(libro);
                observer.complete();
            }, 3000);
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
