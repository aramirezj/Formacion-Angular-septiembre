import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabla-generica',
    templateUrl: './tabla-generica.component.html',
    styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent implements OnInit {

    @Input() datos: any[];
    @Input() columnas: string[];
    @Input() modelos: string[];
    constructor() { }

    ngOnInit(): void {
    }

}
