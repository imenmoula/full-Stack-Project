import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import{Doctor} from '../model/doctors.model';
import{Router} from '@angular/router';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html', 
  styleUrls: ['./add-patient.component.css'] 
})
export class AddPatientComponent implements OnInit {
  newPatient = new Patient();
  message: string = ""; // Corrected the variable name
  doctors!:Doctor[];
  newIdDoct!:number;
  newDoctor! : Doctor;
  constructor(private patientService: PatientService,
              private router :Router) {}
  
  ngOnInit(): void {

    this.patientService.listeDoctors().
    subscribe(doct=>{
      console.log(doct);
      //this.doctors=doct._embedded.doctors;
      
    });
  }
  
  
  addPatient() {
    this.newPatient.doctor=this.doctors.find(doct=>doct.idDoct==this.newIdDoct)!;
    
    this.patientService.ajouterPatient(this.newPatient)
    .subscribe(pat=>{
      console.log(pat);
      this.router.navigate(['patients']);
    }
    );

  }
  
}
