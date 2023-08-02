const Gameboard = require('../board');
const getboard = require('../board')

  
  // Jest test
  describe('Gameboard functions', () => {
	let testBoard;
	beforeEach(() => {
		testBoard = new Gameboard();
    testBoard.initialiseboard()
	});


    it('checks if ship is present', () => {
        testBoard.addShip(2,2,2,'horizontal')
        expect(testBoard.board[2][2]).toEqual(expect.objectContaining({"hasShip": true}));
      });
      it('checks if ship is present on multiple', () => {
        testBoard.addShip(2,2,2,'horizontal')
        expect(testBoard.board[2][3]).toEqual(expect.objectContaining({"hasShip": true}));
      });
      it('checks ship distance does not overflow', () => {
        testBoard.addShip(2,2,2,'horizontal')
        expect(testBoard.board[2][4]).toEqual(expect.objectContaining({"hasShip": false}));
      });

      it('checks invalid ship adding', () => {
        testBoard.addShip(2,2,2,'horizontal')
        
        expect(testBoard.addShip(2,2,2,'horizontal')).toBeFalsy();
      });

      
    it('checks if ship is hit', () => {
        testBoard.addShip(2,4,2,'horizontal')
        testBoard.recieveAttack(2,4)
        expect(testBoard.board[2][4]).toEqual(expect.objectContaining({"hits": 1}))
    });
    
    it('checks if ship is hit multiple', () => {
        testBoard.addShip(2,2,4,'horizontal')
        testBoard.recieveAttack(2,2)
        testBoard.recieveAttack(2,3)
        expect(testBoard.board[2][2]).toHaveProperty('hits', 2);
      });
    
      it('checks if move valid', () => {
        testBoard.addShip(2,2,2,'horizontal')
        testBoard.recieveAttack(2,2); 
        expect(testBoard.recieveAttack(2,2)).toBeFalsy();
      });
      it('empty square shows hit', () => {
        testBoard.recieveAttack(2,2)
        expect(testBoard.board[2][2]).toEqual(expect.objectContaining({"isShot": true}));
    });
    it('if square has hit, returns false', () => {
        testBoard.recieveAttack(2,2)
        expect(testBoard.recieveAttack(2,2)).toBeFalsy();
    });
    it('if ship sunk - false', () => {
        testBoard.addShip(2,2,2,'horizontal');
        testBoard.recieveAttack(2,2);
        expect(testBoard.board[2][2]).toEqual(expect.objectContaining({"sunk": false}));
    });
    it('if ship sunk - true', () => {
        testBoard.addShip(2,2,2,'horizontal');
        testBoard.recieveAttack(2,2);
        testBoard.recieveAttack(2,3);
        expect(testBoard.board[2][2]).toEqual(expect.objectContaining({"sunk": true}));
    });
    it('if all ships sunk - true', () => {
        testBoard.addShip(2,2,2,'horizontal');
        testBoard.recieveAttack(2,2);
        testBoard.recieveAttack(3,2);
        testBoard.addShip(4,2,2,'horizontal');
        testBoard.recieveAttack(4,2);
        testBoard.recieveAttack(5,2);
        expect(testBoard.checklose()).toBeFalsy();
    });
    it('if ship sunk multiple - false', () => {
        testBoard.addShip(2,2,2,'horizontal');
        testBoard.recieveAttack(2,2);
        testBoard.recieveAttack(2,3);
        testBoard.addShip(4,2,2,'horizontal');
        testBoard.recieveAttack(4,2);
        expect(testBoard.checklose()).toBeFalsy();
    });
    // it('check array', () => {
    //     testBoard.addShip(0,0,2,'horizontal');
    //     testBoard.addShip(2,3,2,'horizontal')
    //     testBoard.recieveAttack(2,2);
    //     testBoard.recieveAttack(3,2);
    //     testBoard.recieveAttack(2,2);
        
    //     expect(testBoard.checklose()).toEqual(expect.objectContaining({"sunk": neutral}));
    //   });
});
