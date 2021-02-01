var rG, oG, yG, gG, bG,  score, redimg, bomb, bombimg, orangeimg, yellowimg, greenimg, playerimg, player, blueimg, binimg, cannonimg, ground, gameState; 
var red =[];
var orange = [];
var yellow = [];
var green = [];
var blue = [];
var bombs = [];

function preload(){
 redimg = loadImage("1red.png");
 orangeimg = loadImage("2orange.png");
 yellowimg = loadImage("3yellow.png");
 greenimg = loadImage("4green.png");
 blueimg = loadImage("5blue.png");
 playerimg = loadImage("player_ball.png");
 binimg = loadImage("bin.png");
 cannonimg = loadImage("cannon.png"); 
 bombimg = loadImage("bomb.png");
 re = loadImage("restart.png");
 gimg = loadImage("gameover.png");
 win = loadImage("you-win.png");
 next = loadImage("nextlevel.png");
}

function setup() {
  createCanvas(2000, 1500); 
/*rG = new Group();
oG = new Group();
yG = new Group();
gG = new Group();
bG = new Group();*/
  
  k=0;
  o=0
  y=0
  g=0;
  b=0;
  bom = 0;

  score = 0;

  for(var i = 400; i<1230; i = i+200){
    red[k] = createSprite(i, 100, 50, 50);
    red[k].addImage("Red Ball", redimg);
    red[k].scale = 0.83;
    k++;
    console.log(k);
  }

  
  for(var i = 400; i<1230; i = i+200){
    orange[o] = createSprite(i, 250, 50, 50);
    orange[o].addImage("Orange Ball", orangeimg);
    orange[o].scale = 0.83;
   o++;
  }
  
  for(var i = 400; i<1230; i = i+200){
    yellow[y] = createSprite(i, 400, 50, 50);
    yellow[y].addImage("Yellow Ball", yellowimg);
    yellow[y].scale = 0.83;
    y++
  }
  
  for(var i = 400; i<1230; i = i+200){
    green[g] = createSprite(i, 550, 50, 50);
   green[g].addImage("Green Ball", greenimg);
   green[g].scale = 0.83;
   g++
  }
  
  for(var i = 400; i<1230; i = i+200){
    blue[b] = createSprite(i, 700, 50, 50);
    blue[b].addImage("Blue Ball", blueimg);
    blue[b].scale = 0.83;
    b++;
  }
  
  
gameState = "begin";

 ground = createSprite(width/2,height-10, width, 20);
 cannon = createSprite(width/2, height-20, 15, 30);
 cannon.addImage("Cannon", cannonimg);
 cannon.scale = 1.2;

 bin = createSprite(1600, height-90, 15, 30);
 bin.addImage("Bin", binimg);
 bin.scale = 0.88;

 player = createSprite(width/2, height-288, 50,50);
 player.addImage("Player Ball", playerimg);
 player.scale = 0.65

 bottomborder = createSprite(width/2, 1289, width, 2);
 bottomborder.visible = false;

 leftborder = createSprite(1, height/2,2 , height);
 leftborder.visible = false;

 rightborder = createSprite(1999, height/2, 2, height);
 rightborder.visible = false;

 topborder = createSprite(width/2, 1, width, 2);

 bomb = createSprite(250, 175, 20, 20);
 bomb.addImage("Bomb", bombimg);  
bomb.scale=0.35;
//bomb.setCollider("circle", 700, 325, 1);

gameover = createSprite(width/2, height/2, 500, 200);
gameover.addImage("gme", gimg);
gameover.visible = false;

restart = createSprite(width/2, 1000, 100,100);
restart.addImage("re", re);
restart.scale = 0.7;
restart.visible = false;

winn = createSprite(width/2, height/2, 500, 200);
winn.addImage("wn", win);
winn.visible = false;
 
nextlevel = createSprite(width/2, 1050, 100, 100);
nextlevel.addImage("n", next);
nextlevel.scale = 0.7;
nextlevel.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  
  player.depth = bomb.depth
  velX = random(-5, 35);
  velY = random(-50,-25);

  topborder.shapeColor = "black"
  ground.shapeColor = "brown";

  cannon.collide(ground);
  bin.collide(ground)
  player.bounceOff(topborder);

 console.log(score);
 if(gameState==="begin"){
   player.x = cannon.x;
   if(keyDown("RIGHT_ARROW")){
    cannon.x +=10;
  }
  if(keyDown("LEFT_ARROW")){
    cannon.x -=10;
  }
  if (player.x>1400){
    player.x = 1385;
    cannon.x = 1385;
  }
  if (player.x<200){
   player.x = 215;
   cannon.x = 215;
 }
 

}

 if(player.y>1500){
  player.x = width/2;
  player.y = height-288;
  player.velocityX = 0;
  player.velocityY = 0;
  /*cannon.x = width/2;
  cannon.y = height-20;*/
  gameState = "begin";

  
}

for(var i=0; i<k; i++){
  if(red[i].isTouching(player)&&red[i].visible === true){
      red[i].visible = false
   score=score+1;
    }
 }

 for(var i=0; i<o; i++){
  if(orange[i].isTouching(player)&&orange[i].visible === true){
      orange[i].visible = false
   score=score+1;
    }
 }

 for(var i=0; i<y; i++){
  if(yellow[i].isTouching(player)&&yellow[i].visible === true){
      yellow[i].visible = false
   score=score+1;
    }
 }

 for(var i=0; i<g; i++){
  if(green[i].isTouching(player)&&green[i].visible === true){
      green[i].visible = false
   score=score+1;
    }
 }

 for(var i=0; i<b; i++){
  if(blue[i].isTouching(player)&&blue[i].visible === true){
      blue[i].visible = false
   score=score+1;
    }
 }

if(player.isTouching(bomb)){
  gameState = "end";
}

if (score===25&&bomb){
  bomb.visible = false;
  red[0].visible = false;
  red[1].visible = false;
  red[2].visible = false;
  red[3].visible = false;
  red[4].visible = false;
  orange[0].visible = false;
  orange[1].visible = false;
  orange[2].visible = false;
  orange[3].visible = false;
  orange[4].visible = false;
  yellow[0].visible = false;
  yellow[1].visible = false;
  yellow[2].visible = false;
  yellow[3].visible = false;
  yellow[4].visible = false;
  green[0].visible = false;
  green[1].visible = false;
  green[2].visible = false;
  green[3].visible = false;
  green[4].visible = false;
  blue[0].visible = false;
  blue[1].visible = false;
  blue[2].visible = false;
  blue[3].visible = false;
  blue[4].visible = false;
  player.x = cannon.x;
  player.y = height-288;
  player.velocityX = 0;
  player.velocityY = 0;
  winn.visible = true;
  nextlevel.visible = true;
  if (mousePressedOver(nextlevel)){
    gameState = "begin";
    score = 0;
    bomb.visible = true;
    bomb.x = 700;
    bomb.y = 325;
    nextlevel.visible = false;
    winn.visible = false;
    gameover.visible = false;
    restart.visible = false;
    red[0].visible = true;
    red[1].visible = true;
    red[2].visible = true;
    red[3].visible = true;
    red[4].visible = true;
    orange[0].visible = true;
    orange[1].visible = true;
    orange[2].visible = true;
    orange[3].visible = true;
    orange[4].visible = true;
    yellow[0].visible = true;
    yellow[1].visible = true;
    yellow[2].visible = true;
    yellow[3].visible = true;
    yellow[4].visible = true;
    green[0].visible = true;
    green[1].visible = true;
    green[2].visible = true;
    green[3].visible = true;
    green[4].visible = true;
    blue[0].visible = true;
    blue[1].visible = true;
    blue[2].visible = true;
    blue[3].visible = true;
    blue[4].visible = true;
  }
}


if (gameState==="end"){
  bomb.visible =false;
  red[0].visible = false;
  red[1].visible = false;
  red[2].visible = false;
  red[3].visible = false;
  red[4].visible = false;
  orange[0].visible = false;
  orange[1].visible = false;
  orange[2].visible = false;
  orange[3].visible = false;
  orange[4].visible = false;
  yellow[0].visible = false;
  yellow[1].visible = false;
  yellow[2].visible = false;
  yellow[3].visible = false;
  yellow[4].visible = false;
  green[0].visible = false;
  green[1].visible = false;
  green[2].visible = false;
  green[3].visible = false;
  green[4].visible = false;
  blue[0].visible = false;
  blue[1].visible = false;
  blue[2].visible = false;
  blue[3].visible = false;
  blue[4].visible = false;
  player.x = cannon.x;
  player.y = height-288;
  player.velocityX = 0;
  player.velocityY = 0;
  gameover.visible = true;
  restart.visible = true;
  
  if (mousePressedOver(restart)){
    gameState = "begin"
    score = 0;
    bomb.visible = true
    gameover.visible = false;
    restart.visible = false;
    red[0].visible = true;
    red[1].visible = true;
    red[2].visible = true;
    red[3].visible = true;
    red[4].visible = true;
    orange[0].visible = true;
    orange[1].visible = true;
    orange[2].visible = true;
    orange[3].visible = true;
    orange[4].visible = true;
    yellow[0].visible = true;
    yellow[1].visible = true;
    yellow[2].visible = true;
    yellow[3].visible = true;
    yellow[4].visible = true;
    green[0].visible = true;
    green[1].visible = true;
    green[2].visible = true;
    green[3].visible = true;
    green[4].visible = true;
    blue[0].visible = true;
    blue[1].visible = true;
    blue[2].visible = true;
    blue[3].visible = true;
    blue[4].visible = true;
  }
}


    


if(keyDown("SPACE")){
  player.velocityX = velX;
  player.velocityY = velY;
  gameState = "play";
}

fill(47, 148, 255);
textSize(45);
text("Ball Count: "+ score, 1460, 1235)

}


