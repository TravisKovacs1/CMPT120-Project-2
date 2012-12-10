	//the .js file for controlling movement.
			
			//these are the variables for location, maneuvering, score, location, and moves taken
			var NORTH = 0;
      var SOUTH = 1;
      var EAST  = 2;
      var WEST  = 3;
      var score = 0;
      var currentlocation = 0;
      var moves = 0;
      var discoveredEasterEgg = false;
     //navigation matrix 
      var nav = [
      //     n  s  e  w
      /*0*/ [1, 2, 3, 4],
      /*1*/ [5, 0, 7,-1],
      /*2*/ [0,-1,-1,-1],
      /*3*/ [7,-1,-1, 0],
      /*4*/[-1,-1, 0,-1],
      /*5*/[-1, 1,-1, 8],
      /*6*/[-1,-1, 4,-1],
      /*7*/[-1, 3,-1, 1],
      /*8*/[-1,-1, 5, 9],
      /*9*/[-1,10, 8,-1],
      /*10*/[9,-1,-1,-1]
            ];
           
      function move(way) {
        var newLocation=nav[currentlocation][way];
        if(newLocation !== -1) {
          currentlocation = newLocation;
          displayNewLocation();
        } else {
          var msg="You cannot go this way";
          updateText(msg);
        }
      }
     //a nice easter egg, because I like those.
        function easter_egg() {
          discoveredEasterEgg = true;
          updateText("Accidentally, you feel a pressure plate give way beneath your feet and you fall down a dark tube. As you fall, with a seemingly bored tone, a female, robotic voice says, 'Ah, you've arrived. Now we can finally begin testing.'");
          northbutton.disabled=true;
          southbutton.disabled=true;
          westbutton.disabled=true;
          eastbutton.disabled=true;
        }
        //updates the text in the main text area
        function updateText(msg) {
          msg = msg;
          var ta = document. getElementById ("taGame");
            ta.value = msg + "\n" + "\n" + ta.value;
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
        //this is fired to get you your location
        function btnLocation(msg){
          msg = msg;
          var ta = document.getElementById("taLocation");
          ta.value = msg;
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
          move(north);
          break;
          case "s":
          case "S":
          case "south":
          case "South":
          move(south);
          break;
          case "e":
          case "E":
          case "east":
          case "East":
          move(east);
          break;
          case "w":
          case "W":
          case "west":
          case "West":
          move(west);
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
          break;
          case "win":
          case "Win":
          win();
          }
          document.getElementById("txtInput").value = "";
          }
        
        function displayNewLocation() {
        switch (currentlocation) {
        case 0: GrandHall() ; break ;
        case 1: Hallway() ; break ;
        case 2: GHAntichamber() ; break ;
        case 3: DiningHall() ; break ;
        case 4: TRAntichamber() ; break ;
        case 5: Pantry() ; break ;
        case 6: TargetRoom() ; break ;
        case 7: TrophyRoom() ; break ;
        case 8: ExistentialRoom() ; break ;
        case 9: DuctWorkBeginning() ; break ;
        case 10: Overlook() ; break ;
        }
        }
        
        //the init() function you requested
        function init() {
          document.getElementById("taGame").value = "";
          document.getElementById("taLocation").value = "Grand Hall";
          updateText("You are a member of the infamous Brotherhood of Assassins.Your mission is to fight the Templar Order. You have just received an order to travel to Caines, France and confront the Duke LaFontanue, a known Templar Knight. Now you are inside the Grand Hall of LaFontanue's castle with doors to your north, south, east, and west. Your blade was lost in your entry attempt and your hidden blade appears to be stuck. This must be remedied before you can end your target.");
          Location [0] = new places("0", "Grand Hall", "Now you are inside the Grand Hall of LaFontanue's castle with doors to your North, South, East, and West.");
          Location [1] = new places("1", "Hallway", "You're standing in a hallway which has only doors to the North, East, and South.");
          Location [2] = new places("2", "Grand Hall Antichamber", "You walk into the antichamber off of the great hall. You see a short-blade on the table.", "Short blade");
          Location [3] = new places("3", "Dining hall", "You walk into the Dining Hall. There is only one door to the North.");
          Location [4] = new places("4", "Target Room Antichamber", "You can hear your Target talking behind a locked door to the West.");
          Location [5] = new places("5", "Pantry", "You're now standing in a pantry that has only one door to the West and a small tool cabinet with repair tools.", "WD-40");
          Location [6] = new places("6", "Target Room", "The door is locked. You must find another way into this room.");
          Location [7] = new places("7", "Trophy Room", "you walk into a room full of awards and weapons. On a rack, you notice a sword with Assassin markings. There is one door to the south.", "Sword of Aquilius");
          Location [8] = new places("8", "Existential Room", "Across from you, on the West in this room is a door, but there is also a chest. The lock is cracked and anyone, it seems, could open it.", "Self-Confidence");
          Location [9] = new places("9", "DuctWork Beginning", "There seems to be a bit of ductwork in the South of this room. Maybe you can find a way into your target's room from here.");
          Location [10]= new places("10", "The Overlook", "You are now overlooking your Target. He is hunched over a desk and is seemingly unaware of your position.");
          Item [0] = new item("0", "Sword of Aquilius", "You recognize the sword as that of the legendary Roman assassin, Aquilius and strap it to your belt.", "Sword not taken", "Sword has been taken");
          Item [1] = new item("1", "Self-Confidence", "You've found... SELF-CONFIDENCE!!! Now you're mentally ready to complete the mission. You studly stud, you.", "Self-Confidence not taken", "Self-Confidence has been taken");
          Item [2] = new item("2", "Short Blade", "You look in the tool cabinet and find a bottle of WD-40. You spray some on your hidden blade, and it it slides out and back with ease. It's go time.", "Short Blade not taken", "Short Blade has been taken");
          Item [3] = new item("3", "WD-40", "You take the short blade and slide it into your belt.", "WD-40 not taken", "WD-40 has been taken");
          alert("What is a lie?");
      }