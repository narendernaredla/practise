import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any){
    var datePipe = new DatePipe("en-US");
    var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var strDate = monthArr[value.slice(4, 6)-1] +" "+value.slice(6, 8)+", "+value.slice(0, 4);
    var indate = new Date(strDate)
    var hyphenDate = datePipe.transform( indate,'dd MMM yyyy');
    var outdate;
    if(hyphenDate){
    outdate = hyphenDate.replace(new RegExp('-','g')," ");
    }else{
    outdate = indate;
    }

    return outdate;
  }

}
