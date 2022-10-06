import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConversionInputDirective } from './directivas/conversion-input.directive';
import { DecoraEtiquetasDirective } from './directivas/decora-etiquetas.directive';
import { AddPuntosPipe } from './pipes/add-puntos.pipe';
import { TablaGenericaComponent } from './tabla-generica/tabla-generica.component';

const materialModules = [
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
];

@NgModule({
    declarations: [
        AddPuntosPipe,
        DecoraEtiquetasDirective,
        ConversionInputDirective,
        TablaGenericaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules
    ],
    exports: [
        ...materialModules,
        AddPuntosPipe,
        DecoraEtiquetasDirective,
        ConversionInputDirective,
        TablaGenericaComponent,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }
