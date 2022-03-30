import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: '', redirectTo: 'employees',  pathMatch: 'full'
  },
  {
    path: 'employees',
    children:[
      {
        path: '',
        loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
      },
   
    {
      path: ':employeeid',
      loadChildren: () => import('./employees/employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
