const { getAllPlanets } = require('../../models/planets.model');

function httpgetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets()); // Correct function call
}

module.exports = {
    httpgetAllPlanets,
};
