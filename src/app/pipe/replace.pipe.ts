import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({
    name: 'replace' /* nome do pipe que será utilizado no html */
})

export class ReplacePipe implements PipeTransform{
    
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}
