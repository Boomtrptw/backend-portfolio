const mongoose = require("mongoose");
const baseSchema = require("./baseSchema"); // ดึงโครงสร้างพื้นฐานมาใช้

// Schema ย่อยสำหรับแต่ละ Skill (ตัวนี้ไม่ต้องมี baseSchema ก็ได้เพราะเป็นส่วนประกอบย่อย)
const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
        trim: true
    }
});

// Schema หลักสำหรับกลุ่มเทคโนโลยี
const techStackSchema = new mongoose.Schema({
    // --- เริ่มต้นข้อมูลของ Tech Group ---
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    skills: [skillSchema],
    order: {
        type: Number,
        default: 0
    },

    // --- รวม Base Schema (created_at, updated_at, etc.) เข้ามา ---
    ...baseSchema
});

// เพิ่ม Middleware เล็กน้อยเพื่อให้ updated_at เปลี่ยนค่าอัตโนมัติเมื่อมีการแก้ไข
techStackSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model("TechStack", techStackSchema);