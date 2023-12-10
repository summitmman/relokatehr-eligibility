const url = require('url');
const { convertAPIStringToObj } = require('../shared/utils');
const { fetchAnabinUniversityDetails } = require('../services/anabin')

const getUniversities = (req, res) => {
    const requestUrl = url.parse(req.url);
    let query = requestUrl.query;
    if (query) {
        query = convertAPIStringToObj(query);
    } else {
        query = {};
    }

    return fetchAnabinUniversityDetails(
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
    getUniversities
};