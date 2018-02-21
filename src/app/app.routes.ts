import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const AppRoutes: Routes = [
    {
      path: "students",
      loadChildren: "./modules/students/students.module#StudentsModule"
    },
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "editstd/:id",
      component: EditstudentComponent
    }
  
  ];

  export const AppRouting = RouterModule.forRoot(AppRoutes,{useHash:true});