import { Box } from "../box";
import type { RendererController } from "./renderer-controller";
import { SceneController } from "./scene-controller";

export const drawAndAnimation = (
  rendererController: RendererController
): void => {
  SceneController.getInstance().toggleHelper();
  const box = new Box();

  rendererController.getRenderer().setAnimationLoop(animate);

  function animate() {
    box.mesh.rotation.x += 0.01;
    box.mesh.rotation.y += 0.01;

    rendererController.updateCameraControl();
    rendererController.render();
  }
};
