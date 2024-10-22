import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component'; // Ensure this is used
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { ListeDoctorsComponent } from './liste-doctors/liste-doctors.component';
import { UpdateDoctorsComponent } from './update-doctors/update-doctors.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { patientGuard } from './patient.guard';
const routes: Routes = [
  {path:"patients", component: PatientsComponent},
{path:"add-patient", component: AddPatientComponent,canActivate:[patientGuard]},
{path:"",redirectTo:"patients",pathMatch:"full"},
{path:'updatePatient/:id',component:UpdatePatientComponent},
{ path: 'RechercheParCategories', component: RechercheParCategorieComponent },
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeDoctors", component : ListeDoctorsComponent},
{path:"UpdateDoctors",component:UpdateDoctorsComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
