import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDecoraEtiquetas]'
})
export class DecoraEtiquetasDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2,
  ) { 
    console.log(this.elementRef);
    console.log('Me he invocado ')
   
  }

  @HostListener('click',['$event.target'])
  onClick(){
    this.renderer.addClass(this.elementRef.nativeElement,'colorRojo');
  }

}
