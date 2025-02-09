import mongoose from "mongoose";

const mecicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicaslRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);