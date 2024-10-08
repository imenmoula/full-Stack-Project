import { Component } from '@angular/core';
import { Doctor } from '../model/doctors.model';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent {
  patients!: Patient[];
  idDoctor!: number;
  doctors!: Doctor[];

  constructor() { }
  ngOnInit(): void {
    this.patientsService.listeDoctors().
    subscribe((doct: CategorieWrapper) => {this.doctors = doct._embedded.doctors;
    console.log(doct);
    });
  }
    onChange() {
      this.patientsService.rechercherParCategorie(this.idDoctor).
      subscribe(pat =>{this.patients=pat});
      }
}
