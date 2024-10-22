package com.imen.patient.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomPat", types = { Patient.class })

public interface PatientProjection {
	public String getNomPatient();


}