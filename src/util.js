const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function computerTurn(steps,squares,availMoves){
  var turn = undefined;

  function findDiagonal(){
    var diagX = [];
    var diagO = [];
    for( let i = 0; i < 9 ; i += 2 ){
      if(i !== 4 && squares[i] ==='x'){
        diagX.push(i);
      }else if(i !== 4 && squares[i] ==='o'){
        diagO.push(i);
      }
    }
    return [diagX.sort(), diagO.sort()];
  }

  var diag = findDiagonal();
  var diagX = diag[0];
  var diagO = diag[1];
  function winMove(){
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === 'o' && squares[a] === squares[b]) {
        if(!squares[c]){
          return c;
        }
      }else if(squares[a] === 'o' && squares[a] === squares[c]){
        if(!squares[b]){
          return b;
        }
      }else if(squares[b] === 'o' && squares[b] === squares[c]){
        if(!squares[a]){
          return a;
        }  
      }
    }
  }

  function blockMove(){
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === 'x' && squares[a] === squares[b]) {
        if(!squares[c]){
          return c;
        }
      }else if(squares[a] === 'x' && squares[a] === squares[c]){
        if(!squares[b]){
          return b;
        }
      }else if(squares[b] === 'x' && squares[b] === squares[c]){
        if(!squares[a]){
          return a;
        }  
      }
    }
  }

  function optimalMove(){
    for(let i = 0; i< diagO.length; i++){
      if(squares[8 - diagO[i]] === null){
        return (8 - diagO[i]);
      }
    }
    
    if((diagO.length + diagX.length) !== 4){
        
      for(let i = 0; i < 9; i += 2){
        if(i !== 4 && squares[i] === null){
          return i;
        }
      }
    }

    return availMoves[Math.floor(Math.random() * availMoves.length)];
    
  }

  switch(steps){
    case 1:   
      if(diagX.length < 1){
        turn = [0,2,6,8][Math.floor(Math.random() * 4)];
      }else{
        turn = 8 - diagX[0];
      }
      break;

    default:
      turn = winMove();
      if(turn === undefined){
        turn = blockMove();
      }
      if(turn === undefined){
        turn = optimalMove();
      }
  }
  return turn;
}