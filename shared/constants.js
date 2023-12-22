const countries = [
    { code: 225, name: 'Afghanistan' },
	{ code: 128, name: 'Egypt' },
	{ code: 9, name: 'Albania' },
	{ code: 193, name: 'Algeria' },
	{ code: 197, name: 'Angola' },
	{ code: 226, name: 'Antigua and Barbuda' },
	{ code: 228, name: 'Argentina' },
	{ code: 181, name: 'Armenia' },
	{ code: 182, name: 'Azerbaijan' },
	{ code: 229, name: 'Ethiopia' },
	{ code: 131, name: 'Australia' },
	{ code: 203, name: 'Bahrain' },
	{ code: 167, name: 'Bangladesh' },
	{ code: 10, name: 'Belarus' },
	{ code: 11, name: 'Belgium' },
	{ code: 230, name: 'Belize' },
	{ code: 219, name: 'Benin' },
	{ code: 232, name: 'Bolivia' },
	{ code: 233, name: 'Bosnia and Herzegovina' },
	{ code: 135, name: 'Botswana' },
	{ code: 7, name: 'Brazil' },
	{ code: 234, name: 'Brunei Darussalam' },
	{ code: 12, name: 'Bulgaria' },
	{ code: 235, name: 'Burkina Faso' },
	{ code: 177, name: 'Burundi' },
	{ code: 417, name: 'Cayman Islands' },
	{ code: 236, name: 'Chile' },
	{ code: 155, name: 'China' },
	{ code: 237, name: 'Costa Rica' },
	{ code: 238, name: 'Côte d\'Ivoire' },
	{ code: 13, name: 'Denmark' },
	{ code: 240, name: 'Dominican Republic' },
	{ code: 242, name: 'Ecuador' },
	{ code: 243, name: 'El Salvador' },
	{ code: 244, name: 'Eritrea' },
	{ code: 14, name: 'Estonia' },
	{ code: 169, name: 'Fiji' },
	{ code: 15, name: 'Finland' },
	{ code: 5, name: 'France' },
	{ code: 245, name: 'Gabon' },
	{ code: 136, name: 'Gambia' },
	{ code: 183, name: 'Georgia' },
	{ code: 137, name: 'Ghana' },
	{ code: 8, name: 'Greece' },
	{ code: 411, name: 'Greenland' },
	{ code: 3, name: 'Great Britain' },
	{ code: 246, name: 'Guatemala' },
	{ code: 247, name: 'Guinea' },
	{ code: 248, name: 'Guinea Bissau' },
	{ code: 250, name: 'Honduras' },
	{ code: 170, name: 'Hong Kong - PR China' },
	{ code: 129, name: 'India' },
	{ code: 156, name: 'Indonesia' },
	{ code: 127, name: 'Iraq' },
	{ code: 126, name: 'Iran' },
	{ code: 17, name: 'Ireland' },
	{ code: 18, name: 'Iceland' },
	{ code: 125, name: 'Israel' },
	{ code: 19, name: 'Italy' },
	{ code: 140, name: 'Jamaica' },
	{ code: 42, name: 'Japan' },
	{ code: 204, name: 'Yemen' },
	{ code: 205, name: 'Jordan' },
	{ code: 157, name: 'Cambodia' },
	{ code: 251, name: 'Cameroon' },
	{ code: 40, name: 'Canada' },
	{ code: 252, name: 'Cape Verde' },
	{ code: 184, name: 'Kazakhstan' },
	{ code: 206, name: 'Qatar' },
	{ code: 141, name: 'Kenya' },
	{ code: 185, name: 'Kyrgyzstan' },
	{ code: 254, name: 'Colombia' },
	{ code: 256, name: 'Congo' },
	{ code: 180, name: 'Congo, Democratic Republic' },
	{ code: 257, name: 'Korea (People\'s Democratic Republic)' },
	{ code: 161, name: 'Korea (Republic of)' },
	{ code: 561, name: 'Kosovo' },
	{ code: 20, name: 'Croatia' },
	{ code: 258, name: 'Cuba' },
	{ code: 207, name: 'Kuwait' },
	{ code: 158, name: 'Laos' },
	{ code: 21, name: 'Latvia' },
	{ code: 208, name: 'Lebanon' },
	{ code: 143, name: 'Liberia' },
	{ code: 209, name: 'Libya' },
	{ code: 22, name: 'Liechtenstein' },
	{ code: 23, name: 'Lithuania' },
	{ code: 24, name: 'Luxembourg' },
	{ code: 426, name: 'Macau - PR China' },
	{ code: 259, name: 'Madagascar' },
	{ code: 144, name: 'Malawi' },
	{ code: 162, name: 'Malaysia' },
	{ code: 260, name: 'Mali' },
	{ code: 25, name: 'Malta' },
	{ code: 210, name: 'Morocco' },
	{ code: 211, name: 'Mauritania' },
	{ code: 146, name: 'Mauritius' },
	{ code: 749, name: 'Macedonia see North Macedonia' },
	{ code: 262, name: 'Mexico' },
	{ code: 186, name: 'Moldova' },
	{ code: 264, name: 'Monaco' },
	{ code: 187, name: 'Mongolia' },
	{ code: 512, name: 'Montenegro' },
	{ code: 265, name: 'Mozambique' },
	{ code: 168, name: 'Myanmar' },
	{ code: 172, name: 'Namibia' },
	{ code: 173, name: 'Nepal' },
	{ code: 43, name: 'New Zealand' },
	{ code: 267, name: 'Nicaragua' },
	{ code: 6, name: 'Netherlands' },
	{ code: 268, name: 'Niger' },
	{ code: 147, name: 'Nigeria' },
	{ code: 195, name: 'North Macedonia' },
	{ code: 26, name: 'Norway' },
	{ code: 212, name: 'Oman' },
	{ code: 2, name: 'Austria' },
	{ code: 419, name: 'East Timor' },
	{ code: 174, name: 'Pakistan' },
	{ code: 213, name: 'Palestine (autonomous territories)' },
	{ code: 270, name: 'Panama' },
	{ code: 175, name: 'Papua New Guinea' },
	{ code: 271, name: 'Paraguay' },
	{ code: 272, name: 'Peru' },
	{ code: 744, name: 'Philippines' },
	{ code: 27, name: 'Poland' },
	{ code: 28, name: 'Portugal' },
	{ code: 178, name: 'Rwanda' },
	{ code: 29, name: 'Romania' },
	{ code: 30, name: 'Russian Federation' },
	{ code: 148, name: 'Zambia' },
	{ code: 274, name: 'Samoa' },
	{ code: 102, name: 'San Marino' },
	{ code: 214, name: 'Saudi Arabia' },
	{ code: 31, name: 'Sweden' },
	{ code: 4, name: 'Switzerland' },
	{ code: 277, name: 'Senegal' },
	{ code: 194, name: 'Serbia' },
	{ code: 278, name: 'Seychelles' },
	{ code: 149, name: 'Sierra Leone' },
	{ code: 150, name: 'Zimbabwe' },
	{ code: 164, name: 'Singapore' },
	{ code: 32, name: 'Slovakia' },
	{ code: 33, name: 'Slovenia' },
	{ code: 179, name: 'Somalia' },
	{ code: 34, name: 'Spain' },
	{ code: 165, name: 'Sri Lanka' },
	{ code: 279, name: 'Saint Kitts and Nevis' },
	{ code: 280, name: 'Saint Lucia' },
	{ code: 41, name: 'South Africa' },
	{ code: 215, name: 'Sudan' },
	{ code: 751, name: 'South Sudan' },
	{ code: 188, name: 'Syria' },
	{ code: 189, name: 'Tajikistan' },
	{ code: 159, name: 'Taiwan' },
	{ code: 152, name: 'Tanzania' },
	{ code: 283, name: 'Thailand' },
	{ code: 284, name: 'Togo' },
	{ code: 286, name: 'Chad' },
	{ code: 35, name: 'Czech Republic' },
	{ code: 216, name: 'Tunisia' },
	{ code: 36, name: 'Türkiye' },
	{ code: 190, name: 'Turkmenistan' },
	{ code: 423, name: 'Turks and Caicos Islands' },
	{ code: 154, name: 'Uganda' },
	{ code: 37, name: 'Ukraine' },
	{ code: 38, name: 'Hungary' },
	{ code: 288, name: 'Uruguay' },
	{ code: 124, name: 'USA' },
	{ code: 191, name: 'Uzbekistan' },
	{ code: 16, name: 'Vatican City' },
	{ code: 290, name: 'Venezuela' },
	{ code: 217, name: 'United Arab Emirates' },
	{ code: 160, name: 'Vietnam' },
	{ code: 752, name: 'Belarus see Belarus' },
	{ code: 292, name: 'Central African Republic' },
	{ code: 192, name: 'Cyprus (North)' },
	{ code: 39, name: 'Cyprus (Republic)' },
];
const pageSize = 20;
const anabinUrl = 'https://anabin.kmk.org/index.php';
const anabinDegreeQueryParams = {
    eID: 'user_anabin_abschluesse',
    conf: 'abschlussergebnisliste',
    sEcho: '1',
    iColumns: '11',
    iDisplayStart: '0',
    iDisplayLength: pageSize,
    bRegex: 'false',
    // sSearch_8: 'India',
    iSortingCols: '1',
    iSortCol_0: '2',
    sSortDir_0: 'asc',
    // land: '129',
    // s1: 'Computer Application',
    iDataIds: '1'
};

const anabinDegreeDetailQueryParams = {
	eID: 'user_anabin_abschluesse',
	conf: 'abschluesse',
	uid: 0,
	// _: '1701189357619'
};

const anabinUniversityQueryParams = {
    eID: 'user_anabin_institutionen',
    conf: 'institutionsergebnisliste',
    sEcho: '1',
    iColumns: '13',
    iDisplayStart: '0',
    iDisplayLength: pageSize,
    bRegex: 'false',
    // sSearch_6: 'India',
    iSortingCols: '1',
    iSortCol_0: '2',
    sSortDir_0: 'asc',
    // land: '129',
    // s1: 'Mumbai',
    iDataIds: '1'
};

const anabinUniversityDetailQueryParams = {
	eID: 'user_anabin_institutionen',
	conf: 'institutionen',
	uid: 0,
	// _: '1701205133819'
};

const anabinDegreeTypeParams = {
	eID: 'user_anabin_abschlusstyp',
	conf: 'abschlusstypergebnisliste',
	sEcho: '1',
	iColumns: '8',
	iDisplayStart: '0',
	iDisplayLength: pageSize,
	bRegex: 'false',
	// sSearch_7: 'Afghanistan',
	iSortingCols: '1',
	iSortCol_0: '2',
	sSortDir_0: 'asc',
	// land: '225',
};

module.exports = {
    countries,
	pageSize,
    anabinUrl,
    anabinDegreeQueryParams,
	anabinUniversityQueryParams,
	anabinDegreeDetailQueryParams,
	anabinUniversityDetailQueryParams,
	anabinDegreeTypeParams
};