
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slice'
})

export class SliceText implements PipeTransform {
    transform(value: string, limit?:number): any {
        if (!limit)
            return null;
        return value.substr(0, limit) + '...';
    }
}