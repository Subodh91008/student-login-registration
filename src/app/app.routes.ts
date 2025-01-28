import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisstrationComponent } from '../pages/regisstration/regisstration.component';
import { AllStudentComponent } from '../pages/all-student/all-student.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
        
    },
   
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisstrationComponent
            },{
                path:'all',
                component:AllStudentComponent
            }
        ]
    }

];
