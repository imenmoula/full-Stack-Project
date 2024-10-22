import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any[] {
    if (!list || !filterText) {
      return list; // Return the original list if no filter text is provided
    }
    
    const lowerCaseFilterText = filterText.toLowerCase();
    return list.filter(item => 
      item.nomPatient.toLowerCase().includes(lowerCaseFilterText)
    );
  }
}
