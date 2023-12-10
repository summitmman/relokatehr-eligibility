const url = require('url');
const { convertAPIStringToObj } = require('../shared/utils');
const { fetchAnabinDegreeDetails } = require('../services/anabin')

const getDegrees = (req, res) => {
    const requestUrl = url.parse(req.url);
    let query = requestUrl.query;
    if (query) {
        query = convertAPIStringToObj(query);
    } else {
        query = {};
    }

    return fetchAnabinDegreeDetails(
        query
    ).then((anabinResponse) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(anabinResponse));
    }).catch((error) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(error));
    });
};

module.exports = {
    getDegrees
};