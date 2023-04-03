//For my week 5 menu app project, I decided to make a menu that you can have keep track of your favorite games along with the hours you've put into them.
//I started by making the FavoriteVideoGame class similar to how the teacher began with his player class.
//In the constructor, I pass in the name and the hours played and make them accessible.

class FavoriteVideoGame {
    constructor(name, hoursPlayed) {
        this.name = name;
        this.hoursPlayed = hoursPlayed;
    }
 //I then move on to the describe method which will eventually be called on when you choose the "2) view game" option.
    describe() {
        return `One of my favorite games is ${this.name}. I have played a total of ${this.hoursPlayed} hours.`;
    }
}

//Next I created the menu class which enables me to give the user various options to choose from. I used the top down programming method by first naming the methods
// that I'm going to use and then establishing them.

class Menu {
    constructor() {
        this.games = [];
        this.selectedGame = null;
    } //In the constructor for my menu, I created the array that will store the games I will enter in. I also set the selectedGame variable to null.
    start() {
        let selection = this.showMainMenu();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addGame();
                    break;
                case '2':
                    this.viewGame();
                    break;
                case '3':
                    this.removeGame();
                    break;
                case '4':
                    this.displayGames();
                    break;
                default:
                    selection = 0;
            } //These switches are used to acccess the various methods someone wants to go through.
            selection = this.showMainMenu();
        }
        alert('Goodbye!');
    }
 //This method below is what prompts the user to enter in whichever option they may want.
    showMainMenu() {
        return prompt(`
        0) exit
        1) add game
        2) view game
        3) remove game
        4) display games`);
    }
 //I'm not entirely sure if I should use description here.
    updateGameMenu() {
        return prompt(`
        Game: ${this.selectedGame.name}
        Hours Played: ${this.selectedGame.hoursPlayed}
        0) Change name of game
        1) Update amount of hours put in
        2) Delete Game`);
    }

 //This method below is used to add games to the list. It prompts the user for both the name of the game as well as the ammount of hours that they have.
    addGame() {
        let name = prompt('Enter the name of new game:');
        while(!name) {
            name = prompt('The submission was blank. Please enter the name of the game you wish to add.')
        }

        let hoursPlayed = prompt('How many hours do you have in this game?');
        
        //Below I validate the user's input
        while (isNaN(hoursPlayed) || hoursPlayed === "" || hoursPlayed === null) {
            hoursPlayed = prompt('This was an incorrect submission. Please enter the ammount of hours you have played this game.')
        }

        this.games.push(new FavoriteVideoGame(name, hoursPlayed));
    }

    viewGame() {
        let index = prompt('Enter the index of the game you wish to view:');
        while (isNaN(index)) {
            index = prompt('This submission was not an index. Please enter a valid index of the game you wish to view.')
        }
        if (index > -1 && index < this.games.length) {
            this.selectedGame = this.games[index];
            let description = 'Game: ' + this.selectedGame.name + '\n' + this.selectedGame.hoursPlayed + ' Hours' + '\n';


            let selection = this.updateGameMenu();
            
            while (isNaN(parseInt(selection))) {
                selection = prompt('Invalid Selection. Please enter a valid option')

            switch (selection) {
                case '1':
                    this.changeNameOfGame();
                    break;
                case '2':
                    this.updateHoursPlayed();
                    break;
                case '3':
                    this.removeGame();
                    break;
            }
            }
        }
     }

        changeNameOfGame() {
                let newName = prompt('What is the name of the game you would like to switch this to?');
                while (!newName) {
                    newName = prompt('Please re-enter the name of the game you would like to switch this to.');
                }
                this.selectedGame.name = newName;
            }

        updateHoursPlayed() {
                let newHoursPlayed = prompt('What is the updated ammount of hours you have in this game?');
                while (isNaN(newHoursPlayed) || newHoursPlayed === '' || newHoursPlayed === null) {
                    newHoursPlayed = prompt('This is an incorrect submission. Please enter in how many hours you have in this game.')
                }
                this.selectedGame.hoursPlayed = newHoursPlayed;
            }
     //We make sure to validate user input so we don't run into any unexpected errors.

     removeGame() {
        let index = prompt('Enter the index of the game you wish to remove from the list: ')
        while(isNaN(index)) {
            index = parseInt(prompt('This submission was not a valid index. Please resubmit which game you would like to remove from the list.'));
        }
        if (index > -1 && index < this.games.length && this.games === !null) {
            this.games.splice(index, 1);
            alert(`You have removed ${this.games[index].name}`)
        }
     }

     //This method below is used to list all the games that have been added, along with the hours put into each game.
     displayGames() {
        let gamesString = '';
        for (let i = 0; i < this.games.length; i++) {
            gamesString += i + ') ' + this.games[i].name + '\n' + this.games[i].hoursPlayed + ' Hours' + '\n';
        }
        alert(gamesString);
    }
}

let menu = new Menu();
menu.start();