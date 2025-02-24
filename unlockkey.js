class UnlockKey {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
        this.collected = false; 


        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", `${x} ${y} ${z}`);

        let keyModel = document.createElement("a-entity");
        keyModel.setAttribute("gltf-model", "#key");
        keyModel.setAttribute("scale", "0.01 0.01 0.01");
        keyModel.setAttribute("color", this.color);
        keyModel.setAttribute("clickable", "");

        this.obj.append(keyModel);

        let scene = document.querySelector("a-scene");
        scene.append(this.obj);

        keyModel.addEventListener("click", () => this.collectKey(scene));
    }

    collectKey(scene) {
        if (!this.collected) {
            console.log(`${this.color} key collected!`);
            collectedKeys[this.color] = true; 
            this.collected = true;
            scene.removeChild(this.obj); 
        }
    }
}
