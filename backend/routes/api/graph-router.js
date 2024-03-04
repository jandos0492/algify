const router = require("express").Router();
const { Graph } = require("../../db/models");

router.get("/graphs", async (req, res) => {
    try {
        const graphs = await Graph.findAll();
        res.json(graphs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


router.get("/graphs/:id", async (req, res) => {
    const graphId = req.params.id;

    try {
        const graph = await Graph.findByPk(graphId);
        if (!graph) {
            return res.status(400).json({ message: `Graph data by this id ${graphId} not found.`});
        }
        res.json(graph);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;