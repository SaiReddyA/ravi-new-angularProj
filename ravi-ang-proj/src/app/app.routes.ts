import { Routes } from '@angular/router';
import { EmployeeForm } from './Components/employee-form/employee-form';
import { EmployeeList } from './Components/employee-list/employee-list';
import { ReactiveFormsEg } from './Components/reactive-forms-eg/reactive-forms-eg';

export const routes: Routes = [
    { path: 'employeeform', component: EmployeeForm }, 
    { path: 'employee', component: EmployeeList }, //Egar loading implementation
    { path:'studentform', loadComponent: () => import('./Components/student-form/student-form').then(m => m.StudentForm)
    },
    { path: 'reactiveform', component: ReactiveFormsEg },
    { path: 'couserdetail', 
        loadComponent: () => import('./Components/course-detail/course-detail').then(m => m.CourseDetail)
     }
];
    