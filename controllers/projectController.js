const Project = require("../models/Project");

// ดึงโปรเจกต์ทั้งหมด
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ order: 1 });
        res.status(200).json({ status: "success", data: projects });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// ยัดข้อมูลเริ่มต้น (Seed)
exports.seedProjects = async (req, res) => {
    try {
        const data = req.body;
        // await Project.deleteMany({}); // เปิดถ้าต้องการล้างข้อมูลเก่าก่อนยิง
        const result = await Project.insertMany(data);
        res.status(201).json({
            status: "success",
            message: "Projects seeded!",
            count: result.length
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};