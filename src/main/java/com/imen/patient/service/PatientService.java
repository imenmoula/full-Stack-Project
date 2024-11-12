package com.imen.patient.service;

import java.util.List;

import com.imen.patient.dto.PatientDTO;
import com.imen.patient.entities.Doctor;
import com.imen.patient.entities.Patient;

public interface PatientService {
	
	Patient savePatient(Patient p);
	Patient getPatient(Long id);
	List<Patient> getAllPatients();
	Patient updatePatient(Patient  p);
	
	void deletePatient(Patient p);
	 void deletePatientById(Long id);
	List<Patient> findByNomProduit(String nom);
	List<Patient> findByNomPatientContains(String nom);
	List<Patient> findByNomPrenom (String nom, String prenom);
	List<Patient> findByDoctor (Doctor doctor);
	List<Patient> findByDoctorIdDoct(Long id);
	List<Patient> findByOrderByNomPatientAsc();
	List<Patient> trierPatientsNomMaladie();
	/*PatientDTO convertEntityToDto (Patient patient);

	Patient  convertDtoToEntity (PatientDTO patientDto);*/


}
