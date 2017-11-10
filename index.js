var dwarves = ["Dopey", "Grumpy", "Bashful"];

function dwarfRollCall(dwarves) {
	for(var i =0; i < dwarves.length; i++) {
		return (i+1) + '. ' + dwarves[i] + ' ' + (i+2) + '. '+ dwarves[i+1]
		+ ' ' + (i+3) + '. ' + dwarves[i+2] + ' ';
	}
}

//or

function dwarfRollCall(dwarves) {
  var arrayDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    arrayDwarves.push((i+1) + '. ' + dwarves[i] + " ");
  };
  return arrayDwarves.join('');
};


function summonCaptainPlanet(planeteerCalls) {

  var planeteerList = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
  	planeteerList.push(`${planeteerCalls[i]}! `)
  }
  var allCaps = planeteerList.map(function(item){
    return item.toUpperCase();
});
  return allCaps;
}

function longPlaneteerCalls(words) {
	for (var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
		else {
			return false;
		}
	}
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++)
  if (foods[i] === "cheddar" || foods[i] === "camembert" || foods[i] === "gouda") {
    return foods[i];
  }
  return "no cheese!";
}
