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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LibroComponent } from './libro/libro.component';
import { MatSliderModule } from '@angular/material/slider';
import { LibroService } from './services/libro.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';
import { AddPuntosPipe } from './add-puntos.pipe';
import { DecoraEtiquetasDirective } from './decora-etiquetas.directive';

@NgModule({
    declarations: [
        AppComponent,
        ExpositorLibrosComponent,
        CreacionLibrosComponent,
        GestionaSesionComponent,
        LibroComponent,
        EdicionLibroComponent,
        AddPuntosPipe,
        DecoraEtiquetasDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    providers: [AuthGuard, LibroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
