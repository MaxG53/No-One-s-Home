class Log{
 constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
	
	this.obj = document.createElement("a-cylinder")
	this.obj.setAttribute("src", "#tree");
	this.obj.setAttribute("position",{x:x,y:y,z:z});
	this.obj.setAttribute("radius", 0.3);
	this.obj.setAttribute("height", 4);
	this.obj.setAttribute("color", "#8B4513");
	this.obj.setAttribute("rotation", `0 ${rnd(0, 360)} 90`);
	scene.append(this.obj);
	}
}