import mongoose from "mongoose";

const   patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
,    },
    diagnosis: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum:["M" , "F"],
        required: true
    },
    admittedIn: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },

}, { timestamps: true });

export const Patient = mongoose.model('Parient', PatientSchema);