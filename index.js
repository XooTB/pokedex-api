import express from "express";
import Search from "./pokedex/pokedex.js";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('**POKE-SEARCH Server Running**')
})

app.get('/pokemon/:name', async (req, res) => {
    const data = await Search(req.params.name.toLowerCase())
    res.send(data)
})


app.listen(port);