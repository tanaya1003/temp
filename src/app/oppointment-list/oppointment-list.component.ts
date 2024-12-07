import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser} from "@angular/common"


@Component({
  selector: 'app-oppointment-list',
  templateUrl: './oppointment-list.component.html',
  styleUrl: './oppointment-list.component.css'
})
export class OppointmentListComponent implements OnInit {

  newAppointmentTitle : string = "";
  newAppointmentDate  :  Date = new Date();

  appointments:Appointment[] = []
  
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void{
    if (isPlatformBrowser(this.platformId)) {
    let savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }
}

  
  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment:Appointment={
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments" , JSON.stringify(this.appointments))
    }
    
  }
  deleteAppointment(index:number){
   this.appointments.splice(index,1)
   localStorage.setItem("appointments" , JSON.stringify(this.appointments))
  }
}
