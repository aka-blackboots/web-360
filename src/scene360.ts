import {Web360} from "./web360";
import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    AxesHelper,
    GridHelper,
    AmbientLight,
    DirectionalLight,
    SphereGeometry,
    TextureLoader,
    MeshStandardMaterial,
    DoubleSide
} from "three";

export class Scene360{
    private web360Context: Web360;
    private scene: Scene;
    constructor(context: Web360) {
        this.web360Context = context;
        this.scene = new Scene();

        this.addAxes();
        this.addLights();
    }

    generate360Container(){

    }

    addAxes(){
        const axesHelper = new AxesHelper(2);
        this.scene.add(axesHelper);

        const gridHelper = new GridHelper(10, 10);
        this.scene.add(gridHelper);
    }

    addLights(){
        // Add Ambient Light
        const ambientLight = new AmbientLight(0xffffff, 1); // Soft white light
        this.scene.add(ambientLight);
    }

    addImageToScene(){
        //this.scene.add()
    }

    disposeImage(){

    }
    getScene(){
        return this.scene;
    }
    addTestCube(){
        const sphereGeometry = new SphereGeometry(500, 60, 40);
        sphereGeometry.scale(-1, 1, 1); // Invert the sphere to have the correct orientation

        const textureLoader = new TextureLoader();
        const texture = textureLoader.load("./assets/image360.jpg");

        const sphereMaterial = new MeshStandardMaterial({
            map: texture,
            metalness: 0.1,
            roughness: 0.9,
            color: 0xffffff
        });
        const sphere = new Mesh(sphereGeometry, sphereMaterial);
        this.scene.add(sphere);
    }
}