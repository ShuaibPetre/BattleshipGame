(self["webpackChunkbattleships"] = self["webpackChunkbattleships"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./Factories/board */ "./src/Factories/board.js");
const GameController = __webpack_require__(/*! ./Gamecontroller */ "./src/Gamecontroller.js");
const img = __webpack_require__(/*! ./assets/ship2.png */ "./src/assets/ship2.png");
const img2 = __webpack_require__(/*! ./assets/ship(3).png */ "./src/assets/ship(3).png");
const img3 = __webpack_require__(/*! ./assets/ship(3.2).png */ "./src/assets/ship(3.2).png");
const img4 = __webpack_require__(/*! ./assets/ship(4).png */ "./src/assets/ship(4).png");
const img5 = __webpack_require__(/*! ./assets/ship(5).png */ "./src/assets/ship(5).png");
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
    let shiptitle = document.createElement('div');
    let shipdirection = document.createElement("BUTTON");
    let ship1 = document.createElement("img");
    let ship2 = document.createElement('img');
    let ship3 = document.createElement('img');
    let ship4 = document.createElement('img');
    let ship5 = document.createElement('img');
    ship1.src = img;
    ship2.src = img3;
    ship3.src = img2;
    ship4.src = img4;
    ship5.src = img5;
    container.setAttribute("id", "container");
    header.setAttribute("id", "header");
    heading.setAttribute("id", "heading");
    heading.textContent = 'BATTLESHIP';
    description.setAttribute("id", "description");
    main.setAttribute("id", "main");
    leftside.setAttribute("id", "leftside");
    playerboardname.setAttribute("id", "playerboardname");
    playerboardname.textContent = 'YOUR BOARD';
    playerboard.setAttribute("id", "playerboard");
    rightside.setAttribute("id", "rightside");
    rightside.setAttribute("id", "hide");
    cpuboardname.setAttribute("id", "cpuboardname");
    cpuboardname.textContent = 'ENEMY BOARD';
    cpuboard.setAttribute("id", "cpuboard");
    shipdiv.setAttribute("id", "shipdiv");
    shiptitle.setAttribute("id", "shiptitle");
    shiptitle.textContent = "Place your ships (drag and drop)";
    shipdirection.setAttribute("id", "shipdirection");
    shipdirection.value = 'horizontal';
    ship1.setAttribute("draggable", "true");
    ship1.value = 2;
    ship2.setAttribute("draggable", "true");
    ship2.value = 3;
    ship3.setAttribute("draggable", "true");
    ship3.value = 3;
    ship4.setAttribute("draggable", "true");
    ship4.value = 4;
    ship5.setAttribute("draggable", "true");
    ship5.value = 5;
    ship1.setAttribute("id", "ship1");
    ship1.classList.add('ship');
    ship2.setAttribute("id", "ship2");
    ship2.classList.add('ship');
    ship3.setAttribute("id", "ship3");
    ship3.classList.add('ship');
    ship4.setAttribute("id", "ship4");
    ship4.classList.add('ship');
    ship5.setAttribute("id", "ship5");
    ship5.classList.add('ship');
    header.appendChild(heading);
    header.appendChild(description);
    main.appendChild(leftside);
    main.appendChild(rightside);
    leftside.appendChild(playerboardname);
    leftside.appendChild(playerboard);
    rightside.appendChild(cpuboardname);
    rightside.appendChild(cpuboard);
    shipdiv.appendChild(shiptitle);
    shipdiv.appendChild(shipdirection);
    shipdiv.appendChild(ship1);
    shipdiv.appendChild(ship2);
    shipdiv.appendChild(ship3);
    shipdiv.appendChild(ship4);
    shipdiv.appendChild(ship5);
    main.appendChild(shipdiv);
    container.appendChild(header);
    container.appendChild(main);
    document.body.replaceChildren(container);
  };
  const renderboard = board => {
    let grid = document.createElement('div');
    grid.setAttribute("class", "board");
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let square = document.createElement('div');
        square.classList.add('gridsquare');
        square.dataset.row = i;
        square.dataset.column = j;
        if (board.board[i][j].isShot === true && board.board[i][j].hasShip === true) square.classList.add('hit');else if (board.board[i][j].isShot === true && board.board[i][j].hasShip === false) square.classList.add('miss');
        // cpu board
        if (board.player !== 'cpu') {
          if (board.board[i][j].hasShip !== false) {
            square.classList.add('shipsquare');
          }
          square.classList.add('playersquare');
          if (board.board[i][j].isShip === true) {
            //const image = new Image()
            const image = board.board[i][j].shipsrc;
            square.appendChild(image);
          }
        }
        if (board.player === 'cpu' && board.board[i][j].isShot === false) {
          square.classList.add('cpusquare');
          if (board.board[i][j].hasShip === true) square.classList.add('cpushipsquare');
        }
        grid.appendChild(square);
      }
    }
    return grid;
  };
  const infodiv = (outcome, player) => {
    document.querySelector('#description').textContent = '';
    let text = player + ' fires a shot and... ' + outcome;
    let txt = outcome;
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
  };
  function gameOverWin() {
    let container = document.querySelector('#container');
    let div = document.createElement('div');
    let gameoverheading = document.createElement('div');
    let button = document.createElement('div');
    gameoverheading.textContent = 'YOU WIN!';
    button.setAttribute('id', 'restart');
    button.textContent = "Replay";
    gameoverheading.setAttribute('id', 'gameoverheading');
    div.setAttribute('id', 'gameoverdiv');
    div.appendChild(gameoverheading);
    div.appendChild(button);
    container.appendChild(div);
  }
  function gameOverLose() {
    let container = document.querySelector('#container');
    let div = document.createElement('div');
    let gameoverheading = document.createElement('div');
    let button = document.createElement('div');
    gameoverheading.textContent = 'YOU LOSE';
    button.setAttribute('id', 'restart');
    button.textContent = "Replay";
    gameoverheading.setAttribute('id', 'gameoverheading');
    div.setAttribute('id', 'gameoverlose');
    div.appendChild(gameoverheading);
    div.appendChild(button);
    container.appendChild(div);
  }
  function startScreen() {
    let div = document.createElement('div');
    let gameoverheading = document.createElement('div');
    let button = document.createElement('div');
    gameoverheading.textContent = 'BATTLESHIP';
    button.setAttribute('id', 'restart');
    button.textContent = "Start";
    gameoverheading.setAttribute('id', 'gameoverheading');
    div.setAttribute('id', 'startscreen');
    div.appendChild(gameoverheading);
    div.appendChild(button);
    document.body.appendChild(div);
  }
  return {
    initialLoad,
    renderboard,
    infodiv,
    gameOverWin,
    gameOverLose,
    startScreen
  };
}
module.exports = DOMtool();

/***/ }),

/***/ "./src/Factories/board.js":
/*!********************************!*\
  !*** ./src/Factories/board.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DOMstuff = __webpack_require__(/*! ../DOMstuff */ "./src/DOMstuff.js");
const ship = __webpack_require__(/*! ./shipyard */ "./src/Factories/shipyard.js");
const gridsquare = __webpack_require__(/*! ./squares */ "./src/Factories/squares.js");
const fire = __webpack_require__(/*! ../assets/Sounds/fire_shot.mp3 */ "./src/assets/Sounds/fire_shot.mp3");
const hit = __webpack_require__(/*! ../assets/Sounds/shot_hit.mp3 */ "./src/assets/Sounds/shot_hit.mp3");
const miss = __webpack_require__(/*! ../assets/Sounds/shot_miss.mp3 */ "./src/assets/Sounds/shot_miss.mp3");
class Gameboard {
  constructor(player) {
    this.board = [];
    this.ships = [];
    this.player = player;
  }
  initialiseboard() {
    //let value = { hasShip: false, isShot: false, shiprow: null, shipcolumn: null }
    let rows = 10;
    let board = [];
    let columns = 10;
    let id = 0;
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        let square = new gridsquare();
        square.id = id;
        board[i].push(square);
        id++;
      }
    }
    return this.board = board;
  }
  addShip = (row, column, lengths, direction) => {
    if (this.checkmove(row, column, lengths, direction) === false) return alert('wrong move');
    let thisShip = new ship(lengths);
    thisShip.shiprow = row;
    thisShip.shipcolumn = column;
    this.ships.push(thisShip);
    if (direction === 'horizontal') {
      for (let i = 1; i < lengths; i++) {
        this.board[row][column + i].hasShip = true;
        this.board[row][column + i].shiprow = row;
        this.board[row][column + i].shipcolumn = column;
      }
    } else if (direction === 'vertical') {
      //change this to value same as top
      for (let i = 1; i < lengths; i++) {
        this.board[row + i][column].hasShip = true;
        this.board[row + i][column].shiprow = row;
        this.board[row + i][column].shipcolumn = column;
      }
    }
    this.board[row][column] = thisShip;
  };
  timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  async recieveAttack(row, column, player) {
    if (this.board[row][column].isShot === true) return false;
    this.board[row][column].isShot = true;
    //this.playsound(fire)
    let shoo = new Audio(fire);
    shoo.play();
    if (this.board[row][column].hasShip === true) {
      let shiprow = this.board[row][column].shiprow;
      let shipcolumn = this.board[row][column].shipcolumn;
      this.board[shiprow][shipcolumn].hit();
      DOMstuff.infodiv("it's a hit!", player);
      await this.timeout(1200);
      let hit1 = new Audio(hit);
      hit1.play();
    } else {
      DOMstuff.infodiv('misses', player);
      await this.timeout(1200);
      let miss1 = new Audio(miss);
      miss1.play();
    }
  }
  checkmove(row, column, length, direction) {
    for (let i = 0; i < length; i++) {
      if (direction === "horizontal") {
        if (this.board[row][column + i] == undefined || this.board[row][column + i].hasShip === true) {
          return false;
        }
      } else if (direction === "vertical") {
        if (this.board[row + i] == undefined || this.board[row + i][column].hasShip === true) {
          return false;
        }
      }
    }
    return true;
  }
  checklose() {
    let a = this.ships;
    for (let i = 0; i <= a.length - 1; i++) {
      if (a[i].sunk === false) return false;
    }
    return true;
  }
}
module.exports = Gameboard;

/***/ }),

/***/ "./src/Factories/players.js":
/*!**********************************!*\
  !*** ./src/Factories/players.js ***!
  \**********************************/
/***/ ((module) => {

class player {
  constructor(name) {
    this.name = name;
    this.board = null;
  }
}
module.exports = player;

/***/ }),

/***/ "./src/Factories/shipyard.js":
/*!***********************************!*\
  !*** ./src/Factories/shipyard.js ***!
  \***********************************/
/***/ ((module) => {

class ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.hasShip = true;
    this.isShot = false;
    this.isShip = true;
    this.shiprow = null;
    this.shipcolumn = null;
    this.shipsrc = null;
  }
  hit() {
    this.hits += 1;
    this.IsSunkFunc();
  }
  IsSunkFunc() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}
module.exports = ship;

/***/ }),

/***/ "./src/Factories/squares.js":
/*!**********************************!*\
  !*** ./src/Factories/squares.js ***!
  \**********************************/
/***/ ((module) => {

class gridsquare {
  constructor() {
    this.hasShip = false;
    this.isShot = false;
    this.shiprow = null;
    this.shipcolumn = null;
    this.ship = null;
    this.rowvalue = null;
    this.columnvalue = null;
    this.id = null;
    this.image = null;
  }
}
module.exports = gridsquare;

/***/ }),

/***/ "./src/Gamecontroller.js":
/*!*******************************!*\
  !*** ./src/Gamecontroller.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./Factories/shipyard */ "./src/Factories/shipyard.js");
const Gameboard = __webpack_require__(/*! ./Factories/board */ "./src/Factories/board.js");
const player = __webpack_require__(/*! ./Factories/players */ "./src/Factories/players.js");
const DOMtool = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");
function GameController() {
  let players = [];
  let player1;
  let cpu;
  let lastHit = null;
  let cpuships = [2, 3, 3, 4, 5];
  function gameStart() {
    DOMtool.startScreen();
    let button = document.querySelector('#restart');
    button.addEventListener('click', restart);
  }
  const beginGame = () => {
    player1 = new player('playername');
    cpu = new player('cpu');
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
  };
  function restart() {
    beginGame();
  }
  async function playRound(e) {
    removebuttons();
    cpu.gameboard.recieveAttack(e.target.dataset.row, e.target.dataset.column, "Player");
    await timeout(1800);
    rendercpuboard();
    await timeout(1500);
    if (cpu.gameboard.checklose() === true) {
      DOMtool.gameOverWin();
      let button = document.querySelector('#restart');
      button.addEventListener('click', restart);
      return;
    }
    cpuattack();
    await timeout(1800);
    renderplayerboard();
    //move this back to game board, make the addhit function async then awa like this
    if (player1.gameboard.checklose() === true) {
      DOMtool.gameOverLose();
      let button = document.querySelector('#restart');
      button.addEventListener('click', restart);
      return;
    }
  }
  const cpuattack = () => {
    if (lastHit !== null) {
      if (lastHit.hasShip === false) {
        randomattack();
      } else {
        calculatedattack(lastHit.rowvalue, lastHit.columnvalue);
      }
    } else {
      randomattack();
    }
  };
  const addbuttons = () => {
    let playersquare = document.querySelectorAll('.playersquare');
    let i = 0;
    playersquare.forEach(function (node) {
      node.id = i;
      node.addEventListener('dragenter', dragEnter);
      node.addEventListener('dragover', dragOver);
      node.addEventListener('dragleave', dragLeave);
      node.addEventListener('drop', drop);
      i++;
    });
    let cpusquare = document.querySelectorAll('.cpusquare');
    let j = 0;
    cpusquare.forEach(function (node) {
      node.addEventListener('click', playRound);
      j++;
    });
  };
  function removebuttons() {
    let cpusquare = document.querySelectorAll('.cpusquare');
    let j = 0;
    cpusquare.forEach(function (node) {
      node.removeEventListener('click', playRound);
      j++;
    });
  }
  const setships = () => {
    const shipdirection = document.querySelector('#shipdirection');
    shipdirection.addEventListener("click", changedirection);
    const ship1 = document.querySelector('#ship1');
    ship1.addEventListener("dragstart", dragStart);
    const ship2 = document.querySelector('#ship2');
    ship2.addEventListener("dragstart", dragStart);
    const ship3 = document.querySelector('#ship3');
    ship3.addEventListener("dragstart", dragStart);
    const ship4 = document.querySelector('#ship4');
    ship4.addEventListener("dragstart", dragStart);
    const ship5 = document.querySelector('#ship5');
    ship5.addEventListener("dragstart", dragStart);
  };
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }
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
    if (addshiptoboard(draggable, e.target) === false) return alert('invalid move, try again');
    e.target.appendChild(draggable);
    renderplayerboard();
    addbuttons();
    // display the draggable element
    draggable.classList.remove('hide');
    draggable.setAttribute("draggable", false);
    checkshipdiv();
  }
  function checkshipdiv() {
    let shipdivimgs = document.querySelector('#shipdiv').getElementsByTagName('img');
    let shipdiv = document.querySelector('#shipdiv');
    let leftside = document.querySelector('#hide');
    if (shipdivimgs.length <= 0) {
      leftside.removeAttribute('id', 'hide');
      shipdiv.setAttribute('id', 'hide');
      leftside.setAttribute('id', 'leftside');
    }
  }
  const changedirection = e => {
    if (e.target.value === "horizontal") {
      e.target.value = "vertical";
      changeships();
    } else {
      e.target.value = "horizontal";
      changeships();
    }
  };
  const getdirection = () => {
    return document.querySelector('#shipdirection').value;
  };
  const changeships = () => {
    let thisdirection = 'none';
    if (getdirection() === 'vertical') thisdirection = 'rotate(90deg)';
    let shipimgs = document.querySelector('#shipdiv').getElementsByTagName('img');
    for (var i = 0; i < shipimgs.length; i++) {
      shipimgs[i].style.transform = thisdirection;
    }
  };
  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const addshiptoboard = (item, target) => {
    // console.log(target)
    const arrOfStrs = Array.from(String(target.id));
    //const arrOfNums = arrOfStrs.map((str) => Number(str));
    let row = Number(arrOfStrs[0]);
    let column = Number(arrOfStrs[1]);
    if (target.id < 10) {
      row = 0;
      column = Number(arrOfStrs[0]);
    }
    let length = item.value;
    if (player1.gameboard.checkmove(row, column, length, getdirection()) === false) return false;
    player1.gameboard.addShip(row, column, length, getdirection());
    player1.gameboard.board[row][column].shipsrc = item;
    renderplayerboard();
    addbuttons();
    return true;
  };
  const getrandomnumber = () => {
    return Math.floor(Math.random() * 10);
  };
  const randomdirection = () => {
    let number = getrandomnumber();
    if (number < 5) return "horizontal";else return "vertical";
  };
  const addcpuships = () => {
    if (cpuships.length == 0) {
      rendercpuboard();
      console.log(cpu.gameboard.board);
      return;
    }
    let row = getrandomnumber();
    let column = getrandomnumber();
    let length = cpuships[0];
    let direction = randomdirection();
    if (cpu.gameboard.checkmove(row, column, length, direction) === false) return addcpuships();
    console.log(row, column, length, direction);
    rendercpuboard();
    if (cpu.gameboard.addShip(row, column, length, direction) === false) {
      console.log(cpu.gameboard.board);
      return addcpuships();
    }
    cpuships.shift();
    console.log(cpuships);
    return addcpuships();
  };
  const renderplayerboard = () => {
    let playerboard = document.querySelector('#playerboard');
    playerboard.replaceChildren(DOMtool.renderboard(player1.gameboard));
  };
  async function rendercpuboard() {
    let cpuboard = document.querySelector('#cpuboard');
    cpuboard.replaceChildren(DOMtool.renderboard(cpu.gameboard));
    removebuttons();
    await timeout(4000);
    addbuttons();
  }
  const calculatedattack = (row, column) => {
    if (checkleft(row, column) == 'a') return;else if (checkright(row, column) == 'a') return;else if (checkdown(row, column) == 'a') return;else if (checkup(row, column) === 'a') return;else {
      console.log('the end');
      lastHit = null;
      randomattack();
    }
  };
  const checkright = (oldrow, oldcolumn) => {
    console.log('rightcheck');
    let row = oldrow;
    let column = oldcolumn;
    if (player1.gameboard.board[row][column + 1] === undefined) return 'c';else if (player1.gameboard.board[row][column + 1] !== undefined) {
      if (player1.gameboard.board[row][column + 1].isShot === false && player1.gameboard.board[row][column + 1].hasShip === true) {
        player1.gameboard.recieveAttack(row, column + 1, "CPU");
        return 'a';
      } else if (column < 9 && player1.gameboard.board[row][column + 1].isShot === true && player1.gameboard.board[row][column + 1].hasShip === true) {
        return checkright(row, column + 1);
      } else if (player1.gameboard.board[row][column + 1].hasShip === false) {
        return 'l';
      } else return 'c_1';
    } else return 'r';
  };
  const checkleft = (oldrow, oldcolumn) => {
    //check left hits
    console.log('leftcheck');
    let row = oldrow;
    let column = oldcolumn;
    if (player1.gameboard.board[row][column - 1] === undefined) return 'b';else if (player1.gameboard.board[row][column - 1] !== undefined) {
      if (player1.gameboard.board[row][column - 1].isShot === false && player1.gameboard.board[row][column - 1].hasShip === true) {
        player1.gameboard.recieveAttack(row, column - 1, "CPU");
        return 'a';
      } else if (column < 9 && player1.gameboard.board[row][column - 1].isShot === true && player1.gameboard.board[row][column - 1].hasShip === true) {
        return checkleft(row, column - 1);
      } else if (player1.gameboard.board[row][column - 1].hasShip === false) {
        return 'l';
      } else return 'b_1';
    } else return 'r';
  };
  const checkup = (oldrow, oldcolumn) => {
    //go up
    console.log('upcheck');
    let row = oldrow;
    let column = oldcolumn;
    if (player1.gameboard.board[row + 1] === undefined) return 'd';else if (player1.gameboard.board[row + 1] !== undefined) {
      if (player1.gameboard.board[row + 1][column].isShot === false && player1.gameboard.board[row + 1][column].hasShip === true) {
        player1.gameboard.recieveAttack(row + 1, column, "CPU");
        return 'a';
      } else if (row < 9 && player1.gameboard.board[row + 1][column].isShot === true && player1.gameboard.board[row + 1][column].hasShip === true) {
        return checkup(row + 1, column);
      } else if (player1.gameboard.board[row + 1][column].hasShip === false) {
        return 'l';
      } else return 'd_1';
    } else return 'r';
  };
  const checkdown = (oldrow, oldcolumn) => {
    console.log('downcheck');
    let row = oldrow;
    let column = oldcolumn;
    if (player1.gameboard.board[row - 1] === undefined) return 'e';else if (player1.gameboard.board[row - 1] !== undefined) {
      if (player1.gameboard.board[row - 1][column].isShot === false && player1.gameboard.board[row - 1][column].hasShip === true) {
        player1.gameboard.recieveAttack(row - 1, column, "CPU");
        console.log(player1.gameboard.board[row - 1][column]);
        return 'a';
      } else if (row > 0 && player1.gameboard.board[row - 1][column].isShot === true && player1.gameboard.board[row - 1][column].hasShip === true) {
        return checkdown(row - 1, column);
      } else if (player1.gameboard.board[row - 1][column].hasShip === false) {
        return 'l';
      } else return 'e_1';
    } else return 'r';
  };
  const randomattack = () => {
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    if (player1.gameboard.board[row][column].isShot === true) {
      randomattack();
    }
    player1.gameboard.recieveAttack(row, column, "CPU");
    lastHit = player1.gameboard.board[row][column];
    lastHit.rowvalue = row;
    lastHit.columnvalue = column;
  };
  const getlastHit = () => lastHit;
  const getplayer = () => player1;
  const getplayerboard = () => player1.gameboard.board;
  const getcpuboard = () => cpu.gameboard.board;
  const getActivePlayer = () => activePlayer;
  return {
    beginGame,
    getplayerboard,
    getplayer,
    playRound,
    getcpuboard,
    cpuattack,
    randomattack,
    getlastHit,
    addbuttons,
    gameStart
  };
}
module.exports = GameController();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gamecontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gamecontroller */ "./src/Gamecontroller.js");
/* harmony import */ var _Gamecontroller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Gamecontroller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMstuff */ "./src/DOMstuff.js");
/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DOMstuff__WEBPACK_IMPORTED_MODULE_2__);



_Gamecontroller__WEBPACK_IMPORTED_MODULE_0___default().gameStart();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/my-font.ttf */ "./src/assets/my-font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/myfont2.ttf */ "./src/assets/myfont2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ocean_BG.png */ "./src/assets/ocean_BG.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/rotate.png */ "./src/assets/rotate.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
  }
  @font-face {
    font-family: "MyFont1";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
    font-weight: 600;
    font-style: normal;
  }
body, html {
    margin: auto;
}
:root {
    font-size: 16px;
}
#container {
    width: 100vw;
    height: auto;
    margin: auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    text-align: center;
    color: white
}
#header {
    display: flex;
    flex-direction: column;
}
#heading {
    margin: 0;
    font-family: "MyFont1";
}
#main {
    display: flex;
    justify-content: space-around;
    padding-bottom: 5vh;
}
.board {
    display: grid;
    grid-template-columns: repeat(10, 3.4vw);
    grid-template-rows: repeat(10, 3.4vw);
    grid-gap: 1px;
}
.gridsquare, .cpusquare {
    background: transparent;
    border: thin white solid;
}

.miss {
    background: rgba(128,128,128,0.4);
}

.shipsquare {
    background: rgba(128,128,128,0.4);
}
.hit {
    background: rgba(255,0,0,0.3)
}
.ship {
    position: relative;
    left: 0;
    margin: auto;
    transform-origin: 20px;
}
#ship1 {
    width: 8.2vw;
    height: 3.4vw;
}
#ship2 {
    width: 11.5vw;
    height: 3.4vw;
}
#ship3 {
    width: 10.5vw;
    height: 3.4vw;
}
#ship4 {
    width: 14vw;
    height: 3.4vw;
}
#ship5 {
    width: 17.5vw;
    height: 3.4vw;
}

#description {
    align-self: center;
    width: 60%;
    height: 3rem;
    background: rgba(128,128,128,0.4);
    text-align: center;
    border: double thin white;
    border-radius: 15%;
    font-family: "MyFont1";
    font-size: 1.5rem;
    padding-top: 5vh;
}
#hide {
    display:none;
}

#shipdiv {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 36vw;
    height: 28vw
}

#shipdirection {
    width: 50px;
    height: 40px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    align-self: center;
    border: none;
}
#shiptitle {
    width: 100%;
    height: 3rem;
}
#gameoverdiv, #gameoverlose, #startscreen {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #36096d;
    background-image: linear-gradient(315deg, #36096d 0%, #39b9b9 74%);
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    gap: 25vh;
}
#gameoverheading {
    padding-top: 20vh;
    font-size: 3rem;
    font-family: 'MyFont';
}
#restart {
    width: 120px;
    height: 50px;
    justify-self: center;
    text-align: center;
    border: thin double white; 
    justify-items: baseline;
    padding-top: 20px;
    font-size: 1.5rem;
    font-family: "MyFont1";
}
#gameoverlose {
    background-color: #501435;
    background-image: linear-gradient(315deg, #36096d 0%, #9e1c48 74%);
}
#startscreen {
    background-color: #1b018f;
    background-image: linear-gradient(315deg, #0f094d 0%, #1a27dd 74%);
}
#playerboardname, #cpuboardname, #shiptitle {
    font-family: "MyFont1";
    font-size: 1.3rem;
    padding: 3vh;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,2DAA+C;EACjD;EACA;IACE,sBAAsB;IACtB,2DAA+C;IAC/C,gBAAgB;IAChB,kBAAkB;EACpB;AACF;IACI,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,wCAAwC;IACxC,qCAAqC;IACrC,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;AACA;IACI;AACJ;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;IACX;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mDAAsC;IACtC,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kEAAkE;IAClE,MAAM;IACN,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,yBAAyB;IACzB,kEAAkE;AACtE;AACA;IACI,yBAAyB;IACzB,kEAAkE;AACtE;AACA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./assets/my-font.ttf') format('woff');\n  }\n  @font-face {\n    font-family: \"MyFont1\";\n    src: url(\"./assets/myfont2.ttf\") format(\"woff\");\n    font-weight: 600;\n    font-style: normal;\n  }\nbody, html {\n    margin: auto;\n}\n:root {\n    font-size: 16px;\n}\n#container {\n    width: 100vw;\n    height: auto;\n    margin: auto;\n    background-image: url(./assets/ocean_BG.png);\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    text-align: center;\n    color: white\n}\n#header {\n    display: flex;\n    flex-direction: column;\n}\n#heading {\n    margin: 0;\n    font-family: \"MyFont1\";\n}\n#main {\n    display: flex;\n    justify-content: space-around;\n    padding-bottom: 5vh;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 3.4vw);\n    grid-template-rows: repeat(10, 3.4vw);\n    grid-gap: 1px;\n}\n.gridsquare, .cpusquare {\n    background: transparent;\n    border: thin white solid;\n}\n\n.miss {\n    background: rgba(128,128,128,0.4);\n}\n\n.shipsquare {\n    background: rgba(128,128,128,0.4);\n}\n.hit {\n    background: rgba(255,0,0,0.3)\n}\n.ship {\n    position: relative;\n    left: 0;\n    margin: auto;\n    transform-origin: 20px;\n}\n#ship1 {\n    width: 8.2vw;\n    height: 3.4vw;\n}\n#ship2 {\n    width: 11.5vw;\n    height: 3.4vw;\n}\n#ship3 {\n    width: 10.5vw;\n    height: 3.4vw;\n}\n#ship4 {\n    width: 14vw;\n    height: 3.4vw;\n}\n#ship5 {\n    width: 17.5vw;\n    height: 3.4vw;\n}\n\n#description {\n    align-self: center;\n    width: 60%;\n    height: 3rem;\n    background: rgba(128,128,128,0.4);\n    text-align: center;\n    border: double thin white;\n    border-radius: 15%;\n    font-family: \"MyFont1\";\n    font-size: 1.5rem;\n    padding-top: 5vh;\n}\n#hide {\n    display:none;\n}\n\n#shipdiv {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 2rem;\n    width: 36vw;\n    height: 28vw\n}\n\n#shipdirection {\n    width: 50px;\n    height: 40px;\n    background: url('./assets/rotate.png');\n    align-self: center;\n    border: none;\n}\n#shiptitle {\n    width: 100%;\n    height: 3rem;\n}\n#gameoverdiv, #gameoverlose, #startscreen {\n    position: absolute;\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    background-color: #36096d;\n    background-image: linear-gradient(315deg, #36096d 0%, #39b9b9 74%);\n    top: 0;\n    right: 0;\n    flex-direction: column;\n    align-items: center;\n    gap: 25vh;\n}\n#gameoverheading {\n    padding-top: 20vh;\n    font-size: 3rem;\n    font-family: 'MyFont';\n}\n#restart {\n    width: 120px;\n    height: 50px;\n    justify-self: center;\n    text-align: center;\n    border: thin double white; \n    justify-items: baseline;\n    padding-top: 20px;\n    font-size: 1.5rem;\n    font-family: \"MyFont1\";\n}\n#gameoverlose {\n    background-color: #501435;\n    background-image: linear-gradient(315deg, #36096d 0%, #9e1c48 74%);\n}\n#startscreen {\n    background-color: #1b018f;\n    background-image: linear-gradient(315deg, #0f094d 0%, #1a27dd 74%);\n}\n#playerboardname, #cpuboardname, #shiptitle {\n    font-family: \"MyFont1\";\n    font-size: 1.3rem;\n    padding: 3vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Sounds/fire_shot.mp3":
/*!*****************************************!*\
  !*** ./src/assets/Sounds/fire_shot.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e38f594694469ba3b826.mp3";

/***/ }),

/***/ "./src/assets/Sounds/shot_hit.mp3":
/*!****************************************!*\
  !*** ./src/assets/Sounds/shot_hit.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "96a50b265841ced7c235.mp3";

/***/ }),

/***/ "./src/assets/Sounds/shot_miss.mp3":
/*!*****************************************!*\
  !*** ./src/assets/Sounds/shot_miss.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "058afc203bb520b90d96.mp3";

/***/ }),

/***/ "./src/assets/my-font.ttf":
/*!********************************!*\
  !*** ./src/assets/my-font.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0158f59285966cad3010.ttf";

/***/ }),

/***/ "./src/assets/myfont2.ttf":
/*!********************************!*\
  !*** ./src/assets/myfont2.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "76099dbb90b1ebae5694.ttf";

/***/ }),

/***/ "./src/assets/ocean_BG.png":
/*!*********************************!*\
  !*** ./src/assets/ocean_BG.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b36053fbf4ab03a7e20.png";

/***/ }),

/***/ "./src/assets/rotate.png":
/*!*******************************!*\
  !*** ./src/assets/rotate.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55591221ed8982b610f0.png";

/***/ }),

/***/ "./src/assets/ship(3).png":
/*!********************************!*\
  !*** ./src/assets/ship(3).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39f74c967e2fefa6f814.png";

/***/ }),

/***/ "./src/assets/ship(3.2).png":
/*!**********************************!*\
  !*** ./src/assets/ship(3.2).png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40dab40e2827faf34b9d.png";

/***/ }),

/***/ "./src/assets/ship(4).png":
/*!********************************!*\
  !*** ./src/assets/ship(4).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9241174643d55ef795d6.png";

/***/ }),

/***/ "./src/assets/ship(5).png":
/*!********************************!*\
  !*** ./src/assets/ship(5).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "110d8c72beac74ae63b4.png";

/***/ }),

/***/ "./src/assets/ship2.png":
/*!******************************!*\
  !*** ./src/assets/ship2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5eaf706064cc04acdb55.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxV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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0RPTXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0ZhY3Rvcmllcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9GYWN0b3JpZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9GYWN0b3JpZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvRmFjdG9yaWVzL3NxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvR2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9GYWN0b3JpZXMvYm9hcmRcIik7XG5jb25zdCBHYW1lQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0dhbWVjb250cm9sbGVyXCIpO1xuY29uc3QgaW1nID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcDIucG5nJylcbmNvbnN0IGltZzIgPSByZXF1aXJlKCcuL2Fzc2V0cy9zaGlwKDMpLnBuZycpXG5jb25zdCBpbWczID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcCgzLjIpLnBuZycpXG5jb25zdCBpbWc0ID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcCg0KS5wbmcnKVxuY29uc3QgaW1nNSA9IHJlcXVpcmUoJy4vYXNzZXRzL3NoaXAoNSkucG5nJylcblxuZnVuY3Rpb24gRE9NdG9vbCgpIHtcbiAgICBjb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBsZWZ0c2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcGxheWVyYm9hcmRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwbGF5ZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcmlnaHRzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjcHVib2FyZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNwdWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBzaGlwZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBzaGlwdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgc2hpcGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIik7XG4gICAgICAgIGxldCBzaGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxldCBzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc2hpcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNoaXA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBzaGlwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIHNoaXAxLnNyYyA9IGltZ1xuICAgICAgICBzaGlwMi5zcmMgPSBpbWczXG4gICAgICAgIHNoaXAzLnNyYyA9IGltZzJcbiAgICAgICAgc2hpcDQuc3JjID0gaW1nNFxuICAgICAgICBzaGlwNS5zcmMgPSBpbWc1XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImNvbnRhaW5lclwiKVxuXG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRpbmdcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtYWluXCIpXG4gICAgICAgIGxlZnRzaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsZWZ0c2lkZVwiKVxuICAgICAgICBwbGF5ZXJib2FyZG5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInBsYXllcmJvYXJkbmFtZVwiKTtcbiAgICAgICAgcGxheWVyYm9hcmRuYW1lLnRleHRDb250ZW50ID0gJ1lPVVIgQk9BUkQnXG4gICAgICAgIHBsYXllcmJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwbGF5ZXJib2FyZFwiKVxuXG4gICAgICAgIHJpZ2h0c2lkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicmlnaHRzaWRlXCIpXG4gICAgICAgIHJpZ2h0c2lkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaGlkZVwiKVxuICAgICAgICBjcHVib2FyZG5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcImNwdWJvYXJkbmFtZVwiKTtcbiAgICAgICAgY3B1Ym9hcmRuYW1lLnRleHRDb250ZW50ID0gJ0VORU1ZIEJPQVJEJztcbiAgICAgICAgY3B1Ym9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIixcImNwdWJvYXJkXCIpXG5cbiAgICAgICAgc2hpcGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2hpcGRpdlwiKTtcbiAgICAgICAgc2hpcHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwdGl0bGVcIik7XG4gICAgICAgIHNoaXB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyAoZHJhZyBhbmQgZHJvcClcIlxuICAgICAgICBzaGlwZGlyZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwZGlyZWN0aW9uXCIpO1xuICAgICAgICBzaGlwZGlyZWN0aW9uLnZhbHVlID0gJ2hvcml6b250YWwnXG5cbiAgICAgICAgc2hpcDEuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpXG4gICAgICAgIHNoaXAxLnZhbHVlID0gMlxuICAgICAgICBzaGlwMi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDIudmFsdWUgPSAzXG4gICAgICAgIHNoaXAzLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLFwidHJ1ZVwiKVxuICAgICAgICBzaGlwMy52YWx1ZSA9IDNcbiAgICAgICAgc2hpcDQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpXG4gICAgICAgIHNoaXA0LnZhbHVlID0gNFxuICAgICAgICBzaGlwNS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDUudmFsdWUgPSA1XG5cbiAgICAgICAgc2hpcDEuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAxXCIpO1xuICAgICAgICBzaGlwMS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDIuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAyXCIpO1xuICAgICAgICBzaGlwMi5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDMuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAzXCIpO1xuICAgICAgICBzaGlwMy5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDQuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXA0XCIpO1xuICAgICAgICBzaGlwNC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDUuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXA1XCIpO1xuICAgICAgICBzaGlwNS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsZWZ0c2lkZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmlnaHRzaWRlKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmRuYW1lKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmQpXG4gICAgICAgIHJpZ2h0c2lkZS5hcHBlbmRDaGlsZChjcHVib2FyZG5hbWUpO1xuICAgICAgICByaWdodHNpZGUuYXBwZW5kQ2hpbGQoY3B1Ym9hcmQpXG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcHRpdGxlKVxuICAgICAgICBzaGlwZGl2LmFwcGVuZENoaWxkKHNoaXBkaXJlY3Rpb24pXG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDEpO1xuICAgICAgICBzaGlwZGl2LmFwcGVuZENoaWxkKHNoaXAyKTtcbiAgICAgICAgc2hpcGRpdi5hcHBlbmRDaGlsZChzaGlwMyk7XG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDQpO1xuICAgICAgICBzaGlwZGl2LmFwcGVuZENoaWxkKHNoaXA1KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzaGlwZGl2KVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGRyZW4oY29udGFpbmVyKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJvYXJkXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkc3F1YXJlJylcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSBpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sdW1uID0galxuICAgICAgICAgICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXS5pc1Nob3QgPT09IHRydWUgJiYgYm9hcmQuYm9hcmRbaV1bal0uaGFzU2hpcCA9PT0gdHJ1ZSkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV1bal0uaXNTaG90ID09PSB0cnVlICYmIGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgPT09IGZhbHNlKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgLy8gY3B1IGJvYXJkXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLnBsYXllciAhPT0gJ2NwdScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcHNxdWFyZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJzcXVhcmUnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0uaXNTaGlwID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYm9hcmQuYm9hcmRbaV1bal0uc2hpcHNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChib2FyZC5wbGF5ZXIgPT09ICdjcHUnICYmIGJvYXJkLmJvYXJkW2ldW2pdLmlzU2hvdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NwdXNxdWFyZScpXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgPT09IHRydWUpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjcHVzaGlwc3F1YXJlJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSlcbiAgICAgICAgfX1cbiAgICAgICAgcmV0dXJuIGdyaWRcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvZGl2ID0gKG91dGNvbWUscGxheWVyKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxldCB0ZXh0ID0gcGxheWVyICsgJyBmaXJlcyBhIHNob3QgYW5kLi4uICcgKyBvdXRjb21lO1xuICAgICAgICBsZXQgdHh0ID0gb3V0Y29tZVxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBzcGVlZCA9IDcwO1xuICAgICAgICB0eXBlV3JpdGVyKHRleHQpO1xuICAgICAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgICAgICAgICAgaWYgKGkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdhbWVPdmVyV2luKCkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBnYW1lb3ZlcmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lb3ZlcmhlYWRpbmcudGV4dENvbnRlbnQgPSAnWU9VIFdJTiEnXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncmVzdGFydCcpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVwbGF5XCI7XG4gICAgICAgIGdhbWVvdmVyaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2FtZW92ZXJoZWFkaW5nJyk7XG5cbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdnYW1lb3ZlcmRpdicpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZ2FtZW92ZXJoZWFkaW5nKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgICBmdW5jdGlvbiBnYW1lT3Zlckxvc2UoKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGdhbWVvdmVyaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVvdmVyaGVhZGluZy50ZXh0Q29udGVudCA9ICdZT1UgTE9TRSdcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdyZXN0YXJ0Jyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVwbGF5XCI7XG4gICAgICAgIGdhbWVvdmVyaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2FtZW92ZXJoZWFkaW5nJyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnZ2FtZW92ZXJsb3NlJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChnYW1lb3ZlcmhlYWRpbmcpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRTY3JlZW4oKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGdhbWVvdmVyaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVvdmVyaGVhZGluZy50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJ1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ3Jlc3RhcnQnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICAgICAgICBnYW1lb3ZlcmhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsJ2dhbWVvdmVyaGVhZGluZycpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsJ3N0YXJ0c2NyZWVuJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChnYW1lb3ZlcmhlYWRpbmcpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgICByZXR1cm4ge2luaXRpYWxMb2FkLCByZW5kZXJib2FyZCwgaW5mb2RpdiwgZ2FtZU92ZXJXaW4sIGdhbWVPdmVyTG9zZSwgc3RhcnRTY3JlZW59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NdG9vbCgpIiwiY29uc3QgRE9Nc3R1ZmYgPSByZXF1aXJlKFwiLi4vRE9Nc3R1ZmZcIilcbmNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlweWFyZFwiKVxuY29uc3QgZ3JpZHNxdWFyZSA9IHJlcXVpcmUoXCIuL3NxdWFyZXNcIilcbmNvbnN0IGZpcmUgPSByZXF1aXJlKGAuLi9hc3NldHMvU291bmRzL2ZpcmVfc2hvdC5tcDNgKVxuY29uc3QgaGl0ID0gcmVxdWlyZShgLi4vYXNzZXRzL1NvdW5kcy9zaG90X2hpdC5tcDNgKVxuY29uc3QgbWlzcyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9Tb3VuZHMvc2hvdF9taXNzLm1wM2ApXG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlYm9hcmQoKSB7XG4gICAgICAgIC8vbGV0IHZhbHVlID0geyBoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZSwgc2hpcHJvdzogbnVsbCwgc2hpcGNvbHVtbjogbnVsbCB9XG4gICAgICAgIGxldCByb3dzID0gMTBcbiAgICAgICAgbGV0IGJvYXJkID0gW11cbiAgICAgICAgbGV0IGNvbHVtbnMgPSAxMFxuICAgICAgICBsZXQgaWQgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBuZXcgZ3JpZHNxdWFyZVxuICAgICAgICAgICAgICAgIHNxdWFyZS5pZCA9IGlkXG4gICAgICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIGlkKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZCA9IGJvYXJkXG4gICAgICAgIH1cbiAgICBhZGRTaGlwID0gKHJvdyAsIGNvbHVtbiwgbGVuZ3RocywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrbW92ZShyb3csY29sdW1uLGxlbmd0aHMsZGlyZWN0aW9uKSA9PT0gZmFsc2UpIHJldHVybiBhbGVydCgnd3JvbmcgbW92ZScpXG5cbiAgICAgICAgbGV0IHRoaXNTaGlwID0gbmV3IHNoaXAobGVuZ3RocylcbiAgICAgICAgdGhpc1NoaXAuc2hpcHJvdyA9IHJvd1xuICAgICAgICB0aGlzU2hpcC5zaGlwY29sdW1uID0gY29sdW1uXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzU2hpcClcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aHM7IGkrKykgeyBcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uK2ldLmhhc1NoaXAgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbitpXS5zaGlwcm93ID0gcm93XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbitpXS5zaGlwY29sdW1uID0gY29sdW1uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAvL2NoYW5nZSB0aGlzIHRvIHZhbHVlIHNhbWUgYXMgdG9wXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aHM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93K2ldW2NvbHVtbl0uaGFzU2hpcCA9IHRydWUgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93K2ldW2NvbHVtbl0uc2hpcHJvdyA9IHJvd1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93K2ldW2NvbHVtbl0uc2hpcGNvbHVtbiA9IGNvbHVtbiAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gdGhpc1NoaXBcbiAgICB9XG4gICAgdGltZW91dCA9IChtcykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG4gICAgYXN5bmMgcmVjaWV2ZUF0dGFjayhyb3csY29sdW1uLCBwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmlzU2hvdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmlzU2hvdCA9IHRydWVcbiAgICAgICAgLy90aGlzLnBsYXlzb3VuZChmaXJlKVxuICAgICAgICBsZXQgc2hvbyA9IG5ldyBBdWRpbyhmaXJlKVxuICAgICAgICBzaG9vLnBsYXkoKTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBzaGlwcm93ID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcHJvd1xuICAgICAgICAgICAgbGV0IHNoaXBjb2x1bW4gPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5zaGlwY29sdW1uXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3NoaXByb3ddW3NoaXBjb2x1bW5dLmhpdCgpOyBcbiAgICAgICAgICAgIERPTXN0dWZmLmluZm9kaXYoXCJpdCdzIGEgaGl0IVwiLCBwbGF5ZXIpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRpbWVvdXQoMTIwMClcbiAgICAgICAgICAgIGxldCBoaXQxID0gbmV3IEF1ZGlvKGhpdClcbiAgICAgICAgICAgIGhpdDEucGxheSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET01zdHVmZi5pbmZvZGl2KCdtaXNzZXMnLCBwbGF5ZXIpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRpbWVvdXQoMTIwMClcbiAgICAgICAgICAgIGxldCBtaXNzMSA9IG5ldyBBdWRpbyhtaXNzKVxuICAgICAgICAgICAgbWlzczEucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2ttb3ZlKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93K2ldID09IHVuZGVmaW5lZCB8fCB0aGlzLmJvYXJkW3JvdytpXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjaGVja2xvc2UoKSB7XG4gICAgICAgIGxldCBhID0gdGhpcy5zaGlwc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhLmxlbmd0aCAtMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYVtpXS5zdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkIiwiY2xhc3MgcGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5ib2FyZCA9IG51bGxcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllciIsImNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yIChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IHRydWUgXG4gICAgICAgIHRoaXMuaXNTaG90ID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1NoaXAgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hpcHJvdyA9IG51bGxcbiAgICAgICAgdGhpcy5zaGlwY29sdW1uID0gbnVsbFxuICAgICAgICB0aGlzLnNoaXBzcmMgPSBudWxsXG4gICAgfVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuSXNTdW5rRnVuYygpO1xuICAgIH1cbiAgICBJc1N1bmtGdW5jKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyIsImNsYXNzIGdyaWRzcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc1NoaXAgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzU2hvdCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hpcHJvdyA9IG51bGxcbiAgICAgICAgdGhpcy5zaGlwY29sdW1uID0gbnVsbFxuICAgICAgICB0aGlzLnNoaXAgPSBudWxsXG4gICAgICAgIHRoaXMucm93dmFsdWUgPSBudWxsXG4gICAgICAgIHRoaXMuY29sdW1udmFsdWUgPSBudWxsXG4gICAgICAgIHRoaXMuaWQgPSBudWxsXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBudWxsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyaWRzcXVhcmUiLCJjb25zdCBzaGlwID0gcmVxdWlyZShcIi4vRmFjdG9yaWVzL3NoaXB5YXJkXCIpXG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9GYWN0b3JpZXMvYm9hcmRcIilcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vRmFjdG9yaWVzL3BsYXllcnMnKTtcbmNvbnN0IERPTXRvb2wgPSByZXF1aXJlKFwiLi9ET01zdHVmZlwiKTtcblxuZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIoKSB7XG4gICAgbGV0IHBsYXllcnMgPSBbXVxuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBjcHU7XG4gICAgbGV0IGxhc3RIaXQgPSBudWxsXG4gICAgbGV0IGNwdXNoaXBzID0gWzIsMywzLDQsNV1cblxuICAgIGZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcbiAgICAgICAgRE9NdG9vbC5zdGFydFNjcmVlbigpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKVxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydCk7XG4gICAgfVxuICAgIGNvbnN0IGJlZ2luR2FtZSA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyMSA9IG5ldyBwbGF5ZXIoJ3BsYXllcm5hbWUnKVxuICAgICAgICBjcHUgPSBuZXcgcGxheWVyKCdjcHUnKVxuICAgICAgICBcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCdwbGF5ZXIxJyk7XG4gICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmluaXRpYWxpc2Vib2FyZCgpO1xuICAgICAgICBjcHUuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgnY3B1Jyk7XG4gICAgICAgIGNwdS5nYW1lYm9hcmQuaW5pdGlhbGlzZWJvYXJkKCk7XG5cbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllcjEpO1xuICAgICAgICBwbGF5ZXJzLnB1c2goY3B1KTtcbiAgICAgICAgRE9NdG9vbC5pbml0aWFsTG9hZCgpO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVycGxheWVyYm9hcmQoKTtcbiAgICAgICAgcmVuZGVyY3B1Ym9hcmQoKTtcbiAgICAgICAgYWRkYnV0dG9ucygpO1xuICAgICAgICBzZXRzaGlwcygpO1xuICAgICAgICBhZGRjcHVzaGlwcygpO1xuICAgICAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICAgICAgYmVnaW5HYW1lKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXlSb3VuZCAoZSkge1xuICAgICAgICByZW1vdmVidXR0b25zKCk7XG4gICAgICAgIGNwdS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhlLnRhcmdldC5kYXRhc2V0LnJvdywgZS50YXJnZXQuZGF0YXNldC5jb2x1bW4sIFwiUGxheWVyXCIpO1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDE4MDApO1xuICAgICAgICByZW5kZXJjcHVib2FyZCgpO1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDE1MDApO1xuICAgICAgICBpZiAoY3B1LmdhbWVib2FyZC5jaGVja2xvc2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgRE9NdG9vbC5nYW1lT3ZlcldpbigpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0JylcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnQpO1xuICAgICAgICAgICAgcmV0dXJuIH1cbiAgICAgICAgY3B1YXR0YWNrKCk7XG4gICAgICAgIGF3YWl0IHRpbWVvdXQoMTgwMCk7XG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgICAgIC8vbW92ZSB0aGlzIGJhY2sgdG8gZ2FtZSBib2FyZCwgbWFrZSB0aGUgYWRkaGl0IGZ1bmN0aW9uIGFzeW5jIHRoZW4gYXdhIGxpa2UgdGhpc1xuICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuY2hlY2tsb3NlKCkgPT09IHRydWUpICB7XG4gICAgICAgICAgICBET010b29sLmdhbWVPdmVyTG9zZSgpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0JylcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnQpO1xuICAgICAgICAgICAgcmV0dXJuIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcHVhdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmKGxhc3RIaXQgIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGxhc3RIaXQuaGFzU2hpcCA9PT0gZmFsc2UpIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5kb21hdHRhY2soKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRhdHRhY2sobGFzdEhpdC5yb3d2YWx1ZSwgbGFzdEhpdC5jb2x1bW52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJhbmRvbWF0dGFjaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRidXR0b25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgcGxheWVyc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcnNxdWFyZScpXG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBwbGF5ZXJzcXVhcmUuZm9yRWFjaChcbiAgICAgICAgICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgbm9kZS5pZCA9IGk7XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgbGV0IGNwdXNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcHVzcXVhcmUnKVxuICAgICAgICBsZXQgaiA9IDBcbiAgICAgICAgY3B1c3F1YXJlLmZvckVhY2goXG4gICAgICAgICAgICBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZWJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBjcHVzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3B1c3F1YXJlJylcbiAgICAgICAgbGV0IGogPSAwXG4gICAgICAgIGNwdXNxdWFyZS5mb3JFYWNoKFxuICAgICAgICAgICAgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5Um91bmQpO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBzZXRzaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwZGlyZWN0aW9uJylcbiAgICAgICAgc2hpcGRpcmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjaGFuZ2VkaXJlY3Rpb24pXG4gICAgICAgIGNvbnN0IHNoaXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAxJylcbiAgICAgICAgc2hpcDEuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLGRyYWdTdGFydClcbiAgICAgICAgY29uc3Qgc2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcDInKVxuICAgICAgICBzaGlwMi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsZHJhZ1N0YXJ0KVxuICAgICAgICBjb25zdCBzaGlwMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwMycpXG4gICAgICAgIHNoaXAzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIixkcmFnU3RhcnQpXG4gICAgICAgIGNvbnN0IHNoaXA0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXA0JylcbiAgICAgICAgc2hpcDQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLGRyYWdTdGFydClcbiAgICAgICAgY29uc3Qgc2hpcDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcDUnKVxuICAgICAgICBzaGlwNS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsZHJhZ1N0YXJ0KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSwgMCk7fVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJvcChlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgICAgICAvLyBnZXQgdGhlIGRyYWdnYWJsZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIC8vIGFkZCBpdCB0byB0aGUgZHJvcCB0YXJnZXRcbiAgICAgICAgaWYgKGFkZHNoaXB0b2JvYXJkKGRyYWdnYWJsZSwgZS50YXJnZXQpID09PSBmYWxzZSkgcmV0dXJuIGFsZXJ0KCdpbnZhbGlkIG1vdmUsIHRyeSBhZ2FpbicpXG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZHJhZ2dhYmxlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBmYWxzZSlcbiAgICAgICAgY2hlY2tzaGlwZGl2KClcblxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja3NoaXBkaXYoKSB7XG4gICAgICAgIGxldCBzaGlwZGl2aW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwZGl2JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBsZXQgc2hpcGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwZGl2JylcbiAgICAgICAgbGV0IGxlZnRzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUnKVxuICAgICAgICBpZiAoc2hpcGRpdmltZ3MubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGxlZnRzaWRlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCdoaWRlJyk7XG4gICAgICAgICAgICBzaGlwZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdoaWRlJyk7XG4gICAgICAgICAgICBsZWZ0c2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGVmdHNpZGUnKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZWRpcmVjdGlvbiA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwidmVydGljYWxcIjtcbiAgICAgICAgICAgIGNoYW5nZXNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgY2hhbmdlc2hpcHMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRkaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcGRpcmVjdGlvbicpLnZhbHVlXG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZXNoaXBzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGhpc2RpcmVjdGlvbiA9ICdub25lJ1xuICAgICAgICBpZiAoZ2V0ZGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHRoaXNkaXJlY3Rpb24gPSAncm90YXRlKDkwZGVnKSdcbiAgICAgICAgbGV0IHNoaXBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXBkaXYnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzaGlwaW1ncyAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcGltZ3NbaV0uc3R5bGUudHJhbnNmb3JtID0gdGhpc2RpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZHNoaXB0b2JvYXJkID0gKGl0ZW0sIHRhcmdldCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgICAgIGNvbnN0IGFyck9mU3RycyA9IEFycmF5LmZyb20oU3RyaW5nKHRhcmdldC5pZCkpO1xuICAgICAgICAvL2NvbnN0IGFyck9mTnVtcyA9IGFyck9mU3Rycy5tYXAoKHN0cikgPT4gTnVtYmVyKHN0cikpO1xuICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGFyck9mU3Ryc1swXSk7XG4gICAgICAgIGxldCBjb2x1bW4gPSBOdW1iZXIoYXJyT2ZTdHJzWzFdKVxuICAgICAgICBpZiAodGFyZ2V0LmlkIDwgMTApIHtcbiAgICAgICAgICAgIHJvdyA9IDBcbiAgICAgICAgICAgIGNvbHVtbiA9IE51bWJlcihhcnJPZlN0cnNbMF0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxlbmd0aCA9IGl0ZW0udmFsdWVcbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmNoZWNrbW92ZShyb3csY29sdW1uLGxlbmd0aCxnZXRkaXJlY3Rpb24oKSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5hZGRTaGlwKHJvdyxjb2x1bW4sbGVuZ3RoLGdldGRpcmVjdGlvbigpKSBcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dLnNoaXBzcmMgPSBpdGVtXG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgY29uc3QgZ2V0cmFuZG9tbnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbWRpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IG51bWJlciA9IGdldHJhbmRvbW51bWJlcigpXG4gICAgICAgIGlmIChudW1iZXIgPCA1KSByZXR1cm4gXCJob3Jpem9udGFsXCJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJ2ZXJ0aWNhbFwiXG4gICAgfVxuICAgIGNvbnN0IGFkZGNwdXNoaXBzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3B1c2hpcHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlbmRlcmNwdWJvYXJkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcHUuZ2FtZWJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIGxldCByb3cgPSBnZXRyYW5kb21udW1iZXIoKTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGdldHJhbmRvbW51bWJlcigpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY3B1c2hpcHNbMF07XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSByYW5kb21kaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGNwdS5nYW1lYm9hcmQuY2hlY2ttb3ZlKHJvdyxjb2x1bW4sbGVuZ3RoLGRpcmVjdGlvbikgPT09IGZhbHNlKSByZXR1cm4gYWRkY3B1c2hpcHMoKTtcbiAgICAgICAgY29uc29sZS5sb2cocm93LGNvbHVtbixsZW5ndGgsZGlyZWN0aW9uKVxuICAgICAgICByZW5kZXJjcHVib2FyZCgpO1xuICAgICAgICBpZiAoY3B1LmdhbWVib2FyZC5hZGRTaGlwKHJvdyxjb2x1bW4sbGVuZ3RoLGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcHUuZ2FtZWJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgcmV0dXJuIGFkZGNwdXNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3B1c2hpcHMuc2hpZnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coY3B1c2hpcHMpXG4gICAgICAgIHJldHVybiBhZGRjcHVzaGlwcygpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXJwbGF5ZXJib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBsYXllcmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcmJvYXJkJyk7XG4gICAgICAgIHBsYXllcmJvYXJkLnJlcGxhY2VDaGlsZHJlbihET010b29sLnJlbmRlcmJvYXJkKHBsYXllcjEuZ2FtZWJvYXJkKSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZW5kZXJjcHVib2FyZCgpIHtcbiAgICAgICAgbGV0IGNwdWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdWJvYXJkJylcbiAgICAgICAgY3B1Ym9hcmQucmVwbGFjZUNoaWxkcmVuKERPTXRvb2wucmVuZGVyYm9hcmQoY3B1LmdhbWVib2FyZCkpXG4gICAgICAgIHJlbW92ZWJ1dHRvbnMoKVxuICAgICAgICBhd2FpdCB0aW1lb3V0KDQwMDApO1xuICAgICAgICBhZGRidXR0b25zKCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbGN1bGF0ZWRhdHRhY2sgPSAocm93LGNvbHVtbikgPT4ge1xuICAgICAgICBpZiAoY2hlY2tsZWZ0KHJvdyxjb2x1bW4pID09ICdhJykgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmIChjaGVja3JpZ2h0KHJvdyxjb2x1bW4pID09ICdhJykgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmIChjaGVja2Rvd24ocm93LGNvbHVtbikgPT0gJ2EnKSByZXR1cm5cblxuICAgICAgICBlbHNlIGlmIChjaGVja3VwKHJvdyxjb2x1bW4pID09PSAnYScpIHJldHVyblxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGVuZCcpO1xuICAgICAgICAgICAgbGFzdEhpdCA9IG51bGxcbiAgICAgICAgICAgIHJhbmRvbWF0dGFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBjb25zdCBjaGVja3JpZ2h0ID0gKG9sZHJvdyxvbGRjb2x1bW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Y2hlY2snKVxuICAgICAgICBsZXQgcm93ID0gb2xkcm93XG4gICAgICAgIGxldCBjb2x1bW4gPSBvbGRjb2x1bW5cbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdID09PSB1bmRlZmluZWQpIHJldHVybiAnYydcblxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbisxXSAhPT0gdW5kZWZpbmVkKSBcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdLmlzU2hvdCA9PT0gZmFsc2UgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaGFzU2hpcCA9PT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4rMSwgXCJDUFVcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2EnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA8IDkgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tyaWdodChyb3csIGNvbHVtbisxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaGFzU2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2wnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiAnY18xJyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuICdyJ1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tsZWZ0ID0gKG9sZHJvdyxvbGRjb2x1bW4pID0+IHtcbiAgICAgICAgLy9jaGVjayBsZWZ0IGhpdHNcbiAgICAgICAgY29uc29sZS5sb2coJ2xlZnRjaGVjaycpXG4gICAgICAgIGxldCByb3cgPSBvbGRyb3dcbiAgICAgICAgbGV0IGNvbHVtbiA9IG9sZGNvbHVtblxuICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuICdiJ1xuICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXSAhPT0gdW5kZWZpbmVkKSBcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdLmlzU2hvdCA9PT0gZmFsc2UgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbi0xLCBcIkNQVVwiKSBcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2EnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA8IDkgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tsZWZ0KHJvdywgY29sdW1uLTEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXS5oYXNTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbCdcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gJ2JfMSdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiAncidcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2t1cCA9IChvbGRyb3csb2xkY29sdW1uKSA9PiB7XG4gICAgICAgIC8vZ28gdXBcbiAgICAgICAgY29uc29sZS5sb2coJ3VwY2hlY2snKVxuICAgICAgICBsZXQgcm93ID0gb2xkcm93XG4gICAgICAgIGxldCBjb2x1bW4gPSBvbGRjb2x1bW5cbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3JvdysxXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ2QnXG5cbiAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3crMV1bY29sdW1uXS5pc1Nob3QgPT09IGZhbHNlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3JvdysxXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdysxLGNvbHVtbiwgXCJDUFVcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2EnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdyA8IDkgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3JvdysxXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2t1cChyb3crMSwgY29sdW1uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaGFzU2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdsJ1xuICAgICAgICAgICAgfSBlbHNlIHJldHVybiAnZF8xJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJ3InXG4gICAgICAgIH1cbiAgICBjb25zdCBjaGVja2Rvd24gPSAob2xkcm93LG9sZGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bmNoZWNrJylcbiAgICAgICAgbGV0IHJvdyA9IG9sZHJvd1xuICAgICAgICBsZXQgY29sdW1uID0gb2xkY29sdW1uXG4gICAgICAgIGlmICAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdID09PSB1bmRlZmluZWQpIHJldHVybiAnZSdcbiAgICAgICAgZWxzZSBpZiAgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvdy0xXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdW2NvbHVtbl0uaXNTaG90ID09PSBmYWxzZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5oYXNTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhyb3ctMSxjb2x1bW4sIFwiQ1BVXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdW2NvbHVtbl0pXG4gICAgICAgICAgICAgICAgcmV0dXJuICdhJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cgPiAwICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvdy0xXVtjb2x1bW5dLmlzU2hvdCA9PT0gdHJ1ZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5oYXNTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrZG93bihyb3ctMSwgY29sdW1uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdW2NvbHVtbl0uaGFzU2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2wnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiAnZV8xJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuICdyJ1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dLmlzU2hvdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmFuZG9tYXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uLCBcIkNQVVwiKTtcbiAgICAgICAgbGFzdEhpdCA9IHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uXVxuICAgICAgICBsYXN0SGl0LnJvd3ZhbHVlID0gcm93O1xuICAgICAgICBsYXN0SGl0LmNvbHVtbnZhbHVlID0gY29sdW1uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldGxhc3RIaXQgPSAoKSA9PiBsYXN0SGl0XG4gICAgY29uc3QgZ2V0cGxheWVyID0gKCkgPT4gcGxheWVyMVxuICAgIGNvbnN0IGdldHBsYXllcmJvYXJkID0gKCkgPT4gcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRcbiAgICBjb25zdCBnZXRjcHVib2FyZCA9ICgpID0+IGNwdS5nYW1lYm9hcmQuYm9hcmRcblxuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcblxuICAgIHJldHVybiB7YmVnaW5HYW1lLCBnZXRwbGF5ZXJib2FyZCwgZ2V0cGxheWVyLCBwbGF5Um91bmQsIGdldGNwdWJvYXJkLCBjcHVhdHRhY2ssXG4gICAgcmFuZG9tYXR0YWNrLCBnZXRsYXN0SGl0LCBhZGRidXR0b25zLCBnYW1lU3RhcnR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXIoKSIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL0dhbWVjb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERPTXRvb2wgZnJvbSAnLi9ET01zdHVmZidcblxuR2FtZUNvbnRyb2xsZXIuZ2FtZVN0YXJ0KCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbXktZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9teWZvbnQyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL29jZWFuX0JHLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3JvdGF0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNeUZvbnQxXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuYm9keSwgaHRtbCB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGVcbn1cbiNoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNoZWFkaW5nIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTXlGb250MVwiO1xufVxuI21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcbn1cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMy40dncpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzLjR2dyk7XG4gICAgZ3JpZC1nYXA6IDFweDtcbn1cbi5ncmlkc3F1YXJlLCAuY3B1c3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHRoaW4gd2hpdGUgc29saWQ7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LDAuNCk7XG59XG5cbi5zaGlwc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LDAuNCk7XG59XG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4zKVxufVxuLnNoaXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyMHB4O1xufVxuI3NoaXAxIHtcbiAgICB3aWR0aDogOC4ydnc7XG4gICAgaGVpZ2h0OiAzLjR2dztcbn1cbiNzaGlwMiB7XG4gICAgd2lkdGg6IDExLjV2dztcbiAgICBoZWlnaHQ6IDMuNHZ3O1xufVxuI3NoaXAzIHtcbiAgICB3aWR0aDogMTAuNXZ3O1xuICAgIGhlaWdodDogMy40dnc7XG59XG4jc2hpcDQge1xuICAgIHdpZHRoOiAxNHZ3O1xuICAgIGhlaWdodDogMy40dnc7XG59XG4jc2hpcDUge1xuICAgIHdpZHRoOiAxNy41dnc7XG4gICAgaGVpZ2h0OiAzLjR2dztcbn1cblxuI2Rlc2NyaXB0aW9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsMTI4LDEyOCwwLjQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IGRvdWJsZSB0aGluIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBmb250LWZhbWlseTogXCJNeUZvbnQxXCI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDV2aDtcbn1cbiNoaWRlIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbiNzaGlwZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDM2dnc7XG4gICAgaGVpZ2h0OiAyOHZ3XG59XG5cbiNzaGlwZGlyZWN0aW9uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4jc2hpcHRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG4jZ2FtZW92ZXJkaXYsICNnYW1lb3Zlcmxvc2UsICNzdGFydHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MDk2ZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMzYwOTZkIDAlLCAjMzliOWI5IDc0JSk7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1dmg7XG59XG4jZ2FtZW92ZXJoZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMjB2aDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuI3Jlc3RhcnQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogdGhpbiBkb3VibGUgd2hpdGU7IFxuICAgIGp1c3RpZnktaXRlbXM6IGJhc2VsaW5lO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk15Rm9udDFcIjtcbn1cbiNnYW1lb3Zlcmxvc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDE0MzU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzM2MDk2ZCAwJSwgIzllMWM0OCA3NCUpO1xufVxuI3N0YXJ0c2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIwMThmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwZjA5NGQgMCUsICMxYTI3ZGQgNzQlKTtcbn1cbiNwbGF5ZXJib2FyZG5hbWUsICNjcHVib2FyZG5hbWUsICNzaGlwdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIk15Rm9udDFcIjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBwYWRkaW5nOiAzdmg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDJEQUErQztFQUNqRDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJEQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5REFBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtREFBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxNQUFNO0lBQ04sUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrRUFBa0U7QUFDdEU7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvbXktZm9udC50dGYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIH1cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udDFcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9hc3NldHMvbXlmb250Mi50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbmJvZHksIGh0bWwge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL29jZWFuX0JHLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVcXG59XFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNoZWFkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udDFcXFwiO1xcbn1cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMy40dncpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMy40dncpO1xcbiAgICBncmlkLWdhcDogMXB4O1xcbn1cXG4uZ3JpZHNxdWFyZSwgLmNwdXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IHRoaW4gd2hpdGUgc29saWQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsMTI4LDEyOCwwLjQpO1xcbn1cXG5cXG4uc2hpcHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsMC40KTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjMpXFxufVxcbi5zaGlwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwcHg7XFxufVxcbiNzaGlwMSB7XFxuICAgIHdpZHRoOiA4LjJ2dztcXG4gICAgaGVpZ2h0OiAzLjR2dztcXG59XFxuI3NoaXAyIHtcXG4gICAgd2lkdGg6IDExLjV2dztcXG4gICAgaGVpZ2h0OiAzLjR2dztcXG59XFxuI3NoaXAzIHtcXG4gICAgd2lkdGg6IDEwLjV2dztcXG4gICAgaGVpZ2h0OiAzLjR2dztcXG59XFxuI3NoaXA0IHtcXG4gICAgd2lkdGg6IDE0dnc7XFxuICAgIGhlaWdodDogMy40dnc7XFxufVxcbiNzaGlwNSB7XFxuICAgIHdpZHRoOiAxNy41dnc7XFxuICAgIGhlaWdodDogMy40dnc7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LDAuNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBkb3VibGUgdGhpbiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udDFcXFwiO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDV2aDtcXG59XFxuI2hpZGUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbiNzaGlwZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAzNnZ3O1xcbiAgICBoZWlnaHQ6IDI4dndcXG59XFxuXFxuI3NoaXBkaXJlY3Rpb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL3JvdGF0ZS5wbmcnKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiNzaGlwdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4jZ2FtZW92ZXJkaXYsICNnYW1lb3Zlcmxvc2UsICNzdGFydHNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYwOTZkO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMzYwOTZkIDAlLCAjMzliOWI5IDc0JSk7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjV2aDtcXG59XFxuI2dhbWVvdmVyaGVhZGluZyB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuI3Jlc3RhcnQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiB0aGluIGRvdWJsZSB3aGl0ZTsgXFxuICAgIGp1c3RpZnktaXRlbXM6IGJhc2VsaW5lO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250MVxcXCI7XFxufVxcbiNnYW1lb3Zlcmxvc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTAxNDM1O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMzYwOTZkIDAlLCAjOWUxYzQ4IDc0JSk7XFxufVxcbiNzdGFydHNjcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjAxOGY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwZjA5NGQgMCUsICMxYTI3ZGQgNzQlKTtcXG59XFxuI3BsYXllcmJvYXJkbmFtZSwgI2NwdWJvYXJkbmFtZSwgI3NoaXB0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250MVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAzdmg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJHYW1lYm9hcmQiLCJyZXF1aXJlIiwiR2FtZUNvbnRyb2xsZXIiLCJpbWciLCJpbWcyIiwiaW1nMyIsImltZzQiLCJpbWc1IiwiRE9NdG9vbCIsImluaXRpYWxMb2FkIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGVhZGVyIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwibWFpbiIsImxlZnRzaWRlIiwicGxheWVyYm9hcmRuYW1lIiwicGxheWVyYm9hcmQiLCJyaWdodHNpZGUiLCJjcHVib2FyZG5hbWUiLCJjcHVib2FyZCIsInNoaXBkaXYiLCJzaGlwdGl0bGUiLCJzaGlwZGlyZWN0aW9uIiwic2hpcDEiLCJzaGlwMiIsInNoaXAzIiwic2hpcDQiLCJzaGlwNSIsInNyYyIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJyZXBsYWNlQ2hpbGRyZW4iLCJyZW5kZXJib2FyZCIsImJvYXJkIiwiZ3JpZCIsImoiLCJzcXVhcmUiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiaXNTaG90IiwiaGFzU2hpcCIsInBsYXllciIsImlzU2hpcCIsImltYWdlIiwic2hpcHNyYyIsImluZm9kaXYiLCJvdXRjb21lIiwicXVlcnlTZWxlY3RvciIsInRleHQiLCJ0eHQiLCJzcGVlZCIsInR5cGVXcml0ZXIiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImNoYXJBdCIsInNldFRpbWVvdXQiLCJnYW1lT3ZlcldpbiIsImRpdiIsImdhbWVvdmVyaGVhZGluZyIsImJ1dHRvbiIsImdhbWVPdmVyTG9zZSIsInN0YXJ0U2NyZWVuIiwiRE9Nc3R1ZmYiLCJzaGlwIiwiZ3JpZHNxdWFyZSIsImZpcmUiLCJoaXQiLCJtaXNzIiwiY29uc3RydWN0b3IiLCJzaGlwcyIsImluaXRpYWxpc2Vib2FyZCIsInJvd3MiLCJjb2x1bW5zIiwiYWRkU2hpcCIsImxlbmd0aHMiLCJkaXJlY3Rpb24iLCJjaGVja21vdmUiLCJhbGVydCIsInRoaXNTaGlwIiwic2hpcHJvdyIsInNoaXBjb2x1bW4iLCJ0aW1lb3V0IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY2lldmVBdHRhY2siLCJzaG9vIiwiQXVkaW8iLCJwbGF5IiwiaGl0MSIsIm1pc3MxIiwiY2hlY2tsb3NlIiwiYSIsInN1bmsiLCJuYW1lIiwiaGl0cyIsIklzU3Vua0Z1bmMiLCJyb3d2YWx1ZSIsImNvbHVtbnZhbHVlIiwicGxheWVycyIsInBsYXllcjEiLCJjcHUiLCJsYXN0SGl0IiwiY3B1c2hpcHMiLCJnYW1lU3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdGFydCIsImJlZ2luR2FtZSIsImdhbWVib2FyZCIsInJlbmRlcnBsYXllcmJvYXJkIiwicmVuZGVyY3B1Ym9hcmQiLCJhZGRidXR0b25zIiwic2V0c2hpcHMiLCJhZGRjcHVzaGlwcyIsInBsYXlSb3VuZCIsImUiLCJyZW1vdmVidXR0b25zIiwidGFyZ2V0IiwiY3B1YXR0YWNrIiwicmFuZG9tYXR0YWNrIiwiY2FsY3VsYXRlZGF0dGFjayIsInBsYXllcnNxdWFyZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsImRyYWdFbnRlciIsImRyYWdPdmVyIiwiZHJhZ0xlYXZlIiwiZHJvcCIsImNwdXNxdWFyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VkaXJlY3Rpb24iLCJkcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJnZXREYXRhIiwiZHJhZ2dhYmxlIiwiYWRkc2hpcHRvYm9hcmQiLCJjaGVja3NoaXBkaXYiLCJzaGlwZGl2aW1ncyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwiY2hhbmdlc2hpcHMiLCJnZXRkaXJlY3Rpb24iLCJ0aGlzZGlyZWN0aW9uIiwic2hpcGltZ3MiLCJzdHlsZSIsInRyYW5zZm9ybSIsImFyck9mU3RycyIsIkFycmF5IiwiZnJvbSIsIk51bWJlciIsImdldHJhbmRvbW51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbWRpcmVjdGlvbiIsIm51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJzaGlmdCIsImNoZWNrbGVmdCIsImNoZWNrcmlnaHQiLCJjaGVja2Rvd24iLCJjaGVja3VwIiwib2xkcm93Iiwib2xkY29sdW1uIiwiZ2V0bGFzdEhpdCIsImdldHBsYXllciIsImdldHBsYXllcmJvYXJkIiwiZ2V0Y3B1Ym9hcmQiLCJnZXRBY3RpdmVQbGF5ZXIiLCJhY3RpdmVQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9