import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctors.model';
import { NgModule } from '@angular/core';

import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-liste-doctors',
  templateUrl: './liste-doctors.component.html',
  styles: []
})
export class ListeDoctorsComponent  implements OnInit{
  Doctors!: Doctor[];
  updatedDoct: Doctor = { id_doct: 0, nomDoct: 'lara', prenomDoct: 'john', tel: '1233455', specialite: 'specialite0' };
  ajout: boolean = true;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
      this.chargerDoctors();  
  }

  // Method to load the doctors from the service
  chargerDoctors(){
      this.patientService.listeDoctors()
          .subscribe(doct => {
              this.Doctors = doct._embedded.doctors;
              console.log(doct);
          });
  }

  // Method to handle updating of doctor info
  updateDoct(doct: Doctor) {
      this.updatedDoct = doct;
      this.ajout = false;  
  }

  // Method to handle when a doctor is updated
  doctorUpdated(doct: Doctor){
      console.log("Doctor updated event", doct);
      this.patientService.ajouterDoctor(doct)
          .subscribe(() => this.chargerDoctors());
  }

  // Method to delete a doctor
  supprimerDoctor(doct: Doctor) {
      let conf = confirm("Are you sure you want to delete this doctor?");
      if (conf) {
          this.patientService.supprimerDoctor(doct.id_doct)
              .subscribe(() => {
                  console.log("Doctor deleted");
                  this.chargerDoctors();  
              });
      }
  }

}
