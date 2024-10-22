import { Doctor } from "./doctors.model";

export class DoctorWrapped{
    _embedded!: { doctors: Doctor[]};
    }