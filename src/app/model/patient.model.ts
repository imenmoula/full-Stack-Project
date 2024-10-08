import { Doctor } from "./doctors.model";
export class Patient {
    
        idPatient!: number;
        nomPatient!: string;
        prenomPatient!: string;
        phonePatient!: string;
        MaladiePatient!: string;
        dateCreation!:Date;
        doctor!: Doctor;

	
}