import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPuntos'
})
export class AddPuntosPipe implements PipeTransform {

  transform(value: string | number, ...args: string[]): string {
    return value+= '...';
  }

}
