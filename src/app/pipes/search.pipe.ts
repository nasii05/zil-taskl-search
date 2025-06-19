import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;

    const lowerSearch = searchText.toLowerCase().trim();

    return items.filter(item => {
      const searchableFields = [
        item.name,
        item.email,
        item.phone,
        item.company?.name,
        item.company?.designation
      ];

      return searchableFields.some(field =>
        field?.toString().toLowerCase().includes(lowerSearch)
      );
    });
  }
}
