import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.model';
 

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employee:Employee[];

  constructor(private employeesService:EmployeesService ) { }

  ngOnInit() {
    this.employee = this.employeesService.getAllEmployees();
  }

}
