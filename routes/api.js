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

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.status(400);
    });
});

router.put('/api/workouts/:id', ({ params, body }, res) => {
    db.Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: {exercises: body }},
        { new: true }
    )
    .catch(err => {
        res.status(400);
    });
});