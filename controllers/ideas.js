// The routing functions that decide what each route do.

const express = require('express');
const router = express.Router();
const { Idea, Comment } = require('../models/schema');

// Get all of the ideas
router.get('/', async (req, res) => {
    // "pause" the body of this function until the promise from our Idea.query()
    // resolves.
    const ideas = await Idea.query();

    // The previous query will return an object with all of the items in our
    // ideas table.
    res.json(ideas);
});

module.exports = router;
