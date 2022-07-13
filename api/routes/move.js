import express from 'express';
import pokeMove from '../../pokelib/pokeMove.js';

const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Append the move Name to the URL to perform the Query'
    });
});

router.get('/:name', async (req, res, next) => {
    const name = req.params.name;

    if (isNaN(name)) {
        const data = await pokeMove(name)
            .catch(err => {
                res.status(404).json({
                    error: 404,
                    message: 'invalid move name'
                });
            });

        res.status(200).json(data);

    } else {
        res.status(200).json({
            message: 'The Move name cannot be a number'
        });
    };
});

export default router; 
