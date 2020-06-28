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

// Get one idea by id
router.get('/:id', async (req, res) => {
    // Also fetches the related comments using the .eager method
    const idea = await Idea.query().findById(req.params.id).eager('comments');

    res.json(idea);
});

// Creates a new comment that is a child of an idea
// curl -H "Content-Type: application/json" -d '{"comment":"Good idea", "creator":"Chen"}' http://localhost:3000/ideas/6/comments
router.post('/:id/comments', async (req, res) => {
    const idea = await Idea.query().findById(req.params.id);

    await idea
        .$relatedQuery('comments')
        .insert(req.body);

    res.send(idea);
});

module.exports = router;
