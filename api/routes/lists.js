const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

//CREATE
router.post('/', verify, async (req, res) => {
    // console.log(req.user.admin);
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not authorized to perform this action");
    }
});


//DELETE


module.exports = router;