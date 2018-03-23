import React from "react";
import { render } from "react-dom";
import { APPICONS } from "./constants-icons";
import Icon from "./Icon";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Icon icon={APPICONS.ACTIVITY} />
  </div>
);

render(<App />, document.getElementById("root"));
