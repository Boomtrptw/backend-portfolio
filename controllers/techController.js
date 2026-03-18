const TechStack = require("../models/TechStack");

// ฟังก์ชันสำหรับ Seed ข้อมูล (ยัดข้อมูลชุดใหญ่ครั้งแรก)
exports.seedTechStack = async (req, res) => {
    try {
        const data = req.body;

        // ล้างข้อมูลเก่าออกก่อน (Optional: ถ้าไม่อยากให้ข้อมูลซ้ำกันทุกครั้งที่ยิง)
        // await TechStack.deleteMany({});

        // บันทึกข้อมูลแบบหลายรายการ (Insert Many)
        const result = await TechStack.insertMany(data);

        res.status(201).json({
            status: "success",
            message: "Tech Stack seeded successfully!",
            count: result.length,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

// ฟังก์ชันสำหรับดึงข้อมูลไปโชว์ที่หน้าเว็บ
exports.getAllTechStack = async (req, res) => {
    try {
        const techStacks = await TechStack.find().sort({ order: 1 });
        res.status(200).json({
            status: "success",
            data: techStacks
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};