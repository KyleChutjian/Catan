import settlements from "./settlements.js"

var position = null
var resource = null
var number = null
var robber = false
// var settlements = null



var players = [false, false, false, false] // True for every player that has a settlement
var possibleSettlements = [null, null, null, null, null, null] // Will be replaced with settlement indexes
var possibleRoads = [null, null, null, null, null, null] // Will be replaced with road indexes



export default class Tile {
    constructor(position, resource, number) {
        this.position = position
        this.resource = resource
        this.number = number
        // settlements = new settlements();
    }
    get toString() {
        return this.position + ", " + this.resource + ", " + this.number
    }
    get getResource() {
        return this.resource
    }
    get getPosition() {
        return this.position
    }
    get getNumber() {
        return this.number
    }
    set setPlayer(playerNumber) {
        players[playerNumber] = true
    }
    
}