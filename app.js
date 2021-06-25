// ## GET DHIS2 information 
let username = 'admin';
let password = 'district';
let urlApi="https://play.dhis2.org/2.34.4/api/dataSets.json?dataSet=lyLU2wR22tC&period=2018-05-13&orgUnit=eoYV2p74eVz"
let options = {
	method: 'GET',
	url: urlApi,
	headers: { 
		'Authorization': fn.base_64_auth(username,password),
		'Accept': 'application/json',
		'Content-Type': 'application/json' 
	},
	from: {
	  mimeType: 'application/json'
	}
}; // end of options
// get json response		
request (options, function(error, response, body) {
	let dataOutput = JSON.stringify(JSON.parse(body));
 }
);
// ## POST DHIS2 information 

let username = admin
let password = district
let jsonPayload = {
  "dataSet": "lyLU2wR22tC", //Monthly eLMIS Dataset-final
  "completeDate": "2018-05-13",
  "period": "201801",
  "orgUnit": "eoYV2p74eVz", // Jhalokati Civil Surgeons Office, Jhalokati
  "dataValues": [
    { "dataElement": "aIJZ2d2QgVV", "value": "100" },
    { "dataElement": "iKGjnOOaPlE", "value": "200" },
    { "dataElement": "BOSZApCrBni", "value": "300" }
]
};
let postApiUrl= 'https://play.dhis2.org/2.34.4/api/dataSets';
let options = {
	method: 'POST',
	url: postApiUrl,
	body: JSON.stringify(jsonPayload),	
	headers: { 
		'Authorization': fn.base_64_auth('admin,district'),
		'Accept': 'application/json',
		'Content-Type': 'application/json' 
	},
	from: {
        mimeType: 'application/json'
	}
}; // end of options

// get json response		
request(options, function(error, response, body) {
	let getResponse = JSON.stringify(JSON.parse(response));
}
);

// api/dataSets/dhis28/api/dataValueSets
// POST /api/dataValueSets?idScheme=code&dataElementIdScheme=id;
// POST /api/dataValueSets?importStrategy=create,