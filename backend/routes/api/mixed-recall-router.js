const router = require("express").Router();
const { MixedRecall } = require("../../db/models");

router.get("/mixed-recalls", async (req, res) => {
    try {
        const mixedRecalls = await MixedRecall.findAll();
        res.json(mixedRecalls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;