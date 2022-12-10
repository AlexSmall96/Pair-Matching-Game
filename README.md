# Pairs
introduction

## Live Site 
[https://alexsmall96.github.io/Pairs/](https://alexsmall96.github.io/Pairs/)

![](assets/documentation/images/am-i-responsive.png)
![](assets/documentation/images/responsive2.png)
## Repository 
[https://alexsmall96.github.io/Pairs/](https://github.com/AlexSmall96/Pairs)

## Author 
Alex Small


# UX
## Target Audience

 


## Project Goals



## User Stories
### Site User
As a user, I would like to :

- See clearly what the purpose of the game is
- Recieve clear and concise instructions as to how to navigate the site and play the game
- Easily navigate the site through eye catching buttons
- Be able to view my progress as I am playing the game
- Recieve prompts during the game to know what to do next
- Record my result and compare to other players
- Be able to exit the game or play again at the end of each game

### Website Owner
As a site owner, I would like to :

- Attract users to play the game through eye catching imagery, font and buttons
- Express ideas freely and creatively

## Design Choices
### Colors
I wanted to site to have a playful and fun feel to it. I chose bright, bold to give the user the impression of a fun website. The home page and game pages stand out well from the background with a bold green vs a faded blue, while the cards are more of a stronger blue to make them the fore front of the site. I chose gold, silver and bronze for the leaderboard to create a more visullay appealing method of ranking players.

![](assets/documentation/images/colours1.png)
![](assets/documentation/images/colours2.png)

### Typography
The font used on this site is [Electrolize](https://fonts.googleapis.com/css2?family=Electrolize&display=swap) from Google Fonts. I thought this was an appropriate choice for this site as it has a playful and informal feel to it, appropriate for a game.
### Imagery
The images used in this site are the icons that appear on the cards, taken from [Font Awesome](https://fontawesome.com/). The Icons were chosen to be random items that give a playful impression, while being visually appealing.

## Site Structure and Features

The site is structured into two main areas, the home page and the game page. The home page is where the user is brought to initially, and contains the header, an about section, intstructions to play the game, and a settings section, with username input and difficulty switch. The game is played on the game page, which can be accessed via the start game button. This contains the cards area, where the game is played, a score tracking area and a leaderboard.

The features of the site are given below, along with an image and its value to the user.

Feature| Image | Value to User
:-------------------------:|:-------------------------: | :-------------------------: 
|About Section |![](assets/documentation/images/about.png) |A clear and concise overview of the site, writen in a playful and fun way it captures the users attention and creates intrigue to play the game.
|Instructions|![](assets/documentation/images/instructions.png) |Detailed instructions telling user the game rules as well as how to easily navigate through the site.
|Username Input|![](assets/documentation/images/username.png) |An input allowing the user to enter their chosen username, which allows them to compare their score to others on the leaderboard.
|Difficulty Switch|![](assets/documentation/images/difficulty.png) |Allows the user to set the difficulty to a level that is appropriate for them.
|Start Button|![](assets/documentation/images/start.png) |Loads the game page and hides the home page. Allows the user to easily navigate to the game page and is clear and obvious.
|Cards Area|![](assets/documentation/images/cards-easy.png)![](assets/documentation/images/cards-hard.png) |The cards to be turned over during the game. Allows the user to intuitively play the game as if they were turning cards over, while keeping track of already matched pairs and how many left to find. Changes between 12 and 20 cards depending on difficulty, allowing the user to visually appreciate the change in difficulty.
|Score Tracking|![](assets/documentation/images/score-easy.png)![](assets/documentation/images/score-hard.png) |Shows how many items are left to find and how many attempts left the user has. Lets the user keep track of their progess in the game. Changes between 6 and 10 items and 25 and 35 initial attempts depending on difficulty, allowing the user to visullay appreciate the change in difficulty.
|Exit Game Button|![](assets/documentation/images/Exit.png) |Hides the game page and displays the home page. Allows the user to easily navigate through the site.
|Leaderboard|![](assets/documentation/images/leaderboard.png) |Displays the top 3 scores of those who entered a username. Allows the user to compare their scores to others and personalise the game.
|New Game Button|![](assets/documentation/images/new-game.png) |If the user completes the game, a button with 'Play Again?' appears, taking the user back to a reduced version of the home page (see below). Allows the user so smoothly navigate the site.
|Try Again Button|![](assets/documentation/images/try-again.png) |If the user loses the game, a button with 'Try Again' appears, taking the user back to a reduced version of the home page (see below). Allows the user to smoothly navigate the site.
|Settings Only Home Screen|![](assets/documentation/images/settings-only.png) |A reduced version of the home screen, showing only the username input, difficulty switch and start game button. This is more convenient to the user to reload a new game rather than returning to the full home screen and navigating to the bottom.
### Media Queries ###
The Site uses media queries on both pages to achieve full responsiveness and maintain its structural integrity across all browser sizes.

- On the home page, the font size, buttons, page width % and difficulty switch size all change with different browser sizes.

- On the game page, the font-size, card padding, score area padding, page width % and leaderboard width % all change with different browser sizes. 

- See lines 159 onwards of style.css file for full details of media queries.

The media queries allow the site to be easily navigated and played by the user at all browser sizes, keeping the basic structure and maintaining the paes aesthetics so it is visaully appealing for the user. See Responsiveness of [TESTING.MD](https://github.com/AlexSmall96/Pair-Matching-Game/blob/main/TESTING.md) for images of the site at different browser sizes.
## Future Features
- A feature that could be explored in the future is the option to add a timer so that there is a time limit to complete the game, rather than a maximum number of attempts allowed.

- Further developments might also include a database to save users names across different devices, allowing the user to compare their score to others on a more global scale.
## Testing
Testing is detailed fully in [TESTING.MD](https://github.com/AlexSmall96/Pair-Matching-Game/blob/main/TESTING.md).

## Frameworks, Libraries & Programs Used

- fontawesome
- gitpod
- github
- google fonts
- Coolors.co
- amiresponsive
- Javascript Math

# Deployment
### Deploying the Site to GitHub
- On GitHub.com, navigate to the main page of the [Pairs](https://github.com/AlexSmall96/Pairs) repository.
- From the source section drop-down menu, select the Master Branch.
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
### Forking the Repository on GitHub
- On GitHub.com, navigate to the main page of the [Pairs](https://github.com/AlexSmall96/Pairs) repository.
- In the top-right corner of the page, click Fork.
- Select an owner for the forked repository.
- By default, forks are named the same as their upstream repositories. You can change the name of the fork to distinguish it further.
- Optionally, add a description of your fork.
- Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied.
- Click Create fork.
### Cloning the Repository on GitHub
- On GitHub.com, navigate to the main page of the [Pairs](https://github.com/AlexSmall96/Pairs) repository.
- Above the list of files, click Code.
- Copy the URL for the repository.
- Open Terminal.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

# Credits
## Content
The content of the site is all original thought, however the game itself is based on the classic card game [Concentration](https://en.wikipedia.org/wiki/Concentration_(card_game)) (also known as Pairs or Pelmanism).
## Media

## Code
The resources used for this project were the CI Javascript Essentials module, HTML & CSS Essentials module, the Love Running and Love Maths walkthrough projects, along with some external resources:

- The code which sorts the leaderboard based on users scores is taken from an article from [medium.com](https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c).

- The difficulty switch on the home page is styled with inspiration from a guide found at [geeksforgeeks](https://www.geeksforgeeks.org/how-to-create-toggle-switch-by-using-html-and-css/).

- The CSS background effects were taken from a section on [W3schools](https://www.w3schools.com/css/css3_gradients.asp) and a thread on [Stack Overflow](https://stackoverflow.com/questions/2869212/css3-gradient-background-set-on-body-doesnt-stretch-but-instead-repeats/). 

- All external resources are commented in the code at the relevant places.

## Acknowledgements 
I would like to thank my mentor Harry Dhillon for his encouraging support and detailed feedback throughout this project.