import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gestiona-sesion',
    templateUrl: './gestiona-sesion.component.html',
    styleUrls: ['./gestiona-sesion.component.scss']
})
export class GestionaSesionComponent implements OnInit {
    sesionIniciada:boolean;
    constructor() { }

    ngOnInit(): void {
        const token:string = sessionStorage.getItem('token');
        this.sesionIniciada = token !== null;
    }

    /** Función que setea un token con valor, y cambia el valor de
     * la variable sesión iniciada
     */
    iniciaSesion() {
        sessionStorage.setItem('token', '1');
        this.sesionIniciada = true;
    }

    /** Función que desetea el token y cambia el valor a false
     * de sesión iniciada
     */
    cierraSesion() {
        sessionStorage.removeItem('token');
        this.sesionIniciada = false;
    }

}
