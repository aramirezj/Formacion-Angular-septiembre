import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _snackBar: MatSnackBar
    ) {

    }

    canActivate(): boolean {
        const token = sessionStorage.getItem('token');
        if (token) {
            //Si hay token asignado, permito entrar a la ruta
            return true;
        }
        this._snackBar.open('Debe iniciar sesión previamente', 'Cerrar');
        return false;
    }

}
