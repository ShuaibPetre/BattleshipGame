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
    ship2.setAttribute("id", "ship2");
    ship3.setAttribute("id", "ship3");
    ship4.setAttribute("id", "ship4");
    ship5.setAttribute("id", "ship5");
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
    console.log(board);
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
        if (board.player === 'cpu' && board.board[i][j].isShot === false) {
          square.classList.add('cpusquare');
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
    if (this.checkmove() === false) return false;
    let thisShip = new ship(lengths);
    thisShip.shiprow = row;
    thisShip.shipcolumn = column;
    this.ships.push(thisShip);
    if (direction === 'horizontal') {
      for (let i = 0; i < lengths; i++) {
        this.board[row][column + i].hasShip = true;
        this.board[row][column + i].shiprow = row;
        this.board[row][column + i].shipcolumn = column;
      }
    } else if (direction === 'vertical') {
      //change this to value same as top
      for (let i = 0; i < lengths; i++) {
        this.board[row + i][column].hasShip = true;
        this.board[row + i][column].shiprow = row;
        this.board[row + i][column].shipcolumn = column;
      }
    }
    this.board[row][column] = thisShip;
  };
  recieveAttack(row, column) {
    if (this.board[row][column].isShot === true) return false;
    this.board[row][column].isShot = true;
    if (this.board[row][column].hasShip === true) {
      let shiprow = this.board[row][column].shiprow;
      let shipcolumn = this.board[row][column].shipcolumn;
      this.board[shiprow][shipcolumn].hit();
    }
  }
  checkmove(row, column, length) {
    for (let i = 0; i < Number(length); i++) {
      if (this.board[row][column + i].hasShip === true) return false;
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
  };
  const addplayership = (row, column, length, direction) => {
    player1.gameboard.addShip(row, column, length, direction);
  };
  const addcpuship = (row, column, length, direction) => {
    cpu.gameboard.addShip(row, column, length, direction);
  };
  const playRound = e => {
    cpu.gameboard.recieveAttack(e.target.dataset.row, e.target.dataset.column);
    rendercpuboard();
    cpuattack();
    renderplayerboard();
  };
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
    let cpusquare = document.querySelectorAll('.cpusquare');
    let i = 0;
    let row = 0;
    let column = 0;
    cpusquare.forEach(function (node) {
      node.id = i;
      node.addEventListener('click', playRound);
      node.addEventListener('dragenter', dragEnter);
      node.addEventListener('dragover', dragOver);
      node.addEventListener('dragleave', dragLeave);
      node.addEventListener('drop', drop);
      i++;
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
    e.target.appendChild(draggable);
    addshiptoboard(draggable, e.target);
    // display the draggable element
    draggable.classList.remove('hide');
  }
  const changedirection = e => {
    console.log(getdirection());
    if (e.target.value === "horizontal") e.target.value = "vertical";else e.target.value = "horizontal";
  };
  const getdirection = () => {
    return document.querySelector('#shipdirection').value;
  };
  const addshiptoboard = (item, target) => {
    console.log(item);
    console.log(target);
    const arrOfStrs = Array.from(String(target.id));
    const arrOfNums = arrOfStrs.map(str => Number(str));
    console.log(arrOfNums.length);
    let row = arrOfNums[0];
    let column;
    if (arrOfNums.length = 1) {
      row = 0;
      column = arrOfNums[0];
    } else {
      column = arrOfNums[1];
    }
    let length = item.value;
    player1.gameboard.addShip(row, column, length, getdirection());
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
    //check left hits

    if (player1.gameboard.board[row][column + 1].isShot === false && player1.gameboard.board[row][column + 1].hasShip === true) player1.gameboard.recieveAttack(row, column + 1);else if (player1.gameboard.board[row][column + 1].isShot === true && player1.gameboard.board[row][column + 1].hasShip === true && column < 9) {
      calculatedattack(row, column + 1);
    }
    //check right hits
    else if (player1.gameboard.board[row][column - 1].isShot === false && player1.gameboard.board[row][column - 1].hasShip === true) player1.gameboard.recieveAttack(row, column - 1);else if (player1.gameboard.board[row][column - 1].isShot === true && player1.gameboard.board[row][column - 1].hasShip === true && column > 0) {
      calculatedattack(row, column - 1);
    }
    //go down
    else if (player1.gameboard.board[row - 1][column].isShot === false && player1.gameboard.board[row][column - 1].hasShip === true) player1.gameboard.recieveAttack(row - 1, column);else if (player1.gameboard.board[row - 1][column].isShot === true && player1.gameboard.board[row - 1][column].hasShip === true && row > 0) {
      calculatedattack(row - 1, column);
    }
    //go up
    else if (player1.gameboard.board[row + 1][column].isShot === false && player1.gameboard.board[row][column - 1].hasShip === true) player1.gameboard.recieveAttack(row + 1, column);else if (player1.gameboard.board[row + 1][column].isShot === true && player1.gameboard.board[row + 1][column].hasShip === true && row < 9) {
      calculatedattack(row + 1, column);
    } else {
      randomattack();
      lastHit = null;
    }
  };
  const randomattack = () => {
    const row = Math.floor(Math.random() * 9);
    const column = Math.floor(Math.random() * 9);
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
    addplayership,
    addcpuship,
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
    background: grey;
    opacity: 70%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,kBAAkB;IAClB;AACJ;AACA;IACI;AACJ;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":["body, html {\n    margin: auto;\n}\n#container {\n    width: 100vw;\n    height: 100vh;\n    margin: auto;\n    background-image: url(./assets/ocean_BG.png);\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    text-align: center;\n    color: white\n}\n#heading {\n    margin: 0\n}\n#main {\n    display: flex;\n    justify-content: space-around;\n}\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 35px);\n    grid-template-rows: repeat(10, 35px);\n    grid-gap: 1px;\n}\n.gridsquare, .cpusquare {\n    background: transparent;\n    border: thin white solid;\n}\n\n.miss {\n    background: grey;\n    opacity: 70%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLHNCQUFzQixFQUFFO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFFOztFQUViO0VBQ0FBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUEsRUFBRztJQUNsQyxPQUFPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLElBQUksRUFBRTtNQUM5QixJQUFJQyxPQUFPLEdBQUcsRUFBRTtNQUNoQixJQUFJQyxTQUFTLEdBQUcsT0FBT0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVc7TUFDOUMsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1hDLE9BQU8sSUFBSSxhQUFhLENBQUNFLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztNQUNqRDtNQUNBLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksU0FBUyxDQUFDRSxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDNUM7TUFDQSxJQUFJRSxTQUFTLEVBQUU7UUFDYkQsT0FBTyxJQUFJLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDRCxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDakY7TUFDQUMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBSSxDQUFDO01BQ3ZDLElBQUlFLFNBQVMsRUFBRTtRQUNiRCxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLE9BQU9BLE9BQU87SUFDaEIsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDYixDQUFDOztFQUVEO0VBQ0FSLElBQUksQ0FBQ1MsQ0FBQyxHQUFHLFNBQVNBLENBQUNBLENBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0lBQzNELElBQUksT0FBT0osT0FBTyxLQUFLLFFBQVEsRUFBRTtNQUMvQkEsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUVBLE9BQU8sRUFBRUssU0FBUyxDQUFDLENBQUM7SUFDeEM7SUFDQSxJQUFJQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSUosTUFBTSxFQUFFO01BQ1YsS0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDVixNQUFNLEVBQUVVLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUlDLEVBQUUsR0FBRyxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJQyxFQUFFLElBQUksSUFBSSxFQUFFO1VBQ2RGLHNCQUFzQixDQUFDRSxFQUFFLENBQUMsR0FBRyxJQUFJO1FBQ25DO01BQ0Y7SUFDRjtJQUNBLEtBQUssSUFBSUMsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHVCxPQUFPLENBQUNILE1BQU0sRUFBRVksRUFBRSxFQUFFLEVBQUU7TUFDMUMsSUFBSWhCLElBQUksR0FBRyxFQUFFLENBQUNHLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDUyxFQUFFLENBQUMsQ0FBQztNQUNqQyxJQUFJUCxNQUFNLElBQUlJLHNCQUFzQixDQUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3QztNQUNGO01BQ0EsSUFBSSxPQUFPVyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ2hDLElBQUksT0FBT1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtVQUNsQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHVyxLQUFLO1FBQ2pCLENBQUMsTUFBTTtVQUNMWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUNELE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDbkdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1csS0FBSztRQUNqQjtNQUNGO01BQ0EsSUFBSUgsS0FBSyxFQUFFO1FBQ1QsSUFBSSxDQUFDUixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDWkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHUSxLQUFLO1FBQ2pCLENBQUMsTUFBTTtVQUNMUixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQ0csTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQzlEQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdRLEtBQUs7UUFDakI7TUFDRjtNQUNBLElBQUlFLFFBQVEsRUFBRTtRQUNaLElBQUksQ0FBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ1pBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUNHLE1BQU0sQ0FBQ08sUUFBUSxDQUFDO1FBQy9CLENBQUMsTUFBTTtVQUNMVixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQ0csTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ25FQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdVLFFBQVE7UUFDcEI7TUFDRjtNQUNBYixJQUFJLENBQUNvQixJQUFJLENBQUNqQixJQUFJLENBQUM7SUFDakI7RUFDRixDQUFDO0VBQ0QsT0FBT0gsSUFBSTtBQUNiLENBQUM7Ozs7Ozs7Ozs7O0FDcEZZOztBQUViSCxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVdUIsR0FBRyxFQUFFQyxPQUFPLEVBQUU7RUFDdkMsSUFBSSxDQUFDQSxPQUFPLEVBQUU7SUFDWkEsT0FBTyxHQUFHLENBQUMsQ0FBQztFQUNkO0VBQ0EsSUFBSSxDQUFDRCxHQUFHLEVBQUU7SUFDUixPQUFPQSxHQUFHO0VBQ1o7RUFDQUEsR0FBRyxHQUFHRSxNQUFNLENBQUNGLEdBQUcsQ0FBQ0csVUFBVSxHQUFHSCxHQUFHLENBQUNJLE9BQU8sR0FBR0osR0FBRyxDQUFDOztFQUVoRDtFQUNBLElBQUksY0FBYyxDQUFDSyxJQUFJLENBQUNMLEdBQUcsQ0FBQyxFQUFFO0lBQzVCQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ00sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4QjtFQUNBLElBQUlMLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO0lBQ2hCUCxHQUFHLElBQUlDLE9BQU8sQ0FBQ00sSUFBSTtFQUNyQjs7RUFFQTtFQUNBO0VBQ0EsSUFBSSxtQkFBbUIsQ0FBQ0YsSUFBSSxDQUFDTCxHQUFHLENBQUMsSUFBSUMsT0FBTyxDQUFDTyxVQUFVLEVBQUU7SUFDdkQsT0FBTyxJQUFJLENBQUN2QixNQUFNLENBQUNlLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDMUU7RUFDQSxPQUFPVCxHQUFHO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7QUN6Qlk7O0FBRWJ4QixNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVSyxJQUFJLEVBQUU7RUFDL0IsSUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3JCLElBQUk0QixVQUFVLEdBQUc1QixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLElBQUksQ0FBQzRCLFVBQVUsRUFBRTtJQUNmLE9BQU8zQixPQUFPO0VBQ2hCO0VBQ0EsSUFBSSxPQUFPNEIsSUFBSSxLQUFLLFVBQVUsRUFBRTtJQUM5QixJQUFJQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJTyxJQUFJLEdBQUcsOERBQThELENBQUNoQyxNQUFNLENBQUMyQixNQUFNLENBQUM7SUFDeEYsSUFBSU0sYUFBYSxHQUFHLE1BQU0sQ0FBQ2pDLE1BQU0sQ0FBQ2dDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDOUMsT0FBTyxDQUFDbEMsT0FBTyxDQUFDLENBQUNFLE1BQU0sQ0FBQyxDQUFDaUMsYUFBYSxDQUFDLENBQUMsQ0FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDckQ7RUFDQSxPQUFPLENBQUNKLE9BQU8sQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7QUNmRCxNQUFNZ0MsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFtQixDQUFDO0FBQzlDLE1BQU1DLGNBQWMsR0FBR0QsbUJBQU8sQ0FBQyxpREFBa0IsQ0FBQztBQUNsRCxNQUFNRSxHQUFHLEdBQUdGLG1CQUFPLENBQUMsa0RBQW9CLENBQUM7QUFDekMsTUFBTUcsSUFBSSxHQUFHSCxtQkFBTyxDQUFDLHNEQUFzQixDQUFDO0FBQzVDLE1BQU1JLElBQUksR0FBR0osbUJBQU8sQ0FBQywwREFBd0IsQ0FBQztBQUM5QyxNQUFNSyxJQUFJLEdBQUdMLG1CQUFPLENBQUMsc0RBQXNCLENBQUM7QUFDNUMsTUFBTU0sSUFBSSxHQUFHTixtQkFBTyxDQUFDLHNEQUFzQixDQUFDO0FBRTVDLFNBQVNPLE9BQU9BLENBQUEsRUFBRztFQUNmLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3RCLElBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDLElBQUlFLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQUlHLFdBQVcsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLElBQUlJLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hDLElBQUlLLFFBQVEsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzVDLElBQUlNLGVBQWUsR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ25ELElBQUlPLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLElBQUlRLFNBQVMsR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDLElBQUlTLFlBQVksR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hELElBQUlVLFFBQVEsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzVDLElBQUlXLE9BQU8sR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUlZLGFBQWEsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQUlhLEtBQUssR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUljLEtBQUssR0FBR2YsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUllLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFJZ0IsS0FBSyxHQUFHakIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUlpQixLQUFLLEdBQUdsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFekNhLEtBQUssQ0FBQ0ssR0FBRyxHQUFHM0IsR0FBRztJQUNmdUIsS0FBSyxDQUFDSSxHQUFHLEdBQUd6QixJQUFJO0lBQ2hCc0IsS0FBSyxDQUFDRyxHQUFHLEdBQUcxQixJQUFJO0lBQ2hCd0IsS0FBSyxDQUFDRSxHQUFHLEdBQUd4QixJQUFJO0lBQ2hCdUIsS0FBSyxDQUFDQyxHQUFHLEdBQUd2QixJQUFJO0lBRWhCRyxTQUFTLENBQUNxQixZQUFZLENBQUMsSUFBSSxFQUFDLFdBQVcsQ0FBQztJQUV4Q2xCLE1BQU0sQ0FBQ2tCLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0lBQ25DakIsT0FBTyxDQUFDaUIsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7SUFDckNqQixPQUFPLENBQUNrQixXQUFXLEdBQUcsWUFBWTtJQUNsQ2pCLFdBQVcsQ0FBQ2dCLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDO0lBRTdDZixJQUFJLENBQUNlLFlBQVksQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDO0lBQzlCZCxRQUFRLENBQUNjLFlBQVksQ0FBQyxJQUFJLEVBQUMsVUFBVSxDQUFDO0lBQ3RDYixlQUFlLENBQUNhLFlBQVksQ0FBQyxJQUFJLEVBQUMsaUJBQWlCLENBQUM7SUFDcERiLGVBQWUsQ0FBQ2MsV0FBVyxHQUFHLFlBQVk7SUFDMUNiLFdBQVcsQ0FBQ1ksWUFBWSxDQUFDLElBQUksRUFBQyxhQUFhLENBQUM7SUFFNUNYLFNBQVMsQ0FBQ1csWUFBWSxDQUFDLElBQUksRUFBQyxXQUFXLENBQUM7SUFDeENWLFlBQVksQ0FBQ1UsWUFBWSxDQUFDLElBQUksRUFBQyxjQUFjLENBQUM7SUFDOUNWLFlBQVksQ0FBQ1csV0FBVyxHQUFHLGFBQWE7SUFDeENWLFFBQVEsQ0FBQ1MsWUFBWSxDQUFDLElBQUksRUFBQyxVQUFVLENBQUM7SUFFdENSLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDLElBQUksRUFBQyxTQUFTLENBQUM7SUFDcENQLGFBQWEsQ0FBQ08sWUFBWSxDQUFDLElBQUksRUFBQyxlQUFlLENBQUM7SUFDaERQLGFBQWEsQ0FBQ1MsS0FBSyxHQUFHLFlBQVk7SUFFbENSLEtBQUssQ0FBQ00sWUFBWSxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUM7SUFDdENOLEtBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDZlAsS0FBSyxDQUFDSyxZQUFZLENBQUMsV0FBVyxFQUFDLE1BQU0sQ0FBQztJQUN0Q0wsS0FBSyxDQUFDTyxLQUFLLEdBQUcsQ0FBQztJQUNmTixLQUFLLENBQUNJLFlBQVksQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDO0lBQ3RDSixLQUFLLENBQUNNLEtBQUssR0FBRyxDQUFDO0lBQ2ZMLEtBQUssQ0FBQ0csWUFBWSxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUM7SUFDdENILEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7SUFDZkosS0FBSyxDQUFDRSxZQUFZLENBQUMsV0FBVyxFQUFDLE1BQU0sQ0FBQztJQUN0Q0YsS0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQztJQUVmUixLQUFLLENBQUNNLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDO0lBQ2hDTCxLQUFLLENBQUNLLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDO0lBQ2hDSixLQUFLLENBQUNJLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDO0lBQ2hDSCxLQUFLLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDO0lBQ2hDRixLQUFLLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDO0lBRWhDbEIsTUFBTSxDQUFDcUIsV0FBVyxDQUFDcEIsT0FBTyxDQUFDO0lBQzNCRCxNQUFNLENBQUNxQixXQUFXLENBQUNuQixXQUFXLENBQUM7SUFDL0JDLElBQUksQ0FBQ2tCLFdBQVcsQ0FBQ2pCLFFBQVEsQ0FBQztJQUMxQkQsSUFBSSxDQUFDa0IsV0FBVyxDQUFDZCxTQUFTLENBQUM7SUFDM0JILFFBQVEsQ0FBQ2lCLFdBQVcsQ0FBQ2hCLGVBQWUsQ0FBQztJQUNyQ0QsUUFBUSxDQUFDaUIsV0FBVyxDQUFDZixXQUFXLENBQUM7SUFDakNDLFNBQVMsQ0FBQ2MsV0FBVyxDQUFDYixZQUFZLENBQUM7SUFDbkNELFNBQVMsQ0FBQ2MsV0FBVyxDQUFDWixRQUFRLENBQUM7SUFDL0JDLE9BQU8sQ0FBQ1csV0FBVyxDQUFDVixhQUFhLENBQUM7SUFDbENELE9BQU8sQ0FBQ1csV0FBVyxDQUFDVCxLQUFLLENBQUM7SUFDMUJGLE9BQU8sQ0FBQ1csV0FBVyxDQUFDUixLQUFLLENBQUM7SUFDMUJILE9BQU8sQ0FBQ1csV0FBVyxDQUFDUCxLQUFLLENBQUM7SUFDMUJKLE9BQU8sQ0FBQ1csV0FBVyxDQUFDTixLQUFLLENBQUM7SUFDMUJMLE9BQU8sQ0FBQ1csV0FBVyxDQUFDTCxLQUFLLENBQUM7SUFDMUJuQixTQUFTLENBQUN3QixXQUFXLENBQUNyQixNQUFNLENBQUM7SUFDN0JILFNBQVMsQ0FBQ3dCLFdBQVcsQ0FBQ2xCLElBQUksQ0FBQztJQUMzQk4sU0FBUyxDQUFDd0IsV0FBVyxDQUFDWCxPQUFPLENBQUM7SUFDOUJaLFFBQVEsQ0FBQ3dCLElBQUksQ0FBQ0QsV0FBVyxDQUFDeEIsU0FBUyxDQUFDO0VBQ3hDLENBQUM7RUFFRCxNQUFNMEIsV0FBVyxHQUFJQyxLQUFLLElBQUs7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7SUFDbEIsSUFBSUcsSUFBSSxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hDNEIsSUFBSSxDQUFDVCxZQUFZLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQztJQUNsQyxLQUFLLElBQUk5RCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN6QixLQUFLLElBQUl3RSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN6QixJQUFJQyxNQUFNLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDMUM4QixNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNsQ0YsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsR0FBRzdFLENBQUM7UUFDdEJ5RSxNQUFNLENBQUNHLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHTixDQUFDO1FBQ3pCLElBQUlKLEtBQUssQ0FBQ0EsS0FBSyxDQUFDcEUsQ0FBQyxDQUFDLENBQUN3RSxDQUFDLENBQUMsQ0FBQ08sTUFBTSxLQUFLLElBQUksSUFBSVgsS0FBSyxDQUFDQSxLQUFLLENBQUNwRSxDQUFDLENBQUMsQ0FBQ3dFLENBQUMsQ0FBQyxDQUFDUSxPQUFPLEtBQUssSUFBSSxFQUFFUCxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUNuRyxJQUFJUCxLQUFLLENBQUNBLEtBQUssQ0FBQ3BFLENBQUMsQ0FBQyxDQUFDd0UsQ0FBQyxDQUFDLENBQUNPLE1BQU0sS0FBSyxJQUFJLElBQUlYLEtBQUssQ0FBQ0EsS0FBSyxDQUFDcEUsQ0FBQyxDQUFDLENBQUN3RSxDQUFDLENBQUMsQ0FBQ1EsT0FBTyxLQUFLLEtBQUssRUFBRVAsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDL0c7UUFDQSxJQUFJUCxLQUFLLENBQUNhLE1BQU0sS0FBSyxLQUFLLElBQUliLEtBQUssQ0FBQ0EsS0FBSyxDQUFDcEUsQ0FBQyxDQUFDLENBQUN3RSxDQUFDLENBQUMsQ0FBQ08sTUFBTSxLQUFLLEtBQUssRUFBRTtVQUM5RE4sTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDckM7UUFDQUosSUFBSSxDQUFDTixXQUFXLENBQUNRLE1BQU0sQ0FBQztNQUNoQztJQUFDO0lBQ0QsT0FBT0YsSUFBSTtFQUNmLENBQUM7RUFFRCxNQUFNVyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUNyQnhDLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztFQUNqQyxDQUFDO0VBRUQsT0FBTztJQUFDM0MsV0FBVztJQUFFMkIsV0FBVztJQUFFZTtFQUFVLENBQUM7QUFDakQ7QUFFQTlGLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHa0QsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUMxSDFCLE1BQU02QyxJQUFJLEdBQUdwRCxtQkFBTyxDQUFDLCtDQUFZLENBQUM7QUFDbEMsTUFBTXFELFVBQVUsR0FBR3JELG1CQUFPLENBQUMsNkNBQVcsQ0FBQztBQUV2QyxNQUFNRCxTQUFTLENBQUM7RUFDWnVELFdBQVdBLENBQUNMLE1BQU0sRUFBRTtJQUNwQixJQUFJLENBQUNiLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDbUIsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNOLE1BQU0sR0FBR0EsTUFBTTtFQUNwQjtFQUVBTyxlQUFlQSxDQUFBLEVBQUc7SUFDZDtJQUNBLElBQUlDLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSXJCLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSXNCLE9BQU8sR0FBRyxFQUFFO0lBQ2hCLElBQUlqRixFQUFFLEdBQUcsQ0FBQztJQUNWLEtBQUssSUFBSVQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeUYsSUFBSSxFQUFFekYsQ0FBQyxFQUFFLEVBQUU7TUFDM0JvRSxLQUFLLENBQUNwRSxDQUFDLENBQUMsR0FBRyxFQUFFO01BQ2IsS0FBSyxJQUFJd0UsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa0IsT0FBTyxFQUFFbEIsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSUMsTUFBTSxHQUFHLElBQUlZLFVBQVUsQ0FBRCxDQUFDO1FBQzNCWixNQUFNLENBQUNoRSxFQUFFLEdBQUdBLEVBQUU7UUFDZDJELEtBQUssQ0FBQ3BFLENBQUMsQ0FBQyxDQUFDVyxJQUFJLENBQUM4RCxNQUFNLENBQUM7UUFDckJoRSxFQUFFLEVBQUU7TUFDSjtJQUNKO0lBQ0EsT0FBTyxJQUFJLENBQUMyRCxLQUFLLEdBQUdBLEtBQUs7RUFDN0I7RUFFSnVCLE9BQU8sR0FBR0EsQ0FBQ2QsR0FBRyxFQUFHQyxNQUFNLEVBQUVjLE9BQU8sRUFBRUMsU0FBUyxLQUFLO0lBQzVDLElBQUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLEtBQUs7SUFDNUMsSUFBSUMsUUFBUSxHQUFHLElBQUlYLElBQUksQ0FBQ1EsT0FBTyxDQUFDO0lBQ2hDRyxRQUFRLENBQUNDLE9BQU8sR0FBR25CLEdBQUc7SUFDdEJrQixRQUFRLENBQUNFLFVBQVUsR0FBR25CLE1BQU07SUFDNUIsSUFBSSxDQUFDUyxLQUFLLENBQUM1RSxJQUFJLENBQUNvRixRQUFRLENBQUM7SUFDekIsSUFBSUYsU0FBUyxLQUFLLFlBQVksRUFBRTtNQUM1QixLQUFLLElBQUk3RixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0RixPQUFPLEVBQUU1RixDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLENBQUNvRSxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUM5RSxDQUFDLENBQUMsQ0FBQ2dGLE9BQU8sR0FBRyxJQUFJO1FBQ3hDLElBQUksQ0FBQ1osS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFDOUUsQ0FBQyxDQUFDLENBQUNnRyxPQUFPLEdBQUduQixHQUFHO1FBQ3ZDLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFDOUUsQ0FBQyxDQUFDLENBQUNpRyxVQUFVLEdBQUduQixNQUFNO01BQ2pEO0lBQ0osQ0FBQyxNQUNJLElBQUllLFNBQVMsS0FBSyxVQUFVLEVBQUU7TUFDL0I7TUFDQSxLQUFLLElBQUk3RixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0RixPQUFPLEVBQUU1RixDQUFDLEVBQUUsRUFBRTtRQUM5QixJQUFJLENBQUNvRSxLQUFLLENBQUNTLEdBQUcsR0FBRzdFLENBQUMsQ0FBQyxDQUFDOEUsTUFBTSxDQUFDLENBQUNFLE9BQU8sR0FBRyxJQUFJO1FBQzFDLElBQUksQ0FBQ1osS0FBSyxDQUFDUyxHQUFHLEdBQUc3RSxDQUFDLENBQUMsQ0FBQzhFLE1BQU0sQ0FBQyxDQUFDa0IsT0FBTyxHQUFHbkIsR0FBRztRQUN6QyxJQUFJLENBQUNULEtBQUssQ0FBQ1MsR0FBRyxHQUFHN0UsQ0FBQyxDQUFDLENBQUM4RSxNQUFNLENBQUMsQ0FBQ21CLFVBQVUsR0FBR25CLE1BQU07TUFDbkQ7SUFDSjtJQUNBLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLEdBQUdpQixRQUFRO0VBQ3RDLENBQUM7RUFFREcsYUFBYUEsQ0FBQ3JCLEdBQUcsRUFBQ0MsTUFBTSxFQUFFO0lBQ3RCLElBQUksSUFBSSxDQUFDVixLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDekQsSUFBSSxDQUFDWCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFFckMsSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFO01BQzlDLElBQUlnQixPQUFPLEdBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNrQixPQUFPO01BQzdDLElBQUlDLFVBQVUsR0FBRyxJQUFJLENBQUM3QixLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ21CLFVBQVU7TUFDbkQsSUFBSSxDQUFDN0IsS0FBSyxDQUFDNEIsT0FBTyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQztJQUNyQztFQUNKO0VBRUFMLFNBQVNBLENBQUNqQixHQUFHLEVBQUVDLE1BQU0sRUFBRWhGLE1BQU0sRUFBRTtJQUMzQixLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR29HLE1BQU0sQ0FBQ3RHLE1BQU0sQ0FBQyxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJLElBQUksQ0FBQ29FLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBQzlFLENBQUMsQ0FBQyxDQUFDZ0YsT0FBTyxLQUFLLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDNUQ7SUFDSixPQUFPLElBQUk7RUFDZjtFQUVBcUIsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2YsS0FBSztJQUNsQixLQUFLLElBQUl2RixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlzRyxDQUFDLENBQUN4RyxNQUFNLEdBQUUsQ0FBQyxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUNuQyxJQUFJc0csQ0FBQyxDQUFDdEcsQ0FBQyxDQUFDLENBQUN1RyxJQUFJLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSztJQUN6QztJQUNBLE9BQU8sSUFBSTtFQUNmO0FBQ0o7QUFFQW5ILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMEMsU0FBUzs7Ozs7Ozs7OztBQy9FMUIsTUFBTWtELE1BQU0sQ0FBQztFQUNUSyxXQUFXQSxDQUFDa0IsSUFBSSxFQUFFO0lBQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDcEMsS0FBSyxHQUFHLElBQUk7RUFDckI7QUFDSjtBQUNBaEYsTUFBTSxDQUFDQyxPQUFPLEdBQUc0RixNQUFNOzs7Ozs7Ozs7O0FDTnZCLE1BQU1HLElBQUksQ0FBQztFQUNQRSxXQUFXQSxDQUFFeEYsTUFBTSxFQUFFO0lBQ2pCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQzJHLElBQUksR0FBRyxDQUFDO0lBQ2IsSUFBSSxDQUFDRixJQUFJLEdBQUcsS0FBSztJQUNqQixJQUFJLENBQUN2QixPQUFPLEdBQUcsSUFBSTtJQUNuQixJQUFJLENBQUNELE1BQU0sR0FBRyxLQUFLO0lBQ25CLElBQUksQ0FBQzJCLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ1YsT0FBTyxHQUFHLElBQUk7SUFDbkIsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSTtFQUMxQjtFQUNBRSxHQUFHQSxDQUFBLEVBQUc7SUFDRixJQUFJLENBQUNNLElBQUksSUFBSSxDQUFDO0lBQ2QsSUFBSSxDQUFDRSxVQUFVLENBQUMsQ0FBQztFQUNyQjtFQUNBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLElBQUksQ0FBQ0YsSUFBSSxLQUFLLElBQUksQ0FBQzNHLE1BQU0sRUFBRTtNQUMzQixJQUFJLENBQUN5RyxJQUFJLEdBQUcsSUFBSTtJQUNwQjtFQUNKO0FBQ0E7QUFFSm5ILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHK0YsSUFBSTs7Ozs7Ozs7OztBQ3RCckIsTUFBTUMsVUFBVSxDQUFDO0VBQ2JDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ04sT0FBTyxHQUFHLEtBQUs7SUFDcEIsSUFBSSxDQUFDRCxNQUFNLEdBQUcsS0FBSztJQUNuQixJQUFJLENBQUNpQixPQUFPLEdBQUcsSUFBSTtJQUNuQixJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJO0lBQ3RCLElBQUksQ0FBQ2IsSUFBSSxHQUFHLElBQUk7SUFDaEIsSUFBSSxDQUFDd0IsUUFBUSxHQUFHLElBQUk7SUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSTtJQUN2QixJQUFJLENBQUNwRyxFQUFFLEdBQUcsSUFBSTtJQUNkLElBQUksQ0FBQ3FHLEtBQUssR0FBRyxJQUFJO0VBQ3JCO0FBQ0o7QUFFQTFILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHZ0csVUFBVTs7Ozs7Ozs7OztBQ2QzQixNQUFNRCxJQUFJLEdBQUdwRCxtQkFBTyxDQUFDLHlEQUFzQixDQUFDO0FBQzVDLE1BQU1ELFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxtREFBbUIsQ0FBQztBQUM5QyxNQUFNaUQsTUFBTSxHQUFHakQsbUJBQU8sQ0FBQyx1REFBcUIsQ0FBQztBQUM3QyxNQUFNTyxPQUFPLEdBQUdQLG1CQUFPLENBQUMscUNBQVksQ0FBQztBQUVyQyxTQUFTQyxjQUFjQSxDQUFBLEVBQUc7RUFDdEIsSUFBSThFLE9BQU8sR0FBRyxFQUFFO0VBQ2hCLElBQUlDLE9BQU87RUFDWCxJQUFJQyxHQUFHO0VBQ1AsSUFBSUMsT0FBTyxHQUFHLElBQUk7RUFFbEIsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQU07SUFDcEJILE9BQU8sR0FBRyxJQUFJL0IsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNsQ2dDLEdBQUcsR0FBRyxJQUFJaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUV2QitCLE9BQU8sQ0FBQ0ksU0FBUyxHQUFHLElBQUlyRixTQUFTLENBQUMsU0FBUyxDQUFDO0lBQzVDaUYsT0FBTyxDQUFDSSxTQUFTLENBQUM1QixlQUFlLENBQUMsQ0FBQztJQUNuQ3lCLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLElBQUlyRixTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ3BDa0YsR0FBRyxDQUFDRyxTQUFTLENBQUM1QixlQUFlLENBQUMsQ0FBQztJQUUvQnVCLE9BQU8sQ0FBQ3BHLElBQUksQ0FBQ3FHLE9BQU8sQ0FBQztJQUNyQkQsT0FBTyxDQUFDcEcsSUFBSSxDQUFDc0csR0FBRyxDQUFDO0lBQ2pCMUUsT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUVyQjZFLGlCQUFpQixDQUFDLENBQUM7SUFDbkJDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hCcEMsVUFBVSxDQUFDLENBQUM7SUFDWnFDLFFBQVEsQ0FBQyxDQUFDO0VBQ2QsQ0FBQztFQUVELE1BQU1DLGFBQWEsR0FBR0EsQ0FBQzNDLEdBQUcsRUFBQ0MsTUFBTSxFQUFDaEYsTUFBTSxFQUFDK0YsU0FBUyxLQUFLO0lBQ25EbUIsT0FBTyxDQUFDSSxTQUFTLENBQUN6QixPQUFPLENBQUNkLEdBQUcsRUFBQ0MsTUFBTSxFQUFDaEYsTUFBTSxFQUFDK0YsU0FBUyxDQUFDO0VBQzFELENBQUM7RUFDRCxNQUFNNEIsVUFBVSxHQUFHQSxDQUFDNUMsR0FBRyxFQUFDQyxNQUFNLEVBQUNoRixNQUFNLEVBQUMrRixTQUFTLEtBQUs7SUFDaERvQixHQUFHLENBQUNHLFNBQVMsQ0FBQ3pCLE9BQU8sQ0FBQ2QsR0FBRyxFQUFDQyxNQUFNLEVBQUNoRixNQUFNLEVBQUMrRixTQUFTLENBQUM7RUFDdEQsQ0FBQztFQUVELE1BQU02QixTQUFTLEdBQUlDLENBQUMsSUFBSztJQUNyQlYsR0FBRyxDQUFDRyxTQUFTLENBQUNsQixhQUFhLENBQUN5QixDQUFDLENBQUNDLE1BQU0sQ0FBQ2hELE9BQU8sQ0FBQ0MsR0FBRyxFQUFFOEMsQ0FBQyxDQUFDQyxNQUFNLENBQUNoRCxPQUFPLENBQUNFLE1BQU0sQ0FBQztJQUMxRXdDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hCTyxTQUFTLENBQUMsQ0FBQztJQUNYUixpQkFBaUIsQ0FBQyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxNQUFNUSxTQUFTLEdBQUdBLENBQUEsS0FBTTtJQUNwQixJQUFHWCxPQUFPLEtBQUssSUFBSSxFQUNuQjtNQUNJLElBQUdBLE9BQU8sQ0FBQ2xDLE9BQU8sS0FBSyxLQUFLLEVBQ3hCO1FBQ0E4QyxZQUFZLENBQUMsQ0FBQztNQUNkLENBQUMsTUFFRDtRQUNBQyxnQkFBZ0IsQ0FBQ2IsT0FBTyxDQUFDTixRQUFRLEVBQUVNLE9BQU8sQ0FBQ0wsV0FBVyxDQUFDO01BQ3ZEO0lBQ1IsQ0FBQyxNQUVEO01BQ0lpQixZQUFZLENBQUMsQ0FBQztJQUNsQjtFQUNKLENBQUM7RUFFRCxNQUFNNUMsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDckIsSUFBSThDLFNBQVMsR0FBR3RGLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN2RCxJQUFJbkYsQ0FBQyxHQUFHLENBQUM7SUFDVCxJQUFJNkUsR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJQyxNQUFNLEdBQUcsQ0FBQztJQUVka0QsU0FBUyxDQUFDQyxPQUFPLENBQ2IsVUFBU0MsSUFBSSxFQUFFO01BQ2JBLElBQUksQ0FBQ3pILEVBQUUsR0FBR1QsQ0FBQztNQUNYa0ksSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVULFNBQVMsQ0FBQztNQUN6Q1EsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVDLFNBQVMsQ0FBQztNQUM3Q0YsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVFLFFBQVEsQ0FBQztNQUMzQ0gsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVHLFNBQVMsQ0FBQztNQUM3Q0osSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVJLElBQUksQ0FBQztNQUNuQ3ZJLENBQUMsRUFBRTtJQUNMLENBQ0YsQ0FBQztFQUNQLENBQUM7RUFDRCxNQUFNdUgsUUFBUSxHQUFHQSxDQUFBLEtBQU07SUFDbkIsTUFBTWhFLGFBQWEsR0FBR2IsUUFBUSxDQUFDOEYsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzlEakYsYUFBYSxDQUFDNEUsZ0JBQWdCLENBQUMsT0FBTyxFQUFDTSxlQUFlLENBQUM7SUFDdkQsTUFBTWpGLEtBQUssR0FBR2QsUUFBUSxDQUFDOEYsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM5Q2hGLEtBQUssQ0FBQzJFLGdCQUFnQixDQUFDLFdBQVcsRUFBQ08sU0FBUyxDQUFDO0lBQzdDLE1BQU1qRixLQUFLLEdBQUdmLFFBQVEsQ0FBQzhGLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDOUMvRSxLQUFLLENBQUMwRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUNPLFNBQVMsQ0FBQztJQUM3QyxNQUFNaEYsS0FBSyxHQUFHaEIsUUFBUSxDQUFDOEYsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM5QzlFLEtBQUssQ0FBQ3lFLGdCQUFnQixDQUFDLFdBQVcsRUFBQ08sU0FBUyxDQUFDO0lBQzdDLE1BQU0vRSxLQUFLLEdBQUdqQixRQUFRLENBQUM4RixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzlDN0UsS0FBSyxDQUFDd0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFDTyxTQUFTLENBQUM7SUFDN0MsTUFBTTlFLEtBQUssR0FBR2xCLFFBQVEsQ0FBQzhGLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDOUM1RSxLQUFLLENBQUN1RSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUNPLFNBQVMsQ0FBQztFQUNqRCxDQUFDO0VBRUQsU0FBU0EsU0FBU0EsQ0FBQ2YsQ0FBQyxFQUFFO0lBQ2xCQSxDQUFDLENBQUNnQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLEVBQUVqQixDQUFDLENBQUNDLE1BQU0sQ0FBQ25ILEVBQUUsQ0FBQztJQUNqRG9JLFVBQVUsQ0FBQyxNQUFNO01BQ2JsQixDQUFDLENBQUNDLE1BQU0sQ0FBQ2xELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQUM7RUFFVixTQUFTeUQsU0FBU0EsQ0FBQ1QsQ0FBQyxFQUFFO0lBQ2xCQSxDQUFDLENBQUNtQixjQUFjLENBQUMsQ0FBQztJQUNsQm5CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDbEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3ZDO0VBRUEsU0FBUzBELFFBQVFBLENBQUNWLENBQUMsRUFBRTtJQUNqQkEsQ0FBQyxDQUFDbUIsY0FBYyxDQUFDLENBQUM7SUFDbEJuQixDQUFDLENBQUNDLE1BQU0sQ0FBQ2xELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUN2QztFQUVBLFNBQVMyRCxTQUFTQSxDQUFDWCxDQUFDLEVBQUU7SUFDbEJBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDbEQsU0FBUyxDQUFDcUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUMxQztFQUVBLFNBQVNSLElBQUlBLENBQUNaLENBQUMsRUFBRTtJQUNiQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ2xELFNBQVMsQ0FBQ3FFLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdEM7SUFDQSxNQUFNdEksRUFBRSxHQUFHa0gsQ0FBQyxDQUFDZ0IsWUFBWSxDQUFDSyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQy9DLE1BQU1DLFNBQVMsR0FBR3ZHLFFBQVEsQ0FBQ3dHLGNBQWMsQ0FBQ3pJLEVBQUUsQ0FBQztJQUM3QztJQUNBa0gsQ0FBQyxDQUFDQyxNQUFNLENBQUMzRCxXQUFXLENBQUNnRixTQUFTLENBQUM7SUFDL0JFLGNBQWMsQ0FBQ0YsU0FBUyxFQUFFdEIsQ0FBQyxDQUFDQyxNQUFNLENBQUM7SUFDbkM7SUFDQXFCLFNBQVMsQ0FBQ3ZFLFNBQVMsQ0FBQ3FFLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdEM7RUFDQSxNQUFNTixlQUFlLEdBQUlkLENBQUMsSUFBSztJQUMzQnRELE9BQU8sQ0FBQ0MsR0FBRyxDQUFFOEUsWUFBWSxDQUFDLENBQUUsQ0FBQztJQUM3QixJQUFJekIsQ0FBQyxDQUFDQyxNQUFNLENBQUM1RCxLQUFLLEtBQUssWUFBWSxFQUMvQjJELENBQUMsQ0FBQ0MsTUFBTSxDQUFDNUQsS0FBSyxHQUFHLFVBQVUsTUFFM0IyRCxDQUFDLENBQUNDLE1BQU0sQ0FBQzVELEtBQUssR0FBRyxZQUFZO0VBQ3JDLENBQUM7RUFDRCxNQUFNb0YsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDdkIsT0FBTzFHLFFBQVEsQ0FBQzhGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDeEUsS0FBSztFQUN6RCxDQUFDO0VBRUQsTUFBTW1GLGNBQWMsR0FBR0EsQ0FBQ3pKLElBQUksRUFBRWtJLE1BQU0sS0FBSztJQUNyQ3ZELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNUUsSUFBSSxDQUFDO0lBQ2pCMkUsT0FBTyxDQUFDQyxHQUFHLENBQUNzRCxNQUFNLENBQUM7SUFDbkIsTUFBTXlCLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUN6SSxNQUFNLENBQUM4RyxNQUFNLENBQUNuSCxFQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNK0ksU0FBUyxHQUFHSCxTQUFTLENBQUM1SixHQUFHLENBQUVnSyxHQUFHLElBQUtyRCxNQUFNLENBQUNxRCxHQUFHLENBQUMsQ0FBQztJQUNyRHBGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0YsU0FBUyxDQUFDMUosTUFBTSxDQUFDO0lBQzdCLElBQUkrRSxHQUFHLEdBQUcyRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLElBQUkxRSxNQUFNO0lBQ1YsSUFBSTBFLFNBQVMsQ0FBQzFKLE1BQU0sR0FBRyxDQUFDLEVBQ3hCO01BQ0krRSxHQUFHLEdBQUcsQ0FBQztNQUNQQyxNQUFNLEdBQUcwRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsTUFFRDtNQUNJMUUsTUFBTSxHQUFHMEUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QjtJQUNBLElBQUkxSixNQUFNLEdBQUdKLElBQUksQ0FBQ3NFLEtBQUs7SUFDdkJnRCxPQUFPLENBQUNJLFNBQVMsQ0FBQ3pCLE9BQU8sQ0FBQ2QsR0FBRyxFQUFDQyxNQUFNLEVBQUNoRixNQUFNLEVBQUNzSixZQUFZLENBQUMsQ0FBQyxDQUFDO0VBRS9ELENBQUM7RUFDRCxNQUFNL0IsaUJBQWlCLEdBQUdBLENBQUEsS0FBTTtJQUM1QixJQUFJbkUsV0FBVyxHQUFHUixRQUFRLENBQUM4RixhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3hEdEYsV0FBVyxDQUFDd0csZUFBZSxDQUFDbkgsT0FBTyxDQUFDNEIsV0FBVyxDQUFDNkMsT0FBTyxDQUFDSSxTQUFTLENBQUMsQ0FBQztFQUN2RSxDQUFDO0VBRUQsTUFBTUUsY0FBYyxHQUFHQSxDQUFBLEtBQU07SUFDekIsSUFBSWpFLFFBQVEsR0FBR1gsUUFBUSxDQUFDOEYsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNsRG5GLFFBQVEsQ0FBQ3FHLGVBQWUsQ0FBQ25ILE9BQU8sQ0FBQzRCLFdBQVcsQ0FBQzhDLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLENBQUM7SUFDNURsQyxVQUFVLENBQUMsQ0FBQztFQUNoQixDQUFDO0VBQ0QsTUFBTTZDLGdCQUFnQixHQUFHQSxDQUFDbEQsR0FBRyxFQUFDQyxNQUFNLEtBQUs7SUFDckM7O0lBRUEsSUFBSWtDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssS0FBSyxJQUFJaUMsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUVnQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2xCLGFBQWEsQ0FBQ3JCLEdBQUcsRUFBQ0MsTUFBTSxHQUFDLENBQUMsQ0FBQyxNQUNoSyxJQUFJa0MsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlpQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxLQUFLLElBQUksSUFBSUYsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN0SWlELGdCQUFnQixDQUFDbEQsR0FBRyxFQUFFQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0lBQ25DO0lBQ0E7SUFBQSxLQUNLLElBQUlrQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssSUFBSWlDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFZ0MsT0FBTyxDQUFDSSxTQUFTLENBQUNsQixhQUFhLENBQUNyQixHQUFHLEVBQUNDLE1BQU0sR0FBQyxDQUFDLENBQUMsTUFDckssSUFBSWtDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssSUFBSSxJQUFJaUMsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUNFLE9BQU8sS0FBSyxJQUFJLElBQUlGLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDdElpRCxnQkFBZ0IsQ0FBQ2xELEdBQUcsRUFBRUMsTUFBTSxHQUFDLENBQUMsQ0FBQztJQUNuQztJQUNBO0lBQUEsS0FDSyxJQUFJa0MsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE1BQU0sS0FBSyxLQUFLLElBQUlpQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQ0UsT0FBTyxLQUFLLElBQUksRUFBRWdDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDbEIsYUFBYSxDQUFDckIsR0FBRyxHQUFDLENBQUMsRUFBQ0MsTUFBTSxDQUFDLE1BQ3JLLElBQUlrQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ1MsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLElBQUksSUFBSWlDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDRSxPQUFPLEtBQUssSUFBSSxJQUFJSCxHQUFHLEdBQUcsQ0FBQyxFQUFFO01BQ25Ja0QsZ0JBQWdCLENBQUNsRCxHQUFHLEdBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUM7SUFDbkM7SUFDQTtJQUFBLEtBQ0ssSUFBSWtDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLEtBQUssS0FBSyxJQUFJaUMsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUVnQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2xCLGFBQWEsQ0FBQ3JCLEdBQUcsR0FBQyxDQUFDLEVBQUNDLE1BQU0sQ0FBQyxNQUNySyxJQUFJa0MsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlpQyxPQUFPLENBQUNJLFNBQVMsQ0FBQ2hELEtBQUssQ0FBQ1MsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0UsT0FBTyxLQUFLLElBQUksSUFBSUgsR0FBRyxHQUFHLENBQUMsRUFBRTtNQUNuSWtELGdCQUFnQixDQUFDbEQsR0FBRyxHQUFDLENBQUMsRUFBRUMsTUFBTSxDQUFDO0lBQ25DLENBQUMsTUFDSTtNQUNEZ0QsWUFBWSxDQUFDLENBQUM7TUFDZFosT0FBTyxHQUFHLElBQUk7SUFDbEI7RUFDSixDQUFDO0VBRUQsTUFBTVksWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDdkIsTUFBTWpELEdBQUcsR0FBRzhFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0vRSxNQUFNLEdBQUc2RSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU1QyxJQUFJN0MsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLLENBQUNTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLElBQUksRUFBRTtNQUN0RCtDLFlBQVksQ0FBQyxDQUFDO0lBQ2xCO0lBQ0FkLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDbEIsYUFBYSxDQUFDckIsR0FBRyxFQUFDQyxNQUFNLENBQUM7SUFDM0NvQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDaEQsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO0lBQzlDb0MsT0FBTyxDQUFDTixRQUFRLEdBQUcvQixHQUFHO0lBQ3RCcUMsT0FBTyxDQUFDTCxXQUFXLEdBQUcvQixNQUFNO0VBQ2hDLENBQUM7RUFFRCxNQUFNZ0YsVUFBVSxHQUFHQSxDQUFBLEtBQU01QyxPQUFPO0VBQ2hDLE1BQU02QyxTQUFTLEdBQUdBLENBQUEsS0FBTS9DLE9BQU87RUFDL0IsTUFBTWdELGNBQWMsR0FBR0EsQ0FBQSxLQUFNaEQsT0FBTyxDQUFDSSxTQUFTLENBQUNoRCxLQUFLO0VBQ3BELE1BQU02RixXQUFXLEdBQUdBLENBQUEsS0FBTWhELEdBQUcsQ0FBQ0csU0FBUyxDQUFDaEQsS0FBSztFQUU3QyxNQUFNOEYsZUFBZSxHQUFHQSxDQUFBLEtBQU1DLFlBQVk7RUFFMUMsT0FBTztJQUFDaEQsU0FBUztJQUFFNkMsY0FBYztJQUFFRCxTQUFTO0lBQUVyQyxTQUFTO0lBQUVGLGFBQWE7SUFBRUMsVUFBVTtJQUFFd0MsV0FBVztJQUFFcEMsU0FBUztJQUMxR0MsWUFBWTtJQUFFZ0MsVUFBVTtJQUFFNUU7RUFBVSxDQUFDO0FBQ3pDO0FBRUE5RixNQUFNLENBQUNDLE9BQU8sR0FBRzRDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVOYTtBQUN6QjtBQUNXO0FBRWhDQSxnRUFBd0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMUI7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsc0NBQXNDLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG9CQUFvQixtQkFBbUIsbURBQW1ELDZCQUE2QixrQ0FBa0MsbUNBQW1DLHlCQUF5QixxQkFBcUIsWUFBWSxrQkFBa0IsU0FBUyxvQkFBb0Isb0NBQW9DLEdBQUcsVUFBVSxvQkFBb0IsOENBQThDLDJDQUEyQyxvQkFBb0IsR0FBRywyQkFBMkIsOEJBQThCLCtCQUErQixHQUFHLFdBQVcsdUJBQXVCLG1CQUFtQixHQUFHLHFCQUFxQjtBQUM5bEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N2QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0RPTXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL0ZhY3Rvcmllcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9GYWN0b3JpZXMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9GYWN0b3JpZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvRmFjdG9yaWVzL3NxdWFyZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvR2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9GYWN0b3JpZXMvYm9hcmRcIik7XG5jb25zdCBHYW1lQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0dhbWVjb250cm9sbGVyXCIpO1xuY29uc3QgaW1nID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcDIucG5nJylcbmNvbnN0IGltZzIgPSByZXF1aXJlKCcuL2Fzc2V0cy9zaGlwKDMpLnBuZycpXG5jb25zdCBpbWczID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcCgzLjIpLnBuZycpXG5jb25zdCBpbWc0ID0gcmVxdWlyZSgnLi9hc3NldHMvc2hpcCg0KS5wbmcnKVxuY29uc3QgaW1nNSA9IHJlcXVpcmUoJy4vYXNzZXRzL3NoaXAoNSkucG5nJylcblxuZnVuY3Rpb24gRE9NdG9vbCgpIHtcbiAgICBjb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBsZWZ0c2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcGxheWVyYm9hcmRuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBwbGF5ZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgcmlnaHRzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjcHVib2FyZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNwdWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBzaGlwZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBzaGlwZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcbiAgICAgICAgbGV0IHNoaXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbGV0IHNoaXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBzaGlwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgc2hpcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHNoaXA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgc2hpcDEuc3JjID0gaW1nXG4gICAgICAgIHNoaXAyLnNyYyA9IGltZzNcbiAgICAgICAgc2hpcDMuc3JjID0gaW1nMlxuICAgICAgICBzaGlwNC5zcmMgPSBpbWc0XG4gICAgICAgIHNoaXA1LnNyYyA9IGltZzVcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFpbmVyXCIpXG5cbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGluZ1wiKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJ1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1haW5cIilcbiAgICAgICAgbGVmdHNpZGUuc2V0QXR0cmlidXRlKFwiaWRcIixcImxlZnRzaWRlXCIpXG4gICAgICAgIHBsYXllcmJvYXJkbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicGxheWVyYm9hcmRuYW1lXCIpO1xuICAgICAgICBwbGF5ZXJib2FyZG5hbWUudGV4dENvbnRlbnQgPSAnWU9VUiBCT0FSRCdcbiAgICAgICAgcGxheWVyYm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIixcInBsYXllcmJvYXJkXCIpXG5cbiAgICAgICAgcmlnaHRzaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJyaWdodHNpZGVcIilcbiAgICAgICAgY3B1Ym9hcmRuYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjcHVib2FyZG5hbWVcIik7XG4gICAgICAgIGNwdWJvYXJkbmFtZS50ZXh0Q29udGVudCA9ICdFTkVNWSBCT0FSRCc7XG4gICAgICAgIGNwdWJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjcHVib2FyZFwiKVxuXG4gICAgICAgIHNoaXBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXBkaXZcIik7XG4gICAgICAgIHNoaXBkaXJlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXBkaXJlY3Rpb25cIik7XG4gICAgICAgIHNoaXBkaXJlY3Rpb24udmFsdWUgPSAnaG9yaXpvbnRhbCdcblxuICAgICAgICBzaGlwMS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDEudmFsdWUgPSAyXG4gICAgICAgIHNoaXAyLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLFwidHJ1ZVwiKVxuICAgICAgICBzaGlwMi52YWx1ZSA9IDNcbiAgICAgICAgc2hpcDMuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpXG4gICAgICAgIHNoaXAzLnZhbHVlID0gM1xuICAgICAgICBzaGlwNC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIilcbiAgICAgICAgc2hpcDQudmFsdWUgPSA0XG4gICAgICAgIHNoaXA1LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLFwidHJ1ZVwiKVxuICAgICAgICBzaGlwNS52YWx1ZSA9IDVcblxuICAgICAgICBzaGlwMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2hpcDFcIik7XG4gICAgICAgIHNoaXAyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwMlwiKTtcbiAgICAgICAgc2hpcDMuc2V0QXR0cmlidXRlKFwiaWRcIixcInNoaXAzXCIpO1xuICAgICAgICBzaGlwNC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2hpcDRcIik7XG4gICAgICAgIHNoaXA1LnNldEF0dHJpYnV0ZShcImlkXCIsXCJzaGlwNVwiKTtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsZWZ0c2lkZSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmlnaHRzaWRlKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmRuYW1lKTtcbiAgICAgICAgbGVmdHNpZGUuYXBwZW5kQ2hpbGQocGxheWVyYm9hcmQpXG4gICAgICAgIHJpZ2h0c2lkZS5hcHBlbmRDaGlsZChjcHVib2FyZG5hbWUpO1xuICAgICAgICByaWdodHNpZGUuYXBwZW5kQ2hpbGQoY3B1Ym9hcmQpXG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcGRpcmVjdGlvbilcbiAgICAgICAgc2hpcGRpdi5hcHBlbmRDaGlsZChzaGlwMSk7XG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDIpO1xuICAgICAgICBzaGlwZGl2LmFwcGVuZENoaWxkKHNoaXAzKTtcbiAgICAgICAgc2hpcGRpdi5hcHBlbmRDaGlsZChzaGlwNCk7XG4gICAgICAgIHNoaXBkaXYuYXBwZW5kQ2hpbGQoc2hpcDUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbilcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBkaXYpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhib2FyZClcbiAgICAgICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBncmlkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJib2FyZFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZHNxdWFyZScpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQucm93ID0gaVxuICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvbHVtbiA9IGpcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0uaXNTaG90ID09PSB0cnVlICYmIGJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXAgPT09IHRydWUpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldW2pdLmlzU2hvdCA9PT0gdHJ1ZSAmJiBib2FyZC5ib2FyZFtpXVtqXS5oYXNTaGlwID09PSBmYWxzZSkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIC8vIGNwdSBib2FyZFxuICAgICAgICAgICAgICAgIGlmIChib2FyZC5wbGF5ZXIgPT09ICdjcHUnICYmIGJvYXJkLmJvYXJkW2ldW2pdLmlzU2hvdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NwdXNxdWFyZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKVxuICAgICAgICB9fVxuICAgICAgICByZXR1cm4gZ3JpZFxuICAgIH1cblxuICAgIGNvbnN0IGFkZGJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJycpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtpbml0aWFsTG9hZCwgcmVuZGVyYm9hcmQsIGFkZGJ1dHRvbnN9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NdG9vbCgpIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXB5YXJkXCIpXG5jb25zdCBncmlkc3F1YXJlID0gcmVxdWlyZShcIi4vc3F1YXJlc1wiKVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMuYm9hcmQgPSBbXVxuICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIHRoaXMucGxheWVyID0gcGxheWVyXG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZWJvYXJkKCkge1xuICAgICAgICAvL2xldCB2YWx1ZSA9IHsgaGFzU2hpcDogZmFsc2UsIGlzU2hvdDogZmFsc2UsIHNoaXByb3c6IG51bGwsIHNoaXBjb2x1bW46IG51bGwgfVxuICAgICAgICBsZXQgcm93cyA9IDEwXG4gICAgICAgIGxldCBib2FyZCA9IFtdXG4gICAgICAgIGxldCBjb2x1bW5zID0gMTBcbiAgICAgICAgbGV0IGlkID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbmV3IGdyaWRzcXVhcmVcbiAgICAgICAgICAgICAgICBzcXVhcmUuaWQgPSBpZFxuICAgICAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgICAgICBpZCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgICAgICB9XG5cbiAgICBhZGRTaGlwID0gKHJvdyAsIGNvbHVtbiwgbGVuZ3RocywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrbW92ZSgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGxldCB0aGlzU2hpcCA9IG5ldyBzaGlwKGxlbmd0aHMpXG4gICAgICAgIHRoaXNTaGlwLnNoaXByb3cgPSByb3dcbiAgICAgICAgdGhpc1NoaXAuc2hpcGNvbHVtbiA9IGNvbHVtblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2godGhpc1NoaXApXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhzOyBpKyspIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbitpXS5oYXNTaGlwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uc2hpcHJvdyA9IHJvd1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uc2hpcGNvbHVtbiA9IGNvbHVtblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgLy9jaGFuZ2UgdGhpcyB0byB2YWx1ZSBzYW1lIGFzIHRvcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIGldW2NvbHVtbl0uaGFzU2hpcCA9IHRydWUgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXS5zaGlwcm93ID0gcm93XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2x1bW5dLnNoaXBjb2x1bW4gPSBjb2x1bW4gICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXNTaGlwXG4gICAgfVxuXG4gICAgcmVjaWV2ZUF0dGFjayhyb3csY29sdW1uKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5pc1Nob3QgPT09IHRydWUpIHJldHVybiBmYWxzZVxuICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5pc1Nob3QgPSB0cnVlXG5cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgbGV0IHNoaXByb3cgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5zaGlwcm93XG4gICAgICAgIGxldCBzaGlwY29sdW1uID0gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcGNvbHVtblxuICAgICAgICB0aGlzLmJvYXJkW3NoaXByb3ddW3NoaXBjb2x1bW5dLmhpdCgpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrbW92ZShyb3csIGNvbHVtbiwgbGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKGxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW4raV0uaGFzU2hpcCA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY2hlY2tsb3NlKCkge1xuICAgICAgICBsZXQgYSA9IHRoaXMuc2hpcHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYS5sZW5ndGggLTE7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFbaV0uc3VuayA9PT0gZmFsc2UpIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZCIsImNsYXNzIHBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuYm9hcmQgPSBudWxsXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXIiLCJjbGFzcyBzaGlwIHtcbiAgICBjb25zdHJ1Y3RvciAobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLmhhc1NoaXAgPSB0cnVlIFxuICAgICAgICB0aGlzLmlzU2hvdCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNTaGlwID0gdHJ1ZVxuICAgICAgICB0aGlzLnNoaXByb3cgPSBudWxsXG4gICAgICAgIHRoaXMuc2hpcGNvbHVtbiA9IG51bGxcbiAgICB9XG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5Jc1N1bmtGdW5jKCk7XG4gICAgfVxuICAgIElzU3Vua0Z1bmMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7IiwiY2xhc3MgZ3JpZHNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNTaG90ID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaGlwcm93ID0gbnVsbFxuICAgICAgICB0aGlzLnNoaXBjb2x1bW4gPSBudWxsXG4gICAgICAgIHRoaXMuc2hpcCA9IG51bGxcbiAgICAgICAgdGhpcy5yb3d2YWx1ZSA9IG51bGxcbiAgICAgICAgdGhpcy5jb2x1bW52YWx1ZSA9IG51bGxcbiAgICAgICAgdGhpcy5pZCA9IG51bGxcbiAgICAgICAgdGhpcy5pbWFnZSA9IG51bGxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JpZHNxdWFyZSIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9GYWN0b3JpZXMvc2hpcHlhcmRcIilcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL0ZhY3Rvcmllcy9ib2FyZFwiKVxuY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9GYWN0b3JpZXMvcGxheWVycycpO1xuY29uc3QgRE9NdG9vbCA9IHJlcXVpcmUoXCIuL0RPTXN0dWZmXCIpO1xuXG5mdW5jdGlvbiBHYW1lQ29udHJvbGxlcigpIHtcbiAgICBsZXQgcGxheWVycyA9IFtdXG4gICAgbGV0IHBsYXllcjE7XG4gICAgbGV0IGNwdTtcbiAgICBsZXQgbGFzdEhpdCA9IG51bGxcbiAgICBcbiAgICBjb25zdCBiZWdpbkdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllcjEgPSBuZXcgcGxheWVyKCdwbGF5ZXJuYW1lJylcbiAgICAgICAgY3B1ID0gbmV3IHBsYXllcignY3B1JylcbiAgICAgICAgXG4gICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgncGxheWVyMScpO1xuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5pbml0aWFsaXNlYm9hcmQoKTtcbiAgICAgICAgY3B1LmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoJ2NwdScpO1xuICAgICAgICBjcHUuZ2FtZWJvYXJkLmluaXRpYWxpc2Vib2FyZCgpO1xuXG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIxKTtcbiAgICAgICAgcGxheWVycy5wdXNoKGNwdSk7XG4gICAgICAgIERPTXRvb2wuaW5pdGlhbExvYWQoKTtcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgICAgIHJlbmRlcmNwdWJvYXJkKCk7XG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICAgICAgc2V0c2hpcHMoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYWRkcGxheWVyc2hpcCA9IChyb3csY29sdW1uLGxlbmd0aCxkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuYWRkU2hpcChyb3csY29sdW1uLGxlbmd0aCxkaXJlY3Rpb24pXG4gICAgfVxuICAgIGNvbnN0IGFkZGNwdXNoaXAgPSAocm93LGNvbHVtbixsZW5ndGgsZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGNwdS5nYW1lYm9hcmQuYWRkU2hpcChyb3csY29sdW1uLGxlbmd0aCxkaXJlY3Rpb24pXG4gICAgfVxuXG4gICAgY29uc3QgcGxheVJvdW5kID0gKGUpID0+IHtcbiAgICAgICAgY3B1LmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGUudGFyZ2V0LmRhdGFzZXQucm93LCBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbilcbiAgICAgICAgcmVuZGVyY3B1Ym9hcmQoKTtcbiAgICAgICAgY3B1YXR0YWNrKCk7XG4gICAgICAgIHJlbmRlcnBsYXllcmJvYXJkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3B1YXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBpZihsYXN0SGl0ICE9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihsYXN0SGl0Lmhhc1NoaXAgPT09IGZhbHNlKSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmFuZG9tYXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkYXR0YWNrKGxhc3RIaXQucm93dmFsdWUsIGxhc3RIaXQuY29sdW1udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICByYW5kb21hdHRhY2soKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkYnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNwdXNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcHVzcXVhcmUnKVxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgbGV0IHJvdyA9IDBcbiAgICAgICAgbGV0IGNvbHVtbiA9IDBcblxuICAgICAgICBjcHVzcXVhcmUuZm9yRWFjaChcbiAgICAgICAgICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgbm9kZS5pZCA9IGk7XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5Um91bmQpO1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHNldHNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXBkaXJlY3Rpb24nKVxuICAgICAgICBzaGlwZGlyZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNoYW5nZWRpcmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcDEnKVxuICAgICAgICBzaGlwMS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsZHJhZ1N0YXJ0KVxuICAgICAgICBjb25zdCBzaGlwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwMicpXG4gICAgICAgIHNoaXAyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIixkcmFnU3RhcnQpXG4gICAgICAgIGNvbnN0IHNoaXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAzJylcbiAgICAgICAgc2hpcDMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLGRyYWdTdGFydClcbiAgICAgICAgY29uc3Qgc2hpcDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcDQnKVxuICAgICAgICBzaGlwNC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsZHJhZ1N0YXJ0KVxuICAgICAgICBjb25zdCBzaGlwNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwNScpXG4gICAgICAgIHNoaXA1LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIixkcmFnU3RhcnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0sIDApO31cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyb3AoZSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBkcmFnZ2FibGUgZWxlbWVudFxuICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIGRyb3AgdGFyZ2V0XG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgICAgIGFkZHNoaXB0b2JvYXJkKGRyYWdnYWJsZSwgZS50YXJnZXQpXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIGRyYWdnYWJsZSBlbGVtZW50XG4gICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZWRpcmVjdGlvbiA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBnZXRkaXJlY3Rpb24oKSApXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwidmVydGljYWxcIlxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuICAgIGNvbnN0IGdldGRpcmVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwZGlyZWN0aW9uJykudmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCBhZGRzaGlwdG9ib2FyZCA9IChpdGVtLCB0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgICBjb25zdCBhcnJPZlN0cnMgPSBBcnJheS5mcm9tKFN0cmluZyh0YXJnZXQuaWQpKTtcbiAgICAgICAgY29uc3QgYXJyT2ZOdW1zID0gYXJyT2ZTdHJzLm1hcCgoc3RyKSA9PiBOdW1iZXIoc3RyKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyck9mTnVtcy5sZW5ndGgpXG4gICAgICAgIGxldCByb3cgPSBhcnJPZk51bXNbMF07XG4gICAgICAgIGxldCBjb2x1bW5cbiAgICAgICAgaWYgKGFyck9mTnVtcy5sZW5ndGggPSAxKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcm93ID0gMFxuICAgICAgICAgICAgY29sdW1uID0gYXJyT2ZOdW1zWzBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgY29sdW1uID0gYXJyT2ZOdW1zWzFdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsZW5ndGggPSBpdGVtLnZhbHVlXG4gICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLmFkZFNoaXAocm93LGNvbHVtbixsZW5ndGgsZ2V0ZGlyZWN0aW9uKCkpXG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCByZW5kZXJwbGF5ZXJib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBsYXllcmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcmJvYXJkJyk7XG4gICAgICAgIHBsYXllcmJvYXJkLnJlcGxhY2VDaGlsZHJlbihET010b29sLnJlbmRlcmJvYXJkKHBsYXllcjEuZ2FtZWJvYXJkKSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJjcHVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNwdWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NwdWJvYXJkJylcbiAgICAgICAgY3B1Ym9hcmQucmVwbGFjZUNoaWxkcmVuKERPTXRvb2wucmVuZGVyYm9hcmQoY3B1LmdhbWVib2FyZCkpXG4gICAgICAgIGFkZGJ1dHRvbnMoKTtcbiAgICB9XG4gICAgY29uc3QgY2FsY3VsYXRlZGF0dGFjayA9IChyb3csY29sdW1uKSA9PiB7XG4gICAgICAgIC8vY2hlY2sgbGVmdCBoaXRzXG5cbiAgICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdLmlzU2hvdCA9PT0gZmFsc2UgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4rMV0uaGFzU2hpcCA9PT0gdHJ1ZSkgcGxheWVyMS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uKzEpXG4gICAgICAgIGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uKzFdLmlzU2hvdCA9PT0gdHJ1ZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbisxXS5oYXNTaGlwID09PSB0cnVlICYmIGNvbHVtbiA8IDkpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRhdHRhY2socm93LCBjb2x1bW4rMSlcbiAgICAgICAgfVxuICAgICAgICAvL2NoZWNrIHJpZ2h0IGhpdHNcbiAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaXNTaG90ID09PSBmYWxzZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXS5oYXNTaGlwID09PSB0cnVlKSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4tMSlcbiAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW4tMV0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdLmhhc1NoaXAgPT09IHRydWUgJiYgY29sdW1uID4gMCkge1xuICAgICAgICAgICAgY2FsY3VsYXRlZGF0dGFjayhyb3csIGNvbHVtbi0xKVxuICAgICAgICB9XG4gICAgICAgIC8vZ28gZG93blxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5pc1Nob3QgPT09IGZhbHNlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uLTFdLmhhc1NoaXAgPT09IHRydWUpIHBsYXllcjEuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2socm93LTEsY29sdW1uKVxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ctMV1bY29sdW1uXS5pc1Nob3QgPT09IHRydWUgJiYgcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93LTFdW2NvbHVtbl0uaGFzU2hpcCA9PT0gdHJ1ZSAmJiByb3cgPiAwKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkYXR0YWNrKHJvdy0xLCBjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIC8vZ28gdXBcbiAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaXNTaG90ID09PSBmYWxzZSAmJiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbi0xXS5oYXNTaGlwID09PSB0cnVlKSBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdysxLGNvbHVtbilcbiAgICAgICAgZWxzZSBpZiAocGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93KzFdW2NvbHVtbl0uaXNTaG90ID09PSB0cnVlICYmIHBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW3JvdysxXVtjb2x1bW5dLmhhc1NoaXAgPT09IHRydWUgJiYgcm93IDwgOSkge1xuICAgICAgICAgICAgY2FsY3VsYXRlZGF0dGFjayhyb3crMSwgY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmRvbWF0dGFjaygpO1xuICAgICAgICAgICAgbGFzdEhpdCA9IG51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByYW5kb21hdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0uaXNTaG90ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByYW5kb21hdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4pO1xuICAgICAgICBsYXN0SGl0ID0gcGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgICAgIGxhc3RIaXQucm93dmFsdWUgPSByb3c7XG4gICAgICAgIGxhc3RIaXQuY29sdW1udmFsdWUgPSBjb2x1bW47XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0bGFzdEhpdCA9ICgpID0+IGxhc3RIaXRcbiAgICBjb25zdCBnZXRwbGF5ZXIgPSAoKSA9PiBwbGF5ZXIxXG4gICAgY29uc3QgZ2V0cGxheWVyYm9hcmQgPSAoKSA9PiBwbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFxuICAgIGNvbnN0IGdldGNwdWJvYXJkID0gKCkgPT4gY3B1LmdhbWVib2FyZC5ib2FyZFxuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gICAgcmV0dXJuIHtiZWdpbkdhbWUsIGdldHBsYXllcmJvYXJkLCBnZXRwbGF5ZXIsIHBsYXlSb3VuZCwgYWRkcGxheWVyc2hpcCwgYWRkY3B1c2hpcCwgZ2V0Y3B1Ym9hcmQsIGNwdWF0dGFjayxcbiAgICByYW5kb21hdHRhY2ssIGdldGxhc3RIaXQsIGFkZGJ1dHRvbnN9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXIoKSIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL0dhbWVjb250cm9sbGVyJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERPTXRvb2wgZnJvbSAnLi9ET01zdHVmZidcblxuR2FtZUNvbnRyb2xsZXIuYmVnaW5HYW1lKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvb2NlYW5fQkcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LCBodG1sIHtcbiAgICBtYXJnaW46IGF1dG87XG59XG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuI2hlYWRpbmcge1xuICAgIG1hcmdpbjogMFxufVxuI21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcbiAgICBncmlkLWdhcDogMXB4O1xufVxuLmdyaWRzcXVhcmUsIC5jcHVzcXVhcmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZDtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgb3BhY2l0eTogNzAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oseURBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvb2NlYW5fQkcucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbn1cXG4jaGVhZGluZyB7XFxuICAgIG1hcmdpbjogMFxcbn1cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ3JpZC1nYXA6IDFweDtcXG59XFxuLmdyaWRzcXVhcmUsIC5jcHVzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQ6IGdyZXk7XFxuICAgIG9wYWNpdHk6IDcwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInJlcXVpcmUiLCJHYW1lQ29udHJvbGxlciIsImltZyIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJET010b29sIiwiaW5pdGlhbExvYWQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkZXIiLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJtYWluIiwibGVmdHNpZGUiLCJwbGF5ZXJib2FyZG5hbWUiLCJwbGF5ZXJib2FyZCIsInJpZ2h0c2lkZSIsImNwdWJvYXJkbmFtZSIsImNwdWJvYXJkIiwic2hpcGRpdiIsInNoaXBkaXJlY3Rpb24iLCJzaGlwMSIsInNoaXAyIiwic2hpcDMiLCJzaGlwNCIsInNoaXA1Iiwic3JjIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwiYm9keSIsInJlbmRlcmJvYXJkIiwiYm9hcmQiLCJjb25zb2xlIiwibG9nIiwiZ3JpZCIsImoiLCJzcXVhcmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiaXNTaG90IiwiaGFzU2hpcCIsInBsYXllciIsImFkZGJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hpcCIsImdyaWRzcXVhcmUiLCJjb25zdHJ1Y3RvciIsInNoaXBzIiwiaW5pdGlhbGlzZWJvYXJkIiwicm93cyIsImNvbHVtbnMiLCJhZGRTaGlwIiwibGVuZ3RocyIsImRpcmVjdGlvbiIsImNoZWNrbW92ZSIsInRoaXNTaGlwIiwic2hpcHJvdyIsInNoaXBjb2x1bW4iLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwiTnVtYmVyIiwiY2hlY2tsb3NlIiwiYSIsInN1bmsiLCJuYW1lIiwiaGl0cyIsImlzU2hpcCIsIklzU3Vua0Z1bmMiLCJyb3d2YWx1ZSIsImNvbHVtbnZhbHVlIiwiaW1hZ2UiLCJwbGF5ZXJzIiwicGxheWVyMSIsImNwdSIsImxhc3RIaXQiLCJiZWdpbkdhbWUiLCJnYW1lYm9hcmQiLCJyZW5kZXJwbGF5ZXJib2FyZCIsInJlbmRlcmNwdWJvYXJkIiwic2V0c2hpcHMiLCJhZGRwbGF5ZXJzaGlwIiwiYWRkY3B1c2hpcCIsInBsYXlSb3VuZCIsImUiLCJ0YXJnZXQiLCJjcHVhdHRhY2siLCJyYW5kb21hdHRhY2siLCJjYWxjdWxhdGVkYXR0YWNrIiwiY3B1c3F1YXJlIiwiZm9yRWFjaCIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhZ0VudGVyIiwiZHJhZ092ZXIiLCJkcmFnTGVhdmUiLCJkcm9wIiwicXVlcnlTZWxlY3RvciIsImNoYW5nZWRpcmVjdGlvbiIsImRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJzZXRUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJnZXREYXRhIiwiZHJhZ2dhYmxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRzaGlwdG9ib2FyZCIsImdldGRpcmVjdGlvbiIsImFyck9mU3RycyIsIkFycmF5IiwiZnJvbSIsImFyck9mTnVtcyIsInN0ciIsInJlcGxhY2VDaGlsZHJlbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldGxhc3RIaXQiLCJnZXRwbGF5ZXIiLCJnZXRwbGF5ZXJib2FyZCIsImdldGNwdWJvYXJkIiwiZ2V0QWN0aXZlUGxheWVyIiwiYWN0aXZlUGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==