import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
    },
    {
        path: 'libro', loadChildren: () => import('./modules/libro/libro.module').then(m => m.LibroModule)
    }

];
//La ruta de gestiona sesión, se mueve de app-routing a usuario-routing
//Se mueve la carpeta gestionaSesion adentro de la carpeta Usuario del modulo
//Se escribe la ruta al modulo usuario aqui en app-routing
//Movemos los modulos relacionados con formularios del app-module al sharedModule
//Importamos el sharedModule en el usuarioModule
//Actualizamos la ruta de /gestionaSesion en el app.component.html a usuario/gestionaSesion

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
