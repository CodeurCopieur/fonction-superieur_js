// Fonction d'ordre supérieur 

const values = [50, 250, 650, 850, 950, 100, 20, 80];
const peoples = [
  {name: 'Victor', age: 55},
  {name: 'Alex', age: 37},
  {name: 'Anna', age: 21}
]

function customFilter(arr, foo) {

  const filtered = [];

  for ( element of arr) {
    if(foo(element)) filtered.push(element)
  }

  return filtered;
}

const filteredArr = customFilter(values, el => el > 200);

console.log(filteredArr);
console.log(customFilter(values, el => el > 80));
console.log(customFilter(values, el => el > 250));
console.log(customFilter(values, el => el > 800));
console.log(customFilter(values, el => el === 900));

console.log(customFilter(peoples, el => el.age > 30));
console.log(customFilter(peoples, el => el.age < 30));
console.log(customFilter(peoples, el => el.age === 21));


const foods = [
  {name: 'Poulet', calories: 230},
  {name: 'Fromage', calories: 400},
  {name: 'Saumon', calories: 200},
  {name: 'Haricots Vert', calories: 31}
]


console.log(foods.filter(food => food.calories < 230));
console.log(foods.filter(food => food.calories >= 230));
console.log(foods.filter(food => food.calories === 200));

const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum quidem assumenda debitis a illum quasi distinctio quae id perferendis nam, molestias nobis aspernatur molestiae nulla, odit amet, facere earum. Quam ad porro quo earum animi voluptas sequi delectus atque.";


function occurences(str, bar) {

  let nbOccurences = 0;

  for (const character of str) {
    if(bar(character)) nbOccurences++
  }

  return nbOccurences;
}


console.log(occurences(string, el => el === "i"));
console.log(occurences(string, el => el === "e"));


function createCount() {
  const counter = {
    value: 0
  }

  function incre() {
    counter.value++
  }

  function decre() {
    counter.value--
  }

  function getCount() {
    console.log("Current count:", counter.value);
  }

  return {
    incre,
    decre,
    getCount
  }
}

const counter1 = createCount()
counter1.incre()
counter1.decre()
counter1.incre()
counter1.incre()
counter1.getCount()
console.dir(counter1.incre)