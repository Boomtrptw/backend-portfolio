const mongoose = require("mongoose");
const baseSchema = require("./baseSchema");

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    period: { type: String, required: true },
    desc: { type: String },
    order: { type: Number, default: 0 },
    ...baseSchema
});

module.exports = mongoose.model("Experience", experienceSchema);