import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epPercent'
})
export class EpPercentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  
}
