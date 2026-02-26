import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === null || value === undefined || value === ''){
      return value;
    }
    return value ? value.toString().toUpperCase() : value;
    //return value ? value.toString().charAt(0).toUpperCase() + value.toString().slice(1) : value;
  }

}
