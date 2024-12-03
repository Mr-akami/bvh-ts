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

  public toggleHelper() {
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    const gridHelper = new THREE.GridHelper(10, 10);
    this.scene.add(gridHelper);

    // const light = new THREE.DirectionalLight(0xffffff);
    // const helper = new THREE.DirectionalLightHelper(light, 5);
    // this.scene.add(helper);
  }
}
