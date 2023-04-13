const request = require('request');
const args = process.argv.slice(2);

const srcURLEndpoint = `https://api.thecatapi.com/v1/breeds/search`;
const srcURL = `${srcURLEndpoint}?q=${args[0]}`;

const downloader = function (sourceUrl, destPath) {
  request(sourceUrl, (error, response, body) => {

    // console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data[0]);
    // console.log(typeof data[0]);

  });
};
downloader(srcURL, ``);