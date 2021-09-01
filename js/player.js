// Keeps track of individual player stats

const RESOURCE_TYPE = ["Wood", "Brick", "Wheat", "Sheep", "Stone"]
const WOOD = 0, BRICK = 1, WHEAT = 2, SHEEP = 3, STONE = 4
var resourceAmount = [0, 0, 0, 0, 0]
var devAmount = [0, 0, 0, 0, 0]
var playedKnights = 0
var woodHarbor = false
var brickHarbor = false
var wheatHarbor = false
var sheepHarbor = false
var stoneHarbor = false
var threeHarbor = false
var largestArmy = false
var longestRoad = false
var totalVictoryPoints = 0

function deck() {
    return resourceAmount
}

function getTotalCards() {
    return resourceAmount[WOOD] + 
    resourceAmount[BRICK] + 
    resourceAmount[WHEAT] + 
    resourceAmount[SHEEP] +
    resourceAmount[STONE]
}

function checkCardLimit() {
    if (getTotalCards <= 7) return 0
    else {
        return getTotalCards / 2
    }
}