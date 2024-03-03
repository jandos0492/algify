const router = require("express").Router();
const { Introduction } = require("../../db/models")

router.get("/introductions", async (req, res) => {
    try {
        const introductions = await Introduction.findAll();
        res.json(introductions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error "});
    }
});

router.get("/introductions/:no", async (req, res) => {
    const introductionNo = req.params.no;
    try {
        const introduction = await Introduction.findByPk(introductionNo);

        if (!introduction) {
            return res.status(400).json({ message: `Introduction data number ${introductionNo} not found.` });
        }
        res.json(introduction)
    } catch (error) {
        console.error(error);
        res.status(500).json( {message: "Server Error" });
    }
});

module.exports = router;