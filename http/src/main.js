import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import Header from './Components/Header_footer/Header.vue';
import Footer from './Components/Header_footer/Footer.vue';

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/';
Vue.http.headers.common['Authorization'] = 'Basic iudgfjksdbflwefhwdjfk';

Vue.http.interceptors.push((request,next)=>{
    console.log(request);
    //request.root = 'http://somethoingelse.com/'

    next( response => {
        console.log('Response:', response);
        
        // response.body = [...response.body, { name:'Hello from interceptor', lastname: 'Last name interceptor' } ]
    })
});


new Vue({
    el:'#app',
    render: h => h(App)
});

//* For async await do next:
// npm install --save-dev babel-polyfill
// npm install --save-dev babel-plugin-transform-regenerator

// Once installed, you will need to modify your .babelrc file to use the plugin as follows -

// {
//     "plugins": ["transform-regenerator"]
// }
// and also your webpack.config.js file to use the regenerator as follows -

// require("babel-polyfill");

// module.exports = {
//   entry: ["babel-polyfill", "./app.js"]
// };
