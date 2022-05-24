import express from "express";
import Search from "./pokedex/pokedex.js";

const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send('**POKE-SEARCH Server Running**')
})

app.get('/test', async (req, res) => {
    const data = await Search('pikachu')
    res.send(data)
})


app.listen(port);