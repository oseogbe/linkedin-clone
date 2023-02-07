// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'LinkedOn',
            meta: [
                { 
                    charset: 'utf-8' 
                },
                { 
                    name: 'viewport', 
                    content: 'width=device-width, initial-scale=1' 
                },
                { 
                    name: 'description', 
                    content: 'LinkedOn is a basic Nuxt clone of LinkedIn' 
                }
            ],
            link: [      
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }    
            ],
        }
    },
    css: [
        'assets/css/main.scss'
    ],
})
