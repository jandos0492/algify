const router = require("express").Router();
const { ExhaustiveRecursion } = require("../../db/models");

router.get("/exhaustive-recursions", async (req, res) => {
    try {
        const exhaustiveRecursions = await ExhaustiveRecursion.findAll();
        res.json(exhaustiveRecursions);
    } catch {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;