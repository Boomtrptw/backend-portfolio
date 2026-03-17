const mongoose = require("mongoose")
const baseSchema = require("./baseSchema")

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    tech: [String],
    github: String,
    demo: String,
    image: String,

    ...baseSchema
})

module.exports = mongoose.model("Project", projectSchema)