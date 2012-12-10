//the .js file for inventory

var playerHasSword = false;
var playerHasSelfConfidence  = false;
var playerHasShortBlade = false;
var playerHasWD40 = false;
  
  
  function displayInventory() {
    var msg = "Inventory: ";
    if (playerHasSword) {
      updateText(Item[0].name);
    } else 
    if (playerHasSelfConfidence) {
      updateText(Item[1].name);
    } else
    if (playerHasShortBlade) {
      updateText(Item[2].name);
    } else
    if (playerHasWD40) {
      updateText(Item[3].name);
    }
    if (playerHasSword && playerHasSelfConfidence) {
      updateText(Item[0].name + ", " + Item[1].name);
    }
    if (playerHasSword && playerHasShortBlade) {
      updateText(Item[0].name + ", " + Item[2].name);
    }
    if (playerHasSword && playerHasWD40) {
      updateText(Item[0].name + ", " + Item[3].name);
    }
    if (playerHasSelfConfidence && playerHasShortBlade) {
      updateText(Item[1].name + ", " + Item[2].name);
    }
    if (playerHasSelfConfidence && playerHasWD40) {
      updateText(Item[1].name + ", " + Item[3].name);
    }
    if (playerHasShortBlade && playerHasWD40) {
      updateText(Item[2].name + ", " + Item[3].name);
    }
    if (playerHasSword && playerHasSelfConfidence && playerHasShortBlade) {
      updateText(Item[0].name + ", " + Item[1].name + ", " + Item[2].name);
    }
    if (playerHasSword && playerHasSelfConfidence && playerHasWD40) {
      updateText(Item[0].name + ", " + Item[1].name + ", " + Item[3].name);
    }
    if (playerHasSword && playerHasShortBlade && playerHasWD40) {
      updateText(Item[0].name + ", " + Item[2].name + ", " + Item[3].name);
    }
    if (playerHasSelfConfidence && playerHasShortBlade && playerHasWD40) {
      updateText(Item[1].name + ", " + Item[2].name + ", " + Item[3].name);
    }
    if (playerHasSword && playerHasSelfConfidence && playerHasShortBlade && playerHasWD40) {
      updateText(Item[0].name + ", " + Item[1].name + ", " + Item[2].name + ", " + Item[3].name);
    }
  }
    
    function takeItem() {
        if (currentlocation === 7) {
          playerHasSword = true;
          updateText(Item[0].description);
        } else {
            if (currentlocation === 8) {
              playerHasSelfConfidence = true;
              updateText(Item[1].description); 
            } else {
                if (currentlocation === 5) {
                  playerHasWD40 = true;
                  updateText(Item[2].description);
                } else {
                    if (currentlocation === 2) {
                      playerHasShortBlade = true;
                      updateText(Item[3].description);
                    } else {
          updateText("There is Nothing to take here, dingus.");
                      }
                  }
              }
          }
      }
          
    function Btn_inventory_click() {
           var msg = "Inventory: ";
           if (playerHasSword) {
            msg = msg + "Sword of Aquilius";
            updateText(msg);
            } else {
                if (playerHasSelfConfidence) {
                  msg = msg + "Self-Confidence";
                  updateText(msg);
                } else {
                    if (playerHasShortBlade) {
                      msg = msg + "Short Blade";
                      updateText(msg);
                    } else {
                        if (playerHasWD40) {
                          msg = msg + "WD-40";
                          updateText(msg);
                        } else {
                            updateText("You have nothing in your inventory. Way to be.");
                          }
                      }
                }
            }
        }