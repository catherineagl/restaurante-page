export const createContact = () => {
    const container = document.createElement('div');
    container.classList.add('contact-container');

    const div = document.createElement('div');
    const title = document.createElement('h3');
    const address = document.createElement('h4');
    const phone = document.createElement('h4');
    const map = document.createElement('div');

    title.textContent = "Find us here";
    address.textContent = "Address: San Francisco, California",
    phone.textContent = "Phone Number: 123-456789";
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555087752!2d-122.50764026269746!3d37.75781499668813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1619730026784!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`

    map.classList.add('map');
    div.classList.add('contact-card');
    title.classList.add('contact-title');
    address.classList.add('contact-info');
    phone.classList.add('contact-info');
    
    div.appendChild(title)
    div.appendChild(address)
    div.appendChild(phone)

    container.appendChild(div)
    container.appendChild(map)

    const btnAct = document.querySelectorAll('.nav-btn');
    btnAct[0].classList.remove('active');
    btnAct[1].classList.remove('active');
    btnAct[2].classList.add('active');

    return container
}