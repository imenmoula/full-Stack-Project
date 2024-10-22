import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  nomPatient!: string;
  patients!: Patient[];
  allPatients!: Patient[];
  searchTerm!: string;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.listePatients().subscribe(pats => {
      console.log(pats);
      this.patients = pats;
      this.allPatients = pats; // Stocker tous les patients pour le filtrage local
    });
  }

  rechercherPats() {
    this.patientService.rechercherParNom(this.nomPatient).subscribe(pats => {
      console.log(pats);
      this.patients = pats;
    });
  }

  onKeyUp(filterText: string) {
    this.patients = this.allPatients.filter(item =>
      item.nomPatient.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
