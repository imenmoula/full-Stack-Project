import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctors.model';
@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: ``
})
export class UpdatePatientComponent implements OnInit {
  currentPatient = new Patient();
  doctors!:Doctor[];
  updatedDoctId!:number;
 

  message: string = "";
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private patientService: PatientService) { }
  ngOnInit(){
        this.patientService.listeDoctors().
        subscribe(doct=>{
          console.log(doct);
          //this.doctors = doct._embedded.doctors;
                });
        this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).subscribe(
          pat=>{this.currentPatient=pat;
            this.updatedDoctId=this.currentPatient.doctor.idDoct;
          }
          
        );
          
        
  }

  updatePatient() 
  {
 this.currentPatient.doctor=this.doctors.find(doct=>doct.idDoct==this.updatedDoctId)!;
this.patientService.updatePatient(this.currentPatient).subscribe
(pat=>{
  this.router.navigate(['patients']);  
});
  }
}

  



