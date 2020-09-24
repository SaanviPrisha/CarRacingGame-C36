class Game {
    constructor() {

    }
    getGameState() {
        var countRef = database.ref("gameState")
        countRef.on("value", function(data) {
            gameState = data.val()
        })
    }
    //updates the number of the player count
    updateGameState(State) {
        database.ref("/").update({
            gameState: State
        })
    }
    start() {
        if(gameState == 0) {
            player = new Player()
            player.getCount()

            form = new Form()
            form.display();
        }
    }
    play() {
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers != undefined) {
            var yPosition = 130
            for(var plr in allPlayers) {
                if(plr == "player" + player.index) {
                    fill("purple")
                } else {
                    fill("blue")
                }
                yPosition = yPosition + 30;
                textSize(20)
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, yPosition)
            }
        }
        if(keyDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance + 20;
            player.update()
        }
    }
}