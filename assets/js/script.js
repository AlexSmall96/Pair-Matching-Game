document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("play");
    playButton.addEventListener("click", runGame);

    let cards = document.getElementsByClassName('card');

    for (let card of cards){
        card.addEventListener('click', function(){
            let itemName=this.id;
            card.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`
            console.log(itemName, card.innerHTML)
        });
    }
});

function runGame(){
  console.log('Game running')
}

function showCard(item){
    console.log(item ,'selected');
}
function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

