import {Web360} from "./web360";
import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh, AxesHelper, GridHelper, AmbientLight, DirectionalLight, SphereGeometry, TextureLoader
} from "three";

export class Scene360{
    private web360Context: Web360;
    private scene: Scene;
    constructor(context: Web360) {
        this.web360Context = context;
        this.scene = new Scene();

        this.addAxes();
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
        const ambientLight = new AmbientLight(0x404040); // Soft white light
        this.scene.add(ambientLight);

        const directionalLight = new DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1); // Adjust the direction of the light
        this.scene.add(directionalLight);
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
        const texture = textureLoader.load("./assets/image1.jpg");

        const sphereMaterial = new MeshBasicMaterial({ map: texture });
        const sphere = new Mesh(sphereGeometry, sphereMaterial);
        this.scene.add(sphere);
    }
}