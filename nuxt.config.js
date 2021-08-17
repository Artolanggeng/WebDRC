export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    generate: {
        fallback: true
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'DRC-UI',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Poppins:wght@400;500;600;700&family=Montserrat+Alternates:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css'
            }
        ],
        script: [
            { src: 'https://apps.elfsight.com/p/platform.js', defer: true },
            {
                src: "https://code.jquery.com/jquery-2.2.4.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
                type: "text/javascript"
            },
            // {
            //     src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
            //     type: "text/javascript"
            // },
            // { src: 'js/jquery.js' },
            // { src: 'js/popper.min.js' },
            // { src: 'js/bootstrap.min.js' },
            // { src: 'js/jquery-ui.js' },
            // { src: 'js/jquery.fancybox.js' },
            // { src: 'js/owl.js' },
            // { src: 'js/scrollbar.js' },
            // { src: 'js/appear.js' },
            // { src: 'js/wow.js' },
            // { src: 'js/custom-script.js' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/flaticon',
        '~/assets/css/font-awesome',
        '~/assets/css/owl',
        '~/assets/css/style',
        '~/assets/css/responsive'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/v-tooltip.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/moment',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa', ['storyblok-nuxt', {
            accessToken: process.env.NODE_ENV === 'production' ? 'Ez2RibotAIcANbIL1xLkIgtt' : 'UThO3JsCQs9lEkFLbHXnDQtt',
            cacheProvider: 'memory'
        }]
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}