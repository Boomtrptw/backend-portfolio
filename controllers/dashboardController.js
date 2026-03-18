const Experience = require("../models/Experience");
const Project = require("../models/Project");
const TechStack = require("../models/TechStack");

exports.getDashboardData = async (req, res) => {
    try {
        // ดึงข้อมูลพร้อมกันเพื่อความเร็ว
        const [experiences, projects, techStacks] = await Promise.all([
            Experience.find().sort({ order: 1 }),
            Project.countDocuments(), // นับจำนวนโปรเจกต์
            TechStack.find()
        ]);

        // รวบรวม Skills ทั้งหมดจากทุกกลุ่มมาเป็น Array เดียว
        const allSkills = techStacks.flatMap(group => group.skills.map(s => s.name));

        res.status(200).json({
            status: "success",
            data: {
                stats: {
                    projectCount: projects,
                    expYears: "2+", // หรือจะเขียน logic คำนวณจากวันที่ก็ได้
                    mainTech: "NextJS / NodeJS"
                },
                experiences,
                skills: allSkills,
                // เพิ่ม Soft Skills (อาจจะ Hardcode หรือทำ Model แยกก็ได้)
                softSkills: ["Teamwork", "Agile", "Communication"]
            }
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};