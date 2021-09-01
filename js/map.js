import Tile from "./tile.js"

var resources = ["Desert", "Wood", "Wood", "Wood", "Wood", "Brick", "Brick", "Brick", "Wheat", "Wheat", "Wheat", "Wheat", "Sheep", "Sheep", "Sheep", "Sheep", "Stone", "Stone", "Stone"]
var positions = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]
var numbers = [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
var map = [Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile]
const desertImage = "images/tiles/desert_tile.png"
const woodImage = "images/tiles/wood_tile.png"
const brickImage = "images/tiles/brick_tile.png"
const wheatImage = "images/tiles/wheat_tile.png"
const sheepImage = "images/tiles/sheep_placeholder_tile.png"
const stoneImage = "images/tiles/stone_tile.png"
const waterImage = "images/tiles/water_tile.png"

function randomize() {
    resources.sort(() => Math.random() - 0.5)
    numbers.sort(() => Math.random() - 0.5)
}
randomize()

function create_map() {
    positions.forEach(position => {
        if (resources[position] == "Desert") {
            map[position] = new Tile(position, "Desert", 0)
        }
         else {
            var current_number = numbers.pop()
            map[position] = new Tile(position,resources[position], current_number)
         }
        var currentTile = document.getElementById("resource" + position)
        currentTile.addEventListener("click", onTileClick(map[position]))
        console.log(map[position].toString)
        }
    )
}
create_map()

function onTileClick(Tile) {
    console.log(Tile.getPosition)
}


function set_map_tile() {
    map.forEach(index => {
        document.getElementById("resource" + index.getPosition).innerHTML = index.getResource
        document.getElementById("number" + index.getPosition).innerHTML = index.getNumber
        
        switch(index.getResource) {
            case "Desert":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + desertImage + ")"
                break
            case "Wood":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + woodImage + ")"
                break
            case "Brick":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + brickImage + ")"
                break
            case "Wheat":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + wheatImage + ")"
                break
            case "Sheep":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + sheepImage + ")"
                break
            case "Stone":
                document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + stoneImage + ")"
        }
        // switch(index.getPosition) {
        //     default:
        //         document.getElementById("tile" + index.getPosition).style.backgroundImage = "url(" + stoneImage + ")"
        // }


    })
    // Use this when resource images are done:
    // var image = document.getElementById("image")
    // image.src = "images/catan.png"

}
set_map_tile()
// console.log(Tile.getVertices(0))
console.log("Done!")