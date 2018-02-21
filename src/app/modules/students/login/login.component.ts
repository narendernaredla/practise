import { Component, OnInit } from '@angular/core';
import { CommunicationserviceService } from './../../../services/communicationservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
stdss = 'asdasd';
subscription: Subscription;
  constructor(private commService:CommunicationserviceService) {
    console.log('construefadfd');
    this.subscription = commService.getDataSource$.subscribe(
      mission => {
        this.stdss = mission;
    });
  }

  ngOnInit() {
  }

}
