import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'] 
})
export class PatientsComponent implements OnInit {
  patients?:Patient[];

  constructor(private patientService: PatientService) {
  
  }

  ngOnInit(): void {
    
    this.chargerPatients();
  }
  // Charger la liste des patients
  chargerPatients(): void {
    this.patientService.listePatients()
    .subscribe(pat => {
    console.log(pat);
    this.patients = pat;
    });
  }

  // Supprimer un patient
  supprimerPatient(p: Patient): void {
    let conf = confirm("Etes-vous Sure ?");
    if (conf)
    this.patientService.supprimerPatient(p.idPatient).subscribe(() => {
    console.log("patient supprimé");
    this.chargerPatients();
    });
  }
 
    
  
}