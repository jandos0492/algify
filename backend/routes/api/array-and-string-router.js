const router = require("express").Router();
const { ArrayAndString } = require("../../db/models");


router.get("/array-and-strings", async (req, res) => {
    try {
        const arrayAndStrings = await ArrayAndString.findAll();
        res.json(arrayAndStrings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


router.get("/array-and-strings/:id", async (req, res) => {
    const arrayAndStringNo = req.params.id;
    try {
        const arrayAndString = await ArrayAndString.findByPk(arrayAndStringNo);

        if (!arrayAndString) {
            return res.status(400).json({ message: `Array and String data number ${arrayAndStringNo} not found.` });
        }
        res.json(arrayAndString);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error "});
    }
});

module.exports = router;