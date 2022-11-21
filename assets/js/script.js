document.addEventListener("DOMContentLoaded", function() {
    //Add event listener to play button//
    let noItems=4;
    let noAttemptsEasy=10;
    let noAttemptsHard=5;
    let attemptsLeft=noAttemptsEasy;
    let hardModeOn=false;
    let inputId=[];
    let inputName=[];
    let itemsFound=0;
    let gameInProgress=false;
    let hardSwitch=document.getElementById('switch');
    hardSwitch.addEventListener('change',function(){
        if (!gameInProgress){
                hardModeOn=this.checked;
            if (hardModeOn){
                document.getElementById('attempts-left').innerHTML=`${noAttemptsHard}`;
                attemptsLeft=noAttemptsHard;
            } else {
                document.getElementById('attempts-left').innerHTML=`${noAttemptsEasy}`;
                attemptsLeft=noAttemptsEasy;}
            }       
        })
        
    
    let promptArea=document.getElementById('prompt-area');

    let playButton = document.getElementById("new-game");
    playButton.addEventListener("click", function(){
    for (let card of cards){
        //Turn all cards over
        card.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        //Reset found items
        let foundItem = document.getElementById(`found-${(card.id).slice(0,(card.id).length-2)}`)
        foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        }     
        //Reset attempts left
        if (hardModeOn){
            attemptsLeft=noAttemptsHard;
        } else {attemptsLeft=noAttemptsEasy;}
        document.getElementById('attempts-left').innerHTML =attemptsLeft;
        inputId=[];
        inputName=[];
        itemsFound=0;
        promptArea.innerHTML=`<p>Pick a Card!</p>`
       gameInProgress=true;
       if (hardModeOn){document.getElementById('hard-mode').innerHTML=
       `<h4>Hard Mode</h4>
       <div class="frozen-on vertical-margin horizontal-margin-single">
       <p>  ON</p>
       </div>`}
       else { document.getElementById('hard-mode').innerHTML=
       `<h4>Hard Mode</h4>
       <div class="frozen-off vertical-margin horizontal-margin-single">
       <p>  OFF</p>
       </div>`}
     
    });

    //Add event listeners to cards//
    let cards = document.getElementsByClassName('card');
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

function newGame(){ 
    //turns all cards over
    //resets score
    //outputs empty array and score of 0
}

function compareItems(item1,item2){
    
}

function updateItemsFound(item){

}

