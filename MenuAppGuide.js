//This is my menu app for week 5.
//It must include: 1 array, 2 classes, and the ability to create, view, and delete elements
//First I'm going to go over his code and see if I can understand every single line. Then I'll build my menu with hopefully a better understanding


//The player class is just so we can create a player with a name and a position and then have a method that describes that player.

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

//The team class takes just the team name.
//Note that he put the array in the constructor. Each time he creates a team, he creates an array that holds the players.

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
 //The he creates a method to add existing players to a team. He makes sure that when you pass in player, it's an actual instance of the Player class.
 //Which means we'll have to create the player elsewhere (most likely with a method in the menu class).
    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

//Finally, we create the menu class. This is where we actually allow the user to make the decisions and use the two classes above.

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    displayTeams() {
        let teamString = '';
    }
}