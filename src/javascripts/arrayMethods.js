import c from './helpers/data/color';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.error('for', colors[i].name);
  }

  colors.forEach((color) => console.error('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      newColors.push(colors[j]);
    }
  }
  console.error('for', newColors);

  const filterColors = colors.filter((x) => (x.hexValue[0] === 'F'));
  console.error('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  }
  console.error('for', colorToFind.hexValue);

  const colorFind = colors.find((x) => x.name === 'green');
  console.error('find', colorFind.hexValue);
};

const mapFunc = () => {
//  creating an array of H1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.error('for', h1Tags);

  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.error('map', colorMap);
};

const reduceFunc = () => {
// total number of upvotes
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.error('for', total);

  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
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
