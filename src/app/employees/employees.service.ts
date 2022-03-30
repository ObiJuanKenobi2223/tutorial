import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 private employees:Employee[]= [
    {
        id: '1',
        name: 'Test',
        age: 36,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        adress: ['kaasland' , 'whooptiedoo', '42342']
    },
    {
      id: '2',
      name: 'Test Test',
      age: 22,
      avatar: 'https://cdn.pixabay.com/photo/2012/04/18/00/07/silhouette-of-a-man-36181_1280.png',
      adress: ['kaasland' , 'whooptiedoo', '2311']
  },
  {
    id: '3',
    name: 'Test TestTest',
    age: 37,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    adress: ['kaasland' , 'whooptiedoo', '3234']
},
{
  id: '4',
  name: 'Test Testje',
  age: 41,
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
  adress: ['kaasland' , 'whooptiedoo', '6465']
},
  ]

  constructor() { }


  getAllEmployees(){
    return [...this.employees]
  }

  getEmployeeInfo(employeeid: string){
    return {

      ...this.employees.find( emp => { 
        return emp.id === employeeid;
      })
    }
  }


  deleteEmployeeInfo(employeeid: string){
   
     this.employees = this.employees.filter( emp => { 
        return emp.id !== employeeid;
      })
  
  }


}
