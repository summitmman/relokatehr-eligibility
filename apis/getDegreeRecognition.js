const url = require('url');
const { convertAPIStringToObj, isDegreeRecognized } = require('../shared/utils');
const { fetchAnabinDegreeDetail } = require('../services/anabin')

const getDegreeRecognition = (req, res) => {
    const requestUrl = url.parse(req.url);
    let query = requestUrl.query;
    if (query) {
        query = convertAPIStringToObj(query);
    } else {
        query = {};
    }

    return fetchAnabinDegreeDetail(
        query
    ).then((anabinResponse) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(isDegreeRecognized(anabinResponse)));
    }).catch((error) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(error));
    });
};

module.exports = {
    getDegreeRecognition
};