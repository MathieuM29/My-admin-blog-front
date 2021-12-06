const app = {

    addListenerToActions: () => {

        articleModule.addListenerToActions();
        authorModule.addListenerToActions();
        categoryModule.addListenerToActions();
    },

    base_url: 'http://localhost:3000',

    init: () => {

        console.log('App initié !');
        app.addListenerToActions();
    },

};

document.addEventListener('DOMContentLoaded', app.init);