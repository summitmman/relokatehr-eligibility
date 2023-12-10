const url = require('url');

// apis
const { getCountries } = require('../apis/getCountries');
const { getDegrees } = require('../apis/getDegrees');
const { getUniversities } = require('../apis/getUniversities');
const { getDegreeRecognition } = require('../apis/getDegreeRecognition');
const { getUniversityRecognition } = require('../apis/getUniversityRecognition');

const router = (req, res) => {
    const requestUrl = url.parse(req.url);
    const path = requestUrl.pathname;

    switch(path) {
        case '/degrees': {
            return getDegrees(req, res);
        }
        case '/degreeRecognition': {
            return getDegreeRecognition(req, res);
        }
        case '/universities': {
            return getUniversities(req, res);
        }
        case '/universityRecognition': {
            return getUniversityRecognition(req, res);
        }
        case '/countries': {
            return getCountries(req, res);
        }
        default: {
            return new Promise((resolve, reject) => {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                    code: 404,
                    message: 'API not found'
                }));
                reject();
            });
        }
    }
};

module.exports = {
    router
};