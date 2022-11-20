document.addEventListener("DOMContentLoaded", function() {
    //Add event listener to play button//
    let input=[];
    let itemsFound=0;
    let playButton = document.getElementById("new-game");
    playButton.addEventListener("click", newGame);
    //Add event listeners to cards//
    let cards = document.getElementsByClassName('card');
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
            }
        });
    }

    let guessAgain=document.getElementById('guess-again');
    guessAgain.addEventListener('click',function(){
        //Check if two cards have been selected//
        if (input.length ===2){
            console.log('2')
            //Check if cards dont match//
            if (input[0]!==input[1]){
                console.log('wrong')
                //Turn cards back over//
                document.getElementById(input[0]).innerHTML=
                `<i class="fa-2xl fa-solid fa-question"></i>`;
                document.getElementById(input[1]).innerHTML=
                `<i class="fa-2xl fa-solid fa-question"></i>`;
            }
        }
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

