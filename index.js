// Your code here
const mapToNegativize = (sourceArray) => {
  let arr = [];
  sourceArray.forEach(e => {
    arr.push(e * -1);
  });
  return arr;
}

const mapToNoChange = (sourceArray) => {
  let arr = sourceArray;
  return arr;
}

const mapToDouble = (sourceArray) => {
  let arr = [];
  sourceArray.forEach(e => {
    arr.push(e * 2);
  });
  return arr;
}

const mapToSquare = (sourceArray) => {
  let arr = [];
  sourceArray.forEach(e =>
    {
      arr.push(e ** 2);
    });
    return arr;
}

const reduceToTotal = (sourceArray, startingValue = 0) => {
  sourceArray.forEach(e => {
    startingValue += e;
  });
  return startingValue;
}
const reduceToAllTrue = (sourceArray) => {
  let values = true;
  sourceArray.forEach(e => {
    if (e === false) values = false;
  })

  return values;
}
const reduceToAnyTrue = (sourceArray) => {
  let found = false;
  sourceArray.forEach(e => {
    if (e === true) found = true;
  })
  return found;
}