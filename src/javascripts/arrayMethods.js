import c from './helpers/data/color';

const colorsArray = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colorsArray.length; i += 1) {
    console.error('for', colorsArray[i].name);
  }

  colorsArray.forEach((color) => console.error('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colorsArray.length; j += 1) {
    if (colorsArray[j].hexValue[0] === 'F') {
      newColors.push(colorsArray[j]);
    }
  }
  console.error('for', newColors);

  const filterColors = colorsArray.filter((x) => (x.hexValue[0] === 'F'));
  console.error('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colorsArray.length; k += 1) {
    if (colorsArray[k].name === 'green') {
      colorToFind = colorsArray[k];
    }
  }
  console.error('for', colorToFind.hexValue);

  const colorFind = colorsArray.find((x) => x.name === 'green');
  console.error('find', colorFind.hexValue);
};

const mapFunc = () => {
//  creating an array of H1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colorsArray.length; l += 1) {
    h1Tags.push(`<h1>${colorsArray[l].name}</h1>`);
  }
  console.error('for', h1Tags);

  const colorMap = colorsArray.map((color) => `<h1>${color.name}</h1>`);
  console.error('map', colorMap);
};

const reduceFunc = () => {
// total number of upvotes
  let total = 0;
  for (let m = 0; m < colorsArray.length; m += 1) {
    total += colorsArray[m].upVotes;
  }
  console.error('for', total);

  const upVoteTotal = colorsArray.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.error('reduce', upVoteTotal);
};


const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
