const Profile = require("../models/Profile");
const Experience = require("../models/Experience");

// --- Profile Controllers ---
exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne(); // ดึงอันแรกที่เจอ
        res.status(200).json({ status: "success", data: profile });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.status(200).json({ status: "success", data: profile });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// --- Experience Controllers ---
exports.getExperiences = async (req, res) => {
    try {
        const exps = await Experience.find().sort({ order: 1 });
        res.status(200).json({ status: "success", data: exps });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

exports.seedExperiences = async (req, res) => {
    try {
        await Experience.deleteMany({});
        const result = await Experience.insertMany(req.body);
        res.status(201).json({ status: "success", count: result.length });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};