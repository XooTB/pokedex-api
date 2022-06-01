import express from 'express';
import SearchPokemon from '../../pokelib/pokeLib.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Append the Pokemon Name in the Request to get Data for that!'
    })
})

router.get('/:name', async (req, res, next) => {
    const name = req.params.name;

    if (isNaN(name)) {
        const data = await SearchPokemon(name)
            .catch(err => {
                res.status(404).json({
                    error: 404,
                    message: 'Invalid pokemon Name'
                });
            });

        res.status(200).json(data);
    } else {
        res.status(200).json({
            message: 'The Name of the Pokemon cannot be a Number'
        })
    }
});


export default router; 