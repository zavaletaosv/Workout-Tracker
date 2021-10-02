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

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
        .limit(7)
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.status(400);
        });
});