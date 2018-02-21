import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationserviceService } from './../services/communicationservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stdss=[];
  subscription: Subscription;
  @Output() editStd = new EventEmitter();
    constructor(private commService:CommunicationserviceService) {
      this.getStdDetails();
    }

  ngOnInit() {
  }

  deletestd(std){
    console.log('std to be deleted::',std);
    this.commService.delStdData(std);
    this.getStdDetails();
  }

  getStdDetails(){
    var stds = this.commService.getStdData();
    if(stds)
    this.stdss = stds;
    console.log('students in storege::::',this.stdss);
  }

}
