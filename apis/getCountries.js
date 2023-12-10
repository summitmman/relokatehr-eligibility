const { countries } = require('../shared/constants');

const getCountries = (req, res) => {
    return new Promise((resolve) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(countries));
        resolve();
    });
};

module.exports = {
    getCountries
};