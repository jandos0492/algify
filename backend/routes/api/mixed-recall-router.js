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


router.get("/mixed-recalls/:id", async (req, res) => {
    const mixedRecallId = req.params.id;
    try {
        const mixedRecall = await MixedRecall.findByPk(mixedRecallId);
        if (!mixedRecall) {
            return res.status(400).json({ message: `Mixed recall data by this id ${mixedRecallId} not found.` });
        }
        res.json(mixedRecall);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;