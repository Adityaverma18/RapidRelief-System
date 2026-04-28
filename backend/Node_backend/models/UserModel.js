import mongoose from 'mongoose'

const User = new mongoose.Schema({

    //Data Field
    name: {type: String},
    email: {type: String, unique: true},
    phoneNumber: {type: String, unique: true},

    //Password
    password: {type: String},
    confirmPassword: {type: String},

    //Role
    role:
    {
        type: String,
        enum : ["User", "Rescue", "Admin"],
        default: "User"
    },

    //Status
    status:
    {
        type:  String,
        enum: ["Blocked", "Pending", "Active"],
        default: "Active"
    },

    location:
    {
        lat: {type: String},
        lon: {type: String}
    },

    //Skills and verifiction
    skills: [String], // for rescue
    documents: [
        {
        url: String,
        type: String, // ID_PROOF, CERTIFICATE
        uploadedAt: {
            type: Date,
            default: Date.now
        }
        }
    ],

    verification: {
        isVerified: {
        type: Boolean,
        default: false
        },
        verifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
        verifiedAt: Date
    },

    availability: {
        type: String,
        enum: ["FULL_TIME", "PART_TIME", "OFF_DUTY"],
        default: "OFF_DUTY"
    }

}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);