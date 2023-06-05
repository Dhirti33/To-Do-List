import header from "../pages/header";
import project from "../pages/project";


export default function firstLoad() { 
  const container = document.querySelector("#container");
  const headerDiv = header();
  container.append(headerDiv);
  project();
}