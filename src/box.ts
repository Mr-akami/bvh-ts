import * as THREE from "three";
import { SceneController } from "./renderer";

export class Box {
  public mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    SceneController.getInstance().add(this.mesh);
  }
}
