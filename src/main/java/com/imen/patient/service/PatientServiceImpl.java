package com.imen.patient.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.imen.patient.dto.PatientDTO;
import com.imen.patient.entities.Doctor;
import com.imen.patient.entities.Patient;
import com.imen.patient.repos.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {
	@Autowired
	PatientRepository patientRepository;

	@Autowired
	ModelMapper modelMapper;
	@PreAuthorize("hasAuthority('ADMIN')")
	@Override
	public Patient savePatient(Patient p) {
		return patientRepository.save(p);
	    /*Patient patientEntity = convertDtoToEntity(p);
	    Patient savedPatient = patientRepository.save(patientEntity);
	    return convertEntityToDto(savedPatient);*/
	}

	@Override
	public Patient updatePatient(Patient p) {
		return patientRepository.save(p);
	    /*Patient patientEntity = convertDtoToEntity(p);
	    Patient updatedPatient = patientRepository.save(patientEntity);
	    return convertEntityToDto(updatedPatient);*/
	}
	



    
	@Override
	public void deletePatient(Patient p) {
		patientRepository.delete(p);		
	}

	@Override
	public void deletePatientById(Long id) {
		patientRepository.deleteById(id);
	}

	@Override
	public Patient getPatient(Long id) {
		return patientRepository.findById(id).get();
		/*return  convertEntityToDto( patientRepository.findById(id).get() );*/
		
	}

	@Override
	public List<Patient> getAllPatients() {
		return patientRepository.findAll();
	    /*return patientRepository.findAll().stream()
	            .map(this::convertEntityToDto)
	            .collect(Collectors.toList());*/
	}
				//OU BIEN
				/*List<Produit> prods = patientRepository.findAll();
				List<ProduitDTO> listprodDto = new ArrayList<>(prods.size());
				for (Patient p : prods)
				listprodDto.add(convertEntityToDto(p));
				return listprodDto;*/	
	

	@Override
	public List<Patient> findByNomProduit(String nom) {
		return patientRepository.findByNomPatient(nom);

	}
	

	@Override
	public List<Patient> findByNomPatientContains(String nom) {
		return patientRepository.findByNomPatientContains(nom);
	}

	@Override
	public List<Patient> findByNomPrenom(String nom, String prenom) {
		return patientRepository.findByNomPrenom(nom, prenom);

	}

	@Override
	public List<Patient> findByDoctor(Doctor doctor) {
		return patientRepository.findByDoctor(doctor);

	}

	@Override
	public List<Patient> findByDoctorIdDoct(Long id) {
		return patientRepository.findByDoctorIdDoct(id);

	}

	@Override
	public List<Patient> findByOrderByNomPatientAsc() {
		return patientRepository.findByOrderByNomPatientAsc();

	}

	@Override
	public List<Patient> trierPatientsNomMaladie() {
		return patientRepository.trierPatientsNomMaladie();

	}


	/*@Override
	public PatientDTO convertEntityToDto(Patient patient) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

		PatientDTO patientDTO = modelMapper.map(patient, PatientDTO.class);
	    return patientDTO;
	}


		PatientDTO patientDTO = new PatientDTO ();
		patientDTO.setIdPatient(patient.getIdPatient());
		patientDTO.setNomPatient(patient.getNomPatient());
		patientDTO.setPrenomPatient(patient.getPrenomPatient());
		patientDTO.setPhonePatient(patient.getPrenomPatient());
		patientDTO.setDateCreation(patient.getDateCreation());
		patientDTO.setDoctor(patient.getDoctor());
		return patientDTO;
		return PatientDTO.builder()
		.idPatient(patient.getIdPatient())
		.nomPatient(patient.getNomPatient())
		.prenomPatient(patient.getPrenomPatient())
		.phonePatient(patient.getPhonePatient())
		.MaladiePatient(patient.getMaladiePatient())
		.dateCreation(patient.getDateCreation())
		.doctor(patient.getDoctor())
		.build();*/
	
	/*@Override
	public PatientDto convertDtoToEntity(PatientDTO patientDto) {
			Patient patient = new Patient();
			patient = modelMapper.map(patientDto, Patient.class);
			return patientDto;
	}*/
		/*Patient patient = new Patient();
		patient.setIdPatient(patientDto.getIdPatient());;
		patient.setNomPatient(patientDto.getNomPatient());;
		patient.setPrenomPatient(patientDto.getPrenomPatient());
		patient.setPhonePatient(patientDto.getPhonePatient());
		patient.setMaladiePatient(patientDto.getMaladiePatient());
		patient.setDateCreation(patientDto.getDateCreation());
		patient.setDoctor(patientDto.getDoctor());
		 return patient; */
	
}
