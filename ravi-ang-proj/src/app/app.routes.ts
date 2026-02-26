import { Routes } from '@angular/router';
import { EmployeeForm } from './Components/employee-form/employee-form';
import { EmployeeList } from './Components/employee-list/employee-list';

export const routes: Routes = [
    { path: 'employeeForm', component: EmployeeForm }, 
    { path: 'employeeList', component: EmployeeList }, 
];
