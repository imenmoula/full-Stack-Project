import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import{Doctor} from '../model/doctors.model';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiURL: string = 'http://localhost:4200/patients/api';

  patients: Patient[]=[];

  //doctors:Doctor[];
  constructor(private http: HttpClient) {
    
  
    // this.doctors = [
    //   { idDoct: 1, nomDoct: "Moula imen", specialiteDoct: "Pédiatrie" }, 
    //   { idDoct: 2, nomDoct: "Fathi", specialiteDoct: "Médecine générale" },
    //   { idDoct: 3, nomDoct: "Yosr", specialiteDoct: "Cardiologie" }
    // ];
    
   this.patients = [
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
     ];
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
  supprimerPatient(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  // Consulter un patient spécifique par ID
  consulterPatient(id: number): Observable<Patient> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Patient>(url);
  }

  // Met à jour un patient existant
  updatePatient(pat: Partial<Patient>): Observable<Patient> {
    return this.http.put<Patient>(this.apiURL, pat, httpOptions);
  }

  listeDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.apiURL);
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
}
/*listePatients():Patient[] {
    return this.patients;
}*/
/*ajouterPatient( pat: Patient){
this.patients.push(pat);
}*/
// supprimerPatient( pat: Patient){
//   //supprimer le produit prod du tableau produits
//   const index = this.patients.indexOf(pat, 0);
//   if (index > -1) {
//   this.patients.splice(index, 1);
//   }
//   //ou Bien
//   /* this.produits.forEach((cur, index) => {
//   if(prod.idProduit === cur.idProduit) {
//   this.produits.splice(index, 1);
//   }
//   }); */
// }

// consulterPatient(id:number):Patient{
//   return this.patients.find(p => p.idPatient == id)!;
  
// }


  // trierPatients() {
  //   this.patients.sort((n1, n2) => n1.idPatient! - n2.idPatient!);
  // }

// updatePatient(pat:Patient){
//   //console.log(pat);
//   this.supprimerPatient(pat);
//   this.ajouterPatient(pat);
//   this.trierPatients();



/*consulterDoctor(id:number): Doctor{
    return this.doctors.find(cat => cat.idDoct == id)!;
    } */


