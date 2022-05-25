import express from "express";
import Search from "./pokedex/pokedex.js";

const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send('**POKE-SEARCH Server Running**')
})

app.get('/pokemon/:name', async (req, res) => {
    const data = await Search(req.params.name)
    res.send(data)
})


app.listen(port);