const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();

    let navbarSupportedContent = document.getElementById('navbarSupportedContent');
    if(navbarSupportedContent){
        navbarSupportedContent.classList.remove('show');
    }
    let hamburgerButton = document.getElementById('hamburgerButton');
    if(hamburgerButton){
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
}

const routes = {
    '/'             : '/pages/index.html',
    '/Sobre-Mi'     : '/pages/sobre-mi.html',
    '/Servicios'    : '/pages/servicios.html',
    '/Experiencias' : '/pages/experiencias.html',
    '/Proyectos'    : '/pages/proyectos.html',
    '/Blog'         : '/pages/blog.html',
    '/Contacto'     : '/pages/contacto.html'
}

const handleLocation = async () => {
    let path = window.location.pathname;
    let route = routes[path] || routes[404];
    console.log('path='+path)
    
    let html = await fetch(route).then(r => r.text());
    document.getElementById('main-page').innerHTML = html;
    
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

