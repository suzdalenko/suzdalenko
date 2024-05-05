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
    /* mostrar los links activo de un color */
    let navUlLink = document.getElementById('navUlLink');
    if(navUlLink &&  navUlLink.children){
        Array.from(navUlLink.children).forEach((item) => {
            console.log(item.firstChild);
            item.firstChild.classList.remove('active');
        });
    }
    event.target.classList.add('active');
}

let pageTitle = [{    
        title: 'UI/UX DISEÑADOR &amp; PROGRAMADOR'
    },{
        title: 'Sobre Mi'
    },{  
        title: 'Servicios'
    },{
        title: 'Experiencia'
    },{
        title: 'Proyectos'
    },{
        title: 'Blog'
    },{
        title: 'Contacto'
}];

function setTitlePage(x){
    document.title = pageTitle[x].title;
}

const handleLocation = async () => {
    let path = window.location.pathname;
    let route = '/pages/index.html';
    switch(path){
        case '':                case '/':               route = '/pages/index.html';        setTitlePage(0);   break;
        case '/Sobre-Mi':       case '/Sobre-Mi/':      route = '/pages/sobre-mi.html';     setTitlePage(1);   break;
        case '/Servicios':      case '/Servicios/':     route = '/pages/servicios.html';    setTitlePage(2);   break;
        case '/Experiencia':    case '/Experiencia/':   route = '/pages/experiencia.html';  setTitlePage(3);   break;
        case '/Proyectos':      case '/Proyectos/':     route = '/pages/proyectos.html';    setTitlePage(4);   break;
        case '/Blog':           case '/Blog/':          route = '/pages/blog.html';         setTitlePage(5);   break;
        case '/Contacto':       case '/Contacto/':      route = '/pages/contacto.html';     setTitlePage(6);   break;
    }
    console.log('path='+path);
    let html = await fetch(route).then(r => r.text());
    document.getElementById('main-page').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

