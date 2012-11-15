//the .js file for inventory

var playerHasSword = false;
var PlayerHasSelfConfidence  = false;
  
  function displayInventory() {
    var msg = "Inventory: ";
    if (playerHasSword) {
    msg = msg + "Sword of Aquilius ";
    updateDisplay(msg);
    }
    if (playerHasSelfConfidence) {
    msg = msg + "Self-Confidence ";
    }
    updateDisplay(msg);
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
          updateText("There is Nothing to take here, dingus.");
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
              updateText("You have nothing in your inventory. Way to be.");
              }
              }
              }