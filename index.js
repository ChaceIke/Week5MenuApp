//This is my menu app for week 5.
//It must include: 1 array, 2 classes, and the ability to create, view, and delete elements
//I created a menu app that allows users to input their favorite games into a list and then use various options to update that list.

//The first class I made is the Game class. The constructor class is used to allow the user to access important things known about the game on the list.
class Game {
    constructor(name, hoursPlayed) {
        this.name = name;
        this.hoursPlayed = hoursPlayed;
    }
//The only method in the Game class is the describe method. It uses a template literal to make a statement about the object with accuracy.
    describe() {
        return `I have played ${this.name} for ${this.hoursPlayed} hours.`
    }
}

class Menu {
    constructor() {
        this.videoGames = [];
        this.selectedGame = null;
     //I use the Menu class to store the array I'm going to use for the list.
     //I also set selectedGame to null so I can use it to store my selection for my viewGame method.
    }
    start() {
        //The start method is what I use to begin my entire app. It is called on at the end of the code.
        //I first set selection to the showMainMenu method which prompts the user to enter in which option they'd like to choose.
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
                    this.removeGame()
                    break;
                case '4':
                    this.displayGames();
                    break;
                default:
                    selection = 0;
                //Each case represents a different option that the user could choose. To start the while loop continues so long as selection is not equal to 0.
                //The default option is set to 0 so that if the user were to enter a number outside of the given options, the while loop would end.
                //Outside the while loop is the alert that says 'Goodbye!'. This ends the application.
            }
            selection = this.showMainMenu();
        }
        alert('Goodbye!');
    }
    showMainMenu() {
        //This stores the user input and is given to the selection variable.
        return prompt(`Enter which option you wish to proceed with:
        ___________________________________________________________
        0) Exit
        1) Add Game
        2) View Game
        3) Remove Game
        4) Display Games
        ___________________________________________________________`)
    }
    addGame() {
        //When adding a game to the list, users are first prompted to enter the name of the game.
        let name = prompt('What is the name of the game you would like to add?')
        while (!name) {
            prompt('This was an incorrect submission. Please enter in the name of the game you wish to add.')
            //This while loop re-prompts the user if the initial response was empty.
        }
        //Next the user is prompted to enter how many hours they have played of this game.
        let hoursPlayed = prompt('How many hours do you have in this game?')
        while (hoursPlayed === null || hoursPlayed === '' || isNaN(hoursPlayed)) {
            prompt('This was an incorrect submission. Please enter how many hours you have in this game.')
            //This while loop makes sure the user didn't enter anything that was either empty or not a number.
        }
        //Finally, I use the push method of the videoGames array to add a new class passing in the variables I just got from the user.
        this.videoGames.push(new Game(name, hoursPlayed));
    }

    viewGame() {
        //When the user selects the viewGame method, they are prompted with which game they'd like to select.
        //The if statement makes sure that the submission is between -1 and the total length of the video games array.
        //Then it assigns the selectedGame constructor thing to the game the user entered.
        let index = prompt('Enter the index of the game you wish to view:');
        if (index > -1 && index < this.videoGames.length) {
            this.selectedGame = this.videoGames[index];
        }
        let description = 'Game: ' + this.selectedGame.name + '\n' + 'Hours: ' + this.selectedGame.hoursPlayed + '\n';
        /*After setting the description varible to whichever game the user selected, we show the user a new menu with a description of the selected game and the option to change
        either the name or the amount of hours they have in it.*/
        let selection = this.showGameMenu(description);
        switch (selection) {
            case '1':
                this.changeNameOfGame();
                break;
            case '2':
                this.changeHoursOfGame();
        }
    }

    removeGame() {
        //When the user wants to remove a game, I ask the user for the index of that game. Then I make sure that the submission was a number.
        let index = prompt('Enter the index of the game you wish to remove from the list: ')
        while(isNaN(index)) {
            index = parseInt(prompt('This submission was not a valid index. Please resubmit which game you would like to remove from the list.'));
        }
        //Next I use an if statement to make sure the index variable was set to something within the array and I splice whichever option they chose. I then alert them.
        if (index > -1 && index < this.videoGames.length) {
            this.videoGames.splice(index, 1);
            alert(`You have removed the game from the list`);
        }
    }

    displayGames() {
        //To display the games array, I set the gameString variable to empty first. then I use a for loop to add each game and their hours played to the string.
        //I then alert the user with the game string.
        let gameString = '';
        for (let i = 0; i < this.videoGames.length; i++) {
            gameString += i + ') ' + this.videoGames[i].name + '\n' + this.videoGames[i].hoursPlayed + ' Hours' + '\n'
        }
        alert(gameString);
    }

    showGameMenu(description) {
        //This is the menu used in the viewGame method. I use a template literal in order to fit the description that I passed in.
        return prompt(`
        _________________
        0) Back
        1) Change Name
        2) Change Hours
        _________________
        ${description}`);
    }

    changeNameOfGame() {
        //I assign the variable newName to whatever the user enters. Then I set the name of the selected game to that variable.
        let newName = prompt('What would you like to rename this game?');
        this.selectedGame.name = newName;
        }

    changeHoursOfGame() {
        //I assign the newHours variable to whatever the user entered, then I set the hoursPlayed of the selectedGame to that variable.
        let newHours = prompt('How many hours do you have in this game?');
        this.selectedGame.hoursPlayed = newHours;
    }
}
//I set the "menu" variable to a new instance of the menu class and then call the start method to begin my app.
let menu = new Menu();
menu.start();
