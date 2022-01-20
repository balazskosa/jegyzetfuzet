import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "description"
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string): string {
    if(!value) return "";
    let dots: string = "";
    if(value.length > 50) dots = " ...";
    return value.substr(0, 50) + dots;
  }

}
