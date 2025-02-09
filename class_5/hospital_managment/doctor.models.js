import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    exprerience: {
        type: Number,
        default: 0
    },
    workInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    salary: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', DoctorSchema);