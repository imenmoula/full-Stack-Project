import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component'; // Ensure this is used
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import{RechercheParCategorieComponent} from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
const routes: Routes = [
  {path:"patients", component: PatientsComponent},
{path:"add-patient", component: AddPatientComponent},
{path:"",redirectTo:"patients",pathMatch:"full"},
{path:'updatePatient/:id',component:UpdatePatientComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
