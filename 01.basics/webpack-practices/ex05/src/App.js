import './assets/scss/App.scss';

const App = function() {
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = 'Hello World_webpack-ex05_sass';
    return app;
}

export { App }