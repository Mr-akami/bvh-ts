import { CameraController } from "./camera-controller";
import { SceneController } from "./scene-controller";
import * as THREE from "three";

export class RendererController {
  private renderer: THREE.WebGLRenderer;
  private cameraController: CameraController;

  constructor(private containerId = "app") {
    // レンダラーのセットアップ
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // DOMに追加
    const container = document.querySelector<HTMLDivElement>(
      `#${this.containerId}`
    );
    if (container) {
      container.appendChild(this.renderer.domElement);
    } else {
      console.error(`Element with id '${this.containerId}' not found.`);
    }

    // カメラコントローラーの初期化
    this.cameraController = new CameraController(this.renderer.domElement);

    // ウィンドウリサイズイベントを登録
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
  }

  public render(): void {
    this.renderer.render(
      SceneController.getInstance().scene,
      this.cameraController.camera
    );
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public updateCameraControl(): void {
    this.cameraController.updateControl();
  }

  private onWindowResize(): void {
    this.cameraController.camera.aspect =
      window.innerWidth / window.innerHeight;
    this.cameraController.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
