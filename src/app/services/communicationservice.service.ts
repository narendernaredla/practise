import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationserviceService {

  stdsArray=[];
  count = 0;
  constructor() { }

  private getDataSource = new Subject<string>();

  // Observable string streams
  getDataSource$ = this.getDataSource.asObservable();

  // Service message commands
  sendStdData(stdData) {
    this.stdsArray=[];
    var data =  JSON.parse(JSON.stringify(stdData));
    var savedStd = JSON.parse(localStorage.getItem("stdsarray"));
    var count = 0;
    if(savedStd && savedStd.length){
      console.log(savedStd);
      this.stdsArray = savedStd;
      var ind = this.stdsArray.length;      
      count = this.stdsArray[ind-1].id + 1;
    }
    stdData.id = count; 
    this.stdsArray.push(stdData);
    localStorage.setItem('stdsarray', JSON.stringify(this.stdsArray));
    console.log('savedstudents:::',this.stdsArray)
    //this.getDataSource.next(stdData);
  }

  getStdData() {
    this.stdsArray = JSON.parse(localStorage.getItem("stdsarray"));
    return this.stdsArray;
    //this.getDataSource.next(stdData);
  }

  updateStdData(stdData) {
    var data =  JSON.parse(JSON.stringify(stdData));
    var savedStd = JSON.parse(localStorage.getItem("stdsarray"));
    if(savedStd){
      var updatedstd = savedStd.map(std => {
        if(std.id == stdData.id){
          console.log('matched std',std)
          std = stdData;
          console.log('updated std',std)
          return std;
          
        } 
        return std;         
      });
      console.log('updated std array',updatedstd)
    }
    localStorage.setItem('stdsarray', JSON.stringify(updatedstd));
    //this.getDataSource.next(stdData);
  }

  delStdData(stdData) {
    var data =  JSON.parse(JSON.stringify(stdData));
    var savedStd = JSON.parse(localStorage.getItem("stdsarray"));
    if(savedStd){
      var stdUpdate = [];
      var savedStd = JSON.parse(localStorage.getItem("stdsarray"));
      if(savedStd){
        savedStd.forEach(std => {
          if(std.id != stdData.id){
            stdUpdate.push(std);
          }          
        });
        console.log('updated std array',stdUpdate)
      }
    }
    localStorage.setItem('stdsarray', JSON.stringify(stdUpdate));
    //this.getDataSource.next(stdData);
  }

  formatDate(value){
    value.month =   value.month>9?value.month:"0"+value.month;
    value.day =   value.day>9?value.day:"0"+value.day;
    return value.year + "" + value.month + "" + value.day;
  }

  reformatDate(val){
    var dated={date:{}};
    dated.date = {"day": parseInt(val.slice(6, 8)),"month":parseInt(val.slice(4, 6)),"year":parseInt(val.slice(0, 4))};
    return dated;
  }



}
