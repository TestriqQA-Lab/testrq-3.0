
import { SiApple, SiAndroid } from "react-icons/si";
import { renderToStaticMarkup } from "react-dom/server";
import * as fs from 'fs';

const appleSvg = renderToStaticMarkup(SiApple({}));
const androidSvg = renderToStaticMarkup(SiAndroid({}));

fs.writeFileSync('mobile_icons_clean.txt', `Apple: ${appleSvg}\nAndroid: ${androidSvg}`);
console.log("Icons written to mobile_icons_clean.txt");
