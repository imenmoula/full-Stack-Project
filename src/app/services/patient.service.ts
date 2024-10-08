import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctors.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{CategorieWrapper} from '../model/categorieWapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiURL: string = 'http://localhost:8080/patients/api';
  apiURLCat: string = 'http://localhost:8080/patients/cat';

  patients: Patient[] = [];

  //doctors: Doctor[]  = [];

  constructor(private http: HttpClient) {


   /*  this.doctors = [
       { idDoct: 1, nomDoct: "Moula imen", specialiteDoct: "Pédiatrie" }, 
       { idDoct: 2, nomDoct: "Fathi", specialiteDoct: "Médecine générale" },
       { idDoct: 3, nomDoct: "Yosr", specialiteDoct: "Cardiologie" }
     ];
*/
   /* this.patients = [
      {
        idPatient: 1,
        nomPatient: "Moula",
        prenomPatient: "Imen",
        phonePatient: "111",
        maladiePatient: "Grippe",
        dateCreation: new Date("2024-09-29"),
        doctor: { idDoct: 1, nomDoct: "Moula imen", specialiteDoct: "Pédiatrie" }
      },
      {
        idPatient: 2,
        nomPatient: "User2",
        prenomPatient: "User2",
        phonePatient: "222",
        maladiePatient: "Maladie2",
        dateCreation: new Date("2024-08-29"),
        doctor: { idDoct: 2, nomDoct: "Fathi", specialiteDoct: "Médecine générale" }
      },
      {
        idPatient: 3,
        nomPatient: "User3",
        prenomPatient: "User3",
        phonePatient: "333",
        maladiePatient: "Maladie3",
        dateCreation: new Date("2024-07-29"),
        doctor: { idDoct: 3, nomDoct: "Yosr", specialiteDoct: "Cardiologie" }
      }
    ];*/
  }
  // Liste tous les patients
  listePatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL);
  }

  // Ajoute un nouveau patient
  ajouterPatient(pat: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiURL, pat, httpOptions);
  }

  // Supprime un patient avec un ID spécifique
  supprimerPatient(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // Consulter un patient spécifique par ID
  consulterPatient(id: number): Observable<Patient> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Patient>(url);
  }

  updatePatient(pat: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiURL, pat, httpOptions);
  }

  
  listeDoctors():Observable<CategorieWrapper>{
    return this.http.get<CategorieWrapper>(this.apiURLCat);
    }
  // Trie les patients par ID
  TrierPatients(): void {
    if (this.patients) {
      this.patients = this.patients.sort((n1, n2) => {
        if (n1.idPatient! > n2.idPatient!) {
          return 1;
        }
        if (n1.idPatient! < n2.idPatient!) {
          return -1;
        }
        return 0;
      });
    }
  }
  rechercherParCategorie(idCat: number):Observable< Patient[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Patient[]>(url);
    }
}
