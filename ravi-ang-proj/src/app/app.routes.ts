import { Routes } from '@angular/router';
import { EmployeeForm } from './Components/employee-form/employee-form';
import { EmployeeList } from './Components/employee-list/employee-list';

export const routes: Routes = [
    { path: 'employeeform', component: EmployeeForm }, 
    { path: 'employeelist', component: EmployeeList }, //Egar loading implementation
    { path:'studentform', loadComponent: () => import('./Components/student-form/student-form').then(m => m.StudentForm)
    }
];
    