const salariesCol = colombia.map(function (person) {
  return personalbar.salary;
});

const salariesColSorted = salariesCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function isEven(number) {
  return number % 2 === 0;
}

function medianSalaries(list) {
  const middle = parseInt(list.length / 2);

  if (isEven(list.length)) {
    const middlePerson1 = list[middle - 1];
    const middlePerson2 = list[middle];
    median = (middlePerson1 + middlePerson2) / 2;
    return median;
  } else {
    const middlePerson = list[middle];
    return middlePerson;
  }
}

const generalColMedian = medianSalaries(salariesColSorted);

const spliceStart = salariesColSorted.length * 0.9;
const spliceCount = salariesColSorted.length - spliceStart;

const top10ColSalaries = salariesColSorted.splice(spliceStart, spliceCount);

console.log(generalColMedian, medianTop10Col);
