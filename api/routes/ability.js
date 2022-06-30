import express from "express";
import pokeAbility from "../../pokelib/pokeHabitat.js";

const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Append the Ability Name to the URL to perform the Query'
    });
});

router.get('/:ability', async (req, res, next) => {
    const name = req.params.ability;

    if (isNaN(name)) {
        const data = await pokeAbility(name)
            .catch(err => {
                res.status(404).json({
                    error: 404,
                    message: 'Invalid ability name.'
                });
            });

        res.status(200).json(data);
    } else {
        res.status(200).json({
            message: "The ability name can't be a number"
        })
    }
})

export default router; 