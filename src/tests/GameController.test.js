const GameController = require('../Gamecontroller.js')

describe('Gameboard functions', () => {
	let player1;
  let player2;
  
	beforeEach(() => {
    GameController.beginGame()
  })
    it('checks if ship is present on player board', () => {
      
        GameController.addplayership(2,2,2,'horizontal')
        expect(GameController.getplayerboard()[2][2]).toEqual(expect.objectContaining({"hasShip": true}));
      });
      it('checks if ship is present on cpu board', () => {
      
        GameController.addcpuship(2,2,2,'horizontal')
        expect(GameController.getcpuboard()[2][2]).toEqual(expect.objectContaining({"hasShip": true}));
      });

      it('checks if ship gets hit', () => {
        GameController.addcpuship(2,2,2,'horizontal')
        GameController.playRound(2,2)
        expect(GameController.getcpuboard()[2][2]).toEqual(expect.objectContaining({"hits": 1}));
      });

      it('checks if ship hit multiple', () => {
        GameController.addcpuship(2,2,2,'horizontal')
        GameController.playRound(2,2)
        GameController.playRound(2,3)
        expect(GameController.getcpuboard()[2][2]).toEqual(expect.objectContaining({"hits": 2}));
      });
      it('checks if ship is sunk', () => {
        GameController.addcpuship(2,2,2,'horizontal')
        GameController.playRound(2,2)
        GameController.playRound(2,3)
        expect(GameController.getcpuboard()[2][2]).toEqual(expect.objectContaining({"hits": 2}));
      });

      it('checks if cpu attacks', () => {
        GameController.addplayership(2,2,2,'horizontal')
        GameController.cpuattack()
        expect(GameController.getlastHit()).toEqual(expect.objectContaining({"isShot": true}));
      });
      it('checks if cpu attacks', () => {
        GameController.addplayership(2,2,2,'horizontal')
        GameController.cpuattack()
        expect(GameController.getlastHit()).toEqual(expect.objectContaining({"isShot": true}));
      });


    });