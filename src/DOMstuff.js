const Gameboard = require("./Factories/board");
const GameController = require("./Gamecontroller");
const img = require('./assets/ship2.png')
const img2 = require('./assets/ship(3).png')
const img3 = require('./assets/ship(3.2).png')
const img4 = require('./assets/ship(4).png')
const img5 = require('./assets/ship(5).png')

function DOMtool() {
    const initialLoad = () => {
        let container = document.createElement('div');
        let header = document.createElement('div');
        let heading = document.createElement('h1');
        let description = document.createElement('div');
        let main = document.createElement('div');
        let leftside = document.createElement('div');
        let playerboardname = document.createElement('div');
        let playerboard = document.createElement('div');
        let rightside = document.createElement('div');
        let cpuboardname = document.createElement('div');
        let cpuboard = document.createElement('div');
        let shipdiv = document.createElement('div');
        let shiptitle = document.createElement('div')
        let shipdirection = document.createElement("BUTTON");
        let ship1 = document.createElement("img");
        let ship2 = document.createElement('img');
        let ship3 = document.createElement('img');
        let ship4 = document.createElement('img');
        let ship5 = document.createElement('img');

        ship1.src = img
        ship2.src = img3
        ship3.src = img2
        ship4.src = img4
        ship5.src = img5
        
        container.setAttribute("id","container")

        header.setAttribute("id", "header");
        heading.setAttribute("id", "heading");
        heading.textContent = 'BATTLESHIP'
        description.setAttribute("id", "description");

        main.setAttribute("id","main")
        leftside.setAttribute("id","leftside")
        playerboardname.setAttribute("id","playerboardname");
        playerboardname.textContent = 'YOUR BOARD'
        playerboard.setAttribute("id","playerboard")

        rightside.setAttribute("id","rightside")
        rightside.setAttribute("id","hide")
        cpuboardname.setAttribute("id","cpuboardname");
        cpuboardname.textContent = 'ENEMY BOARD';
        cpuboard.setAttribute("id","cpuboard")

        shipdiv.setAttribute("id","shipdiv");
        shiptitle.setAttribute("id","shiptitle");
        shiptitle.textContent = "Place your ships (drag and drop)"
        shipdirection.setAttribute("id","shipdirection");
        shipdirection.value = 'horizontal'

        ship1.setAttribute("draggable","true")
        ship1.value = 2
        ship2.setAttribute("draggable","true")
        ship2.value = 3
        ship3.setAttribute("draggable","true")
        ship3.value = 3
        ship4.setAttribute("draggable","true")
        ship4.value = 4
        ship5.setAttribute("draggable","true")
        ship5.value = 5

        ship1.setAttribute("id","ship1");
        ship1.classList.add('ship')
        ship2.setAttribute("id","ship2");
        ship2.classList.add('ship')
        ship3.setAttribute("id","ship3");
        ship3.classList.add('ship')
        ship4.setAttribute("id","ship4");
        ship4.classList.add('ship')
        ship5.setAttribute("id","ship5");
        ship5.classList.add('ship')

        header.appendChild(heading);
        header.appendChild(description)
        main.appendChild(leftside);
        main.appendChild(rightside);
        leftside.appendChild(playerboardname);
        leftside.appendChild(playerboard)
        rightside.appendChild(cpuboardname);
        rightside.appendChild(cpuboard)
        shipdiv.appendChild(shiptitle)
        shipdiv.appendChild(shipdirection)
        shipdiv.appendChild(ship1);
        shipdiv.appendChild(ship2);
        shipdiv.appendChild(ship3);
        shipdiv.appendChild(ship4);
        shipdiv.appendChild(ship5);
        main.appendChild(shipdiv)
        container.appendChild(header)
        container.appendChild(main)
        document.body.replaceChildren(container)
    }
    
    const renderboard = (board) => {
        let grid = document.createElement('div')
        grid.setAttribute("class","board");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let square = document.createElement('div')
                square.classList.add('gridsquare')
                square.dataset.row = i
                square.dataset.column = j
                if (board.board[i][j].isShot === true && board.board[i][j].hasShip === true) square.classList.add('hit')
                else if (board.board[i][j].isShot === true && board.board[i][j].hasShip === false) square.classList.add('miss')
                // cpu board
                if (board.player !== 'cpu') {
                    if (board.board[i][j].hasShip !== false) {
                        square.classList.add('shipsquare')
                        }
                    square.classList.add('playersquare')
                    if (board.board[i][j].isShip === true)
                    {
                        //const image = new Image()
                        const image = board.board[i][j].shipsrc
                        square.appendChild(image)
                        
                    } 
                }
                if (board.player === 'cpu' && board.board[i][j].isShot === false) {
                    square.classList.add('cpusquare')
                    if(board.board[i][j].hasShip === true) square.classList.add('cpushipsquare')
                }

                grid.appendChild(square)
        }}
        return grid
    }

    const infodiv = (outcome,player) => {
        document.querySelector('#description').textContent = '';
        let text = player + ' fires a shot and... ' + outcome;
        let txt = outcome
        var i = 0;
        var speed = 70;
        typeWriter(text);
        function typeWriter() {
            if (i < text.length) {
              document.getElementById("description").innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }
    }
    function gameOverWin() {
        let container = document.querySelector('#container');
        let div = document.createElement('div');
        let gameoverheading = document.createElement('div');
        let button = document.createElement('div');
        gameoverheading.textContent = 'YOU WIN!'
        button.setAttribute('id','restart')
        button.textContent = "Replay";
        gameoverheading.setAttribute('id','gameoverheading');

        div.setAttribute('id','gameoverdiv');
        div.appendChild(gameoverheading)
        div.appendChild(button)
        container.appendChild(div)
    }
    function gameOverLose() {
        let container = document.querySelector('#container');
        let div = document.createElement('div');
        let gameoverheading = document.createElement('div');
        let button = document.createElement('div');
        gameoverheading.textContent = 'YOU LOSE'
        button.setAttribute('id','restart');
        button.textContent = "Replay";
        gameoverheading.setAttribute('id','gameoverheading');
        div.setAttribute('id','gameoverlose');
        div.appendChild(gameoverheading)
        div.appendChild(button)
        container.appendChild(div)
    }

    function startScreen() {
        let div = document.createElement('div');
        let gameoverheading = document.createElement('div');
        let button = document.createElement('div');
        gameoverheading.textContent = 'BATTLESHIP'
        button.setAttribute('id','restart');
        button.textContent = "Start";
        gameoverheading.setAttribute('id','gameoverheading');
        div.setAttribute('id','startscreen');
        div.appendChild(gameoverheading)
        div.appendChild(button)
        document.body.appendChild(div)
    }
    return {initialLoad, renderboard, infodiv, gameOverWin, gameOverLose, startScreen}
}

module.exports = DOMtool()