
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'skeletonLoader'
})
export class SkeletonLoaderPipe implements PipeTransform {
   defaultClass = 'skeleton-screen';
   transform(value: any, skeletonMode: boolean, cssClass?: string): any {
      return skeletonMode ? `<span class="${cssClass ? cssClass : this.defaultClass}"></span>` : value;
   }
}

