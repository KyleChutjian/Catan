// Keeps track of the deck and communicates with player.js

const RESOURCE_TYPE = ["Wood", "Brick", "Wheat", "Sheep", "Stone"] // i forgot why this is a thing
const WOOD = 0, BRICK = 1, WHEAT = 2, SHEEP = 3, STONE = 4
var resourceAmount = [19, 19, 19, 19, 19]

class Cards {
    constructor(cards) {
        // console.log(resource_amount[WHEAT])
    }
}

function resetDeck() {
    resourceAmount = [19, 19, 19, 19, 19]
}

function changeResource(type, amount) {
    if (resourceAmount[type] - amount < 0) {
        return false
    } else {
        resourceAmount[type] -= amount
    }
}