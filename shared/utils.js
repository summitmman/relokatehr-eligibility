const convertObjToAPIString = (params = {}) => {
    let str = Object.keys(params).reduce((aggr, item) => {
        return aggr + '&' + item + '=' + params[item];
    }, '');
    if (str) {
        return str.substring(1);
    }
    return str;
};

const convertAPIStringToObj = (str = '') => {
    const items = str.split('&');
    return items.reduce((aggr, item) => {
        const pair = item.split('=');
        return {
            ...aggr,
            [pair[0]]: decodeURIComponent(pair[1] ?? ''),
        };
    }, {});
};

const isDegreeRecognized = (str = '') => {
    if (str.indexOf('Entspricht') > -1) {
        return true;
    }
    if (str.indexOf('Gleichwertig') > -1) {
        return false
    }
    return null;
};

const isUniversityRecognized = (str = '') => {
    const startStr = '<td class="detailLink detailLink-institutionsStatus">';
    const index = str.indexOf(startStr);
    
    if (index === -1)
        return null;
    
    const endIndex = str.indexOf('</td>', index + startStr.length);
    if (endIndex === -1)
        return null;

    const status = str.substring(index + startStr.length, endIndex).trim();
    if (status) {
        return status === 'H+';
    }
    
    return null;
};

module.exports = {
    convertAPIStringToObj,
    convertObjToAPIString,
    isDegreeRecognized,
    isUniversityRecognized
};