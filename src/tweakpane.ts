import { Pane } from "tweakpane";

export const setupTweakPane = (): void => {
  const pane = new Pane();

  const PARAMS = {
    factor: 123,
    title: "hello",
    color: "#ff0055",
  };

  pane.addBinding(PARAMS, "factor");
  pane.addBinding(PARAMS, "title");
  pane.addBinding(PARAMS, "color");
};
