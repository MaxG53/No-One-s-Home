class DoorOpen {
    constructor(x, y, z, a, color, handleFront = true) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = a;  
        this.originalA = a;
        this.color = color;
        this.locked = true;
        this.isOpening = false; 

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", `${x} ${y} ${z}`);
        this.obj.setAttribute("rotation", `0 ${this.a} 0`);
		
		let frame1 = document.createElement("a-entity");
		frame1.setAttribute("position", "0 0 0");

        let door = document.createElement("a-box");
        door.setAttribute("height", 4);
        door.setAttribute("width", 2);
        door.setAttribute("depth", 0.1);
        door.setAttribute("position", "0.5 2 0");
        door.setAttribute("static-body", "");
        door.setAttribute("src", "#wooddoor");
		
		let handleZ = 0;
		if(handleFront){
			handleZ = -0.030;
		} else {
			handleZ = 0.030;
		}
		console.log(handleZ)

        this.handle = document.createElement("a-sphere");
        this.handle.setAttribute("clickable", "");
        this.handle.setAttribute("color", this.color);
        this.handle.setAttribute("radius", "0.15");
        this.handle.setAttribute("position", `0.7 0 ${handleZ}`);
        door.append(this.handle);
        this.obj.append(door);
		frame1.append(this.door);
        this.handle.addEventListener("click", () => this.tryUnlock());

        document.querySelector("a-scene").append(this.obj);
    }

    tryUnlock() {
        console.log(`Knob clicked. Key status: ${collectedKeys[this.color]}`);
        if (collectedKeys[this.color]) {
            this.unlock();
        } else {
            console.log(`You need the ${this.color} key!`);
        }
    }

    unlock() {
        if (this.locked) {
            this.locked = false;
            this.isOpening = true;
            this.spin();
        }
    }

    spin() {
        if (this.isOpening && this.a > this.originalA - 90) { 
            this.a -= 2; 
            this.obj.setAttribute("rotation", `0 ${this.a} 0`);
            requestAnimationFrame(() => this.spin());
        } else {
            this.isOpening = false;
        }
    }
}
