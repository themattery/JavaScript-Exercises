function main(){
   putBeeper();
   moveDiagonally();
   putBeeper();
   moveDiagonally();
   putBeeper();
   moveDiagonally();
   putBeeper();
   moveDiagonally();
   putBeeper();
}

function moveDiagonally(){
   move();
   turnLeft();
   move();
   turnRight();
}

function turnRight(){
   turnLeft();
   turnLeft();
   turnLeft();
}
