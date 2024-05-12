const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();

     /* cerrar menu despues de pulsar links */
    let navbarSupportedContent = document.getElementById('navbarSupportedContent');
    if(navbarSupportedContent){
        navbarSupportedContent.classList.remove('show');
    }
    /* mostrar hamburgesa despues de presionar links */
    let hamburgerButton = document.getElementById('hamburgerButton');
    if(hamburgerButton){
        hamburgerButton.setAttribute("aria-expanded", "false");
    }
}

let pageTitle = [{
        title: 'UI/UX DISEÑADOR & PROGRAMADOR'
    },{
        title: 'SOBRE MI | PROGRAMADOR ALEXEY SUZDALENKO'
    },{
        title: 'SERVICIOS | PROGRAMADOR ALEXEY SUZDALENKO'
    },{
        title: 'EXPERIENCIA | PROGRAMADOR ALEXEY SUZDALENKO'
    },{
        title: 'PROYECTOS | PROGRAMADOR ALEXEY SUZDALENKO'
    },{
        title: 'BLOG | ALEXEY SUZDALENKO'
    },{
        title: 'CONTACTO | ALEXEY SUZDALENKO'
}];

function setTitlePage(x){
    if(x > 6) return;
    document.title = pageTitle[x].title;
}
function setLinkActive(x){
    /* mostrar los links activo de un color */
    let navUlLink = document.getElementById('navUlLink');
    if(navUlLink &&  navUlLink.children){
        Array.from(navUlLink.children).forEach((item, index) => {
            if(index != x) item.firstChild.classList.remove('active');
            else item.firstChild.classList.add('active')
        });
    }
}

const handleLocation = async () => {
    let path = window.location.pathname;
    let route = '/pages/index.html';
    let index = 0;
    switch(path){
        case '':             case '/':             route = '/Pages/index.html';        index = 0; break;
        case '/Sobre-Mi':    case '/Sobre-Mi/':    route = '/Pages/sobre-mi.html';     index = 1; break;
        case '/Servicios':   case '/Servicios/':   route = '/Pages/servicios.html';    index = 2; break;
        case '/Experiencia': case '/Experiencia/': route = '/Pages/experiencia.html';  index = 3; break;
        case '/Proyectos':   case '/Proyectos/':   route = '/Pages/proyectos.html';    index = 4; break;
        case '/Blog':        case '/Blog/':        route = '/Pages/blog.html';         index = 5; break;
        case '/Contacto':    case '/Contacto/':    route = '/Pages/contacto.html';     index = 6; break;
        default:                                   route = '/Pages/blog-content.html'; index = 11;
    }
    console.log('path='+path);
    let html = await fetch(route).then(r => r.text());
    document.getElementById('main-page').innerHTML = html;
    setTitlePage(index);
    setLinkActive(index);
    switch(index){
        case 5:  blogFunctions();     break;
        case 11: blogItemFunctions(); break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();
