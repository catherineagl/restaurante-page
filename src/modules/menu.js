import menu1 from ".././assets/menu1.jpg";
import menu2 from ".././assets/menu2.jpg";
import menu3 from ".././assets/menu3.jpg";
import menu4 from ".././assets/menu4.jpg";
import menu5 from ".././assets/menu5.jpg";
import menu6 from ".././assets/menu6.jpg";
import menu7 from ".././assets/menu7.jpg";
import menu9 from ".././assets/menu9.jpg";

export const createMenu = () => {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    let menu = [
        {
            title: "Traditional burguer",
            price: "$7",
            image: menu1,

        },
        {
            title: "French fries",
            price: "$5",
            image: menu2,

        },
        {
            title: "Traditional burguer + French fries",
            price: "$15",
            image: menu3,

        },
        {
            title: "Special burguer",
            price: "$10",
            image: menu4,

        },
        {
            title: "Bacon burguer",
            price: "$8",
            image: menu5,

        },
        {
            title: "Chicken wings",
            price: "$12",
            image: menu6,

        },
        {
            title: "Double special burguer",
            price: "$12",
            image: menu7,

        },
        {
            title: "Onion rings + french fries",
            price: "$10",
            image: menu9,

        },
    ]

    menu.forEach(item => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const wrapper = document.createElement('div');
        const title = document.createElement('div');
        const price = document.createElement('div');

        card.classList.add('menu-card');
        img.classList.add('menu-img');
        title.classList.add('menu-title');
        price.classList.add('menu-info');
        wrapper.classList.add('menu-wrapper')

        img.src = item.image;
        title.textContent = item.title;
        price.textContent = item.price

        card.appendChild(img);
        wrapper.appendChild(title);
        wrapper.appendChild(price);
        card.appendChild(wrapper)
        container.appendChild(card);

        const btnAct = document.querySelectorAll('.nav-btn');
        btnAct[0].classList.remove('active');
        btnAct[1].classList.add('active');
        btnAct[2].classList.remove('active');
    })

    return container
}