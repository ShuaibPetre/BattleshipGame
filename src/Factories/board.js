const DOMstuff = require("../DOMstuff")
const ship = require("./shipyard")
const gridsquare = require("./squares")
const fire = require(`../assets/Sounds/fire_shot.mp3`).default
const hit = require(`../assets/Sounds/shot_hit.mp3`).default
const miss = require(`../assets/Sounds/shot_miss.mp3`).default

class Gameboard {
    constructor(player) {
    this.board = []
    this.ships = []
    this.player = player
    }

    initialiseboard() {
        //let value = { hasShip: false, isShot: false, shiprow: null, shipcolumn: null }
        let rows = 10
        let board = []
        let columns = 10
        let id = 0
        for (let i = 0; i < rows; i++) {
            board[i] = []
            for (let j = 0; j < columns; j++) {
                let square = new gridsquare
                square.id = id
                board[i].push(square);
                id++
                }
            }
            return this.board = board
        }

    addShip = (row , column, lengths, direction) => {
        if (this.checkmove(row,column,lengths,direction) === false) return alert('wrong move')

        let thisShip = new ship(lengths)
        thisShip.shiprow = row
        thisShip.shipcolumn = column
        this.ships.push(thisShip)
        if (direction === 'horizontal') {
            for (let i = 1; i < lengths; i++) { 
                this.board[row][column+i].hasShip = true
                this.board[row][column+i].shiprow = row
                this.board[row][column+i].shipcolumn = column
            }
        }
        else if (direction === 'vertical') {
            //change this to value same as top
            for (let i = 1; i < lengths; i++) {
                this.board[row+i][column].hasShip = true  
                this.board[row+i][column].shiprow = row
                this.board[row+i][column].shipcolumn = column      
            }
        }
        this.board[row][column] = thisShip
    }
    timeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async recieveAttack(row,column, player) {
        if (this.board[row][column].isShot === true) return false
        this.board[row][column].isShot = true
        //this.playsound(fire)
        let shoo = new Audio(fire)
        shoo.play();
        if (this.board[row][column].hasShip === true) {
            let shiprow = this.board[row][column].shiprow
            let shipcolumn = this.board[row][column].shipcolumn
            this.board[shiprow][shipcolumn].hit(); 
            DOMstuff.infodiv("it's a hit!", player)
            await this.timeout(1200)
            let hit1 = new Audio(hit)
            hit1.play()
        } else {
            DOMstuff.infodiv('misses', player)
            await this.timeout(1200)
            let miss1 = new Audio(miss)
            miss1.play();
        }
    }

    checkmove(row, column, length, direction) {
        for (let i = 0; i < length; i++) {
            if (direction === "horizontal") {

                if (this.board[row][column+i] == undefined || this.board[row][column+i].hasShip === true) {
                    return false
                }
            } else if (direction === "vertical") {
                if (this.board[row+i] == undefined || this.board[row+i][column].hasShip === true) {
                        return false
                    }
            }
        }
        return true
    }

    checklose() {
        let a = this.ships
        for (let i = 0; i <= a.length -1; i++) {
            if (a[i].sunk === false) return false
        }
        return true
    }
}

module.exports = Gameboard