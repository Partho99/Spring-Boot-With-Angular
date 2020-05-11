import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(value: any, searchName: string): any {
    console.log(searchName);
    if (searchName === '') {
      return value;
    }
    const newsArray: any[] = [];

    for (let i = 0; i < value.length; i++) {
      let newsS: string = value[i].newsTitle;
      if (newsS.startsWith(searchName)) {
        newsArray.push(value[i]);
      }
    }
    return newsArray;
  }
}
