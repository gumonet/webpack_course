
import style from "./style.css";
import logo from "./assets/webpack.svg";
import geminis from "./assets/saga-kanon.png";

const d = document;
const $app = d.getElementById("app");
let $h1 = d.createElement("h1");
let $logo = d.createElement("img");
let $image = d.createElement("img");

$h1.textContent = "Hola from Webpack";
$logo.src = logo;
$logo.classList.add("icon");
$image.src = geminis;

$app.appendChild( $h1);
$app.appendChild( $logo);
$app.appendChild( $image);