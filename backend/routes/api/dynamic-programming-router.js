const router = require("express").Router();
const { DynamicProgramming } = require("../../db/models");

router.get("/dynamic-programmings", async (req, res) => {
    try {
        const dynamicProgrammings = await DynamicProgramming.findAll();
        res.json(dynamicProgrammings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


router.get("/dynamic-programmings/:id", async (req, res) => {
    const dynamicProgrammingId = req.params.id;
    try {
        const dynamicProgramming = await DynamicProgramming.findByPk(dynamicProgrammingId);
        if (!dynamicProgramming) {
            return res.status(400).json({ message: `Dynamic programming data by this id ${dynamicProgrammingId} not found.` });
        }
        res.json(dynamicProgramming);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;