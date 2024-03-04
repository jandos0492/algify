const router = require("express").Router();
const { BinaryTree } = require("../../db/models");

router.get("/binary-trees", async (req, res) => {
    try {
        const binaryTrees = await BinaryTree.findAll();
        res.json(binaryTrees);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});


router.get("/binary-trees/:id", async (req, res) => {
    const binaryTreeNo = req.params.id;

    try {
        const binaryTree = await BinaryTree.findByPk(binaryTreeNo);
        if (!binaryTree) {
            return res.status(400).json({ message: ` Binary tree data by this id not found`});
        }
        res.json(binaryTree);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;