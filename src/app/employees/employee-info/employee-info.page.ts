import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {

  employeeInfoDetails :Employee
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private alertCrtl:AlertController,
    private employeesService:EmployeesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('employeeid')) {
        return
      }
      const employeeid = paramMap.get('employeeid')
    this.employeeInfoDetails =   this.employeesService.getEmployeeInfo(employeeid)
    })
  }

  deleteEmployee(){ 
    this.alertCrtl.create({
      header:'You want to Delete !',
      message: "You will Delete this employee",
      buttons:[
        {
          text:"No",
          role:'cancel'

        },
        {
          text:'Remove',
          handler: ()=>{
            this.employeesService.deleteEmployeeInfo(this.employeeInfoDetails.id)
            this.router.navigate(['/employees'])
          }
        }
      ]
    
    }).then(alertV=>{
      alertV.present();
    })

   
  }

}
