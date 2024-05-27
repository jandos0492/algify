const router = require("express").Router();
const { BeginnerRecursion } = require("../../db/models");


router.get("/beginner-recursions", async (req, res) => {
    try {
        const beginnerRecursions = await BeginnerRecursion.findAll();
        res.json(beginnerRecursions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


router.get("/beginner-recursions/:id", async (req, res) => {
    const beginnerRecursionId = req.params.id;
    try {
        const beginnerRecursion = await BeginnerRecursion.findByPk(beginnerRecursionId);

        if (!beginnerRecursion) {
            return res.status(400).json({ message: `Beginner Recursion data by this id ${beginnerRecursionId} not found.`});
        }
        res.json(beginnerRecursion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;