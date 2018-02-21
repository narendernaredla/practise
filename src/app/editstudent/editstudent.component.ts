import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommunicationserviceService } from './../services/communicationservice.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  editStdDetaails;
  stdId;
  hourspattern=/^[0-9@. ]+$/;
  error=false;
    constructor(private route: ActivatedRoute, private commService:CommunicationserviceService,private router:Router) {
      this.route.params.subscribe(params => {
        this.stdId = params['id'];
        var stds = commService.getStdData();
        stds.forEach(std => {
          if(std.id == this.stdId){
            this.editStdDetaails = std;
            this.editStdDetaails.dob = this.commService.reformatDate(this.editStdDetaails.dob)
            console.log('student to be edited',this.editStdDetaails)
          }          
        });

      });
  }

  ngOnInit() {
  }

  editStudent(form: NgForm){
    this.error =true;
    if(form.valid ){
      this.error = false;
      this.editStdDetaails.dob= this.commService.formatDate(this.editStdDetaails.dob.date)
      console.log('updated details::::',this.editStdDetaails);
      this.commService.updateStdData(this.editStdDetaails);
      this.editStdDetaails='';
      this.router.navigateByUrl('/');
    }
  }

}
