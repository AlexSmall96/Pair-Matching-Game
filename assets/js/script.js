document.addEventListener("DOMContentLoaded", function() {
    let noAttemptsEasy=15;
    let noAttemptsHard=30;
    let attemptsLeft=noAttemptsEasy;
    let difficulty='easy'
    let inputId=[];
    let inputName=[];
    let itemsFound=0;
    let gameInProgress=false;
    let stopGame=false;
    let cards = document.getElementsByClassName('card');
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
    //When easy mode is chosen
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
    //Add event listener to difficulty switch
    const diffSwitch=document.getElementById('switch')
    diffSwitch.addEventListener('change', function(){
        if (this.checked){
            difficulty='hard'
            if (difficulty==='hard'){
                items=itemsHard;
                keys=keysHard;
                noAttempts=noAttemptsHard;
                document.getElementById('attempts-left').innerHTML = noAttempts;
                //If hard mode is chosen change card layout
                let gameTable=document.getElementById('game-table');
                let gameTableRows=gameTable.getElementsByTagName('tr');
                for (i=0;i<3;i++){
                 let extraCard=document.createElement('td');
                 extraCard.id=items[i+13];
                 extraCard.className="card";
                 extraCard.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`
                 gameTableRows[i].appendChild(extraCard);
                }
                let extraRow=document.createElement('tr');
                gameTable.appendChild(extraRow);
                for (i=16;i<21;i++){
                 let extraCard=document.createElement('td');
                 extraCard.id=items[i];
                 extraCard.className="card";
                 extraCard.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`
                 extraRow.appendChild(extraCard);
                }
                let foundTable=document.getElementById('found-table');
                let foundTableRows=foundTable.getElementsByTagName('tr');
                for (let i=0;i<4;i++){
                    let extraItem=document.createElement('td');
                    extraItem.id=`found-${items[2*i+13].slice(0,(items[2*i+13]).length-2)}`;
                    extraItem.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
                    if (i<2){
                        foundTableRows[0].appendChild(extraItem);
                    } else {foundTableRows[1].appendChild(extraItem);}
                    
                }
            cards = document.getElementsByClassName('card'); 
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
                  } else if (attemptsLeft<noItems-itemsFound){
                    gameInProgress=false;
                    promptArea.innerHTML='<p>Sorry, not enough guesses remaining.</p>';
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
            }
        } else {difficulty='easy'}
    })
    
   

    //Assign keys and item to either keysEasy or keysHard depdning on difficulty chosen//
    let noAttempts=noAttemptsEasy;
    let keys=keysEasy;
    let items=itemsEasy;   
    let noItems=0.5*keysEasy.length;
    
    

    const promptArea=document.getElementById('prompt-area');
  
    

  

    const playButton = document.getElementById("new-game");
    playButton.addEventListener("click", function(){
    //Shuffle keys into new array//
    let shuffledKeys=[];
    let noKeys=keys.length;
    let noKeysRemaining=noKeys;
    let randIndex;
    for (let i=0;i<noKeys;i++){
        randIndex = Math.floor(Math.random()*noKeysRemaining);
        shuffledKeys.push(keys[randIndex]);
        keys.splice(randIndex,1);
        noKeysRemaining--;
    }
    //Overwrite keys with new order//
    keys=shuffledKeys;
    let cardNo=0;
    let oldId;
    
    let noItems=cards.length*0.5;
    for (let card of cards){
        //Turn all cards over
        card.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`
        //Save old Id
        oldId=card.id
        //Shuffle cards using shuffled key values//
        card.id=items[keys[cardNo]]
        cardNo++;
        //Reset found items
        let foundItem = document.getElementById(`found-${(card.id).slice(0,(card.id).length-2)}`)
        foundItem.innerHTML=`<i class="fa-2xl fa-solid fa-question"></i>`;
        }     
        //Reset attempts left
        attemptsLeft=noAttempts;
        document.getElementById('attempts-left').innerHTML = attemptsLeft;
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
                  } else if (attemptsLeft<noItems-itemsFound){
                    gameInProgress=false;
                    promptArea.innerHTML='<p>Sorry, not enough guesses remaining.</p>';
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


