export const createHome = () => {
    const container = document.createElement('div');
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const content = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    title.textContent = "Try the best burgers in town";
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum tincidunt velit, non tincidunt nibh. Nam posuere aliquet lectus a.";
    btn.textContent = "Check Our Menu";

    card.classList.add('home-card');
    content.classList.add('home-content');
    btn.classList.add('home-btn');
    title.classList.add('home-title');
    p.classList.add('home-info')
    
    card.appendChild(content);
    content.appendChild(title);
    content.appendChild(p);
    content.appendChild(btn);
    container.appendChild(card);

    container.classList.add('home-container');

    const btnAct = document.querySelectorAll('.nav-btn');
    btnAct[0].classList.add('active');
    btnAct[1].classList.remove('active');
    btnAct[2].classList.remove('active');


    container.addEventListener("mousemove", (e) => {
        let xAsis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAsis = (window.innerWidth / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAsis}deg) rotateX(${yAsis}deg)`
    });
    
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = "none";
        title.style.transform = "translateZ(150px)"
        p.style.transform = "translateZ(175px)"
        btn.style.transform = "translateZ(200px)"
    })
    container.addEventListener("mouseleave", (e) => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = "all 0.5s ease";
        title.style.transform = "translateZ(0px)"
        p.style.transform = "translateZ(0px)"
        btn.style.transform = "translateZ(0px)"
    })
    
    return container
}