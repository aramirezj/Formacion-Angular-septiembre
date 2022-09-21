import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreacionLibrosComponent } from './creacion-libros/creacion-libros.component';
import { AuthGuard } from './guards/auth.guard';
import { GestionaSesionComponent } from './gestiona-sesion/gestiona-sesion.component';

@NgModule({
    declarations: [
        AppComponent,
        ExpositorLibrosComponent,
        CreacionLibrosComponent,
        GestionaSesionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
