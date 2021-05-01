import style from "./style.css";
import {createHome} from "./modules/home";
import {createMenu} from "./modules/menu";
import {createContact} from "./modules/contact"

const content = document.getElementById('content');

class Body {
    constructor(){
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.btn = document.createElement('button');
    }
}

//NAVBAR && LOGO 
let menu = ["Home", "Menu", "Contact"]
const header = document.createElement('header');
const nav = document.createElement('nav');
const div = new Body().div;
const logoImg = new Body().div;
const h1 = document.createElement('h1');
const neonText = new Body().div;

div.classList.add('logo');
nav.classList.add('menu');
logoImg.classList.add('logo-img');
h1.classList.add('title');
neonText.classList.add('neon');


logoImg.innerHTML = `<svg viewBox="0 -66 512.00002 512"  xmlns="http://www.w3.org/2000/svg"><path d="m464.230469 262.28125v-32.246094h26.820312v-60.722656h20.761719v-27.050781c0-78.445313-63.820312-142.261719-142.261719-142.261719h-227.289062c-78.445313-.00390625-142.261719 63.816406-142.261719 142.257812v27.054688h20.757812v60.71875h26.820313v32.25h-47.578125v62.53125c0 30.890625 25.132812 56.019531 56.023438 56.019531h399.957031c30.890625 0 56.019531-25.128906 56.019531-56.019531v-62.53125zm-135.273438-32.242188-73.050781 64.84375-73.054688-64.84375zm45.207031 0h60.054688v32.242188h-96.378906zm-231.902343-200.03125h227.289062c60.902344 0 110.636719 48.761719 112.210938 109.292969h-451.710938c1.574219-60.53125 51.304688-109.292969 112.210938-109.292969zm318.777343 139.304688v30.710938h-410.269531v-30.710938zm-383.449218 60.726562h60.054687l36.324219 32.242188h-96.378906zm404.398437 94.773438c0 14.34375-11.667969 26.011719-26.007812 26.011719h-399.957031c-14.34375 0-26.011719-11.667969-26.011719-26.011719v-32.519531h177.765625l48.128906 42.722656 48.125-42.722656h177.957031zm0 0"/><path d="m81.828125 87.734375h29.617187v29.621094h-29.617187zm0 0"/><path d="m138.738281 48.722656h29.621094v29.617188h-29.621094zm0 0"/><path d="m203.765625 87.734375h29.617187v29.621094h-29.617187zm0 0"/><path d="m246.28125 46.21875h29.617188v29.621094h-29.617188zm0 0"/><path d="m299.160156 77.730469h29.621094v29.621093h-29.621094zm0 0"/><path d="m356.183594 48.722656h29.617187v29.617188h-29.617187zm0 0"/><path d="m406.699219 87.734375h29.621093v29.621094h-29.621093zm0 0"/></svg>`;
h1.textContent = "Burguer Shop";
neonText.textContent = "We deliver!";

menu.forEach(item => {
    let btn = new Body().btn;
    btn.textContent = item;
    btn.classList.add('nav-btn');
    btn.setAttribute('id', item.toLowerCase())
    nav.appendChild(btn)
})

div.appendChild(logoImg);
div.appendChild(h1);
header.appendChild(div);
header.appendChild(neonText);
header.appendChild(nav);
content.appendChild(header);


//FOOTER

const footer = document.createElement('footer');
footer.innerHTML = `<h3><i class="far fa-copyright"></i> Created by Catherine Aguilera <a href="https://github.com/catherineagl"><i class="fab fa-github"></i></a></h3>`

content.appendChild(footer)

//MAIN CONTENT
const main = document.createElement('main');

const addHome = (() => {
    main.appendChild(createHome());
})();

content.insertBefore(main, footer)

//BUTTONS TABS
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById('contact');
const secondMenuBtn = document.querySelector('.home-btn')

//HOME INTERACTIONS

homeBtn.addEventListener('click', ()=> {
    main.firstChild.replaceWith(createHome());
})

//MENU interaction

menuBtn.addEventListener('click', ()=> {
    main.firstChild.replaceWith(createMenu());
})
/*secondMenuBtn.addEventListener('click', () => {
    main.firstChild.replaceWith(createMenu());
})*/

//CONTACT INTERACTION 

contactBtn.addEventListener('click', () => {
    main.firstChild.replaceWith(createContact())
})
