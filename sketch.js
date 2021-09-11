    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    const Body = Matter.Body;
    const Composites = Matter.Composites;
    const Composite = Matter.Composite;
    
    let engine;
    let world;
    var ground,rope,fruit;

    function preload(){
    
    //loaded background image
    bgImg = loadImage("background.png");

    //loaded fruit image
    fruitImg = loadImage("melon.png");

    //loaded bunny image
    rabbitImg = loadImage("Rabbit-01.png");
    

    }

    function setup() 
    {
      createCanvas(500,700);

      engine = Engine.create();
      world = engine.world;

      //created ground object
      ground = new Ground(200,690,600,20);

       //created rope object
      rope = new Rope(7,{x:245,y:30});

       //created fruit object
      let fruit_options = {
        density : 0.001
        }

  
      fruit = Bodies.circle(300,300,15,fruit_options);

      //added constraint to fruit and rope
      Matter.Composite.add(rope.body,fruit);
      fruit_con = new Link(rope,fruit);

      //created bunny object
      bunny = createSprite(250,650,100,100);
      bunny.addImage(rabbitImg);
      bunny.scale = 0.2;
    
      rectMode(CENTER);  
      ellipseMode(RADIUS);
      textSize(50)
    }

    function draw() 
    {
      background(51);
      image(bgImg,0,0,displayWidth+80,displayHeight);
      imageMode(CENTER);
      
      //displayed objects
      ground.show();
      rope.show();

      image(fruitImg,fruit.position.x,fruit.position.y,60,60);
      Engine.update(engine);

      drawSprites();  
        
    }




