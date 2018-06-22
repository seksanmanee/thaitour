import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter',
})
export class DateFilterPipe implements PipeTransform {
  transform(array: Array<any> = [], args): Array<any> {
    if (typeof args[0] === "undefined") {
      return array;
    }
    let direction = args[0][0];

    let string1 = args.split('-');
    if (string1[1].indexOf('.') !== -1) {
      // would be true. Period found in file name
      let string2 = string1[1].split('.');
      array.sort((a: any, b: any) => {
        let left = Number(new Date(a[string2[0]][string2[1]]));
        let right = Number(new Date(b[string2[0]][string2[1]]));
        return (direction === "-") ? right - left : left - right;
      });
    } else {
      array.sort((a: any, b: any) => {
        let left = Number(new Date(a[string1[1]]));
        let right = Number(new Date(b[string1[1]]));
        return (direction === "-") ? right - left : left - right;
      });

    }
    return array;
  }
}
