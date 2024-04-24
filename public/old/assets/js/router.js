const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    '/'      : '/pages/index.html',
    '/about' : '/pages/about.html',
    '/lorem' : '/pages/lorem.html'
}

const handleLocation = async () => {
    let path = window.location.pathname;
    let route = routes[path] || routes[404];
    console.log('path='+path)
    if(path == '/')  {
        document.getElementById('main-page').innerHTML = HomePage();
    } else {
        let html = await fetch(route).then(r => r.text());
        document.getElementById('main-page').innerHTML = html;
    }
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();


function HomePage(){
    return `<h1>HomePage</h1>`;
}