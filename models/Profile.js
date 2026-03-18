const mongoose = require("mongoose");
const baseSchema = require("./baseSchema");

const profileSchema = new mongoose.Schema({
    fullName: String,
    nickname: String,
    role: String,
    bio: String,
    birthday: String,
    phone: String,
    email: String,
    location: String,
    socials: {
        line: String,
        facebook: String,
        instagram: String
    },
    education: {
        university: String,
        major: String,
        desc: String
    },
    philosophy: String,
    ...baseSchema
});

module.exports = mongoose.model("Profile", profileSchema);