import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specialzedIn: [
        {
            type: String,
        }
    ]
    
}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hospitalSchema);