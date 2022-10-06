import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { LibroService } from '../../../services/libro.service';

@Directive({
  selector: '[appDecoraEtiquetas]'
})
export class DecoraEtiquetasDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2,
    private libroService:LibroService
  ) { 
    console.log(this.elementRef);
    console.log('Me he invocado ')
   
  }

  @HostListener('click',['$event.target'])
  onClick(){
    const titulo:string = this.elementRef.nativeElement.innerHTML;
    const infoExtra = this.libroService.recuperaInfoExtra(titulo);
    this.renderer.appendChild(this.elementRef.nativeElement, this.elementRef.nativeElement.parentNode.lastChild);
    this.renderer.addClass(this.elementRef.nativeElement,'colorRojo');
    //alert('El stock es '+stock);
  }

}
