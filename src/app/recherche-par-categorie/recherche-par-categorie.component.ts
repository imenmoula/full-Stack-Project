import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctors.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class RechercheParCategorieComponent implements OnInit { 

  IdDoctors!: number; // Doctor ID selected from dropdown
  doctors!: Doctor[]; // List of doctors
  patients!: Patient[]; // List of patients fetched based on selected doctor
  
  
    constructor(private patientService:PatientService) { }
  
    ngOnInit(): void {
      this.patientService.listeDoctors().
        subscribe(doct => {this.doctors = doct._embedded.doctors;
        console.log(doct);
      });
  
    }
  
    onChange() {
      this.patientService.rechercherParCategorie(this.IdDoctors).
        subscribe(pat =>{this.patients=pat});
  
      }

}
