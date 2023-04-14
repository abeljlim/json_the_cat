const request = require('request');

const srcURLEndpoint = `https://api.thecatapi.com/v1/breeds/search`;

const fetchBreedDescription = function(breedName, callback) {
  const srcURL = `${srcURLEndpoint}?q=${breedName}`;
  request(srcURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Error: Breed not found");
      return;
    }

    // happy path
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };