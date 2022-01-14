function findMedian(list) {
  let median = 0;
  if (list.length % 2 == 0) {
    console.log("HeyYes");
    //Es par
    let secondNumber = list.length / 2;
    let acum = list[secondNumber] + list[secondNumber - 1];
    median = acum / 2;
  } else {
    //es impar
    console.log("HeyNo");
    median = list[Math.trunc(list.length / 2)];
  }

  return median;
}
