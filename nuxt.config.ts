// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/image-edge',
    ],
    css: ["~/assets/css/tailwind.css"],
    image: {
        // Options
    },
    builder: "webpack",
    components: [
        {
            path: "./components/",
            pathPrefix: false
        }
    ]
})
