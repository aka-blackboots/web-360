//Object to store the size of the viewport
import {Web360} from "../dist/index.js";

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-container");

const experience = new Web360({
    container: threeCanvas
})

experience.addTestCube();
