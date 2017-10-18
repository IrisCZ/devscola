var world = [[0,0,1,1,0], [1,0,1,0,1], [1,1,0,0,0], [0,0,1,0,0], [0,1,0,0,1]];

var previous = world;
var next = nextGeneration(previous);
var count = 0;
while (!equals(next, previous)){
  //console.log(next);
  previous = next;
  next = nextGeneration(next);
  count++;
}
//console.log(next);
console.log(count);

function nextGeneration(grid){
  var newGeneration = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]
  for(var i= 0; i<grid.length; i++){
    for(var j=0; j<grid[i].length; j++){
      if(underpopulation(i, j, grid)){
        continue;
      }
      if(overcrowding(i, j, grid)){
        continue;
      }
      if(keepAlive(i, j, grid)){
        newGeneration[i][j] = 1;
      }
      if(becomeAlive(i, j, grid)){
        newGeneration[i][j] = 1;
      }
    }
  }
  return newGeneration;
}

function underpopulation(x, y, grid){
  return (numberOfNeighboursAlive(x, y, grid) < 2);
}

function overcrowding(x, y, grid){
  return (numberOfNeighboursAlive(x, y, grid) > 3);
}

function keepAlive(x, y, grid) {
  var cell = grid[x][y];
  if (cell === 1){
    return ((numberOfNeighboursAlive(x, y, grid) === 2) || (numberOfNeighboursAlive(x, y, grid) === 3));
  }
  return false;

}

function becomeAlive(x, y, grid) {
  var cell = grid[x][y];
  if (cell === 0){
    return (numberOfNeighboursAlive(x, y, grid) === 3);
  }
  return false;
}


function numberOfNeighboursAlive(x, y, grid){
  var neighboursAlive = 0;
  for(var i = x-1; i <= x+1; i++){
    for(var j = y-1; j <= y+1; j++){
      if(i === x && j === y){
        continue;
      }
      if(i < 0 || i >= grid.length){
        continue;
      }
      if(j < 0 || j >= grid[i].length){
        continue;
      }
      if(grid[i][j] === 1){
        neighboursAlive++;
      }
    }
  }
  return neighboursAlive;
}

function equals(a1, a2){
  for(var i= 0; i<a1.length; i++){
    for(var j=0; j<a1[i].length; j++){
      if (a1[i][j] !== a2[i][j]){
        return false;
      }
    }
  }
  return true;
}
