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


router.get("/linked-lists/:id", async (req, res) => {
    const linkedListId = req.params.id;

    try {
        const linkedList = await LinkedList.findByPk(linkedListId);
        if (!linkedList) {
            return res.status(400).json({ message: `Linked list data by this id ${linkedListId} found.`})
        }
        res.json(linkedList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;