const PORT = 4000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/search', (req, res) => {
    const searchWord = req.query.searchWord;
    if (searchWord) {
        const wordOptions = {
            method: 'GET',
            url: `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
        }

        axios.request(wordOptions).then((response) => {
            res.json(response.data[0])
        }).catch((error) => {
            console.error(error)
        })
    }
})

app.get('/images', (req, res) => {
    const searchWord = req.query.searchWord;
    if (searchWord) {
        const imageOptions = {
            method: 'GET',
            url: `https://api.pexels.com/v1/search?query=${searchWord}&per_page=6&page=1`,
            headers: {
                Authorization: API_KEY,
            },
        }

        axios.request(imageOptions).then((response) => {
            res.json(response.data.photos)
        }).catch((error) => {
            console.error(error)
        })
    }
})

app.listen(4000, () => console.log(`Server is running on port ${PORT}`))