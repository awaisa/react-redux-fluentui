import * as React from "react";
import { render } from "react-dom";

import { App } from "./app";
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

const rootElement = document.getElementById("root");
render(<App />, rootElement);
