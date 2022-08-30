import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarEditar'
})
export class FiltrarEditarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==83){
      return 'edit';
    }else{
      return '';
    }
  }

}
