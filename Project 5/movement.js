	//the .js file for controlling movement.
			
			//these are the variables for location, maneuvering, score, and moves taken
			var NORTH = 1;
      var SOUTH = 2;
      var EAST  = 3;
      var WEST  = 4;
      var score = 0;
      var currentlocation = 0;
      var moves = 0;
      var discoveredEasterEgg = false;
     
       //these functions area attached to each seperate movement button and are
       //also fired by using the text input's directional functionality   
       function move_north() {
        if (currentlocation === 0) {
            currentlocation = 1;
            displayNewLocation("1");
            } else if (currentlocation === 2) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
             else if (currentlocation === 1) {
                       currentlocation = 5;
                       displayNewLocation("5");
                       }
             else if (currentlocation === 3) {
                       currentlocation = 7;
                       displayNewLocation("7");
                       }
                       }
                       
       function move_south() {
        if (currentlocation === 0) {
            currentlocation = 2;
            displayNewLocation("2");
            } else if (currentlocation === 1) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
              else if (currentlocation === 5) {
                        currentlocation = 1;
                        displayNewLocation("1");
                        }
              else if (currentlocation === 7) {
                        currentlocation = 3;
                        displayNewLocation("3");
                        }
                        }
                    
        function move_east() {
          if (currentlocation === 0) {
            currentlocation = 3;
            displayNewLocation("3");
            } else if (currentlocation === 4) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
              else if (currentlocation === 6) {
                       currentlocation = 4;
                       displayNewLocation("4");
                       }
              else if (currentlocation === 1) {
                       currentlocation = 7;
                       displayNewLocation("7");
                       }
              else if (currentlocation === 9) {
                       currentlocation = 8;
                       displayNewLocation("8");
                       }
              else if (currentlocation === 8) {
                       currentlocation = 5;
                       displayNewLocation("5")
                       }         
                       }          
                        
       function move_west() {
        if (currentlocation === 0) {
            currentlocation = 4;
            displayNewLocation("4");
            } else if (currentlocation === 3) {
                        currentlocation = 0;
                        displayNewLocation("0");
                        }
               else if (currentlocation === 7) {
                       currentlocation = 1;
                       displayNewLocation("1");
                       }
              else if (currentlocation === 4) {
                       currentlocation = 6;
                       displayNewLocation("6");
                       }
              else if (currentlocation === 5) {
                       currentlocation = 8;
                       displayNewLocation("8");
                       }
              else if (currentlocation === 8) {
                       currentlocation = 9;
                       displayNewLocation("9");
                       }
                       }
  
        function easter_egg() {
          discoveredEasterEgg = true;
          updateText("Accidentally, you feel a pressure plate give way beneath your feet and you fall down a dark tube. As you fall, with a seemingly bored tone, a female, robotic voice says, 'Ah, you've arrived. Now we can finally begin testing.'");
          northbutton.disabled=true;
          southbutton.disabled=true;
          westbutton.disabled=true;
          eastbutton.disabled=true;
        }
        function updateText(msg) {
          msg = msg;
          var ta = document. getElementById ("taGame");
            ta.value = msg + "\n" + "\n" + ta.value;
            }

     
        function btn_Go_click(){
          var txt = document.getElementById("txtCommand");
          var num= parseInt(txt.value);
            for (var i=0; i < num; i=i+1) {
              alert("loop: "+ i);
               btn_thing_click(i);
              }
              }
        //this is fired whenever you move to get you a score
        function btnScore(parascore){
          var ta = document.getElementById("taScore");
          ta.value = score;
        }
        //this is fired whenever you move to get you your # of moves
        function btnMoves(paramoves){
          var ta = document.getElementById("taMoves");
          ta.value = moves;
        }
        
        function btnLocation(paralocation){
          var ta = document.getElementById("taLocation");
          ta.value = location;
        }
       // this is the function used with the "enter command" button
       //and is also fired when you press "enter" to input a command
       function btn_go_click() {
        var userinput = document.getElementById("txtInput");
        var msg = "";
          updateText(msg)
          switch(userinput.value) {
          case "n":
          case "N":
          case "north":
          case "North":
          move_north();
          break;
          case "s":
          case "S":
          case "south":
          case "South":
          move_south();
          break;
          case "e":
          case "E":
          case "east":
          case "East":
          move_east();
          break;
          case "w":
          case "W":
          case "west":
          case "West":
          move_west();
          break;
          case "take":
          case "Take":
          takeItem();
          break;
          case "inventory":
          Btn_inventory_click();
          break;
          case "help":
          case "Help":
          Btn_help_click();
          break;
          case "The cake is a lie":
          case "the cake is a lie":
          easter_egg();
          }
          document.getElementById("txtInput").value = "";
          }
        
        function displayNewLocation(currentlocation) {
        switch (currentlocation) {
        case "0" : GrandHall() ; break ;
        case "1" : Hallway() ; break ;
        case "2" : GHAntichamber() ; break ;
        case "3" : DiningHall() ; break ;
        case "4" : TRAntichamber() ; break ;
        case "5" : Pantry() ; break ;
        case "6" : TargetRoom() ; break ;
        case "7" : TrophyRoom() ; break ;
        case "8" : ExistentialRoom() ; break ;
        case "9" : DuctWorkBeginning() ; break ;
        }
        }
        
        //the init() function you requested
        function init() {
          updateText("You are a member of the infamous Brotherhood of Assassins.Your mission is to fight the Templar Order. You have just received an order to travel to Caines, France and confront the Duke LaFontanue, a known Templar Knight. Now you are inside the Grand Hall of LaFontanue's castle with doors to your north, south, east, and west. Your blade was lost in your entry attempt and your hidden blade appears to be stuck. This must be remedied before you can end your target.");
          Location [0] = new places("0", "Grand Hall", "Now you are inside the Grand Hall of LaFontanue's castle with doors to your North, South, East, and West.");
          Location [1] = new places("1", "Hallway", "You're standing in a hallway which has only doors to the North, East, and South.");
          Location [2] = new places("2", "Great Hall Antichamber", "You walk into the antichamber off of the great hall. You see a short-blade on the table.", "Short blade");
          Location [3] = new places("3", "Dining hall", "You walk into the Dining Hall. There is only one door to the North.");
          Location [4] = new places("4", "Target Room Antichamber", "You can hear your Target talking behind a locked door to the West.");
          Location [5] = new places("5", "Pantry", "You're now standing in a pantry that has only one door to the West and a small tool cabinet with repair tools.", "WD-40");
          Location [6] = new places("6", "Target Room Antichamber", "The door is locked. You must find another way into this room.");
          Location [7] = new places("7", "Trophy Room", "you walk into a room full of awards and weapons. On a rack, you notice a sword with Assassin markings. There is one door to the south.", "Sword of Aquilius");
          Location [8] = new places("8", "Existential Room", "Across from you, on the West in this room is a door, but there is also a chest. The lock is cracked and anyone, it seems, could open it.", "Self-Confidence");
          Location [9] = new places("9", "DuctWork Beginning", "There seems to be a bit of ductwork in the South of this room. Maybe you can find a way into your target's room from here.");
          Item [0] = new item("0", "Sword of Aquilius", "It's a sword", "Sword not taken", "Sword has been taken");
          Item [1] = new item("1", "Self-Confidence", "This is Self-Confidence", "Self-Confidence not taken", "Self-Confidence has been taken");
          Item [2] = new item("2", "Short Blade", "It's a short blade", "Short Blade not taken", "Short Blade has been taken");
          Item [3] = new item("3", "WD-40", "This is WD-40", "WD-40 not taken", "WD-40 has been taken");
          alert("Be aware. The sign on the window in front of your office DOES have meaning in this game, Dr. Labousuer...");
        }