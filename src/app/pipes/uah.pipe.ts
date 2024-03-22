import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uah',
  standalone: true
})
export class UahPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return `${value.toFixed(2)} грн`;
  }

}
