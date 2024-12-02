import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import * as THREE from "three";
import { CameraController } from "./camera-controller.ts";
import { Box } from "./box.ts";
import { SceneController } from "./scene-controller.ts";

// main.ts
// gl canvas init
// render
// setting tweak pane
// call xxobject init

// scene.ts
// expose scene

// camera.ts

// xxxobject.ts
// use scene
// expose init

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  app.appendChild(renderer.domElement);
} else {
  console.error("Element with id 'app' not found.");
}

const cameraController = new CameraController(renderer.domElement);

const box = new Box();

window.addEventListener("resize", onWindowResize, false);

function animate() {
  box.mesh.rotation.x += 0.01;
  box.mesh.rotation.y += 0.01;

  cameraController.controls.update();
  renderer.render(SceneController.getInstance().scene, cameraController.camera);
}

function onWindowResize() {
  cameraController.camera.aspect = window.innerWidth / window.innerHeight;
  cameraController.camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
