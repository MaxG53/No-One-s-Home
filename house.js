class House{
	constructor(x,y,z){
    this.x = x;
    this.z = z;

    this.y = y;
    this.dy = rnd(1,10) / 20 
    
    this.obj = houseTemplate.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }
}