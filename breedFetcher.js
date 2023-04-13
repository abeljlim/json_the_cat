const request = require('request');
const args = process.argv.slice(2);

const srcURLEndpoint = `https://api.thgresecatapi.com/v1/breeds/search`;
const srcURL = `${srcURLEndpoint}?q=${args[0]}`;

const downloader = function(sourceUrl) {
  request(sourceUrl, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Error: Breed not found");
      return;
    }
    console.log(data[0].description);

  });
};
downloader(srcURL);