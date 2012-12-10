//Beginning of the Arrays for location and items
var Location = new Array();
var Item = new Array();
 
function places(_id, _name, _description, _item) {
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.item = _item;
 } 
  this.toString = function its() {
    var netVal = "[places]"
      this.id
      this.name
      this.description
      this.item;
    return netVal;
  }

function item(_id, _name, _description, _notTaken, _taken) {
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.notTaken = _notTaken;
  this.taken = _taken;
 } 
  this.toString = function it() {
    var retVal = "[item]"       
      this.id
      this.name
      this.description
      this.notTaken
      this.taken;
    return retVal;
  }

  //the functions for each item
  function playerTakeSword() {
    if(currentLocation === 7 && playerHasSword===false) {
      playerHasSword=true;
      updateText(Item [0].notTaken);
    }
    else if(currentLocation === 7 && playerHasSword===true) {
      updateText(Item [0].taken);
    }
  }
  
  function playerTakeSelfConfidence() {
    if(currentLocation === 8 && playerHasSelfConfidence===false) {
      playerHasSword=true;
      updateText(Item [1].notTaken);
    }
    else if(currentLocation === 8 && playerHasSelfConfidence===true) {
      updateText(Item [1].taken);
   }
  }
  
  function playerTakeShortBlade() {
    if(currentLocation === 2 && playerHasShortBlade===false) {
      playerHasSword=true;
      updateText(Item [2].notTaken);
    }
    else if(currentLocation === 2 && playerHasShortBlade===true) {
      updateText(Item [2].taken);
   }
  }
  
  function playerTakeWD40() {
    if(currentLocation === 5 && playerHasWD40===false) {
      playerHasSword=true;
      updateText(Item [3].notTaken);
    }
    else if(currentLocation === 5 && playerHasWD40===true) {
      updateText(Item [3].taken);
   }
  }
    //these are the functions for each location
  function GrandHall() {
    updateText(Location[0].description);
    btnLocation(Location[0].name);
    northbutton.disabled=false;
    southbutton.disabled=false;
    eastbutton.disabled=false;
    westbutton.disabled=false;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function Hallway() {
    updateText(Location[1].description);
    btnLocation(Location[1].name);
    northbutton.disabled=false;
    southbutton.disabled=false;
    eastbutton.disabled=false;
    westbutton.disabled=true;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function GHAntichamber() {
    updateText(Location[2].description);
    btnLocation(Location[2].name);
    northbutton.disabled=false;
    southbutton.disabled=true;
    eastbutton.disabled=true;
    westbutton.disabled=true;
    if(!playerHasShortBlade) {
      playerHasShortBlade = true;
      score = score + 5;
      moves = moves +1;
      btnScore();
      btnMoves();
    }
  }
  
  function DiningHall() {
    updateText(Location[3].description);
    btnLocation(Location[3].name);
    northbutton.disabled=false;
    southbutton.disabled=true;
    eastbutton.disabled=true;
    westbutton.disabled=false;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function TRAntichamber() {
    updateText(Location[4].description);
    btnLocation(Location[4].name);
    northbutton.disabled=true;
    southbutton.disabled=true;
    eastbutton.disabled=false;
    westbutton.disabled=true;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function Pantry() {
    updateText(Location[5].description);
    btnLocation(Location[5].name);
    northbutton.disabled=true;
    southbutton.disabled=false;
    eastbutton.disabled=true;
    westbutton.disabled=false;
    if(!playerHasWD40) {
      playerHasWD40 = true;
      score = score + 5;
      moves = moves +1;
      btnScore();
      btnMoves();
    }
  }
  
  function TargetRoom() {
    updateText(Location[6].description);
    btnLocation(Location[6].name);
    northbutton.disabled=true;
    southbutton.disabled=true;
    eastbutton.disabled=false;
    westbutton.disabled=false;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function TrophyRoom() {
    updateText(Location[7].description);
    btnLocation(Location[7].name);
    northbutton.disabled=true;
    southbutton.disabled=false;
    eastbutton.disabled=true
    westbutton.disabled=false;
      score = score + 5;
      moves = moves +1;
      btnScore();
      btnMoves();
  }
  
  function ExistentialRoom() {
    updateText(Location[8].description);
    btnLocation(Location[8].name);
    northbutton.disabled=true;
    southbutton.disabled=true;
    eastbutton.disabled=false;
    westbutton.disabled=false;
      score = score + 5;
      moves = moves +1;
      btnScore();
      btnMoves();
  }
  
  function DuctWorkBeginning() {
    updateText(Location[9].description);
    btnLocation(Location[9].name);
    northbutton.disabled=true;
    southbutton.disabled=false;
    eastbutton.disabled=false;
    westbutton.disabled=true;
    score = score + 5;
    moves = moves +1;
    btnScore();
    btnMoves();
  }
  
  function Overlook() {
    updateText(Location[10].description);
    btnLocation(Location[10].name);
    northbutton.disabled=false;
    southbutton.disabled=true;
    eastbutton.disabled=true;
    westbutton.disabled=true;
    score = score + 5;
    moves = moves + 1;
    btnScore();
    btnMoves();
  }
  //for when you are about to win
  function win() {
    if(playerHasSword===true && playerHasSelfConfidence===true && playerHasShortBlade===true && playerHasWD40===true && currentlocation===10) {
    var msg = "You crawl through the ductwork and see your target. Quickly jumping down, you wound him with the short blade. He lashes out and strikes you back while drawing his sword. You draw the Sword of Aquilius and attack. After a brief battle, LaFontanue knocks the sword from your hand and prepares to run your through. At the last second, you extend your hidden blade and plunge it into his throat, killing him. Your mission is complete. Congratulations.";
    updateText(msg);
    }
  }
  //the help command
  function Btn_help_click() {
    updateText("To navigate use directional commands or buttons. To retrieve items, use the term 'take' or the 'take' button. And once you have obtained all the items and are in position to strike: type 'win'");
  }