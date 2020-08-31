const axios = require('axios')

module.exports = {
    pokeView,
    pokeQuery
}


function pokeView(req, res) {
    res.render('games/show', { pokemon: null })
}
  
function pokeQuery(req, res) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query.toLowerCase()}`)
    .then(response => {
        console.log(response.data.species.name)
        res.render('games/show', { pokemon: response.data })
    })
}