import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  students: students;
  error=false;
  studentsArray=[];
  constructor() {
    this.students = new students;
   }

  ngOnInit() {
  }

  addStudents(std){
    console.log(std);
    this.studentsArray.push(std);
    console.log(this.studentsArray);
  }

}

class students{
  name: string;
  dob: any;
  addr: any;
  phone: string;
}