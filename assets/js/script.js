document.addEventListener("DOMContentLoaded", function() {
    //Add event listener to play button//
    let noItems=3;
    let inputId=[];
    let inputName=[];
    let itemsFound=0;
    let playButton = document.getElementById("new-game");
    playButton.addEventListener("click", newGame);
    //Add event listeners to cards//
    let cards = document.getElementsByClassName('card');
    for (let card of cards){
        card.addEventListener('click', function(){
            //If less than two cards are currently chosen//
            if (inputId.length<2){
               //store id//
               let item=this.id;
               //store item name without unique number on end//
               let itemName=item.slice(0,item.length-2);
               //Turn card over to show item//
               card.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
               inputId.push(item);
               inputName.push(itemName)
               //If cards selected match
               if (inputId.length===2){
                  if (inputName[0]===inputName[1]){
                  //Add item to found items//
                  let foundItem = document.getElementById(`found-${itemName}`)
                  foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
                  //Increase score
                  itemsFound++;
                  inputId=[];
                  inputName=[];
                  }
                  else {
                    document.getElementById('guess-again').style.backgroundColor='green';
                    document.getElementById('guess-again').style.width='25%';
                  }
                }
            }
        });
    }
    
    let guessAgain=document.getElementById('guess-again');
    guessAgain.addEventListener('click',function(){
        guessAgain.style.backgroundColor='lightgrey';
        guessAgain.style.width='10%';
        //Check if two cards have been selected//
        if (inputId.length ===2){
            //Check if cards dont match//
            if (inputName[0]!==inputName[1]){
                //Turn cards back over//
                document.getElementById(inputId[0]).innerHTML=
                `<i class="fa-2xl fa-solid fa-question"></i>`;
                document.getElementById(inputId[1]).innerHTML=
                `<i class="fa-2xl fa-solid fa-question"></i>`;
            }
        } 
        inputId=[];
        inputName=[];
    })
    
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

