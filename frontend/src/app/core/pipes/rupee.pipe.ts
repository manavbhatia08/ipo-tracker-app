import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

  transform(value: number, symbol : string = '$'): unknown {
    if(value==null) return '-';
        const rupeeValue = value/10000000;
        return `${symbol}${rupeeValue.toFixed(0)}Cr`
  }
}
