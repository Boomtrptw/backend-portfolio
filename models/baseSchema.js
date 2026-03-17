const mongoose = require("mongoose")

const baseSchema = {
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        default: "system"
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    updated_by: {
        type: String,
        default: "system"
    }
}

module.exports = baseSchema