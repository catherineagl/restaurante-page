(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t=function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("div"),i=document.createElement("p"),c=document.createElement("button");n.textContent="Try the best burgers in town",i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum tincidunt velit, non tincidunt nibh. Nam posuere aliquet lectus a.",c.textContent="Check Our Menu",t.classList.add("home-card"),a.classList.add("home-content"),c.classList.add("home-btn"),n.classList.add("home-title"),i.classList.add("home-info"),t.appendChild(a),a.appendChild(n),a.appendChild(i),a.appendChild(c),e.appendChild(t),e.classList.add("home-container");var s=document.querySelectorAll(".nav-btn");return s[0].classList.add("active"),s[1].classList.remove("active"),s[2].classList.remove("active"),e.addEventListener("mousemove",(function(e){var n=(window.innerWidth/2-e.pageX)/25,a=(window.innerWidth/2-e.pageY)/25;t.style.transform="rotateY(".concat(n,"deg) rotateX(").concat(a,"deg)")})),e.addEventListener("mouseenter",(function(e){t.style.transition="none",n.style.transform="translateZ(150px)",i.style.transform="translateZ(175px)",c.style.transform="translateZ(200px)"})),e.addEventListener("mouseleave",(function(e){t.style.transform="rotateY(0deg) rotateX(0deg)",t.style.transition="all 0.5s ease",n.style.transform="translateZ(0px)",i.style.transform="translateZ(0px)",c.style.transform="translateZ(0px)"})),e};const n=e.p+"assets/menu1.jpg",a=e.p+"assets/menu2.jpg",i=e.p+"assets/menu3.jpg",c=e.p+"assets/menu4.jpg",s=e.p+"assets/menu5.jpg",d=e.p+"assets/menu6.jpg",r=e.p+"assets/menu7.jpg",o=e.p+"assets/menu9.jpg",l=e.p+"assets/contact.jpg";var m=document.getElementById("content"),p=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.div=document.createElement("div"),this.img=document.createElement("img"),this.btn=document.createElement("button")},h=document.createElement("header"),u=document.createElement("nav"),v=(new p).div,g=(new p).div,f=document.createElement("h1"),C=(new p).div;v.classList.add("logo"),u.classList.add("menu"),g.classList.add("logo-img"),f.classList.add("title"),C.classList.add("neon"),g.innerHTML='<svg viewBox="0 -66 512.00002 512"  xmlns="http://www.w3.org/2000/svg"><path d="m464.230469 262.28125v-32.246094h26.820312v-60.722656h20.761719v-27.050781c0-78.445313-63.820312-142.261719-142.261719-142.261719h-227.289062c-78.445313-.00390625-142.261719 63.816406-142.261719 142.257812v27.054688h20.757812v60.71875h26.820313v32.25h-47.578125v62.53125c0 30.890625 25.132812 56.019531 56.023438 56.019531h399.957031c30.890625 0 56.019531-25.128906 56.019531-56.019531v-62.53125zm-135.273438-32.242188-73.050781 64.84375-73.054688-64.84375zm45.207031 0h60.054688v32.242188h-96.378906zm-231.902343-200.03125h227.289062c60.902344 0 110.636719 48.761719 112.210938 109.292969h-451.710938c1.574219-60.53125 51.304688-109.292969 112.210938-109.292969zm318.777343 139.304688v30.710938h-410.269531v-30.710938zm-383.449218 60.726562h60.054687l36.324219 32.242188h-96.378906zm404.398437 94.773438c0 14.34375-11.667969 26.011719-26.007812 26.011719h-399.957031c-14.34375 0-26.011719-11.667969-26.011719-26.011719v-32.519531h177.765625l48.128906 42.722656 48.125-42.722656h177.957031zm0 0"/><path d="m81.828125 87.734375h29.617187v29.621094h-29.617187zm0 0"/><path d="m138.738281 48.722656h29.621094v29.617188h-29.621094zm0 0"/><path d="m203.765625 87.734375h29.617187v29.621094h-29.617187zm0 0"/><path d="m246.28125 46.21875h29.617188v29.621094h-29.617188zm0 0"/><path d="m299.160156 77.730469h29.621094v29.621093h-29.621094zm0 0"/><path d="m356.183594 48.722656h29.617187v29.617188h-29.617187zm0 0"/><path d="m406.699219 87.734375h29.621093v29.621094h-29.621093zm0 0"/></svg>',f.textContent="Burguer Shop",C.textContent="We deliver!",["Home","Menu","Contact"].forEach((function(e){var t=(new p).btn;t.textContent=e,t.classList.add("nav-btn"),t.setAttribute("id",e.toLowerCase()),u.appendChild(t)})),v.appendChild(g),v.appendChild(f),h.appendChild(v),h.appendChild(C),h.appendChild(u),m.appendChild(h);var E=document.createElement("footer");E.innerHTML='<h3><i class="far fa-copyright"></i> Created by Catherine Aguilera <a href="https://github.com/catherineagl"><i class="fab fa-github"></i></a></h3>',m.appendChild(E);var L=document.createElement("main");L.appendChild(t()),m.insertBefore(L,E);var b=document.getElementById("home"),w=document.getElementById("menu"),y=document.getElementById("contact");document.querySelector(".home-btn"),b.addEventListener("click",(function(){L.firstChild.replaceWith(t())})),w.addEventListener("click",(function(){var e;L.firstChild.replaceWith(((e=document.createElement("div")).classList.add("menu-container"),[{title:"Traditional burguer",price:"$7",image:n},{title:"French fries",price:"$5",image:a},{title:"Traditional burguer + French fries",price:"$15",image:i},{title:"Special burguer",price:"$10",image:c},{title:"Bacon burguer",price:"$8",image:s},{title:"Chicken wings",price:"$12",image:d},{title:"Double special burguer",price:"$12",image:r},{title:"Onion rings + french fries",price:"$10",image:o}].forEach((function(t){var n=document.createElement("div"),a=document.createElement("img"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");n.classList.add("menu-card"),a.classList.add("menu-img"),c.classList.add("menu-title"),s.classList.add("menu-info"),i.classList.add("menu-wrapper"),a.src=t.image,c.textContent=t.title,s.textContent=t.price,n.appendChild(a),i.appendChild(c),i.appendChild(s),n.appendChild(i),e.appendChild(n);var d=document.querySelectorAll(".nav-btn");d[0].classList.remove("active"),d[1].classList.add("active"),d[2].classList.remove("active")})),e))})),y.addEventListener("click",(function(){L.firstChild.replaceWith(function(){var e=document.createElement("div");e.classList.add("contact-container");var t=document.createElement("div"),n=document.createElement("section"),a=document.createElement("section"),i=document.createElement("h3"),c=document.createElement("h4"),s=document.createElement("h4"),d=document.createElement("div"),r=document.createElement("img");c.textContent="Address: San Francisco, California",s.textContent="Phone Number: 123-456789",d.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.9855508779!2d-122.50764026269746!3d37.75781499668813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1619843101554!5m2!1ses!2sve" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',r.src=l,n.classList.add("contact-section-card"),a.classList.add("contact-section-img"),d.classList.add("map"),t.classList.add("contact-card"),i.classList.add("contact-title"),c.classList.add("contact-info"),s.classList.add("contact-info");var o=0;setInterval((function(){i.innerText="You can find us here".slice(0,o),o++}),200),setInterval((function(){o=0}),1e4),t.appendChild(i),t.appendChild(c),t.appendChild(s),n.appendChild(t),n.appendChild(d),a.appendChild(r),e.appendChild(n),e.appendChild(a);var m=document.querySelectorAll(".nav-btn");return m[0].classList.remove("active"),m[1].classList.remove("active"),m[2].classList.add("active"),e}())}))})();