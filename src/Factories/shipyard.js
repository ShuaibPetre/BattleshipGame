class ship {
    constructor (length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false
        this.hasShip = true 
        this.isShot = false
        this.isShip = true
        this.shiprow = null
        this.shipcolumn = null
        this.shipsrc = null
    }
    hit() {
        this.hits += 1;
        this.IsSunkFunc();
    }
    IsSunkFunc() {
        if (this.hits === this.length) {
            this.sunk = true
        }
    }
    }

module.exports = ship;