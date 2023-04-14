
const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

fetchBreedDescription(args[0], (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});