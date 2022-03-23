// Fonction d'ordre supérieur 

const values = [50, 250, 650, 850, 950, 100, 20, 80];

function customFilter(arr, foo) {

  const filtered = [];

  for (const element of arr) {
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