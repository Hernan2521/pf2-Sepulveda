import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reprobado'
})
export class ReprobadoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
   
    if(value<6)return `${Math.round(value)} Reprobado `;
    return `${Math.round(value)}`
  }

}
