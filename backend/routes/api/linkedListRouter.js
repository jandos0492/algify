const router = require("express").Router();
const { LinkedList } = require("../../db/models");

router.get("/linked-lists", async (req, res) => {
    try {
        const linkedLists = await LinkedList.findAll();
        res.json(linkedLists);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;