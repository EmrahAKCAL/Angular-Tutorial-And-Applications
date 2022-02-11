import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number) {
        if(!value) return null;
        let _limit= (limit)? limit: 20; ///limit belirtilmişse girilen limit değerini baz al, girmemişse 20 olarak ayarla
        return value.substr(0, _limit) + '...';
    }
}