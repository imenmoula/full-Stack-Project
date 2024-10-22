import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctors.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorWrapped } from '../model/DoctorWrapped .model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  @Injectable({
    providedIn: 'root'
  })
export class PatientService {
  apiURL: string = 'http://localhost:8081/patients/api';
  apiURLCat: string = 'http://localhost:8081/patients/doct';

  patients: Patient[]=[];

  //doctors: Doctor[]  = [];

  constructor(private http: HttpClient) {
   
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

  
  listeDoctors():Observable<DoctorWrapped>{
    return this.http.get<DoctorWrapped>(this.apiURLCat);
    }
   /* rechercherParCategorie(id_doct: number):Observable< Patient[]> {
      const url = `${this.apiURL}/patdoct/${id_doct}`;
      return this.http.get<Patient[]>(url);
      }*/
      rechercherParCategorie(id_doct: number): Observable<Patient[]> {
        const url = `${this.apiURL}/patdoct/${id_doct}`;
        return this.http.get<Patient[]>(url);
    }
    
      

      rechercherParNom(nom: string):Observable< Patient[]> {
        const url = `${this.apiURL}/patsByName/${nom}`;
        return this.http.get<Patient[]>(url);
        }

        ajouterDoctor( doct:Doctor):Observable<Doctor>{
          return this.http.post<Doctor>(this.apiURLCat, doct, httpOptions);
          }

          supprimerDoctor(id : number) {
            const url = `${this.apiURL}/${id}`;
            return this.http.delete(url, httpOptions);
            } 
  // Trie les patients par ID
  /*TrierPatients(): void {
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
 */
      

}
