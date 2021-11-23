import './assets/css/App.css';
const App = function() {
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = 'Hello World_webpack-ex04_css';
    return app;
}

export { App }