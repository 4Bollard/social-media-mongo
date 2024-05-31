const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateSingleThought,
    deleteSingleThought,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought).delete(deleteSingleThought);

module.exports = router;
