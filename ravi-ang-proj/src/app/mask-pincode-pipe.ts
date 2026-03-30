import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPincode'
})
export class MaskPincodePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    // show first 3 digits, mask last 3 with *
    return value.substring(0, 3) + '***';  // 600040 → 600***
  }

}
