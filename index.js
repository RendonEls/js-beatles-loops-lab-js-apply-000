// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++){   //length: to run the length of the database
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

