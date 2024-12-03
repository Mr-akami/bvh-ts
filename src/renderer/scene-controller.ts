import * as THREE from "three";

export class SceneController {
  private static instance: SceneController;
  public readonly scene: THREE.Scene;

  private constructor() {
    this.scene = new THREE.Scene();
  }

  static getInstance() {
    if (!SceneController.instance) {
      SceneController.instance = new SceneController();
    }
    return SceneController.instance;
  }

  public add(object: THREE.Object3D) {
    this.scene.add(object);
  }
}
