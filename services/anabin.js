const {
    anabinUrl,
    anabinDegreeQueryParams,
    anabinUniversityQueryParams,
    anabinDegreeDetailQueryParams,
    anabinUniversityDetailQueryParams
} = require('../shared/constants');
const { convertObjToAPIString } = require('../shared/utils');

const fetchAnabinDegreeDetails = (query) => {
    // has defaults
    if (query.sEcho != null) {
        anabinDegreeQueryParams.sEcho = query.sEcho;
    }
    if (query.start != null) {
        anabinDegreeQueryParams.iDisplayStart = query.start;
    }
    if (query.pageSize != null) {
        anabinDegreeQueryParams.iDisplayLength = query.pageSize;
    }

    // include only if needed
    if (query.country != null && query.countryCode != null) {
        anabinDegreeQueryParams.sSearch_8 = query.country;
        anabinDegreeQueryParams.land = query.countryCode;
    }

    return fetch(
        `${anabinUrl}?${convertObjToAPIString(anabinDegreeQueryParams)}`
    ).then((anabinResponse) => {
        return anabinResponse.json();
    }).then((anabinResponse) => {
        const data = anabinResponse.aaData.map((item) => {
            return {
                // icon: "<img style=\"cursor:pointer;\" src=/typo3conf/ext/user_anabin/pi1/res/details_open.png>",
                uid: item[1],
                degree: item[2],
                degreeType: item[3],
                durationMin: item[4],
                durationMax: item[5],
                class: item[6],
                fieldOfStudy: item[7],
                country: item[8],
                degreeTypeCode: item[9],
                fieldOfStudyCode: item[10]
            };
        });

        return {
            sEcho: anabinResponse.sEcho,
            totalResponse: anabinResponse.iTotalRecords,
            totalDisplayRecords: anabinResponse.iTotalDisplayRecords,
            data,
        };
    }).catch((error) => {
        return {
            code: 400,
            error,
            message: 'error fetching data from anabin'
        };
    });
};

const fetchAnabinDegreeDetail = (query) => {
    // has defaults
    if (query.degreeId != null) {
        anabinDegreeDetailQueryParams.uid = query.degreeId;
    }

    return fetch(
        `${anabinUrl}?${convertObjToAPIString(anabinDegreeDetailQueryParams)}`
    ).then((anabinResponse) => {
        return anabinResponse.text();
    }).then((anabinResponse) => {
        return anabinResponse;
    }).catch((error) => {
        return {
            code: 400,
            error,
            message: 'error fetching data from anabin'
        };
    });
};

const fetchAnabinUniversityDetails = (query) => {
    // has defaults
    if (query.sEcho != null) {
        anabinUniversityQueryParams.sEcho = query.sEcho;
    }
    if (query.start != null) {
        anabinUniversityQueryParams.iDisplayStart = query.start;
    }
    if (query.pageSize != null) {
        anabinUniversityQueryParams.iDisplayLength = query.pageSize;
    }

    // include only if needed
    if (query.country != null && query.countryCode != null) {
        anabinUniversityQueryParams.sSearch_6 = query.country;
        anabinUniversityQueryParams.land = query.countryCode;
    }
    if (query.university != null) {
        anabinUniversityQueryParams.s1 = query.university;
    }

    return fetch(
        `${anabinUrl}?${convertObjToAPIString(anabinUniversityQueryParams)}`
    ).then((anabinResponse) => {
        return anabinResponse.json();
    }).then((anabinResponse) => {
        const data = anabinResponse.aaData.map((item) => {
            return {
                // "<img style=\"cursor:pointer;\" src=/typo3conf/ext/user_anabin/pi1/res/details_open.png>",
                uid: item[1],
                university: item[2],
                location: item[3],
                universityType: item[4],
                status: item[5],
                country: item[6],
                // "0",
                // "Mumbai (Maharashtra)",
                // "",
                // "0",
                // null,
                // "1243"
            };
        });

        return {
            sEcho: anabinResponse.sEcho,
            totalResponse: anabinResponse.iTotalRecords,
            totalDisplayRecords: anabinResponse.iTotalDisplayRecords,
            data,
        };
    }).catch((error) => {
        return {
            code: 400,
            error,
            message: 'error fetching data from anabin'
        };
    });
};

const fetchAnabinUniversityDetail = (query) => {
    // has defaults
    if (query.universityId != null) {
        anabinUniversityDetailQueryParams.uid = query.universityId;
    }

    return fetch(
        `${anabinUrl}?${convertObjToAPIString(anabinUniversityDetailQueryParams)}`
    ).then((anabinResponse) => {
        return anabinResponse.text();
    }).then((anabinResponse) => {
        return anabinResponse;
    }).catch((error) => {
        return {
            code: 400,
            error,
            message: 'error fetching data from anabin'
        };
    });
};


module.exports = {
    fetchAnabinDegreeDetails,
    fetchAnabinDegreeDetail,
    fetchAnabinUniversityDetails,
    fetchAnabinUniversityDetail
};