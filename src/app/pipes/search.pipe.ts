import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filters: { name?: string; companyName?: string; designation?: string }): any[] {
    if (!items) return [];

    return items.filter(item => {
      const nameFilter = filters.name?.toLowerCase().trim() || '';
      const companyNameFilter = filters.companyName?.toLowerCase().trim() || '';
      const designationFilter = filters.designation?.toLowerCase().trim() || '';

      const nameMatch =
        !nameFilter ||
        item.name?.toLowerCase().includes(nameFilter) ||
        item.email?.toLowerCase().includes(nameFilter);

      const companyNameMatch =
        !companyNameFilter || item.company?.name?.toLowerCase().includes(companyNameFilter);

      const designationMatch =
        !designationFilter || item.company?.designation?.toLowerCase().includes(designationFilter);

      return nameMatch && companyNameMatch && designationMatch;
    });
  }
}
