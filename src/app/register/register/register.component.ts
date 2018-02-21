import { Component, OnInit } from '@angular/core';
import { CommunicationserviceService } from './../../services/communicationservice.service';
import { NgForm } from '@angular/forms';
import { Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  students: Students;
  error=false;
  hourspattern=/^[0-9@. ]+$/;
  constructor(private commService:CommunicationserviceService, private router:Router) {
    this.students = new Students();
   }

  ngOnInit() {
  }

  addStudents(form: NgForm){
    this.error =true;
    if(form.valid ){
      this.error = false;
      var std = JSON.parse(JSON.stringify(this.students));
      std.dob= this.commService.formatDate(std.dob.date)
      console.log('student object:::',std);
      this.students=new Students;
      this.commService.sendStdData(std);
      this.router.navigateByUrl('/');
    }
  }

  editStudent(form: NgForm){
    this.error =true;
    if(form.valid ){
      this.error = false;
      var std = JSON.parse(JSON.stringify(this.students));
      console.log(std);
      this.students=new Students;
      this.commService.sendStdData(std);
    }
  }

  editStdnt(ev){
    console.log(ev);
    this.students = JSON.parse(JSON.stringify(ev));
    console.log(this.students);
  }


}

class Students{
  id: any;
  name: string;
  dob: any;
  addr: any;
  phone: string;
}