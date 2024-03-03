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




module.exports = router;