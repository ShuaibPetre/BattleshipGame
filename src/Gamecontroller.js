const ship = require("./Factories/shipyard")
const Gameboard = require("./Factories/board")
const player = require('./Factories/players');
const DOMtool = require("./DOMstuff");

function GameController() {
    let players = []
    let player1;
    let cpu;
    let lastHit = null
    let cpuships = [2,3,3,4,5]

    
    const beginGame = () => {
        player1 = new player('playername')
        cpu = new player('cpu')
        
        player1.gameboard = new Gameboard('player1');
        player1.gameboard.initialiseboard();
        cpu.gameboard = new Gameboard('cpu');
        cpu.gameboard.initialiseboard();

        players.push(player1);
        players.push(cpu);
        DOMtool.initialLoad();
        
        renderplayerboard();
        rendercpuboard();
        addbuttons();
        setships();
        addcpuships();
    }
    
    async function playRound (e) {
        cpu.gameboard.recieveAttack(e.target.dataset.row, e.target.dataset.column);
        await timeout(2000);

        rendercpuboard();
        if (cpu.gameboard.checklose() === true) alert('player win!');
        cpuattack();
        await timeout(1500);

        renderplayerboard();
        //move this back to game board, make the addhit function async then awa like this
        if (player1.gameboard.checklose() === true) alert('player lose');
    }

    const cpuattack = () => {
        if(lastHit !== null)
        {
            if(lastHit.hasShip === false) 
                {
                randomattack();
                }        
            else 
                {
                calculatedattack(lastHit.rowvalue, lastHit.columnvalue);
                }
        }
        else 
        {
            randomattack()
        }
    }

    const addbuttons = () => {
        let playersquare = document.querySelectorAll('.playersquare')
        let i = 0
        playersquare.forEach(
            function(node) {
              node.id = i;
              node.addEventListener('dragenter', dragEnter);
              node.addEventListener('dragover', dragOver);
              node.addEventListener('dragleave', dragLeave);
              node.addEventListener('drop', drop);
              i++
            }
          );
        let cpusquare = document.querySelectorAll('.cpusquare')
        let j = 0
        cpusquare.forEach(
            function(node) {
                node.addEventListener('click', playRound);
                j++
        })
    }

    const setships = () => {
        const shipdirection = document.querySelector('#shipdirection')
        shipdirection.addEventListener("click",changedirection)
        const ship1 = document.querySelector('#ship1')
        ship1.addEventListener("dragstart",dragStart)
        const ship2 = document.querySelector('#ship2')
        ship2.addEventListener("dragstart",dragStart)
        const ship3 = document.querySelector('#ship3')
        ship3.addEventListener("dragstart",dragStart)
        const ship4 = document.querySelector('#ship4')
        ship4.addEventListener("dragstart",dragStart)
        const ship5 = document.querySelector('#ship5')
        ship5.addEventListener("dragstart",dragStart)
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);}

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    
    function drop(e) {
        e.target.classList.remove('drag-over');
        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        // add it to the drop target
        if (addshiptoboard(draggable, e.target) === false) return alert('invalid move, try again')
        e.target.appendChild(draggable);
        
        // display the draggable element
        draggable.classList.remove('hide');
        draggable.setAttribute("draggable", false)
    }
    const changedirection = (e) => {
        if (e.target.value === "horizontal") 
        {
            e.target.value = "vertical";
            changeships();
        }
        else
        {
            e.target.value = "horizontal";
            changeships();
        }
    }
    const getdirection = () => {
        return document.querySelector('#shipdirection').value
    }
    const changeships = () => {
        let thisdirection = 'none'
        if (getdirection() === 'vertical') thisdirection = 'rotate(90deg)'
        let shipimgs = document.querySelector('#shipdiv').getElementsByTagName('img');
        for(var i = 0; i < shipimgs .length; i++) {
        console.log(shipimgs[i]);
        shipimgs[i].style.transform = thisdirection;
        }
    }
    const timeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const addshiptoboard = (item, target) => {
        // console.log(target)
        const arrOfStrs = Array.from(String(target.id));
        //const arrOfNums = arrOfStrs.map((str) => Number(str));
        let row = Number(arrOfStrs[0]);
        let column = Number(arrOfStrs[1])
        if (target.id < 10) {
            row = 0
            column = Number(arrOfStrs[0])
        }
        let length = item.value
        if (player1.gameboard.checkmove(row,column,length,getdirection()) === false) return false

        player1.gameboard.addShip(row,column,length,getdirection()) 
        player1.gameboard.board[row][column].shipsrc = item
        renderplayerboard();
        addbuttons();
        return true
    }
    const getrandomnumber = () => {
        return Math.floor(Math.random() * 10)
    }
    const randomdirection = () => {
        let number = getrandomnumber()
        if (number < 5) return "horizontal"
        else return "vertical"
    }
    const addcpuships = () => {
        if (cpuships.length == 0) {
            rendercpuboard();
            console.log(cpu.gameboard.board)
            return 
        }
        let row = getrandomnumber();
        let column = getrandomnumber();
        let length = cpuships[0];
        let direction = randomdirection();
        if (cpu.gameboard.checkmove(row,column,length,direction) === false) return addcpuships();
        console.log(row,column,length,direction)
        rendercpuboard();
        if (cpu.gameboard.addShip(row,column,length,direction) === false) {
            console.log(cpu.gameboard.board)
            return addcpuships();
        }
        cpuships.shift();
        console.log(cpuships)
        return addcpuships();
    }
    const renderplayerboard = () => {
        let playerboard = document.querySelector('#playerboard');
        playerboard.replaceChildren(DOMtool.renderboard(player1.gameboard))
    }

    const rendercpuboard = () => {
        let cpuboard = document.querySelector('#cpuboard')
        cpuboard.replaceChildren(DOMtool.renderboard(cpu.gameboard))
        addbuttons();
    }
    const calculatedattack = (row,column) => {
        if (checkleft(row,column) == 'a') return
        
        else if (checkright(row,column) == 'a') return
        
        else if (checkdown(row,column) == 'a') return

        else if (checkup(row,column) === 'a') return
        
        else {
            console.log('the end');
            lastHit = null
            randomattack();
            }
        }

    const checkright = (oldrow,oldcolumn) => {
        console.log('rightcheck')
        let row = oldrow
        let column = oldcolumn
        if (player1.gameboard.board[row][column+1] === undefined) return 'c'

        else if (player1.gameboard.board[row][column+1] !== undefined) 
        {
            if (player1.gameboard.board[row][column+1].isShot === false && player1.gameboard.board[row][column+1].hasShip === true) { 
                player1.gameboard.recieveAttack(row,column+1)
                return 'a'
            } else if (column < 9 && player1.gameboard.board[row][column+1].isShot === true && player1.gameboard.board[row][column+1].hasShip === true) {
                return checkright(row, column+1)
            }
            else if (player1.gameboard.board[row][column+1].hasShip === false) {
                return 'l'
            }
            else return 'c_1'            
        }
        else return 'r'
    };
    const checkleft = (oldrow,oldcolumn) => {
        //check left hits
        console.log('leftcheck')
        let row = oldrow
        let column = oldcolumn
        if (player1.gameboard.board[row][column-1] === undefined) return 'b'
        else if (player1.gameboard.board[row][column-1] !== undefined) 
        {
            if (player1.gameboard.board[row][column-1].isShot === false && player1.gameboard.board[row][column-1].hasShip === true) {
                player1.gameboard.recieveAttack(row,column-1) 
                return 'a'
            } else if (column < 9 && player1.gameboard.board[row][column-1].isShot === true && player1.gameboard.board[row][column-1].hasShip === true) {
                return checkleft(row, column-1)
            }
            else if (player1.gameboard.board[row][column-1].hasShip === false) {
                return 'l'
            } else return 'b_1'
        }
        else return 'r'
    }
    
    const checkup = (oldrow,oldcolumn) => {
        //go up
        console.log('upcheck')
        let row = oldrow
        let column = oldcolumn
        if (player1.gameboard.board[row+1] === undefined) return 'd'

        else if (player1.gameboard.board[row+1] !== undefined) {
            if (player1.gameboard.board[row+1][column].isShot === false && player1.gameboard.board[row+1][column].hasShip === true) {
                player1.gameboard.recieveAttack(row+1,column)
                return 'a'
            } else if (row < 9 && player1.gameboard.board[row+1][column].isShot === true && player1.gameboard.board[row+1][column].hasShip === true) {
                return checkup(row+1, column);
            } else if (player1.gameboard.board[row+1][column].hasShip === false) {
                    return 'l'
            } else return 'd_1'
            }
            else return 'r'
        }
    const checkdown = (oldrow,oldcolumn) => {
        console.log('downcheck')
        let row = oldrow
        let column = oldcolumn
        if  (player1.gameboard.board[row-1] === undefined) return 'e'
        else if  (player1.gameboard.board[row-1] !== undefined) {
            if (player1.gameboard.board[row-1][column].isShot === false && player1.gameboard.board[row-1][column].hasShip === true) {
                player1.gameboard.recieveAttack(row-1,column)
                console.log(player1.gameboard.board[row-1][column])
                return 'a'
            } else if (row > 0 && player1.gameboard.board[row-1][column].isShot === true && player1.gameboard.board[row-1][column].hasShip === true) {
                return checkdown(row-1, column);
            } else if (player1.gameboard.board[row-1][column].hasShip === false) {
                return 'l'
            }
            else return 'e_1'
        }
        else return 'r'
    }

    const randomattack = () => {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);
        
        if (player1.gameboard.board[row][column].isShot === true) {
            randomattack();
        }
        player1.gameboard.recieveAttack(row,column);
        lastHit = player1.gameboard.board[row][column]
        lastHit.rowvalue = row;
        lastHit.columnvalue = column;
    }

    const getlastHit = () => lastHit
    const getplayer = () => player1
    const getplayerboard = () => player1.gameboard.board
    const getcpuboard = () => cpu.gameboard.board

    const getActivePlayer = () => activePlayer;

    return {beginGame, getplayerboard, getplayer, playRound, getcpuboard, cpuattack,
    randomattack, getlastHit, addbuttons}
}

module.exports = GameController()