"use strict";

// Define constant values
const ZOOM_IN_LIMIT = 3;
const ZOOM_OUT_LIMIT = 7;
const ZOOM_MOVEMENT = 0.1;

// This is the default zoom
let zoom = 5;

// Create an event listener attached to the body
// to not depent on a 3D model to trigger it
document.body.addEventListener('wheel', event => {
    // Get the camera from the HTML
    const camera = document.getElementById('camera');
    // Identify if the user wants to zoom in or zoom out
    const isZoomingIn = event.deltaY < 0 ? true : false;

    // Zooming will be increasing/decreasing by 0.1
    // in order to have a smooth movement
    if (isZoomingIn) {
        zoom -= ZOOM_MOVEMENT;
    } else {
        zoom += ZOOM_MOVEMENT;
    }

    // If the camera position in the Z axis is less than or equal
    // to 3 it won't go further
    if (zoom <= ZOOM_IN_LIMIT) {    
        zoom = ZOOM_IN_LIMIT;
    }

    // If the camera position in the Z axis is greater than or equal
    // to 7 it won't go further
    if (zoom >= ZOOM_OUT_LIMIT) {    
        zoom = ZOOM_OUT_LIMIT;
    }

    // Set the final calculation to the HTML element
    camera.setAttribute("position", `0 0.5 ${zoom}`);
});