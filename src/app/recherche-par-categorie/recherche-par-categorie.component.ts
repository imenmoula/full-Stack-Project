import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient.model';
import { CategorieWrapper } from '../model/categorieWapped.model';
import { Doctor } from '../model/doctors.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [``]
})
export class RechercheParCategorieComponent implements OnInit {
  
    patients!: Patient[];
  idDoctor!: number;
  doctors!: Doctor[];
  

  constructor(private patientsService: PatientService) { }

  ngOnInit(): void {
    this.patientsService.listeDoctors().
    subscribe((doct: CategorieWrapper) => {this.doctors = doct._embedded.doctors;
    console.log(doct);
    });
  }

  onChange() {
    this.patientsService.rechercherParCategorie(this.idDoctor).
subscribe(pat =>{this.patients=pat;});

  }

}