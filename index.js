// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var musicianInstrument = new Array();

function theBeatlesPlay(musicians, instruments) {
  for (var m = 0; m < musicians.length; m++) {
      musicianInstrument.push(`${musicians[m]} plays ${instruments[m]}`)
      }
      return musicianInstrument
}


function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] + '!!!'
    i++
    
  }
  return array;
}

//   while (var i = 0; i < facts.length) {
//     johnLennonFactsArray.push(facts[i] + '!!!')
//     i++
//   }

// johnLennonFactsArray

