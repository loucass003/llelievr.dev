import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

import enFluent from '@/locales/en.ftl?raw';
import frFluent from '@/locales/fr.ftl?raw';


const enBundle = new FluentBundle('en')
enBundle.addResource(new FluentResource(enFluent))
const frBundle = new FluentBundle('fr')
frBundle.addResource(new FluentResource(frFluent))

const app = createApp(App)

const fluent = createFluentVue({
    bundles: [enBundle, frBundle]
})

app.use(router)
app.use(fluent)


app.mount('#app')
