  //1
  var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

  function dwarfRollCall(dwarves){
   var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `);
   }
   return array.join("");
  }

  //2
  var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

  function summonCaptainPlanet(planeteerCalls){
    return planeteerCalls.map(a=>a.toUpperCase()+"!");
  }

  //3
  var shortWords = ["wind", "fire"];
  var assortedWords = ["earth", "wind", "fire", "water", "heart"];

  function longPlaneteerCalls(words){
    for(var i=0;i<words.length;i++){
      if (words[i].length>4){
        return true
      }
    }
    return false
  }

  var snacks = ["crackers", "gouda", "thyme"];
  var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
  var ingredients = ["garlic", "rosemary", "bread"];

  //4
  function findTheCheese (foods) {
    for(var i=0;i<foods.length;i++){
      if (foods[i]=="cheddar"
         ||foods[i]=="gouda"
         ||foods[i]=="camembert"
         ){
        return foods[i]
      }
    }
    return "no cheese!"
  }
