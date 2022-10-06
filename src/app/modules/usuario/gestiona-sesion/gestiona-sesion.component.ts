import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from '../../../services/libro.service';


export interface TipoLoginForm {
    email: FormControl<string>,
    password: FormControl<string>
}

@Component({
    selector: 'app-gestiona-sesion',
    templateUrl: './gestiona-sesion.component.html',
    styleUrls: ['./gestiona-sesion.component.scss']
})
export class GestionaSesionComponent implements OnInit {

    sesionIniciada: boolean;

    formularioLogin: FormGroup<TipoLoginForm>;

    constructor(
        private router: Router
    ) {
     }

    ngOnInit(): void {
        const token: string = sessionStorage.getItem('token');
        this.sesionIniciada = token !== null;


        this.formularioLogin = new FormGroup<TipoLoginForm>({
            email: new FormControl(null,
                [Validators.required, Validators.minLength(5), Validators.email]),
            password: new FormControl(null, [Validators.required])
        });


    }

    /** Función que setea un token con valor, y cambia el valor de
     * la variable sesión iniciada
     */
    iniciaSesion() {

        if (this.formularioLogin.valid) {
            const valorEmail: string = this.formularioLogin.get('email').value;
            const valorPassword: string = this.formularioLogin.value.password;

            if (valorEmail === 'admin@gmail.com' && valorPassword === '1234') {
                sessionStorage.setItem('token', '1');
                this.sesionIniciada = true;
                this.router.navigate(['creacionLibros']);
            } else {
                alert('Los datos introducidos no son correctos');
            }

        }


    }

    /** Función que desetea el token y cambia el valor a false
     * de sesión iniciada
     */
    cierraSesion() {
        sessionStorage.removeItem('token');
        this.sesionIniciada = false;
    }

}
