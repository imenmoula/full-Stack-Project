import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  nomPatient!: string;
  patients!:Patient;
  constructor(){}
  ngOnInit(): void {
    
  }
  

  recherchePatient(){
    this.patientsService.rechercherParNom(this.nomPatient).
    subscribe(pat => {
    this.patients = pat;
    console.log(pat)});
    }
  rechercherParNom(nom: string):Observable< Patient[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Patient[]>(url);
  }
