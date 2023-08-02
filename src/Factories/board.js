const ship = require("./shipyard")
const gridsquare = require("./squares")

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
        if (this.checkmove() === false) return false
        let thisShip = new ship(lengths)
        thisShip.shiprow = row
        thisShip.shipcolumn = column
        this.ships.push(thisShip)
        if (direction === 'horizontal') {
            for (let i = 0; i < lengths; i++) { 
                this.board[row][column+i].hasShip = true
                this.board[row][column+i].shiprow = row
                this.board[row][column+i].shipcolumn = column
            }
        }
        else if (direction === 'vertical') {
            //change this to value same as top
            for (let i = 0; i < lengths; i++) {
                this.board[row + i][column].hasShip = true  
                this.board[row + i][column].shiprow = row
                this.board[row + i][column].shipcolumn = column      
            }
        }
        this.board[row][column] = thisShip
    }

    recieveAttack(row,column) {
        if (this.board[row][column].isShot === true) return false
        this.board[row][column].isShot = true

        if (this.board[row][column].hasShip === true) {
        let shiprow = this.board[row][column].shiprow
        let shipcolumn = this.board[row][column].shipcolumn
        this.board[shiprow][shipcolumn].hit(); 
        }
    }

    checkmove(row, column, length) {
        for (let i = 0; i < Number(length); i++) {
            if (this.board[row][column+i].hasShip === true) return false
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