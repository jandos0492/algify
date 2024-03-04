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


module.exports = router;