import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "next"
})
export class NextPipe implements PipeTransform {
  transform(value: string): string {

    if(!value.toUpperCase().includes("NEXT")) return value;
    return value.substr(0,4) + " " + value.substr(4);

  }

}


