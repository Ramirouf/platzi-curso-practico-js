function findMode(list) {
  const listCount = {};

  list.map(function (element) {
    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  });

  const listArray = Object.entries(listCount).sort(function (
    acumulatedValue,
    newValue
  ) {
    acumulatedValue - newValue;
  });

  //console.log(Object.entries(listCount));

  const orderedList = Object.entries(listCount).sort(function (
    elementA,
    elementB
  ) {
    return elementA[1] - elementB[1];
  });

  const mode = orderedList[orderedList.length - 1];

  return mode;
}
