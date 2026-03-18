const mongoose = require("mongoose");
const baseSchema = require("./baseSchema");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }], // เก็บเป็น Array ของ String
    pdfUrl: { type: String, default: null },
    image: { type: String, default: "/images/default-project.png" },

    // โครงสร้างข้อมูลรายละเอียดภายใน
    details: {
        challenge: { type: String },
        solution: { type: String },
        impact: { type: String },
        specs: [{ type: String }],
        stats: {
            acc: { type: String, default: "-" },
            latency: { type: String, default: "-" }
        }
    },

    order: { type: Number, default: 0 },
    ...baseSchema
});

// Middleware อัปเดตวันที่แก้ไขอัตโนมัติ
projectSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model("Project", projectSchema);