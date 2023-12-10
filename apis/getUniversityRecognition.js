const url = require('url');
const { convertAPIStringToObj, isUniversityRecognized } = require('../shared/utils');
const { fetchAnabinUniversityDetail } = require('../services/anabin')

const getUniversityRecognition = (req, res) => {
    const requestUrl = url.parse(req.url);
    let query = requestUrl.query;
    if (query) {
        query = convertAPIStringToObj(query);
    } else {
        query = {};
    }

    return fetchAnabinUniversityDetail(
        query
    ).then((anabinResponse) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(isUniversityRecognized(anabinResponse)));
    }).catch((error) => {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(error));
    });
};

module.exports = {
    getUniversityRecognition
};