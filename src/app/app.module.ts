import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeDoctorsComponent } from './liste-doctors/liste-doctors.component';
import { UpdateDoctorsComponent } from './update-doctors/update-doctors.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
     RechercheParNomComponent,
     RechercheParCategorieComponent,
     SearchFilterPipe,
     UpdateDoctorsComponent,
     ListeDoctorsComponent,
    LoginComponent,
    ForbiddenComponent
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
