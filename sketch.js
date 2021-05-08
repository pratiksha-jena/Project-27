const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;

function preload() {
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350, 100, 350, 40);
	bob1 = new Bob(220, 400, 50);
	bob2 = new Bob(280, 400, 50);
	bob3 = new Bob(340, 400, 50);
	bob4 = new Bob(400, 400, 50);
	bob5 = new Bob(470, 400, 50);

	chain1 = new Chain(bob1.body, { x: 200, y: 100 })
	chain2 = new Chain(bob2.body, { x: 260, y: 100 })
	chain3 = new Chain(bob3.body, { x: 340, y: 100 })
	chain4 = new Chain(bob4.body, { x: 420, y: 100 })
	chain5 = new Chain(bob5.body, { x: 490, y: 100 })

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");

	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -100, y: -100 });
	}
}



