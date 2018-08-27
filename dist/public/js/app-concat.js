class App {
    constructor() {
        // empty
        console.log('This is my constructor.');
    }

    stuff() {
        return 'Here is my method';
    }
}

const NMS = new App;
/* console reminder got annoying, so temporarily disabled it for now.
   testing out vue to make sure it works. First time giving it a go.
*/

Vue.config.productionTip = false;

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    }
});