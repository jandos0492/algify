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


module.exports = router;