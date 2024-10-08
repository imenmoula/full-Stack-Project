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
    // this.patientService.listePatients().subscribe(patients => {
    //   console.log(patients);
    //   this.patients = patients;
    // })
    this.chargerPatients();
  }
  // Charger la liste des patients
  chargerPatients(): void {
    this.patientService.listePatients()
      .subscribe(pats => {
        console.log(pats);
        this.patients = pats;
      }, error => {
        console.error('Erreur lors du chargement des patients', error);
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