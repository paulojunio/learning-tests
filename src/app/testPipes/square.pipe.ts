import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value !== null && !isNaN(value))
      return Math.pow(value, 2);

    return 'Not a number';
  }

}
