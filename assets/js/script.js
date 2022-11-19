document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("play");
    playButton.addEventListener("click", runGame);

    let cards = document.getElementsByClassName('card');

    for (let card of cards){
        card.addEventListener('click', showCard);
    }
});

function runGame(){
  console.log('Game running')
}

function showCard(){
    console.log('Card selected');
}
function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

