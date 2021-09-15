
import style from "./style.css";
import logo from "./assets/webpack.svg";

document.getElementById("app").innerHTML = `<img src="${logo}" alt="webpack">`;

const arr = [ 1,2,3];
const codeESNext = () => console.log( ...arr );
console.log("Hola mundo sin configuración con Webpack");
codeESNext();