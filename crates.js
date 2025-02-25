class Crates{
	constructor(x, y, z, r, color) {
        this.x = x;
        this.y = y;
        this.z = z;
		this.r = r;
        this.color = color;
        this.locked = true;
        this.a = 0.5;  
        this.da = 0;
		this.roofAngle = 0;	
        this.isOpening = false;		

		this.obj = document.createElement("a-entity");
		this.obj.setAttribute("position",`${x} ${y} ${z}`);
		this.obj.setAttribute("rotation",{x:0, y:this.r, z:0});
		
		let cratewall1 = document.createElement("a-box");
		cratewall1.setAttribute("src","#cratetexture");
		cratewall1.setAttribute("scale","4 1.5 0.15");
		cratewall1.setAttribute("position","0 1 -0.9");
		cratewall1.setAttribute("static-body","");
		this.obj.append( cratewall1 );
		
		let cratewall2 = document.createElement("a-box");
		cratewall2.setAttribute("src","#cratetexture");
		cratewall2.setAttribute("scale","2 1.5 0.15");
		cratewall2.setAttribute("position","2 1 0");
		cratewall2.setAttribute("rotation","0 90 0");
		cratewall2.setAttribute("static-body","");
		this.obj.append( cratewall2 );
		
		let cratewall3 = document.createElement("a-box");
		cratewall3.setAttribute("src","#cratetexture");
		cratewall3.setAttribute("scale","2 1.5 0.15");
		cratewall3.setAttribute("position","-1.9 1 0");
		cratewall3.setAttribute("rotation","0 270 0");
		cratewall3.setAttribute("static-body","");
		this.obj.append( cratewall3 );
		
		let cratewall4 = document.createElement("a-box");
		cratewall4.setAttribute("src","#cratetexture");
		cratewall4.setAttribute("scale","4 1.5 0.15");
		cratewall4.setAttribute("position","0 1 1.03");
		cratewall4.setAttribute("static-body","");
		this.obj.append( cratewall4 );
		
		let cratefloor = document.createElement("a-box");
		cratefloor.setAttribute("src","#cratetexture");
		cratefloor.setAttribute("scale","4 2 0.15");
		cratefloor.setAttribute("position","0 1.7 0");
		cratefloor.setAttribute("rotation","90 0 0");
		cratefloor.setAttribute("static-body","");
		this.obj.append( cratefloor );
		
		this.crateroof = document.createElement("a-box");
		this.crateroof.setAttribute("src","#cratetexture");
		this.crateroof.setAttribute("scale","4 2 0.15");
		this.crateroof.setAttribute("position","0 0.2 0");
		this.crateroof.setAttribute("rotation","90 0 0");
		this.crateroof.setAttribute("static-body","");
		this.obj.append( this.crateroof );
		
	 this.lock = document.createElement("a-box");
        this.lock.setAttribute("clickable", "");
        this.lock.setAttribute("scale", "0.2 0.3 0.1");
        this.lock.setAttribute("color", this.color);
        this.lock.setAttribute("position", `0 ${this.a} 1.1`);
        this.obj.append(this.lock);

        this.lock.addEventListener("click", () => this.tryUnlock());

        let scene = document.querySelector("a-scene");
        scene.append(this.obj);
    }

    tryUnlock() {
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
            this.da = 0.05;
			this.openRoof();
        }
    }

    fallOff() {
        if (!this.locked && this.a > -2) { 
            this.a -= this.da;
            this.lock.setAttribute("position", `0 ${this.a} 1.1`);
        }
    }
	
	 openRoof() {
        if (this.isOpening && this.roofAngle < 90) { 
            this.roofAngle += 2;
            this.crateroof.setAttribute("rotation", `90 0 ${this.roofAngle}`);
            requestAnimationFrame(() => this.openRoof());
        } else {
            this.isOpening = false;
        }
    }
}

