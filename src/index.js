import React from "react";
import { render } from "react-dom";
import { APPICONS, NAVICONS, GRAPHICONS } from "./constants-icons";
import Icon from "./Icon";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>App Icons</h1>
    <Icon icon={APPICONS.ACTIVITY} />
    <Icon icon={APPICONS.ADD} />
    <Icon icon={APPICONS.ADD_SMALL} />
    <Icon icon={APPICONS.ADD_SMALL2} />
    <Icon icon={APPICONS.ADMIN} />
    <Icon icon={APPICONS.ARROW_LEFT} />
    <Icon icon={APPICONS.ARROW_RIGHT} />
    <h1>Nav Icons</h1>
    <Icon icon={NAVICONS.ACTIVITY} />
    <Icon icon={NAVICONS.ADMIN} />
    <Icon icon={NAVICONS.BULK_ACTIONS} />
    <Icon icon={NAVICONS.DATA_IMPORT} />
    <Icon icon={NAVICONS.DATA_IMPORT} />
    <Icon icon={NAVICONS.HELP} />
    <Icon icon={NAVICONS.LOGO} />
    <Icon icon={NAVICONS.REPORTS} />
    <Icon icon={NAVICONS.REQUESTS} />
    <Icon icon={NAVICONS.RESEARCH} />
    <Icon icon={NAVICONS.STORIES} />
    <Icon icon={NAVICONS.SUGGESTIONS} />
    <Icon icon={NAVICONS.WORKSPACES} />
    <h1>Graph Icons</h1>
    <Icon icon={GRAPHICONS.FILE_BYTES} />
    <Icon icon={GRAPHICONS.GEO_NLOC} />
    <Icon icon={GRAPHICONS.HASH_MD5} />
    <Icon icon={GRAPHICONS.HASH_SHA1} />
    <Icon icon={GRAPHICONS.HASH_SHA256} />
    <Icon icon={GRAPHICONS.HASH_SHA512} />
  </div>
);

render(<App />, document.getElementById("root"));
