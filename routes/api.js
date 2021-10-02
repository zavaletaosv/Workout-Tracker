const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.status(400);
        });
});