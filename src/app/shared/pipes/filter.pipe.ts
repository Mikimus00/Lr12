import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
 transform(workers, filter) {

    let res=this.sort(workers);
    let find=this.sort(filter);
    
    if (filter.name != null && filter.name != ""){
      res = res.filter(
        function (elm){
          return elm.name.indexOf(filter.name) == 0;
        }); 
    }
    if (filter.surname != null && filter.surname != ""){
      res = res.filter(
        function (elm){
          return elm.surname.indexOf(filter.surname) == 0;
        }); 
    }
    return res;
  }
  sort(search){
    if ((search.name!=null)&&(search.name.search(" ")!=-1)){
      let bufer=search.name.slice(search.name.search(" ")+1,search.name.length);
      search.name=search.name.slice(0,search.name.search(" "))
      search.surname=bufer;
    }
  return search;
  }
}