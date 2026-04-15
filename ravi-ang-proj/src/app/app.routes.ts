import { Routes } from '@angular/router';
import { EmployeeForm } from './Components/employee-form/employee-form';
import { EmployeeList } from './Components/employee-list/employee-list';
import { ReactiveFormsEg } from './Components/reactive-forms-eg/reactive-forms-eg';
import { routecheckerGuard } from './Gaurds/routechecker-guard';
import { Subjects2 } from './Components/subjects2/subjects2';
import { Lifecycles } from './Components/lifecycles/lifecycles';

export const routes: Routes = [
    { path: 'employeeform', component: EmployeeForm }, 
    { path: 'employee', component: EmployeeList }, //Egar loading implementation
    { path:'studentform', loadComponent: () => import('./Components/student-form/student-form').then(m => m.StudentForm)
    },
    { path: '', component: Subjects2 },
    { path: 'lifecycles', component: Lifecycles },
    { path: 'reactiveform', component: ReactiveFormsEg },
    { path: 'couserdetail', canActivate: [routecheckerGuard], 
        loadComponent: () => import('./Components/course-detail/course-detail').then(m => m.CourseDetail)
    },
    {
        path: 'subject', loadComponent: () => import('./Components/subject/subject').then(m => m.Subject)
    }
];
    