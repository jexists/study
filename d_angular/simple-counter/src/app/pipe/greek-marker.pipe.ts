import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'greekMarker' })
export class GreekMarkerPipe implements PipeTransform {
  transform(value: string, level: string): string {
    switch (level) {
      case 'A': return `1 ${value}`;
      case 'B': return `2 ${value}`;
      case 'C': return `3 ${value}`;
      default:  return `4 ${value}`;
    }
  }
}