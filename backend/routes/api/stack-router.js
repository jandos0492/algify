const router = require("express").Router();
const { Stack } = require("../../db/models");

router.get("/stacks", async (req, res) => {
    try {
        const stacks = await Stack.findAll();
        res.json(stacks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
    
});


router.get("/stacks/:id", async (req, res) => {
    const stackId = req.params.id;
    try {
        const stack = await Stack.findByPk(stackId);
    
        if (!stack) {
            return res.status(400).json({ message: `Stack data by this id ${stackId} not found.`});
        }
        res.json(stack);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;