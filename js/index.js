import { ColorScheme } from "./color_scheme.js";

 const colorScheme = new ColorScheme({
 documentRef:document,
 lightCSS:document.getElementById("light-css"),
 darkCSS:document.getElementById("dark-css"),
 schemeButton:document.getElementById("btn-color-scheme")
 })