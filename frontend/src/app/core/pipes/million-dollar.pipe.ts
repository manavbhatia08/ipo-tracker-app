import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'millionDollar'
})

export class millionDollarPipe implements PipeTransform{
    transform(value: number, symbol : string = '$') {
        if(value==null) return '-';
        const millionValue = value/1000000;
        return `${symbol}${millionValue.toFixed(2)}M`
    }
}

