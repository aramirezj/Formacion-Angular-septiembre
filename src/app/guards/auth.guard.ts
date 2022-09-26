import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(): boolean {
        const token = sessionStorage.getItem('token');
        if (token) {
            //Si hay token asignado, permito entrar a la ruta
            return true;
        }
        alert('Debe iniciar sesión previamente');
        return false;
    }

}
