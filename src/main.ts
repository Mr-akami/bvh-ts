import "./style.css";
import { setupTweakPane } from "./tweakpane.ts";
import { RendererController } from "./renderer";
import { drawAndAnimation } from "./renderer";

setupTweakPane();
const rendererController = new RendererController();
drawAndAnimation(rendererController);
