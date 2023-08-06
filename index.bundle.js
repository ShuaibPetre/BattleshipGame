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
    cpuboardname.setAttribute("id", "cpuboardname");
    cpuboardname.textContent = 'ENEMY BOARD';
    cpuboard.setAttribute("id", "cpuboard");
    shipdiv.setAttribute("id", "shipdiv");
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
    shipdiv.appendChild(shipdirection);
    shipdiv.appendChild(ship1);
    shipdiv.appendChild(ship2);
    shipdiv.appendChild(ship3);
    shipdiv.appendChild(ship4);
    shipdiv.appendChild(ship5);
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(shipdiv);
    document.body.appendChild(container);
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
  const addbuttons = () => {
    document.querySelectorAll('');
  };
  return {
    initialLoad,
    renderboard,
    addbuttons
  };
}
module.exports = DOMtool();

/***/ }),

/***/ "./src/Factories/board.js":
/*!********************************!*\
  !*** ./src/Factories/board.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./shipyard */ "./src/Factories/shipyard.js");
const gridsquare = __webpack_require__(/*! ./squares */ "./src/Factories/squares.js");
const fire = (__webpack_require__(/*! ../assets/Sounds/fire_shot.mp3 */ "./src/assets/Sounds/fire_shot.mp3")["default"]);
const hit = (__webpack_require__(/*! ../assets/Sounds/shot_hit.mp3 */ "./src/assets/Sounds/shot_hit.mp3")["default"]);
const miss = (__webpack_require__(/*! ../assets/Sounds/shot_miss.mp3 */ "./src/assets/Sounds/shot_miss.mp3")["default"]);
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
  async recieveAttack(row, column) {
    if (this.board[row][column].isShot === true) return false;
    this.board[row][column].isShot = true;
    this.playsound(fire);
    await this.timeout(1400);
    if (this.board[row][column].hasShip === true) {
      let shiprow = this.board[row][column].shiprow;
      let shipcolumn = this.board[row][column].shipcolumn;
      this.board[shiprow][shipcolumn].hit();
      this.playsound(hit);
    } else {
      this.playsound(miss);
    }
  }
  playsound(sound) {
    let shoot1 = new Audio(sound);
    console.log(shoot1);
    shoot1.play();
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
  async function playRound(e) {
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

    // display the draggable element
    draggable.classList.remove('hide');
    draggable.setAttribute("draggable", false);
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
      console.log(shipimgs[i]);
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
  const rendercpuboard = () => {
    let cpuboard = document.querySelector('#cpuboard');
    cpuboard.replaceChildren(DOMtool.renderboard(cpu.gameboard));
    addbuttons();
  };
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
        player1.gameboard.recieveAttack(row, column + 1);
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
        player1.gameboard.recieveAttack(row, column - 1);
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
        player1.gameboard.recieveAttack(row + 1, column);
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
        player1.gameboard.recieveAttack(row - 1, column);
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
    player1.gameboard.recieveAttack(row, column);
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
    addbuttons
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



_Gamecontroller__WEBPACK_IMPORTED_MODULE_0___default().beginGame();

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ocean_BG.png */ "./src/assets/ocean_BG.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body, html {
    margin: auto;
}
#container {
    width: 100vw;
    height: 100vh;
    margin: auto;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    text-align: center;
    color: white
}
#heading {
    margin: 0
}
#main {
    display: flex;
    justify-content: space-around;
}
.board {
    display: grid;
    grid-template-columns: repeat(10, 35px);
    grid-template-rows: repeat(10, 35px);
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
    width: 80px;
    height: 35px;
}
#ship2 {
    width: 105px;
    height: 35px;
}
#ship3 {
    width: 105px;
    height: 35px;
}
#ship4 {
    width: 140px;
    height: 35px;
}
#ship5 {
    width: 175px;
    height: 35px;
}
.cpushipsquare {
    background: red
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB;AACJ;AACA;IACI;AACJ;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;AACA;IACI;AACJ;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI;AACJ","sourcesContent":["body, html {\n    margin: auto;\n}\n#container {\n    width: 100vw;\n    height: 100vh;\n    margin: auto;\n    background-image: url(./assets/ocean_BG.png);\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    text-align: center;\n    color: white\n}\n#heading {\n    margin: 0\n}\n#main {\n    display: flex;\n    justify-content: space-around;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-gap: 1px;\n}\n.gridsquare, .cpusquare {\n    background: transparent;\n    border: thin white solid;\n}\n\n.miss {\n    background: rgba(128,128,128,0.4);\n}\n\n.shipsquare {\n    background: rgba(128,128,128,0.4);\n}\n.hit {\n    background: rgba(255,0,0,0.3)\n}\n.ship {\n    position: relative;\n    left: 0;\n    margin: auto;\n    transform-origin: 20px;\n}\n#ship1 {\n    width: 80px;\n    height: 35px;\n}\n#ship2 {\n    width: 105px;\n    height: 35px;\n}\n#ship3 {\n    width: 105px;\n    height: 35px;\n}\n#ship4 {\n    width: 140px;\n    height: 35px;\n}\n#ship5 {\n    width: 175px;\n    height: 35px;\n}\n.cpushipsquare {\n    background: red\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/ocean_BG.png":
/*!*********************************!*\
  !*** ./src/assets/ocean_BG.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9b36053fbf4ab03a7e20.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9ET01zdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9GYWN0b3JpZXMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvRmFjdG9yaWVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvRmFjdG9yaWVzL3NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0ZhY3Rvcmllcy9zcXVhcmVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4vRmFjdG9yaWVzL2JvYXJkXCIpO1xuY29uc3QgR2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9HYW1lY29udHJvbGxlclwiKTtcbmNvbnN0IGltZyA9IHJlcXVpcmUoJy4vYXNzZXRzL3NoaXAyLnBuZycpXG5jb25zdCBpbWcyID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcCgzKS5wbmcnKVxuY29uc3QgaW1nMyA9IHJlcXVpcmUoJy4vYXNzZXRzL3NoaXAoMy4yKS5wbmcnKVxuY29uc3QgaW1nNCA9IHJlcXVpcmUoJy4vYXNzZXRzL3NoaXAoNCkucG5nJylcbmNvbnN0IGltZzUgPSByZXF1aXJlKCcuL2Fzc2V0cy9zaGlwKDUpLnBuZycpXG5cbmZ1bmN0aW9uIERPTXRvb2woKSB7XG4gICAgY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGVmdHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHBsYXllcmJvYXJkbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcGxheWVyYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IHJpZ2h0c2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY3B1Ym9hcmRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjcHVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgc2hpcGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgc2hpcGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIik7XG4gICAgICAgIGxldCBzaGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxldCBzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc2hpcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNoaXA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBzaGlwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIHNoaXAxLnNyYyA9IGltZ1xuICAgICAgICBzaGlwMi5zcmMgPSBpbWczXG4gICAgICAgIHNoaXAzLnNyYyA9IGltZzJcbiAgICAgICAgc2hpcDQuc3JjID0gaW1nNFxuICAgICAgICBzaGlwNS5zcmMgPSBpbWc1XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImNvbnRhaW5lclwiKVxuXG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRpbmdcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtYWluXCIpXG4gICAgICAgIGxlZnRzaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJsZWZ0c2lkZVwiKVxuICAgICAgICBwbGF5ZXJib2FyZG5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIixcInBsYXllcmJvYXJkbmFtZVwiKTtcbiAgICAgICAgcGxheWVyYm9hcmRuYW1lLnRleHRDb250ZW50ID0gJ1lPVVIgQk9BUkQnXG4gICAgICAgIHBsYXllcmJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwbGF5ZXJib2FyZFwiKVxuXG4gICAgICAgIHJpZ2h0c2lkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicmlnaHRzaWRlXCIpXG4gICAgICAgIGNwdWJvYXJkbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY3B1Ym9hcmRuYW1lXCIpO1xuICAgICAgICBjcHVib2FyZG5hbWUudGV4dENvbnRlbnQgPSAnRU5FTVkgQk9BUkQnO1xuICAgICAgICBjcHVib2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY3B1Ym9hcmRcIilcblxuICAgICAgICBzaGlwZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwZGl2XCIpO1xuICAgICAgICBzaGlwZGlyZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwZGlyZWN0aW9uXCIpO1xuICAgICAgICBzaGlwZGlyZWN0aW9uLnZhbHVlID0gJ2hvcml6b250YWwnXG5cbiAgICAgICAgc2hpcDEuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpXG4gICAgICAgIHNoaXAxLnZhbHVlID0gMlxuICAgICAgICBzaGlwMi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDIudmFsdWUgPSAzXG4gICAgICAgIHNoaXAzLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLFwidHJ1ZVwiKVxuICAgICAgICBzaGlwMy52YWx1ZSA9IDNcbiAgICAgICAgc2hpcDQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpXG4gICAgICAgIHNoaXA0LnZhbHVlID0gNFxuICAgICAgICBzaGlwNS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDUudmFsdWUgPSA1XG5cbiAgICAgICAgc2hpcDEuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAxXCIpO1xuICAgICAgICBzaGlwMS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDIuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAyXCIpO1xuICAgICAgICBzaGlwMi5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDMuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAzXCIpO1xuICAgICAgICBzaGlwMy5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDQuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXA0XCIpO1xuICAgICAgICBzaGlwNC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgc2hpcDUuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXA1XCIpO1xuICAgICAgICBzaGlwNS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsZWZ0c2lkZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmlnaHRzaWRlKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmRuYW1lKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmQpXG4gICAgICAgIHJpZ2h0c2lkZS5hcHBlbmRDaGlsZChjcHVib2FyZG5hbWUpO1xuICAgICAgICByaWdodHNpZGUuYXBwZW5kQ2hpbGQoY3B1Ym9hcmQpXG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcGRpcmVjdGlvbilcbiAgICAgICAgc2hpcGRpdi5hcHBlbmRDaGlsZChzaGlwMSk7XG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDIpO1xuICAgICAgICBzaGlwZGl2LmFwcGVuZENoaWxkKHNoaXAzKTtcbiAgICAgICAgc2hpcGRpdi5hcHBlbmRDaGlsZChzaGlwNCk7XG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBkaXYpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJvYXJkXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkc3F1YXJlJylcbiAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSBpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sdW1uID0galxuICAgICAgICAgICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXS5pc1Nob3QgPT09IHRydWUgJiYgYm9hcmQuYm9hcmRbaV1bal0uaGFzU2hpcCA9PT0gdHJ1ZSkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV1bal0uaXNTaG90ID09PSB0cnVlICYmIGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgPT09IGZhbHNlKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgLy8gY3B1IGJvYXJkXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLnBsYXllciAhPT0gJ2NwdScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcHNxdWFyZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJzcXVhcmUnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0uaXNTaGlwID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYm9hcmQuYm9hcmRbaV1bal0uc2hpcHNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChib2FyZC5wbGF5ZXIgPT09ICdjcHUnICYmIGJvYXJkLmJvYXJkW2ldW2pdLmlzU2hvdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NwdXNxdWFyZScpXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgPT09IHRydWUpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjcHVzaGlwc3F1YXJlJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSlcbiAgICAgICAgfX1cbiAgICAgICAgcmV0dXJuIGdyaWRcbiAgICB9XG5cbiAgICBjb25zdCBhZGRidXR0b25zID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcnKVxuICAgIH1cblxuICAgIHJldHVybiB7aW5pdGlhbExvYWQsIHJlbmRlcmJvYXJkLCBhZGRidXR0b25zfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERPTXRvb2woKSIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlweWFyZFwiKVxuY29uc3QgZ3JpZHNxdWFyZSA9IHJlcXVpcmUoXCIuL3NxdWFyZXNcIilcbmNvbnN0IGZpcmUgPSByZXF1aXJlKGAuLi9hc3NldHMvU291bmRzL2ZpcmVfc2hvdC5tcDNgKS5kZWZhdWx0XG5jb25zdCBoaXQgPSByZXF1aXJlKGAuLi9hc3NldHMvU291bmRzL3Nob3RfaGl0Lm1wM2ApLmRlZmF1bHRcbmNvbnN0IG1pc3MgPSByZXF1aXJlKGAuLi9hc3NldHMvU291bmRzL3Nob3RfbWlzcy5tcDNgKS5kZWZhdWx0XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlYm9hcmQoKSB7XG4gICAgICAgIC8vbGV0IHZhbHVlID0geyBoYXNTaGlwOiBmYWxzZSwgaXNTaG90OiBmYWxzZSwgc2hpcHJvdzogbnVsbCwgc2hpcGNvbHVtbjogbnVsbCB9XG4gICAgICAgIGxldCByb3dzID0gMTBcbiAgICAgICAgbGV0IGJvYXJkID0gW11cbiAgICAgICAgbGV0IGNvbHVtbnMgPSAxMFxuICAgICAgICBsZXQgaWQgPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICBib2FyZFtpXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBuZXcgZ3JpZHNxdWFyZVxuICAgICAgICAgICAgICAgIHNxdWFyZS5pZCA9IGlkXG4gICAgICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIGlkKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZCA9IGJvYXJkXG4gICAgICAgIH1cblxuICAgIGFkZFNoaXAgPSAocm93ICwgY29sdW1uLCBsZW5ndGhzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2ttb3ZlKHJvdyxjb2x1bW4sbGVuZ3RocyxkaXJlY3Rpb24pID09PSBmYWxzZSkgcmV0dXJuIGFsZXJ0KCd3cm9uZyBtb3ZlJylcblxuICAgICAgICBsZXQgdGhpc1NoaXAgPSBuZXcgc2hpcChsZW5ndGhzKVxuICAgICAgICB0aGlzU2hpcC5zaGlwcm93ID0gcm93XG4gICAgICAgIHRoaXNTaGlwLnNoaXBjb2x1bW4gPSBjb2x1bW5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXNTaGlwKVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoczsgaSsrKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uaGFzU2hpcCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uK2ldLnNoaXByb3cgPSByb3dcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uK2ldLnNoaXBjb2x1bW4gPSBjb2x1bW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIC8vY2hhbmdlIHRoaXMgdG8gdmFsdWUgc2FtZSBhcyB0b3BcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3craV1bY29sdW1uXS5oYXNTaGlwID0gdHJ1ZSAgXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3craV1bY29sdW1uXS5zaGlwcm93ID0gcm93XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3craV1bY29sdW1uXS5zaGlwY29sdW1uID0gY29sdW1uICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSB0aGlzU2hpcFxuICAgIH1cbiAgICB0aW1lb3V0ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cbiAgICBhc3luYyByZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmlzU2hvdCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmlzU2hvdCA9IHRydWVcbiAgICAgICAgdGhpcy5wbGF5c291bmQoZmlyZSlcbiAgICAgICAgYXdhaXQgdGhpcy50aW1lb3V0KDE0MDApXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oYXNTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgc2hpcHJvdyA9IHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLnNoaXByb3dcbiAgICAgICAgICAgIGxldCBzaGlwY29sdW1uID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcGNvbHVtblxuICAgICAgICAgICAgdGhpcy5ib2FyZFtzaGlwcm93XVtzaGlwY29sdW1uXS5oaXQoKTsgXG4gICAgICAgICAgICB0aGlzLnBsYXlzb3VuZChoaXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlzb3VuZChtaXNzKVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXlzb3VuZChzb3VuZCkge1xuICAgICAgICBsZXQgc2hvb3QxID0gbmV3IEF1ZGlvKHNvdW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhzaG9vdDEpXG4gICAgICAgIHNob290MS5wbGF5KClcbiAgICB9XG4gICAgY2hlY2ttb3ZlKHJvdywgY29sdW1uLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93K2ldID09IHVuZGVmaW5lZCB8fCB0aGlzLmJvYXJkW3JvdytpXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjaGVja2xvc2UoKSB7XG4gICAgICAgIGxldCBhID0gdGhpcy5zaGlwc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhLmxlbmd0aCAtMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYVtpXS5zdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkIiwiY2xhc3MgcGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5ib2FyZCA9IG51bGxcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllciIsImNsYXNzIHNoaXAge1xuICAgIGNvbnN0cnVjdG9yIChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IHRydWUgXG4gICAgICAgIHRoaXMuaXNTaG90ID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc1NoaXAgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hpcHJvdyA9IG51bGxcbiAgICAgICAgdGhpcy5zaGlwY29sdW1uID0gbnVsbFxuICAgICAgICB0aGlzLnNoaXBzcmMgPSBudWxsXG4gICAgfVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuSXNTdW5rRnVuYygpO1xuICAgIH1cbiAgICBJc1N1bmtGdW5jKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyIsImNsYXNzIGdyaWRzcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc1NoaXAgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzU2hvdCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hpcHJvdyA9IG51bGxcbiAgICAgICAgdGhpcy5zaGlwY29sdW1uID0gbnVsbFxuICAgICAgICB0aGlzLnNoaXAgPSBudWxsXG4gICAgICAgIHRoaXMucm93dmFsdWUgPSBudWxsXG4gICAgICAgIHRoaXMuY29sdW1udmFsdWUgPSBudWxsXG4gICAgICAgIHRoaXMuaWQgPSBudWxsXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBudWxsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyaWRzcXVhcmUiLCJjb25zdCBzaGlwID0gcmVxdWlyZShcIi4vRmFjdG9yaWVzL3NoaXB5YXJkXCIpXG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9GYWN0b3JpZXMvYm9hcmRcIilcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vRmFjdG9yaWVzL3BsYXllcnMnKTtcbmNvbnN0IERPTXRvb2wgPSByZXF1aXJlKFwiLi9ET01zdHVmZlwiKTtcblxuZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIoKSB7XG4gICAgbGV0IHBsYXllcnMgPSBbXVxuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBjcHU7XG4gICAgbGV0IGxhc3RIaXQgPSBudWxsXG4gICAgbGV0IGNwdXNoaXBzID0gWzIsMywzLDQsNV1cblxuICAgIFxuICAgIGNvbnN0IGJlZ2luR2FtZSA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyMSA9IG5ldyBwbGF5ZXIoJ3BsYXllcm5hbWUnKVxuICAgICAgICBjcHUgPSBuZXcgcGxheWVyKCdjcHUnKVxuICAgICAgICBcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCdwbGF5ZXIxJyk7XG4gICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmluaXRpYWxpc2Vib2FyZCgpO1xuICAgICAgICBjcHUuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgnY3B1Jyk7XG4gICAgICAgIGNwdS5nYW1lYm9hcmQuaW5pdGlhbGlzZWJvYXJkKCk7XG5cbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllcjEpO1xuICAgICAgICBwbGF5ZXJzLnB1c2goY3B1KTtcbiAgICAgICAgRE9NdG9vbC5pbml0aWFsTG9hZCgpO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVycGxheWVyYm9hcmQoKTtcbiAgICAgICAgcmVuZGVyY3B1Ym9hcmQoKTtcbiAgICAgICAgYWRkYnV0dG9ucygpO1xuICAgICAgICBzZXRzaGlwcygpO1xuICAgICAgICBhZGRjcHVzaGlwcygpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5Um91bmQgKGUpIHtcbiAgICAgICAgY3B1LmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGUudGFyZ2V0LmRhdGFzZXQucm93LCBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbik7XG4gICAgICAgIGF3YWl0IHRpbWVvdXQoMjAwMCk7XG5cbiAgICAgICAgcmVuZGVyY3B1Ym9hcmQoKTtcbiAgICAgICAgaWYgKGNwdS5nYW1lYm9hcmQuY2hlY2tsb3NlKCkgPT09IHRydWUpIGFsZXJ0KCdwbGF5ZXIgd2luIScpO1xuICAgICAgICBjcHVhdHRhY2soKTtcbiAgICAgICAgYXdhaXQgdGltZW91dCgxNTAwKTtcblxuICAgICAgICByZW5kZXJwbGF5ZXJib2FyZCgpO1xuICAgICAgICAvL21vdmUgdGhpcyBiYWNrIHRvIGdhbWUgYm9hcmQsIG1ha2UgdGhlIGFkZGhpdCBmdW5jdGlvbiBhc3luYyB0aGVuIGF3YSBsaWtlIHRoaXNcbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmNoZWNrbG9zZSgpID09PSB0cnVlKSBhbGVydCgncGxheWVyIGxvc2UnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcHVhdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmKGxhc3RIaXQgIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGxhc3RIaXQuaGFzU2hpcCA9PT0gZmFsc2UpIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5kb21hdHRhY2soKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRhdHRhY2sobGFzdEhpdC5yb3d2YWx1ZSwgbGFzdEhpdC5jb2x1bW52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJhbmRvbWF0dGFjaygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRidXR0b25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgcGxheWVyc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcnNxdWFyZScpXG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBwbGF5ZXJzcXVhcmUuZm9yRWFjaChcbiAgICAgICAgICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgbm9kZS5pZCA9IGk7XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgbGV0IGNwdXNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcHVzcXVhcmUnKVxuICAgICAgICBsZXQgaiA9IDBcbiAgICAgICAgY3B1c3F1YXJlLmZvckVhY2goXG4gICAgICAgICAgICBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0c2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBkaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcGRpcmVjdGlvbicpXG4gICAgICAgIHNoaXBkaXJlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2hhbmdlZGlyZWN0aW9uKVxuICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwMScpXG4gICAgICAgIHNoaXAxLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIixkcmFnU3RhcnQpXG4gICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAyJylcbiAgICAgICAgc2hpcDIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLGRyYWdTdGFydClcbiAgICAgICAgY29uc3Qgc2hpcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcDMnKVxuICAgICAgICBzaGlwMy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsZHJhZ1N0YXJ0KVxuICAgICAgICBjb25zdCBzaGlwNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwNCcpXG4gICAgICAgIHNoaXA0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIixkcmFnU3RhcnQpXG4gICAgICAgIGNvbnN0IHNoaXA1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXA1JylcbiAgICAgICAgc2hpcDUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLGRyYWdTdGFydClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSwgMCk7fVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJvcChlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgICAgICAvLyBnZXQgdGhlIGRyYWdnYWJsZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIC8vIGFkZCBpdCB0byB0aGUgZHJvcCB0YXJnZXRcbiAgICAgICAgaWYgKGFkZHNoaXB0b2JvYXJkKGRyYWdnYWJsZSwgZS50YXJnZXQpID09PSBmYWxzZSkgcmV0dXJuIGFsZXJ0KCdpbnZhbGlkIG1vdmUsIHRyeSBhZ2FpbicpXG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBkaXNwbGF5IHRoZSBkcmFnZ2FibGUgZWxlbWVudFxuICAgICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkcmFnZ2FibGUuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIGZhbHNlKVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VkaXJlY3Rpb24gPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICBjaGFuZ2VzaGlwcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIGNoYW5nZXNoaXBzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0ZGlyZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXBkaXJlY3Rpb24nKS52YWx1ZVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VzaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRoaXNkaXJlY3Rpb24gPSAnbm9uZSdcbiAgICAgICAgaWYgKGdldGRpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB0aGlzZGlyZWN0aW9uID0gJ3JvdGF0ZSg5MGRlZyknXG4gICAgICAgIGxldCBzaGlwaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwZGl2JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2hpcGltZ3MgLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBpbWdzW2ldKTtcbiAgICAgICAgc2hpcGltZ3NbaV0uc3R5bGUudHJhbnNmb3JtID0gdGhpc2RpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0ID0gKG1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZHNoaXB0b2JvYXJkID0gKGl0ZW0sIHRhcmdldCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgICAgIGNvbnN0IGFyck9mU3RycyA9IEFycmF5LmZyb20oU3RyaW5nKHRhcmdldC5pZCkpO1xuICAgICAgICAvL2NvbnN0IGFyck9mTnVtcyA9IGFyck9mU3Rycy5tYXAoKHN0cikgPT4gTnVtYmVyKHN0cikpO1xuICAgICAgICBsZXQgcm93ID0gTnVtYmVyKGFyck9mU3Ryc1swXSk7XG4gICAgICAgIGxldCBjb2x1bW4gPSBOdW1iZXIoYXJyT2ZTdHJzWzFdKVxuICAgICAgICBpZiAodGFyZ2V0LmlkIDwgMTApIHtcbiAgICAgICAgICAgIHJvdyA9IDBcbiAgICAgICAgICAgIGNvbHVtbiA9IE51bWJlcihhcnJPZlN0cnNbMF0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxlbmd0aCA9IGl0ZW0udmFsdWVcbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmNoZWNrbW92ZShyb3csY29sdW1uLGxlbmd0aCxnZXRkaXJlY3Rpb24oKSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5hZGRTaGlwKHJvdyxjb2x1bW4sbGVuZ3RoLGdldGRpcmVjdGlvbigpKSBcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dLnNoaXBzcmMgPSBpdGVtXG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgY29uc3QgZ2V0cmFuZG9tbnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbWRpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IG51bWJlciA9IGdldHJhbmRvbW51bWJlcigpXG4gICAgICAgIGlmIChudW1iZXIgPCA1KSByZXR1cm4gXCJob3Jpem9udGFsXCJcbiAgICAgICAgZWxzZSByZXR1cm4gXCJ2ZXJ0aWNhbFwiXG4gICAgfVxuICAgIGNvbnN0IGFkZGNwdXNoaXBzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3B1c2hpcHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlbmRlcmNwdWJvYXJkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcHUuZ2FtZWJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIGxldCByb3cgPSBnZXRyYW5kb21udW1iZXIoKTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGdldHJhbmRvbW51bWJlcigpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY3B1c2hpcHNbMF07XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSByYW5kb21kaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGNwdS5nYW1lYm9hcmQuY2hlY2ttb3ZlKHJvdyxjb2x1bW4sbGVuZ3RoLGRpcmVjdGlvbikgPT09IGZhbHNlKSByZXR1cm4gYWRkY3B1c2hpcHMoKTtcbiAgICAgICAgY29uc29sZS5sb2cocm93LGNvbHVtbixsZW5ndGgsZGlyZWN0aW9uKVxuICAgICAgICByZW5kZXJjcHVib2FyZCgpO1xuICAgICAgICBpZiAoY3B1LmdhbWVib2FyZC5hZGRTaGlwKHJvdyxjb2x1bW4sbGVuZ3RoLGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjcHUuZ2FtZWJvYXJkLmJvYXJkKVxuICAgICAgICAgICAgcmV0dXJuIGFkZGNwdXNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3B1c2hpcHMuc2hpZnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coY3B1c2hpcHMpXG4gICAgICAgIHJldHVybiBhZGRjcHVzaGlwcygpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXJwbGF5ZXJib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBsYXllcmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcmJvYXJkJyk7XG4gICAgICAgIHBsYXllcmJvYXJkLnJlcGxhY2VDaGlsZHJlbihET010b29sLnJlbmRlcmJvYXJkKHBsYXllcjEuZ2FtZWJvYXJkKSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJjcHVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNwdWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdWJvYXJkJylcbiAgICAgICAgY3B1Ym9hcmQucmVwbGFjZUNoaWxkcmVuKERPTXRvb2wucmVuZGVyYm9hcmQoY3B1LmdhbWVib2FyZCkpXG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICB9XG4gICAgY29uc3QgY2FsY3VsYXRlZGF0dGFjayA9IChyb3csY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2xlZnQocm93LGNvbHVtbikgPT0gJ2EnKSByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrcmlnaHQocm93LGNvbHVtbikgPT0gJ2EnKSByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZG93bihyb3csY29sdW1uKSA9PSAnYScpIHJldHVyblxuXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrdXAocm93LGNvbHVtbikgPT09ICdhJykgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgZW5kJyk7XG4gICAgICAgICAgICBsYXN0SGl0ID0gbnVsbFxuICAgICAgICAgICAgcmFuZG9tYXR0YWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIGNvbnN0IGNoZWNrcmlnaHQgPSAob2xkcm93LG9sZGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmlnaHRjaGVjaycpXG4gICAgICAgIGxldCByb3cgPSBvbGRyb3dcbiAgICAgICAgbGV0IGNvbHVtbiA9IG9sZGNvbHVtblxuICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuICdjJ1xuXG4gICAgICAgIGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdICE9PSB1bmRlZmluZWQpIFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaXNTaG90ID09PSBmYWxzZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbisxXS5oYXNTaGlwID09PSB0cnVlKSB7IFxuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbisxKVxuICAgICAgICAgICAgICAgIHJldHVybiAnYSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uIDwgOSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbisxXS5pc1Nob3QgPT09IHRydWUgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja3JpZ2h0KHJvdywgY29sdW1uKzEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbisxXS5oYXNTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICdjXzEnICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gJ3InXG4gICAgfTtcbiAgICBjb25zdCBjaGVja2xlZnQgPSAob2xkcm93LG9sZGNvbHVtbikgPT4ge1xuICAgICAgICAvL2NoZWNrIGxlZnQgaGl0c1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdGNoZWNrJylcbiAgICAgICAgbGV0IHJvdyA9IG9sZHJvd1xuICAgICAgICBsZXQgY29sdW1uID0gb2xkY29sdW1uXG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ2InXG4gICAgICAgIGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdICE9PSB1bmRlZmluZWQpIFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaXNTaG90ID09PSBmYWxzZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXS5oYXNTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uLTEpIFxuICAgICAgICAgICAgICAgIHJldHVybiAnYSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uIDwgOSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXS5pc1Nob3QgPT09IHRydWUgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2xlZnQocm93LCBjb2x1bW4tMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdLmhhc1NoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsJ1xuICAgICAgICAgICAgfSBlbHNlIHJldHVybiAnYl8xJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuICdyJ1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGVja3VwID0gKG9sZHJvdyxvbGRjb2x1bW4pID0+IHtcbiAgICAgICAgLy9nbyB1cFxuICAgICAgICBjb25zb2xlLmxvZygndXBjaGVjaycpXG4gICAgICAgIGxldCByb3cgPSBvbGRyb3dcbiAgICAgICAgbGV0IGNvbHVtbiA9IG9sZGNvbHVtblxuICAgICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdID09PSB1bmRlZmluZWQpIHJldHVybiAnZCdcblxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3crMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3JvdysxXVtjb2x1bW5dLmlzU2hvdCA9PT0gZmFsc2UgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2socm93KzEsY29sdW1uKVxuICAgICAgICAgICAgICAgIHJldHVybiAnYSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93IDwgOSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3crMV1bY29sdW1uXS5pc1Nob3QgPT09IHRydWUgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaGFzU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja3VwKHJvdysxLCBjb2x1bW4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3crMV1bY29sdW1uXS5oYXNTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2wnXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuICdkXzEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiAncidcbiAgICAgICAgfVxuICAgIGNvbnN0IGNoZWNrZG93biA9IChvbGRyb3csb2xkY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3duY2hlY2snKVxuICAgICAgICBsZXQgcm93ID0gb2xkcm93XG4gICAgICAgIGxldCBjb2x1bW4gPSBvbGRjb2x1bW5cbiAgICAgICAgaWYgIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuICdlJ1xuICAgICAgICBlbHNlIGlmICAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5pc1Nob3QgPT09IGZhbHNlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvdy0xXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdy0xLGNvbHVtbilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2EnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdyA+IDAgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdW2NvbHVtbl0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvdy0xXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tkb3duKHJvdy0xLCBjb2x1bW4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5oYXNTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICdlXzEnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gJ3InXG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tYXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0uaXNTaG90ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByYW5kb21hdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4pO1xuICAgICAgICBsYXN0SGl0ID0gcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgICAgIGxhc3RIaXQucm93dmFsdWUgPSByb3c7XG4gICAgICAgIGxhc3RIaXQuY29sdW1udmFsdWUgPSBjb2x1bW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0bGFzdEhpdCA9ICgpID0+IGxhc3RIaXRcbiAgICBjb25zdCBnZXRwbGF5ZXIgPSAoKSA9PiBwbGF5ZXIxXG4gICAgY29uc3QgZ2V0cGxheWVyYm9hcmQgPSAoKSA9PiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFxuICAgIGNvbnN0IGdldGNwdWJvYXJkID0gKCkgPT4gY3B1LmdhbWVib2FyZC5ib2FyZFxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gICAgcmV0dXJuIHtiZWdpbkdhbWUsIGdldHBsYXllcmJvYXJkLCBnZXRwbGF5ZXIsIHBsYXlSb3VuZCwgZ2V0Y3B1Ym9hcmQsIGNwdWF0dGFjayxcbiAgICByYW5kb21hdHRhY2ssIGdldGxhc3RIaXQsIGFkZGJ1dHRvbnN9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXIoKSIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL0dhbWVjb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERPTXRvb2wgZnJvbSAnLi9ET01zdHVmZidcblxuR2FtZUNvbnRyb2xsZXIuYmVnaW5HYW1lKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvb2NlYW5fQkcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LCBodG1sIHtcbiAgICBtYXJnaW46IGF1dG87XG59XG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuI2hlYWRpbmcge1xuICAgIG1hcmdpbjogMFxufVxuI21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcbiAgICBncmlkLWdhcDogMXB4O1xufVxuLmdyaWRzcXVhcmUsIC5jcHVzcXVhcmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZDtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsMC40KTtcbn1cblxuLnNoaXBzcXVhcmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsMC40KTtcbn1cbi5oaXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjMpXG59XG4uc2hpcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwcHg7XG59XG4jc2hpcDEge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbiNzaGlwMiB7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbiNzaGlwMyB7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbiNzaGlwNCB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbiNzaGlwNSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cbi5jcHVzaGlwc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kOiByZWRcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlEQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvb2NlYW5fQkcucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbn1cXG4jaGVhZGluZyB7XFxuICAgIG1hcmdpbjogMFxcbn1cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC1nYXA6IDFweDtcXG59XFxuLmdyaWRzcXVhcmUsIC5jcHVzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsMC40KTtcXG59XFxuXFxuLnNoaXBzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LDAuNCk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4zKVxcbn1cXG4uc2hpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyMHB4O1xcbn1cXG4jc2hpcDEge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4jc2hpcDIge1xcbiAgICB3aWR0aDogMTA1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuI3NoaXAzIHtcXG4gICAgd2lkdGg6IDEwNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcbiNzaGlwNCB7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4jc2hpcDUge1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuLmNwdXNoaXBzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZWRcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInJlcXVpcmUiLCJHYW1lQ29udHJvbGxlciIsImltZyIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJET010b29sIiwiaW5pdGlhbExvYWQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkZXIiLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJtYWluIiwibGVmdHNpZGUiLCJwbGF5ZXJib2FyZG5hbWUiLCJwbGF5ZXJib2FyZCIsInJpZ2h0c2lkZSIsImNwdWJvYXJkbmFtZSIsImNwdWJvYXJkIiwic2hpcGRpdiIsInNoaXBkaXJlY3Rpb24iLCJzaGlwMSIsInNoaXAyIiwic2hpcDMiLCJzaGlwNCIsInNoaXA1Iiwic3JjIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYm9keSIsInJlbmRlcmJvYXJkIiwiYm9hcmQiLCJncmlkIiwiaiIsInNxdWFyZSIsImRhdGFzZXQiLCJyb3ciLCJjb2x1bW4iLCJpc1Nob3QiLCJoYXNTaGlwIiwicGxheWVyIiwiaXNTaGlwIiwiaW1hZ2UiLCJzaGlwc3JjIiwiYWRkYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaGlwIiwiZ3JpZHNxdWFyZSIsImZpcmUiLCJoaXQiLCJtaXNzIiwiY29uc3RydWN0b3IiLCJzaGlwcyIsImluaXRpYWxpc2Vib2FyZCIsInJvd3MiLCJjb2x1bW5zIiwiYWRkU2hpcCIsImxlbmd0aHMiLCJkaXJlY3Rpb24iLCJjaGVja21vdmUiLCJhbGVydCIsInRoaXNTaGlwIiwic2hpcHJvdyIsInNoaXBjb2x1bW4iLCJ0aW1lb3V0IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyZWNpZXZlQXR0YWNrIiwicGxheXNvdW5kIiwic291bmQiLCJzaG9vdDEiLCJBdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwiY2hlY2tsb3NlIiwiYSIsInN1bmsiLCJuYW1lIiwiaGl0cyIsIklzU3Vua0Z1bmMiLCJyb3d2YWx1ZSIsImNvbHVtbnZhbHVlIiwicGxheWVycyIsInBsYXllcjEiLCJjcHUiLCJsYXN0SGl0IiwiY3B1c2hpcHMiLCJiZWdpbkdhbWUiLCJnYW1lYm9hcmQiLCJyZW5kZXJwbGF5ZXJib2FyZCIsInJlbmRlcmNwdWJvYXJkIiwic2V0c2hpcHMiLCJhZGRjcHVzaGlwcyIsInBsYXlSb3VuZCIsImUiLCJ0YXJnZXQiLCJjcHVhdHRhY2siLCJyYW5kb21hdHRhY2siLCJjYWxjdWxhdGVkYXR0YWNrIiwicGxheWVyc3F1YXJlIiwiZm9yRWFjaCIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhZ0VudGVyIiwiZHJhZ092ZXIiLCJkcmFnTGVhdmUiLCJkcm9wIiwiY3B1c3F1YXJlIiwicXVlcnlTZWxlY3RvciIsImNoYW5nZWRpcmVjdGlvbiIsImRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsImdldERhdGEiLCJkcmFnZ2FibGUiLCJnZXRFbGVtZW50QnlJZCIsImFkZHNoaXB0b2JvYXJkIiwiY2hhbmdlc2hpcHMiLCJnZXRkaXJlY3Rpb24iLCJ0aGlzZGlyZWN0aW9uIiwic2hpcGltZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYXJyT2ZTdHJzIiwiQXJyYXkiLCJmcm9tIiwiTnVtYmVyIiwiZ2V0cmFuZG9tbnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tZGlyZWN0aW9uIiwibnVtYmVyIiwic2hpZnQiLCJyZXBsYWNlQ2hpbGRyZW4iLCJjaGVja2xlZnQiLCJjaGVja3JpZ2h0IiwiY2hlY2tkb3duIiwiY2hlY2t1cCIsIm9sZHJvdyIsIm9sZGNvbHVtbiIsImdldGxhc3RIaXQiLCJnZXRwbGF5ZXIiLCJnZXRwbGF5ZXJib2FyZCIsImdldGNwdWJvYXJkIiwiZ2V0QWN0aXZlUGxheWVyIiwiYWN0aXZlUGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==