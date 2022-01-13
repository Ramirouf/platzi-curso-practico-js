function calculateAverage(list) {
  /*
  let listAcum = 0;
  
  for (let i = 0; i < list.length; i++) {
    listAcum += list[i];
  }
  */
  const listAcum = list.reduce(function (acumulatedValue = 0, newElement) {
    return acumulatedValue + newElement;
  });

  const listAvg = listAcum / list.length;

  console.log("Average: " + listAvg);
}
