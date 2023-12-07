import {Web360} from "./web360";
import { Camera, Vector2, WebGLRenderer } from 'three';

export class Renderer360{
    private web360Context: Web360;
    private renderer: WebGLRenderer;

    constructor(context: Web360) {
        //super(web360Context);
        this.web360Context = context;
        this.renderer = new WebGLRenderer({alpha: true, antialias: true});
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.setupRenderer();
        this.animate = this.animate.bind(this);
    }

    animate(){
        requestAnimationFrame(this.animate);
        this.renderer.render(this.web360Context.getScene(), this.web360Context.getCamera());
        this.web360Context.updateControls();
    }

    private setupRenderer(){
        const width = this.web360Context.getDimensions().width;
        const height = this.web360Context.getDimensions().height;
        this.renderer.setSize(width, height);
        this.web360Context.getContainer().appendChild(this.renderer.domElement);
    }

    resizeRenderer(){
        const width = this.web360Context.getDimensions().width;
        const height = this.web360Context.getDimensions().height;
        this.renderer.setSize(width, height);
    }

    getRenderer(){
        return this.renderer;
    }
}