// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++){   //length: to run the length of the database
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var results = []
  var number = 0
  while (number < facts.length) {
    results.push(facts[number++] + "!!!");
  }
  return results;
}

function iLoveTheBeatles(love){
  var newArray = []
  do{
    while()
  }
}



  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});
