import {Web360} from "./web360";
import {Mesh, MeshStandardMaterial, Scene, SphereGeometry, TextureLoader, Vector3} from "three";
import {CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer.js";

export class Globe{
    private scene: Scene;
    private popup: Array<CSS2DObject>;
    private lGlobe: Mesh;
    constructor(web360: Web360, globeURL: string) {
        this.scene = web360.getScene();
        this.generateGlobe(globeURL)
    }

    generateGlobe(globeURL: string){
        const sphereGeometry = new SphereGeometry(500, 60, 40);
        sphereGeometry.scale(-1, 1, 1); // Invert the sphere to have the correct orientation

        const textureLoader = new TextureLoader();
        const texture = textureLoader.load(globeURL);

        const sphereMaterial = new MeshStandardMaterial({
            map: texture,
            metalness: 0.1,
            roughness: 0.9,
            color: 0xffffff
        });
        const sphere = new Mesh(sphereGeometry, sphereMaterial);
        this.scene.add(sphere);

        this.lGlobe = sphere;
        this.lGlobe.layers.enableAll();
    }

    // TODO: Creating a default popup now, but modifying it later according to customisation
    addPopup(position: Vector3){
        // Creating a CSS2D Object
        const popDiv = document.createElement('div');
        popDiv.className = 'label';
        popDiv.textContent = 'Popup';
        popDiv.style.backgroundColor = 'transparent';

        const popup = new CSS2DObject(popDiv);
        popup.position.set(1,1, 499);
        popup.center.set(0,0);
        this.lGlobe.add(popup);

        this.lGlobe.layers.set(0);

    }

    disposePopup(){

    }

}