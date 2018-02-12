import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home.component'

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
    }
  
  ];

  export const AppRouting = RouterModule.forRoot(AppRoutes,{useHash:true});