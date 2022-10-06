import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appConversionInput]'
})
export class ConversionInputDirective {

    @Input('appConversionInput') tipo:string;

    constructor(
        private elementRef: ElementRef
    ) { }


    @HostListener('input', ['$event']) onInputChange(event:any): void {
        const initialValue: string = this.elementRef.nativeElement.value;
        switch(this.tipo){
            case 'mayuscula':
                this.elementRef.nativeElement.value = initialValue.toUpperCase();
                break;
            case 'minuscula':
                this.elementRef.nativeElement.value = initialValue.toLowerCase();
                break;
            case 'sinEspacios':
                this.elementRef.nativeElement.value = initialValue.replace(/\s+/g,'');
                break;
        }

  
        
        event.stopPropagation();
    }

}
