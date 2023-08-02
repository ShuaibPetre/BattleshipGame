const ship = require("./Factories/shipyard")
const Gameboard = require("./Factories/board")
const player = require('./Factories/players');
const DOMtool = require("./DOMstuff");

function GameController() {
    let players = []
    let player1;
    let cpu;
    let lastHit = null
    
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
    }
    
    const addplayership = (row,column,length,direction) => {
        player1.gameboard.addShip(row,column,length,direction)
    }
    const addcpuship = (row,column,length,direction) => {
        cpu.gameboard.addShip(row,column,length,direction)
    }

    const playRound = (e) => {
        cpu.gameboard.recieveAttack(e.target.dataset.row, e.target.dataset.column)
        rendercpuboard();
        cpuattack();
        renderplayerboard();
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
        e.target.appendChild(draggable);
        addshiptoboard(draggable, e.target)
        // display the draggable element
        draggable.classList.remove('hide');
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
    const addshiptoboard = (item, target) => {
        // console.log(item)
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
        player1.gameboard.addShip(row,column,length,getdirection()) 
        player1.gameboard.board[row][column].shipsrc = item
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
    // const calculatedattack = (row,column) => {
    //     //check left hits
    //     console.log(player1.gameboard.board[row][column])
    //     if (player1.gameboard.board[row][column+1] !== undefined) 
    //     {
    //         if (player1.gameboard.board[row][column+1].isShot === false && player1.gameboard.board[row][column+1].hasShip === false) {
    //             continue
    //         }
    //         if (player1.gameboard.board[row][column+1].isShot === false && player1.gameboard.board[row][column+1].hasShip === true) return player1.gameboard.recieveAttack(row,column+1)
    //         else if (player1.gameboard.board[row][column+1].isShot === true && player1.gameboard.board[row][column+1].hasShip === true && column < 9) {
    //             calculatedattack(row, column+1)
    //         }
    //     }
    //     //check right hits
    //     if (player1.gameboard.board[row][column-1] !== undefined)
    //     {
    //         if (player1.gameboard.board[row][column-1].isShot === false && player1.gameboard.board[row][column-1].hasShip === true) return player1.gameboard.recieveAttack(row,column-1)
    //         else if (player1.gameboard.board[row][column-1].isShot === true && player1.gameboard.board[row][column-1].hasShip === true && column > 0) {
    //             calculatedattack(row, column-1)
    //         }
    //     }
    //     //go down
    //     if  (player1.gameboard.board[row-1][column] !== undefined) 
    //     {
    //         if (player1.gameboard.board[row-1][column].isShot === false && player1.gameboard.board[row][column-1].hasShip === true) return player1.gameboard.recieveAttack(row-1,column)
    //         else if (player1.gameboard.board[row-1][column].isShot === true && player1.gameboard.board[row-1][column].hasShip === true && row > 0) {
    //             calculatedattack(row-1, column);
    //         }
    //     }
    //     //go up
    //     if (player1.gameboard.board[row+1][column] !== undefined) 
    //     {
    //         if (player1.gameboard.board[row+1][column].isShot === false && player1.gameboard.board[row][column-1].hasShip === true) return player1.gameboard.recieveAttack(row+1,column)
    //         else if (player1.gameboard.board[row+1][column].isShot === true && player1.gameboard.board[row+1][column].hasShip === true && row < 9) {
    //             calculatedattack(row+1, column);
    //         }
    //     }
    //     //reset
    //     else {
    //         lastHit = null
    //         randomattack();
    //     }
    // }
    // const checkright = (row,column) => {};
    // const checkleft = (row,column) => {}
    // const checkup = (row,column) => {}
    // const checkdown = (row,column) => {}

    const randomattack = () => {
        const row = Math.floor(Math.random() * 9);
        const column = Math.floor(Math.random() * 9);
        
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

    return {beginGame, getplayerboard, getplayer, playRound, addplayership, addcpuship, getcpuboard, cpuattack,
    randomattack, getlastHit, addbuttons}
}

module.exports = GameController()