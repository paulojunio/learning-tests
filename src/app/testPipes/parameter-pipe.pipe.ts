import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parameterPipe'
})
export class ParameterPipePipe implements PipeTransform {

  transform(value: any, type?: string): any {
    if(type !== undefined && type.toLowerCase() === 'duplicate') {
      return `${value}, ${value}`;
    }else if(type !== undefined && type.toLowerCase() === 'triple') {
      return `${value}, ${value}, ${value}`;
    }else{
      return value;
    }
  }

}
