
const app = {

test: function() {

    let canvas = document.querySelector('#canvas1');
    console.log(canvas);

},

    init: function(){

   
    
        console.log('eventlistener triggered');

        // console.log(document.querySelector('#loading'));

        // const loading = this.document.getElementById('loading');
        
        // loading.style.display='none';
        let canvas = document.getElementById('canvas1');

        console.log(canvas);
        console.log('test2');

        const ctx = canvas.getContext('2d');
        canvas.width= window.innerWidth;
        canvas.height =window.innerHeight;

        console.log(ctx);
      
       

    
    
        class InputHandler {
    
            constructor(game){
    
                this.game=game;
                this.keys = [];
           
    
                window.addEventListener('keydown', (e) =>
                
                    {
    
                        if((e.key ==="ArrowUp" || 
                            e.key==='ArrowDown'|| 
                            e.key==='ArrowLeft'|| 
                            e.key==='ArrowRight'|| 
                            e.key ==="q" || 
                            e.key==='s'|| 
                            e.key==='d'|| 
                            e.key==='z'||
                            e.key ==='a' || 
                            e.key==='e'|| 
                            e.key==='w'|| 
                            e.key==='c'||
                            e.key==='x'
                   
                        ) && this.keys.indexOf(e.key) === -1) 
                        
                        {this.keys.push(e.key);};
    
                        
                        if((e.key==='r')&&(this.game.gameOver==true))
                                 {
    
                                    this.game.gameOver==false;
                                    this.game.gameTime==0;
                                    // this.game.player.x=0;
                                    // this.game.player.y=window.innerHeight/2;
                                    this.game.ennemies=0;
                                    this.game.ennemies=[];
                                    this.game.hit==0;
                                    this.game.destoyed==0;
                                    this.game.proks=0;
                                    this.game.proks=[];
                                   
    
    
                                   };
    
    
                        // if((this.keys.length!=0)&&this.game.particles.length<50) 
                        
                        
                        // {
                        //     this.game.player.shootTop();
                        //     // this.game.player.shootBottom();
    
    
                        // }
    
                        // if(e.key ==="d" )this.game.debug= !this.game.debug;
                        
    
                                //  console.log(this.keys.length);
    
                    });
    
    
    
                
                
    
                    window.addEventListener('keyup', (e) =>
                
                    {
    
                        if(this.keys.indexOf(e.key)>-1) 
                        
                        {
    
                            this.keys.splice(this.keys.indexOf(e.key),1);
                            // game.input.shots=0;
                            // game.input.shots=[];
                            game.projectile=0;
                            game.projectile=[];
                        }
                        
                        //    console.log(e.key, this.keys.length);
    
                    });
    
    
            }
    
    
    
        }
    
    
        class Projecticle {
    
            constructor(game,x,y){
    
                this.game=game;
                this.x=x;
                this.y=y;
                this.width=10*5;
                this.height=3*5;
                this.speed=20;
                this.markedForDeletion=false;
                this.image=projectile;
                this.angle=0;
                this.angleSpeed=Math.random()*0.2;
                this.curve=Math.random()*10;
            
        
    
            }
    
            update(){
    
               
    
                // this.x+=this.speed;
                // this.x-=this.speed;
                
         
    
                if(this.game.input.keys.includes('d')){this.x+=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('d');}
    
                if(this.game.input.keys.includes('q')){this.x-=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('q');}
    
                if(this.game.input.keys.includes('a')){ this.x-=this.speed;this.y-=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('a');}
    
                if(this.game.input.keys.includes('e')){this.x+=this.speed;this.y-=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('e');};
    
                if(this.game.input.keys.includes('w')){this.x-=this.speed;this.y+=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('w');};
    
                if(this.game.input.keys.includes('c')){ this.x+=this.speed;this.y+=this.speed;this.game.player.shot=0;this.game.player.shot=[];this.game.player.shot.push('c');};
       
                
    
    
    
                // console.log(this.game.input.keys);
    
                if(((this.x)<0))this.markedForDeletion=true;
                if(((this.x)>window.innerWidth))this.markedForDeletion=true;
    
                
                if(     !this.game.input.keys.includes('d') &&
                        !this.game.input.keys.includes('q') &&
                        !this.game.input.keys.includes('a') &&
                        !this.game.input.keys.includes('e') &&
                        !this.game.input.keys.includes('w') &&
                        !this.game.input.keys.includes('c')
                           
                )this.markedForDeletion=true;
    
          
    
                //  console.log(this.game.player.projectiles);
                // console.log(this.game.player.projectiles.length);
    
            }
    
            draw(context){
    
                // context.fillStyle='yellow';
                // context.fillRect(this.x,this.y,this.width,this.height);
                context.drawImage(this.image,0,0,this.width,this.height,this.x-50,this.y-70,this.width*5,this.height*5);
          
    
            }
    
        }
    
    
         class Prok extends Projecticle{
    
    
            constructor(game,x,y){
    
                super(game);
                this.x=x;
                this.width=228/2;
                this.height=169/2;
                this.y=y;
                this.frameY=Math.floor(Math.random()*3);
                this.image=projectile;
                this.speedX=(Math.random()*-1.5-0.5)/7;
                this.speedY=(Math.random()*-1.5-0.5)/7;
               
    
            }
    
                   update(){
    
    
                    
    
                                game.checkPosition();
    
                                if(game.positions==0){this.x+=this.speedX;} else {
                                   if(game.positions.includes('BOTTOM RIGHT')){this.x-=this.speedX;this.y-=this.speedY*2;};
                                   if(game.positions.includes('BOTTOM LEFT')){this.x+=this.speedX*2;this.y-=this.speedY;};
                                    if(game.positions.includes('TOP RIGHT')){this.x-=this.speedX;this.y+=this.speedY*2;};
                                     if(game.positions.includes('TOP LEFT')){this.x+=this.speedX*2;this.y+=this.speedY;};};
    
                                //    console.log(game.positions,game.positions=='BOTTOM LEFT');
                               
                    
                                  if(((this.x)<0))this.markedForDeletion=true;
                                  if(((this.x)>window.innerWidth))this.markedForDeletion=true;
                                  if(this.y<0)this.markedForDeletion=true;
                                  if(this.y>window.innerHeight)this.markedForDeletion=true;
    
    
                     }
    
    
                       draw(context){
    
                // context.fillStyle='yellow';
                // context.fillRect(this.x,this.y,this.width,this.height);
                  context.drawImage(this.image,0,0,this.width,this.height,this.x-50,this.y-70,this.width*5,this.height*5);
    
                
                        
    
            }
    
             }
       
    
        class Particle {
    
           constructor(game,x,y){
    
            this.game=game;
            this.x=x;
            this.y=y;
            this.image=gears;
            this.frameX=Math.floor(Math.random()*3);
            this.frameY=Math.floor(Math.random()*3);
            this.spriteSize=22;
            this.sizeModifier=(Math.random()*0.5+0.5).toFixed(1);
            this.size=this.spriteSize*this.sizeModifier;
            this.speedX=Math.random()*3;
            this.speedY=Math.random()*3;
            this.gravity=0.05;
            this.markedForDeletion=false;
            this.angle=0;
            this.va=Math.random()*20-10;
            this.bounced=false;
            this.bottomBounceBoundary=Math.random()*2;
           
    
           }
    
           update(){
    
                this.angle+=this.va;
                this.speedY+=this.gravity;
                // console.log(this.game.player.shot.length);
    
    
    
    
                if(this.game.player.shot.includes('d')){this.x += this.speedX*10;this.y -= this.speedY;};
    
                if(this.game.player.shot.includes('q')){this.x -= this.speedX*10;this.y += this.speedY;}
    
                if(this.game.player.shot.includes('a')){ this.x-=this.speedX*10;this.y-=this.speedY*3;}
    
                if(this.game.player.shot.includes('e')){this.x+=this.speedX*10;this.y-=this.speedY*3;};
    
                if(this.game.player.shot.includes('w')){this.x-=this.speedX*10;this.y+=this.speedY*3;};
    
                if(this.game.player.shot.includes('c')){ this.x+=this.speedX*10;this.y+=this.speedY*3;};
    
    
    
                // this.x -= this.speedX+1;
                // this.y += this.speedY;
                // this.markedForDeletion=true;
    
                if(this.y>window.innerHeight || this.x<0 || this.y<0 || this.x>window.height)this.markedForDeletion=true;
    
                if(this.y>window.innerHeight-this.bottomBounceBoundary&&this.bounced<2)
                       
                        {
    
                            this.bounced++;
                           this.speedY*=-0.9;
                       
                        };
    
    
                   
    
    
           }
    
    
    
           draw(context){
    
            context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle);
            context.drawImage(this.image,this.frameX*this.spriteSize,this.frameY*this.spriteSize,this.spriteSize,this.spriteSize,this.size*-0.5,this.size*-0.5,this.size,this.size)
            context.restore();
    
           }
    
    
        }
    
        class Player{
    
            constructor(game){
    
                this.game=game;
                this.width=120;
                this.height=190;
                this.x=0;
                this.y=window.innerHeight/2;
                this.speedY=2;
                this.speedX=2;
                this.maxSpeed=10;
                this.projectiles=[];
                this.image=player;
                this.frameX=0;
                this.frameY=0;
                this.powerUp=false;
                this.powerUpTimer=0;
                this.powerUpLimit=0;
                this.maxFrame=5;
                this.shot=[];
               
              
    
            }
    
            update(deltaTime){
                // this.x += this.speed;
                
    
                if(this.y<100)(this.y=100);
                if(this.y>(window.innerHeight-200))(this.y=(window.innerHeight-200));
    
                if (this.game.input.keys.includes('ArrowUp')) this.speedY=-this.maxSpeed;
                else if(this.game.input.keys.includes('ArrowDown'))this.speedY=this.maxSpeed;
                else this.speedY=0;
                this.y +=this.speedY;
    
                if(this.y>this.game.height-this.height*0.5)this.y=this.game.height-this.height*0.5;
                else if (this.y<-this.height*0.5)this.y=-this.height*0.5;
    
    
              
                if(this.game.input.keys.includes('ArrowRight'))this.speedX=this.maxSpeed;
                else if(this.game.input.keys.includes('ArrowLeft'))this.speedX=-this.maxSpeed;
                else this.speedX=0;
                this.x += this.speedX;
    
    
                if (this.x<0)this.x=0;
                if (this.x>this.game.width-this.width) this.x = this.game.width-this.width;
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
                          if (this.projectiles.length<10)
    
                            {
                                
                                
                                
                                this.frameX=0;
                            
                                {this.projectiles.push(new Projecticle(this.game,this.x+80,this.y+60));};
                                {this.projectiles.push(new Projecticle(this.game,this.x+80,this.y+220));};
                            
                            
                                // console.log(this.projectiles.length,this.game.input.shots.length);
                            };
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
                this.projectiles.forEach(p =>
                    
                        {
    
                            p.update();
    
    
                        });
    
                        this.projectiles=this.projectiles.filter(p => !p.markedForDeletion);
    
                        if(this.powerUp){
    
                            if (this.powerUpTimer>this.powerUpLimit)
                            {
                                this.powerUpTimer=0;
                                this.powerUp=false;
                                this.frameY=0;
                                
                            } else {
                                
                                this.powerUpTimer+=deltaTime
                                this.frameY=1;
                                this.game.ammo += 0.1;
                            
                            
                            };
    
    
                        }
    
            }
    
            draw(context){



                context.drawImage(this.image,this.frameX*this.width,this.frameY*this.height,this.width,this.height,this.x,this.y,this.width,this.height);
    


        

                this.projectiles.forEach(p =>
                    
                    {
    
                    p.draw(context);
    
    
                    });
                
                    this.projectiles=this.projectiles.filter(p =>!p.markedForDeletion);
                        
                    if(this.frameX<this.maxFrame)
                    {this.frameX++;}else {this.frameX=0};
    
            }
    
    
           
          
    
    
            enterPowerUp(){
    
                this.powerUpTimer=0;
                this.powerUp=true;
                if(this.game.ammo<this.game.maxAmmo)this.game.ammo=this.game.maxAmmo;
    
    
            }
    
    
        }
    
        
        class Enemy {
    
            constructor(game){
    
                this.game=game;
                this.width=0;
                this.height=0;
                
                this.speedX=Math.random()*-1.5-0.5;
                this.markedForDeletion=false;
                this.lives=10;
                this.score=this.lives;
                this.frameX=0;
                this.frameY=0;
                this.maxFrame=37;
    
    
            }
    
            update(){
    
                this.x+=this.speedX-this.game.speed;
                if(this.x+this.width<0)this.markedForDeletion=true;
    
                if(this.frameX<this.maxFrame){this.frameX++}else{this.frameX=0};
    
    
            }
    
            draw(context){
    
                // context.fillStyle = 'red';
                // context.fillRect(this.x,this.y,this.width,this.height);
                // context.fillStyle='black';
    
                context.drawImage(this.image,this.frameX*this.width,this.frameY*this.height,this.width,this.height,this.x,this.y,this.width,this.height);
                
                // if(this.game.debug=true)
                // {context.font='20px Helvetica';
                // context.fillText(this.lives,this.x,this.y);}
    
            }
    
    
                fire(deltaTime){
    
                    if (game.proks.length<Math.floor(Math.random()*6+1))
    
                    {
                        
                     game.checkPosition();
                        
                    game.ennemies.forEach(e =>
                      
                        {
                            
    
                            game.proks.push(new Prok(game,e.x,e.y)); 
    
    
                            // console.log(e.x,e.y);
    
    
    
    
                        })
    
                  
    
                   
                   
                    };
                 
                    game.proks.forEach(p=>
                        {
    
    
                            p.update(deltaTime);
    
    
                        });
    
                        // console.log(game.proks);
    
                         game.proks=game.proks.filter(p=>!p.markedForDeletion);
    
    
    
    
                }
    
        }
    
    
            class Angler1 extends Enemy {
    
                constructor(game){
    
                    super(game);
                    this.x=this.game.width;
                    this.width=228;
                    this.height=169;
                    this.y=Math.random()*(this.game.height*0.9-this.height);
                    this.image =angler1;
                    this.frameY=Math.floor(Math.random()*3);
                    this.lives=12;
                    this.score=this.lives;
    
    
    
                }
    
    
    
            }
    
    
            class Angler2 extends Enemy {
    
                constructor(game){
    
                    super(game);
                    this.x=0;
                    this.width=213;
                    this.height=165;
                    this.y=Math.random()*(this.game.height*0.9-this.height);
                    this.image =angler2;
                    this.frameY=Math.floor(Math.random()*2);
                    this.lives=12;
                    this.score=this.lives;
    
    
    
                }
    
    
                update(){
    
                    this.x-= this.speedX;
                    if(this.x+this.width<0)this.markedForDeletion=true;
        
                    if(this.frameX<this.maxFrame){this.frameX++}else{this.frameX=0};
        
        
                }
    
    
            }
    
    
    
            class LucckyFish extends Enemy {
    
                constructor(game){
    
                    super(game);
                    this.x=this.game.width;
                    this.width=99;
                    this.height=95;
                    this.y=Math.random()*(this.game.height*0.9-this.height);
                    this.image =angler3;
                    this.frameY=Math.floor(Math.random()*2);
                    this.lives=15;
                    this.score=15;
                    this.type='lucky';
    
    
    
                }
    
    
                
    
            }
    
    
    
            class HiveWhale extends Enemy {
    
                constructor(game){
    
                    super(game);
          
                   this.x=this.game.width;
                   
                   
                    this.width=400;
                    this.height=227;
                    this.y=Math.random()*(this.game.height*0.9-this.height);
                    this.image =hive;
                    this.frameY=0;
                    this.lives=25;
                    this.score=20;
                    this.type='hive';
                    this.speedX=Math.random()*-1.2-0.2;
    
                  
    
                }
    
    
    
            }
    
    
            class Drone extends Enemy {
    
                constructor(game,x,y){
    
                    super(game);
                    this.width=115;
                    this.height=95;
                    this.x=x;
                    this.y=y;
                    this.image =drone;
                    this.frameY=Math.floor(Math.random()*2);
                    this.lives=8;
                    this.score=3;
                    this.type='drone';
                    this.speedX=Math.random()*-4.2-0.5;
    
    
    
                }
    
    
            }
    
    
            
    
        class Layer {
    
            constructor(game,image,speedModifier){
    
                this.game=game;
                this.width=window.innerWidth;
                this.height=window.innerHeight;
                this.image=image;
                this.speed=speedModifier;
                this.x=0;
                this.y=0;
    
            }
    
                update(){
    
                    if(this.x<=-this.width)this.x=0;
                    else this.x -=this.game.speed*this.speedModifier;
    
                }
    
                draw(context){
    
                    // context.drawImage(this.image,this.x,this.y);
                    // context.drawImage(this.image,this.x+this.width,this.y);
    
                    // context.drawImage(this.image,this.x-this.width-20,this.y,this.width,this.height);
                    // context.drawImage(this.image,this.x,this.y,this.width,this.height);
                    // context.drawImage(this.image,this.x+this.width+20,this.y,this.width,this.height);
    
                }
    
        }
    
    
        class Background{
    
            constructor(game){
    
                this.game=game;
                this.width=window.innerWidth;
                this.height=window.innerHeight;
                this.image1=layer1;
                this.image2=layer2;
                this.image3=layer3;
                this.image4=layer4;
                this.layer1=new Layer(this.game,this.image1,0.2);
                this.layer2=new Layer(this.game,this.image2,0.4);
                this.layer3=new Layer(this.game,this.image3,1);
                this.layer4=new Layer(this.game,this.image4,1.5);
    
                this.layers = [this.layer1,this.layer2,this.layer3,this.layer4];
    
    
            }
    
            update(){
    
                this.layers.forEach(l => 
                    
                        {
                            l.update();
    
    
                        });
    
    
            }
    
    
            draw(context){
    
    
                this.layers.forEach(l => 
                    
                    {
                        l.draw(context);
    
    
                    });
    
    
    
            }
    
    
        }
    
    
        class Explosion {
    
            constructor(game,x,y){
    
                this.game=game;
                this.x=x;
                this.y=y;
                this.frameX=0;
                this.spriteWidth=200*1.5;
                this.spriteHeight=200*1.5;
                this.timer=0;
                this.interval=1000/this.fps;
                this.fps=100;
                this.markedForDeletion=false;
                this.width=this.spriteWidth;
                this.height=this.spriteHeight;
                this.x=x-this.width*0.5;
                this.y=y-this.height*0.5;
                this.markedForDeletion=false;
                this.maxFrame=20;
    
            }
    
            update(deltaTime){
    
                // this.x-=this.game.speed;
                if(this.timer>this.interval){this.frameX++}
                else {this.timer+=deltaTime};
                this.frameX++;
                if(this.frameX>this.maxFrame)this.markedForDeletion=true;
    
            }
    
            draw(context){
    
                context.drawImage(this.image,this.frameX*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    
    
            }
    
        }
    
    
    
        class SmokeExplosion extends Explosion {
    
            constructor(game,x,y){
    
                super(game,x,y);
                this.image=smoke;
            
                
            }
    
    
        }
    
    
    
        class FireExplosion extends Explosion {
    
            constructor(game,x,y){
    
                super(game,x,y);
                this.image=fire;
         
            }
    
    
        }
    
    
        class UI {
    
            constructor(game){
    
                this.game=game;
                this.fontSize=40;
                this.fontFamiliy='Helvetica';
                this.color='white';
    
            }
    
    
            draw(context){
    
                context.save();
                context.fillStyle=this.color;
                context.shadowOffsetX=2;
                context.shadowOffsetY=2;
                context.shadowColor='black';
    
                context.font=this.fontSize+'px '+this.fontFamiliy;
                context.fillText('PRESS A, E, Q, D, W or C to shot, actually using: '+this.game.player.shot,20,40);
                context.fillText('Killed by enemy: '+this.game.hit,25,150);
                context.fillText('Enemy destroyed: '+this.game.destoyed,25,190);
                context.fillText('Death per sec '+(this.game.hit/this.game.gameTime*1000).toFixed(1),25,230);
                context.fillText('Kill per sec '+(this.game.destoyed/this.game.gameTime*1000).toFixed(1),25,270);
                context.fillText('Kill per sec '+(this.game.positions),25,310);
                
    
                if(this.game.player.powerUp)context.fillStyle='#ffffbd';
    
                context.fillStyle=this.color;
                for(let i=0;i<this.game.ammo;i++)
                {context.fillRect(20+5*i,50,3,20)}
    
                const formattedTime = (this.game.gameTime*0.001).toFixed(1);
                context.fillText('Timer: '+this.game.gameTime,20,100);
    
                if(this.game.gameOver)
    
                {
    
                    context.textAlign='center';
                    let message1;
                    let message2;
                    
                  
                    message1='Game Over';
                    message2='Press R to restart the game'
    
                    context.font='50px '+this.fontFamiliy;
                    context.fillText(message1,window.innerWidth*0.5,window.innerHeight*0.5-40);
                    context.font='25px '+this.fontFamiliy;
                    context.fillText(message2,window.innerWidth*0.5,window.innerHeight*0.5+40);
                    
                    
    
                }
    
    
                context.restore();
    
            }
    
    
    
        }
    
    
    
    
        class Game {
    
            constructor(width,height){
    
                this.width=width;
                this.height=height;
                this.player = new Player(this);
                this.input= new InputHandler(this);
                this.ui=new UI(this);
                this.background=new Background(this);
                this.keys=[];
                this.ammo=9999;
                this.maxAmmo=9999;
                this.ammoTimer=0;
                this.ammoInterval=500;
                this.ennemies=[];
                this.enemyTimer=0;
                this.enemyInterval=500;    
                this.gameOver=false;
                this.score=0;
                this.winningScore=100;
                this.gameTime=0;
                this.timeLimit=30000;
                this.speed=1;
                this.debug=false;
                this.particles=[];
                this.explosions=[];
                this.hit=0;
                this.destoyed=0;
                this.proks=[];
                this.positions=[];
    
            }
    
            update(deltaTime){
    
               this.gameTime+=deltaTime;
                // if(this.ennemies.length>70)this.gameOver=true;
    
                this.background.update();
    
                // if(!this.gameOver)
                this.player.update();
                if (this.ammoTimer>this.ammoInterval)
                {if (this.ammo<this.maxAmmo)this.ammo++
                this.ammoTimer=0;
                } else {this.ammoTimer+=deltaTime};
    
                if (this.particles>50)
    
                {
                    this.particles=0;
                    this.particles=[];
    
    
                };
    
                this.particles.forEach(p=>
                    {
                        p.update(deltaTime);
    
                    });
    
                    this.particles=this.particles.filter(p => !p.markedForDeletion);
    
                    this.explosions.forEach(e=>
                        {
                            e.update(deltaTime);
        
                        });
    
                        this.explosions=this.explosions.filter(p => !p.markedForDeletion);
    
    
                this.ennemies.forEach(e=>
                    
                        {
    
                            e.update();
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
                            e.fire(deltaTime);
    
    
                            this.proks.forEach(p =>
                            
                                {
    
                                    p.update();
    
    
                                    if(this.checkCollision(this.player,p))
                           
                                    {
                                        
                                        p.markedForDeletion=true;
                                        this.addExplosion(this.player);
                                        this.hit++;
                                        // this.player.x=0;
                                        // this.player.y=window.innerHeight/2;
                    
                                        // console.log(this.player.x,this.player.y);
                    
                                    }
    
    
                                });
    
    
    
    
                    //  if (this.proks.length<10)
    
                    //  {
                         
                    //   game.checkPosition();
                         
                     
    
                    //  this.proks.push(new Prok(this));
                    
    
                    
                    
                    //  };
                  
                    //  this.proks.forEach(p=>
                    //      {
    
    
                    //          p.update(deltaTime);
    
    
                    //      });
    
                    //      console.log(this.proks);
    
                    //       this.proks=this.proks.filter(p=>!p.markedForDeletion);
    
                         
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    
    
                            if(this.checkCollision(this.player,e))
                           
                            {
                                
                                // e.markedForDeletion=true;
                                this.addExplosion(e);
                                this.addExplosion(this.player);
                                
    
                                if(this.player.x>e.x){this.player.x=this.player.x+60;e.x=e.x-60}else{this.player.x=this.player.x-60;e.x=e.x+60}
                                if(this.player.y>e.y){this.player.y=this.player.y+60;e.y=e.y-60}else{this.player.y=this.player.y-60;e.y=e.y+60}
    
                                this.hit=this.hit+1;
    
                                // this.player.x=this.player.x-20;
                                // this.player.y=this.player.y+20;
                                // e.x=e.x+20;
                                // e.y=e.y-20;
    
                                // console.log(this.player.x,this.player.y);
    
                            }
    
                            if(this.ennemies.type='lucky'){this.player.enterPowerUp();}
                            else if(!this.gameOver)this.score--;
    
    
                            this.player.projectiles.forEach(p =>
                                
                                {
    
                                    if(this.checkCollision(p,e))
                                    {
                                        e.lives--;
                                        p.markedForDeletion=true;
    
                                        for(let i=0;i<e.score;i++)
                                            {this.particles.push(new Particle(this,e.x+e.width*0.5,e.y+e.height*0.5));}
    
    
                                        if(e.lives<=0)
    
                                        {
                                            e.markedForDeletion=true;
                                            this.addExplosion(e);
                                            this.destoyed++;
    
                                          
                                            this.particles.push(new Particle(this,e.x+e.width*0.5,e.y+e.height*0.5));
    
                                            if(e.type==='hive')
    
                                            for(let i =0;i<5;i++)
    
                                            {
    
                                                 {this.ennemies.push(new Drone(this,e.x+Math.random()*e.width, e.y+Math.random()*e.height))}
    
                                            }
                                           
    
                                            if(!this.gameOver)this.score+=e.score;
    
                                            // if(this.score>this.winningScore)this.gameOver=true;
    
                                        }
                                        
                                        }
    
                                }
                                
                                
                                )
    
                        });
    
                        this.ennemies=this.ennemies.filter(e=>!e.markedForDeletion);
    
    
                     
    
                            //  console.log(this.proks);
                       
    
                        if(this.enemyTimer>this.enemyInterval && !this.gameOver)
    
                        {
    
                            this.addEnemy();
                            this.enemyTimer=0;
    
    
    
    
    
                        } else {this.enemyTimer+=deltaTime};
    
                        // console.log(this.particles, this.explosions);
                        // console.log(this.ennemies);
                           
    
            }
    
            draw(context){
    
                this.background.draw(context);
                this.ui.draw(context);
                this.player.draw(context);
                
                this.explosions.forEach(e=>
                    {
                        e.draw(context);
    
                    });
    
            
                this.particles.forEach(p=>
    
                    {
                        p.draw(context);
    
                    });
    
    
                this.ennemies.forEach(e=>
                    
                    {
    
                        e.draw(context);
    
    
    
                    });
    
                    this.proks.forEach(p=>
                            {
    
    
                                p.draw(context);
    
    
                            });
    
    
    
            }
    
            addEnemy(){
    
                const randomize = Math.random();
                if(randomize<0.3)
                this.ennemies.push(new Angler1(this));
                else if (randomize<0.6)this.ennemies.push(new Angler2(this));
                else if (randomize<0.7)this.ennemies.push(new HiveWhale(this));
                else this.ennemies.push(new LucckyFish(this));
    
            }
    
    
            addExplosion(enemy){
    
                const randomize = Math.random();
                if(randomize<0.5)this.explosions.push(new SmokeExplosion(this,enemy.x+enemy.width*0.5,enemy.y+enemy.height*0.5));
    
                else (this.explosions.push(new FireExplosion(this,enemy.x+enemy.width*0.5,enemy.y+enemy.height*0.5)));
    
            }
    
            checkCollision(rect1,rect2){
    
                return(
    
                    rect1.x<rect2.x + rect2.width &&
                    rect1.x+rect1.width>rect2.x &&
                    rect1.y<rect2.y+rect2.height &&
                    rect1.height+rect1.y>rect2.y
    
    
                     )
    
    
    
            }
    
            checkPosition(){
    
       
                
                    this.ennemies.forEach(e=>
                        {
                            
                            
                              if(e.x<(game.player.x)&&e.y<game.player.y){this.positions=0; this.positions=[];this.positions.push('BOTTOM RIGHT');};
                              if(e.x<(game.player.x)&&e.y>game.player.y){this.positions=0; this.positions=[];this.positions.push('TOP RIGHT');};
                               if(e.x>game.player.x&&e.y<game.player.y){this.positions=0; this.positions=[];this.positions.push('BOTTOM LEFT');};
                                if(e.x>game.player.x&&e.y>game.player.y){this.positions=0; this.positions=[];this.positions.push('TOP LEFT');};
    
    
                            //   console.log(this.positions);
                            //   console.log(e.x,game.player.x);
                            //   console.log(e.y,game.player.y);
                        
                            //   console.log(e.x>game.player.x&&e.y<game.player.y);
    
    
    
                        });
    
    
                
            }
    
    
    
        }
    
        const game = new Game(canvas.width,canvas.height);
        let lastTime=0;
    
        function animate(timeStamp){
    
            const deltaTime=timeStamp-lastTime;
            lastTime=timeStamp;
    
            ctx.clearRect(0,0,canvas.width,canvas.height);
    
            game.update(deltaTime);
            game.draw(ctx);
            
    
            requestAnimationFrame(animate);
    
        }
    
        animate(0);
   
}
}

export default app;