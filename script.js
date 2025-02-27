let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let rocks = [];
let logs = [];
let door;
function distance(x, z, hx, hz) {
  return Math.sqrt((x - hx) ** 2 + (z - hz) ** 2);
}

window.onload = function () {
  scene = document.querySelector("a-scene");
  player = new Player("a-camera");
  let numRocks = 250;
  let numLogs = 100;
  let mapSize = 80;


  let houseX = 3;
  let houseZ = 6;
  let safeZone_Radius = 30;

  for (let i = 0; i < numRocks; i++) {
    let x = rnd(-mapSize, mapSize);
    let z = rnd(-mapSize, mapSize);
    if (distance(x, z, houseX, houseZ) >= safeZone_Radius) {
      let y = 0.5;
      let rock = new Rock(x, y, z);
      rocks.push(rock);
    } else {
      console.log("rock collision detected");
      i--;
    }
  }

  for (let i = 0; i < numLogs; i++) {
    let x = rnd(-mapSize, mapSize);
    let z = rnd(-mapSize, mapSize);
    if (distance(x, z, houseX, houseZ) >= safeZone_Radius) {
      let y = 0.5;
      let log = new Log(x, y, z);
      logs.push(log);
    } else {
	  console.log("log collision detected");
      i--;
    }
  }
  collectedKeys = { red: false, green: false, yellow: false };
  redDoor = new DoorOpen(-0.9,0,18,0, "red", false);//
  greenDoor = new DoorOpen(-3,0,2,90, "green", true);
  yellowDoor = new DoorOpen(-3,0,16,90, "yellow", true);
 
  crate1 = new Crates(-14,2,13,90, "yellow");
  
  redKey = new UnlockKey(-14, 2.3, 13, "red");
  greenKey = new UnlockKey(19.5, 2.3, 10.5, "green");
  yellowKey = new UnlockKey(-12.6,1.4,2.3, "yellow");
  setTimeout(loop, 1000);
};

function loop() {
  player.update();
  redDoor.spin();
  greenDoor.spin();
  yellowDoor.spin();
  
  crate1.fallOff();
  window.requestAnimationFrame(loop);
}
