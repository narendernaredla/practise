import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouting} from './app.routes';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home.component';
import {CommunicationserviceService } from './services/communicationservice.service';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { MyDatePickerModule } from 'mydatepicker';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { InputValidatorDirective } from './directives/input-validator.directive'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    EditstudentComponent,
    DateFormatPipe,
    InputValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRouting,
    NgbModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [CommunicationserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
