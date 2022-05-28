const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?access_token=pk.eyJ1Ijoic2xhcnNlbi0zIiwiYSI6ImNsM2M0bHQyaTAwaTMzZXFpaTR3MDM5MmQifQ.7S7dvjAiXY5pcaAvQeN92w&limit=1';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const location = body.features[0].place_name;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: location,
      });
    }
  });
};

module.exports = geocode;
