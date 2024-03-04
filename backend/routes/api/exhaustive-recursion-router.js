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


router.get("/exhaustive-recursions/:id", async (req, res) => {
    const exhaustiveRecursionId = req.params.id;
    try {
        const exhaustiveRecursion = await ExhaustiveRecursion.findByPk(exhaustiveRecursionId);
        if (!exhaustiveRecursion) {
            return res.status(400).json({ message: `Exhaustive recursion data by this id ${exhaustiveRecursionId} not found.`});
        }
        res.json(exhaustiveRecursion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;