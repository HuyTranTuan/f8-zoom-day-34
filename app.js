// import files here!
const pages = [
    './js/pages/counter.js',
    './js/pages/todo.js',
    './js/pages/profile.js',
    './js/pages/products.js',
    './js/pages/comments.js',
    './js/pages/weather.js', 
];
const components = [
    './js/components/button.js',
    './js/components/comment.js',
    './js/components/link.js',
    './js/components/links.js',
    './js/components/todoItem.js',
    './js/components/profileCard.js',
    './js/components/productCard.js',
    './js/components/weatherCard.js',
];

const styles = [
    './css/style.css',
    './css/counter.css',
    './css/todo.css',
    './css/products.css',
    './css/comments.css',
    './css/profile.css',
    './css/weather.css',
];


document.addEventListener('DOMContentLoaded', function(){
    try {
        for (let page of pages) {
            loadScript(page);
        }
        for (let component of components) {
            loadScript(component);
        }
        for (let style of styles) {
            loadCssLink(style);
        }
    } catch (error) {
        console.error('Failed to load modules:', error);
    }
});

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/babel';
        script.src = src;
        script.onload = resolve;
        script.onerror = reject
        document.body.appendChild(script);
    })
}
function loadCssLink(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject
        document.head.appendChild(link);
    })
}