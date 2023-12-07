import {Web360} from "./web360";
import {PerspectiveCamera} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

export class Camera360{
    private web360Context;
    private camera: PerspectiveCamera;
    private orbitControls: OrbitControls;

    constructor(context: Web360) {
        this.web360Context = context;

        this.setupCamera();
    }

    private setupCamera(){
        this.camera = new PerspectiveCamera(
            75,
            this.web360Context.getContainer().clientWidth / this.web360Context.getContainer().clientHeight,
            0.1,
            10000
        );
        this.camera.position.set(0, 0, 0.1);
    }

    resizeCamera(){
        this.camera.aspect = this.web360Context.getContainer().clientWidth / this.web360Context.getContainer().clientHeight;
        this.camera.updateProjectionMatrix();
    }

    getCamera(){
        return this.camera;
    }
}