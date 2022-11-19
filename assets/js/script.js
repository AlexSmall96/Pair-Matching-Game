document.addEventListener("DOMContentLoaded", function() {
    //Add event listener to play button//
    let playButton = document.getElementById("new-game");
    playButton.addEventListener("click", newGame);
    //Add event listeners to cards//
    let cards = document.getElementsByClassName('card');
    let input=[];
    let itemsFound=0;
    for (let card of cards){
        card.addEventListener('click', function(){
            //If less than two cards are currently chosen//
            if (input.length<2){
               let itemName=this.id;
               //Turn card over to show item//
               card.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
               input.push(itemName);
               //If cards selected match
               if (input.length===2){
                  if (input[0]===input[1]){
                  //Add item to found items//
                  let foundItem = document.getElementById(`found-${itemName}`)
                  foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
                  itemsFound++;
                  }
                }
               if (input.length === 2){
                //If two attempts made reset input to empty array//
                  input =[];
               }
            }
        });
    }
});

function newGame(){ 
    //turns all cards over
    //resets score
    //outputs empty array and score of 0
}

function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

