import { Doctor } from "./doctors.model";
export class Patient {
    
        idPatient!: number;
        nomPatient!: string;
        prenomPatient!: string;
        phonePatient!: string;
        maladiePatient!: string;
        dateCreation!:Date;
        doctor!: Doctor;
   
}