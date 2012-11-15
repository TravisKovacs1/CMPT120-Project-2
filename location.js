	//the .js file describing each location

function location0() {
  updateText("Now you are inside the Grand Hall of LaFontanue's castle with doors to your north, south, east, and west.");
  northbutton.disabled=false;
  southbutton.disabled=false;
  eastbutton.disabled=false;
  westbutton.disabled=false;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  
  
function location1() {
  updateText("Quickly, you cross a hallway, it has only doors to the north, east, and south.");
  northbutton.disabled=false;
  southbutton.disabled=false;
  eastbutton.disabled= false;
  westbutton.disabled=true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  
function location2() {
  updateText("You go into the Antichamber of the Great Hall. There is nothing here. You tried.");
  northbutton.disabled=false;
  southbutton.disabled=true;
  eastbutton.disabled=true;
  westbutton.disabled=true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }

function location3() {
  updateText("You walk into a Dining Hall with only a door to the north.");
  northbutton.disabled=false;
  southbutton.disabled=true;
  eastbutton.disabled=true;
  westbutton.disabled=false;
  score = score + 5;
  moves = moves + 1;
  }
  
function location4() {
  updateText("This antichamber leads to the room in which your target waits. You hear is voice from the locked door.");
  northbutton.disabled=true;
  southbutton.disabled=true;
  eastbutton.disabled=false;
  westbutton.disabled=true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  
function location5() {
  updateText("You enter a kitchen silently and hear the sound of a door being bolted on the stairway in the east part of the room.");
  northbutton.disabled=true;
  southbutton.disabled=false;
  eastbutton.disabled=true;
  westbutton.disabled=false;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  
 function location6() {
  updateText("The door is locked and you can hear your Target inside, muttering to himself.");
  northbutton.disabled=true;
  southbutton.disabled=true;
  eastbutton.disabled=false;
  westbutton.disabled=true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
//functions location7 and location8 both include items
function location7() {
  updateText("In this room are awards and weapons in cases. You find a sword with Assassin markings on it. Where did he get this?");
  northbutton.disabled=true;
  southbutton.disabled=false;
  eastbutton.disabled=true;
  westbutton.disabled=false;
  if (!playerHasSword) {
  playerHasSword = true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  }
  
function location8() {
  updateText("In this room, you find a chest with a cracked lock, anyone could just open up the chest and take from it!");
  northbutton.disabled=true;
  southbutton.disabled=true;
  eastbutton.disabled=false;
  westbutton.disabled=false;
  if (!playerHasSelfConfidence) {
  playerHasSelfConfidence = true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  }

function location9() {
  updateText("You examine the room and find that there is a bit of ductwork that leads south. You suspect you can reach your target this way. AREA UNDER CONSTRUCTION, LOCATION UNAVAILABLE.");
  northbutton.disabled=true;
  southbutton.disabled=true;
  eastbutton.disabled=false;
  westbutton.disabled=true;
  score = score + 5;
  moves = moves + 1;
  btnScore();
  btnMoves();
  }
  
  //this function is fired by typing "help" or clicking the help button
  function Btn_help_click() {
    updateText("To navigate use directional commands. To retrieve an item use 'take'.");
    }
       
		//</script>