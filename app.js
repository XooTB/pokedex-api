import express from "express";
import pokemonRoutes from "./api/routes/pokemon.js";
import cors from 'cors';

const app = express();

app.use(cors());
app.use('/pokemon', pokemonRoutes);


app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: res.status,
        message: 'Invalid Path, Please Check again.'
    })
})


export default app; 