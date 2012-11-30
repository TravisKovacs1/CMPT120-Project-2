//the .js file for inventory

var playerHasSword = false;
var playerHasSelfConfidence  = false;
var playerHasShortBlade = false;
var playerHasWD40 = false;
  
  function displayInventory() {
    var msg = "Inventory: ";
    if (playerHasSword) {
      msg = msg + "Sword of Aquilius ";
      updateDisplay(msg);
    }
    if (playerHasSelfConfidence) {
      msg = msg + "Self-Confidence ";
      updateDisplay(msg);
    }
    if (playerHasShortSword) {
      msg = msg + "Short Sword";
      updateDisplay(msg);
    }
    if (playerHasWD40) {
      msg = msg + "WD-40";
      updateDisplay(msg);
    }
  }
    
    function takeItem() {
        if (currentlocation === 7) {
          playerHasSword = true;
          updateText("You recognize the sword as that of the legendary Roman assassin, Aquilius, and strap the sword to your belt.");
        } else {
            if (currentlocation === 8) {
              playerHasSelfConfidence = true;
              updateText("You've found... SELF-CONFIDENCE!!! Now you're mentally ready to complete the mission. You studly stud, you."); 
            } else {
                if (currentlocation === 5) {
                  playerHasWD40 = true;
                  updateText("You look in the tool cabinet and find a bottle of WD-40. You spray some on your hidden blade, and it it slides our and back with ease. It's go time.");
                } else {
                    if (currentlocation === 2) {
                      playerHasShortSword = true;
                      updateText("You take the short blade and slide it into your belt.");
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