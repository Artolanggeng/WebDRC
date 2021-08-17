const plugin = require('tailwindcss/plugin')
module.exports = {
    important: true,
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                manjari: ['Manjari', 'sans-serif'],
                'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif']
            },
            colors: {
                drc: {
                    blue: '#28388D',
                    dark: {
                        blue: '#2e3d62',
                        navy: '#141b47'
                    },
                    pastel: {
                        blue: '#178bb8'
                    },
                    gray: {
                        1: '#f1f1f1',
                        2: 'rgba(0,0,0,0.10)',
                        3: '#aaaaaa',
                        4: '#999999',
                        5: '#757575'
                    },
                    black: '#222222',
                }
            },
            fontSize: {
                'drc-xs': ['9px', '32px'],
                'drc-h5': ['14px', '1em'],
                'drc-base': ['15px', '1.6em'],
                'drc-h4': ['20px', '1.3em'],
                'drc-h3': ['24px', '1.35em'],
                'drc-h2-base': ['24px', '1.25em'],
                'drc-h2-md': ['30px', '1.25em'],
                'drc-h2-lg': ['36px', '1.25em'],
                'drc-h1-base': ['30px', '1.05em'],
                'drc-h1-md': ['48px', '1.05em'],
                'drc-h1-lg': ['72px', '1.05em']
            },
            height: {
                'drc-50': '50px',
                'drc-60': '60px',
                'drc-330': '330px',
                'drc-500': '500px',
                'drc-560': '560px',
                'drc-660': '660px',
                'drc-760': '760px'
            },
            width: {
                'drc-180': '180px',
                'drc-400': '400px',
                'drc-600': '600px'
            },
            maxWidth: {
                450: '450px',
                600: '600px',
                800: '800px',
                1200: '1200px'
            },
            inset: {
                '-100-8': 'calc(-100% - 8px)',
            },
            keyframes: {
                'slide-in-up': {
                    '0%': {
                        transform: 'translate3d(0, 10%, 0)',

                        opacity: '0'
                    },
                    '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' }
                },
                'zoom-in': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.15)' }
                }
            },
            animation: {
                'slide-up': 'slide-in-up .5s',
                'zoom-in': 'zoom-in 7s'
            },
            backgroundImage: theme => ({
                'drc-banner-2': "url('~/assets/img/background/banner-image-2.jpg')",
            })
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            borderWidth: ['last'],
            scale: ['group-hover']
        },
    },
    plugins: [
        require("tailwindcss-nested-groups"),
        plugin(function({ addUtilities }) {
            const newUtilities = {
                '.drc-big-letter': {
                    position: 'relative',
                    display: 'block',
                    color: '#ffffff',
                    background: '#28388D',
                    float: 'left',
                    fontFamily: '"Manjari", "sans-serif"',
                    fontSize: '60px',
                    width: '72px',
                    height: '72px',
                    fontWeight: '700',
                    lineHeight: '72px',
                    paddingTop: '12px',
                    textAlign: 'center',
                    margin: '0px 30px 10px 0px'
                },
                '.drc-big-letter-mobile': {
                    position: 'relative',
                    display: 'block',
                    color: '#ffffff',
                    background: '#28388D',
                    fontFamily: '"Manjari", "sans-serif"',
                    fontSize: '60px',
                    width: '72px',
                    height: '72px',
                    fontWeight: '700',
                    lineHeight: '72px',
                    paddingTop: '12px',
                    textAlign: 'center',
                    float: 'none',
                    margin: '0 auto 20px'
                }
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        })
    ],
}