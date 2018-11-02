



// start, function to display the game 
// scripts to execute when clicked "new game"
function startGame(){


    // put code above
    setupMap();  // setup the game map, have all game element ready in the map
    display_one_block(0, 0);  // starting coordinate
    startPage.style.display = "none"; // hide the menu page
    gamePage.style.display = "block";  // display the game with the map and control-panel
}

// exit, remove all map cells and display starting menu when clicked "exit game"
// scripts to perform after exit game
function exitGame(){
    gamePage.style.display = "none";
    startPage.style.display = "block";
    removeAllCells();
    // put code below
}

//I tried to set up save to save the file in the same format as the parsing sctipt so when we add the continue button we should be 
//able just add a call to the parsing script then the create map to create the map off the values we have. I imagine once we
//add items to the cells we will need to change this a bit.
function saveMap() {
     var file = []
     file.push(title);
     file.push(mapSize);
     file.push("#########");//pointless, i know, but it kind of helps with readability/consistancy with the parsing script
     //file.push([hero.row_coordinate, hero.column_coordinate]);
     file.push(hero.row_coordinate + "," + hero.column_coordinate); //looks like the parsing script breaks up a concatenation of strings and not an array
     file.push(hero.energy);
     file.push(hero.whiffles);
     
     //adds each hero item to a seperate index of file
     items_max = hero.items.length - 1;
     for (i = 0; i < items_max; ++i) {
         file.push(hero.items[i]);
     }
     file.push("########"); //to reuse the parsing script
     
     //goes through each cell of the map and saves it's information to its own index of file.
     for(a = 0; a < mapSize; ++a){
         for(b = 0; b < mapSize; ++b){
             file.push(map[a][b].row + "," + map[a][b].column + "," + map[a][b].visibility + "," +  map[a][b].terrain + "," + map[a][b].obstacle);
         }
     }
     //stores as a string in JSON format for the parsing script
     localStorage.setItem("map", JSON.stringify(file));
}

function continueGame(){

}
