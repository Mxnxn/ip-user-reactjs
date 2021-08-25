import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./assets/css/vendor/bootstrap.bundle.min.css";
import "./assets/css/vendor/pe-icon-7-stroke.css";
import "./assets/css/vendor/font.awesome.css";

import "./assets/css/plugins/animate.css";
import "./assets/css/plugins/jquery-ui.min.css";
import "./assets/css/plugins/swiper-bundle.min.css";
import "./assets/css/plugins/venobox.css";
import "./assets/css/plugins/plugins.min.css";

import "./assets/css/style.css";

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
