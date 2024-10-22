import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; // Import EventEmitter from @angular/core
import { Doctor } from '../model/doctors.model';

@Component({
  selector: 'app-update-doctors',
  templateUrl: './update-doctors.component.html',
  styles: []
})
export class UpdateDoctorsComponent implements OnInit { 
  @Input() doctor!: Doctor; // Assurez-vous que la classe Doctor est correctement importée
  @Input() ajout!: boolean;
  @Output() doctorUpdated = new EventEmitter<Doctor>();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateDoctors ", this.doctor);
  }

  saveDoctor() {
    this.doctorUpdated.emit(this.doctor); 
  }

  /*modeAjout()
  {
    this.ajout=true;
    this.categorie.idCat = 0;
    this.categorie.nomCat="";
  }*/
}
