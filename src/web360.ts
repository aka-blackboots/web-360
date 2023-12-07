import {IImageConfig, INavigator, IWeb360Config} from "./base-types";
import {Renderer360} from "./renderer360";
import {Scene360} from "./scene360";
import {Camera360} from "./camera360";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {Globe} from "./Globe";
//import {camera360} from "./camera360";

export class Web360{
    private viewer: IWeb360Config;
    private imageStore: Array<IImageConfig> = [];
    private navigatorStore: Array<INavigator> = [];
    private scene360: Scene360;
    private camera360: Camera360;
    private renderer360: Renderer360;
    private dimensions: { width: number; height: number };
    private orbitControls: OrbitControls;

    constructor(viewerOptions: IWeb360Config) {
        // TODO: Error Handling for Checking the Config
        this.viewer = viewerOptions;
        console.log(this.viewer);
        this.dimensions = {
            width: this.viewer.container.clientWidth,
            height: this.viewer.container.clientHeight
        }
        this.scene360 = new Scene360(this);
        this.camera360 = new Camera360(this);
        this.renderer360 = new Renderer360(this);

        this.addControls();
        this.setupDefaultEvents();

        this.startExperience();
    }

    addImageContent(image: IImageConfig){
        // TODO: Check Image Config
        this.imageStore.push(image)
    }
    // TODO: Replace Top Method
    createGlobe(URL:string){
        const globe = new Globe(this, URL);
        return globe;
    }

    // TODO: Make this more refined
    addBulkImage(images: Array<IImageConfig>){
        this.imageStore = images;
    }

    // TODO: Different Types of Navigator
    addNavigator(navigate: INavigator){
        // TODO: Check if the Source and Target Index is present and then add them
        this.navigatorStore.push(navigate);
    }

    addBulkNavigator(){

    }

    getImageStore(){
        return this.imageStore;
    }

    getNavigator(){
        return this.navigatorStore;
    }

    // navigateTo(navigator){
    //
    // }

    getRenderer(){
        return this.renderer360.getRenderer();
    }
    getCamera(){
        return this.camera360.getCamera()
    }
    getScene(){
        return this.scene360.getScene();
    }
    addTestCube(){
        this.scene360.addTestCube();
    }
    getDimensions(){
        return this.dimensions;
    }
    getContainer(){
        return this.viewer.container;
    }
    addControls(){
        this.orbitControls = new OrbitControls(this.camera360.getCamera(), this.renderer360.getLabelRenderer().domElement);
    }
    updateControls(){
        this.orbitControls.update();
    }
    startExperience(){
        this.renderer360.animate()
    }
    private setupDefaultEvents(){
        window.addEventListener('resize', ()=>{
            this.dimensions = {
                width: this.viewer.container.clientWidth,
                height: this.viewer.container.clientHeight
            }
            this.camera360.resizeCamera();
            this.renderer360.resizeRenderer();
        })
    }
}