document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("new-game");
    playButton.addEventListener("click", runGame);
});

function runGame(){
    let cards = document.getElementsByClassName('card');
    let input=[];

    for (let card of cards){
        card.addEventListener('click', function(){
            if (input.length<2){
               let itemName=this.id;
               card.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
               input.push(itemName);
               if (input[0]===input[1]){
                let foundItem = document.getElementById(`found-${itemName}`)
                foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
               }
            }
        });
    }
}

function showCard(item){
    console.log(item ,'selected');
}
function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

