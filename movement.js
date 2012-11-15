	//the .js file for controlling movement.
			
			//these are the variables for location, maneuvering, score, and moves taken
			var NORTH = 1;
      var SOUTH = 2;
      var EAST  = 3;
      var WEST  = 4;
      var score = 0;
      var currentlocation = 0;
      var moves = 0;
     
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
          }
          document.getElementById("txtInput").value = "";
          }
        
        function displayNewLocation(currentlocation) {
        switch (currentlocation) {
        case "0" : location0() ; break ;
        case "1" : location1() ; break ;
        case "2" : location2() ; break ;
        case "3" : location3() ; break ;
        case "4" : location4() ; break ;
        case "5" : location5() ; break ;
        case "6" : location6() ; break ;
        case "7" : location7() ; break ;
        case "8" : location8() ; break ;
        case "9" : location9() ; break ;
        }
        }
        
        //the init() function you requested
        function init() {
        updateText("You are a member of the infamous Brotherhood of Assassins.Your mission is to fight the Templar Order. You have just received an order to travel to Caines, France and confront the Duke LaFontanue, a known Templar Knight. Now you are inside the Grand Hall of LaFontanue's castle with doors to your north, south, east, and west.");
        }