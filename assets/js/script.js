document.addEventListener("DOMContentLoaded", function() {
    let noAttemptsEasy=20;
    let noAttemptsHard=5;
    let attemptsLeft=noAttemptsEasy;
    let hardModeOn=false;
    let inputId=[];
    let inputName=[];
    let itemsFound=0;
    let gameInProgress=false;
    //Define object of items to map number to card id
    const keysHard=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const itemsHard= {
            1:"pizza-slice-0",
            2:"pizza-slice-1",
            3:"mug-hot-0",
            4:"mug-hot-1",
            5:"burger-0",
            6:"burger-1",
            7:"cat-0",
            8:"cat-1",
            9:"motorcycle-0",
            10:"motorcycle-1",
            11:"cake-candles-0",
            12:"cake-candles-1",
            13:"ice-cream-0",
            14:"ice-cream-1",
            15:"snowman-0",
            16:"snowman-1",
            17:"shuttle-space-0",
            18:"shuttle-space-1",
            19:"carrot-0",
            20:"carrot-1"
            };  
         

    const keysEasy=[1,2,3,4,5,6,7,8,9,10,11,12];
    const itemsEasy={
            1:"pizza-slice-0",
            2:"pizza-slice-1",
            3:"mug-hot-0",
            4:"mug-hot-1",
            5:"burger-0",
            6:"burger-1",
            7:"cat-0",
            8:"cat-1",
            9:"motorcycle-0",
            10:"motorcycle-1",
            11:"cake-candles-0",
            12:"cake-candles-1"
            };  
        
    let cards = document.getElementsByClassName('card');
    let noItems=cards.length*0.5;

    const promptArea=document.getElementById('prompt-area');
  
    const playButton = document.getElementById("new-game");
    //shuffle cards//
    playButton.addEventListener("click", function(){
    let shuffledKeys=shuffleCards(keys);
    keyIndex=0;
    for (let card of cards){
        //Turn all cards over
        card.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`
        //Save old Id
        oldId=card.id
        //Shuffle cards//
        card.id=items[shuffledKeys[keyIndex]];
        keyIndex++;
        //Reset found items
        let foundItem = document.getElementById(`found-${(oldId).slice(0,(oldId).length-2)}`)
        foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        }     
        //Reset attempts left
        
        attemptsLeft=noAttemptsEasy;
        document.getElementById('attempts-left').innerHTML =attemptsLeft;
        inputId=[];
        inputName=[];
        itemsFound=0;
        promptArea.innerHTML=`<p>Pick a Card!</p>`
       gameInProgress=true;
    });

    //Add event listeners to cards//
    
    for (let card of cards){
        card.addEventListener('click', function(){
            //Only let the user click if New game button has been clicked//
            if (gameInProgress){
            //Only let the user click if attempts are left
            if (attemptsLeft>0){
            //Only let the user click on a card if it hasn't been turned over//
            if (card.innerHTML==='<i class="fa-2xl fa-solid fa-question"></i>'){
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
                  attemptsLeft -=1;
                  document.getElementById('attempts-left').innerHTML =attemptsLeft;
                  if (inputName[0]===inputName[1]){
                  //Add item to found items//
                  attemptsLeft -=1;
                  document.getElementById('attempts-left').innerHTML =attemptsLeft;
                  let foundItem = document.getElementById(`found-${itemName}`)
                  foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-${itemName}"></i>`;
                  //Increase score
                  itemsFound++;
                  //Show well done message//
                  if (noItems-itemsFound>1){
                    promptArea.innerHTML=`<p>Well done! ${noItems-itemsFound} items left to find.</p>`
                  } else if (noItems-itemsFound==1){
                    promptArea.innerHTML=`<p>Well done! 1 item left to find.</p>`
                  } else {
                    promptArea.innerHTML=`<p>Well done! All items found.</p>`
                    gameInProgress=false;
                         }
                  
                  inputId=[];
                  inputName=[];
                  } else if (attemptsLeft>0){
                    //Let button appear to guess again//
                    promptArea.innerHTML='<button id="guess-again">Guess Again</button>'
                    let guessAgain=document.getElementById('guess-again');
                    guessAgain.addEventListener('click',function(){
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
                        //Make button dissapear after it is clicked//
                        promptArea.innerHTML='<p>...</p>'
                       
                    })
                  } else {promptArea.innerHTML='<p>Sorry, you ran out of guesses.</p>';
                          gameInProgress=false;
                }
                }
            }
        }
        }
        }
        });
    }
    
    

   
    
});

function shuffleCards(keys){
    let shuffledKeys =[];
    let noKeys=keys.length
    let noKeysRemaining=noKeys;
    for (i=1;i<noKeys;i++){
        let r=Math.floor(noKeysRemaining*Math.random());
        shuffledKeys.push(keys[r])
        keys.splice(r,1);
        noKeysRemaining -=1;
    }
    shuffledKeys.push(keys[0])
    return shuffledKeys;
}

function newGame(){ 
    //turns all cards over
    //resets score
    //outputs empty array and score of 0
}

function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

