//Object to store the size of the viewport
import {Web360} from "../dist/index.js";
import {Vector3} from "three";

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-container");

const experience = new Web360({
    container: threeCanvas
})

// Adding 360 Image
const globe = experience.createGlobe("./assets/image360.jpg");
globe.addPopup(new Vector3(0,0,0));
