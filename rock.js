class Rock{
	constructor(x,y,z){
	let rock = document.createElement("a-dodecahedron");
    rock.setAttribute("src","#stone");
    rock.setAttribute("position",{x:x,y:y,z:z});
    let a = rnd(0,360)
    rock.setAttribute("rotation",{x:a,y:a,z:a});
    scene.append(rock);
	}
}