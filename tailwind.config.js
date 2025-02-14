module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  // mode: 'aot',//deployment mode
  mode: 'jit',//development mode
  theme: {
    extend: {
      screens: {
        'max-mobile': { 'max': '1024px' },
        'max-mobile-dashboard': { 'max': '640px' },
        'min-desktop-fuel': { 'min': '1420px' },
        // 'lg-custom': { 'raw': '((min-width: 768px) and (max-width: 1100px) and (orientation: landscape) and (min-height: 600px)) or ((min-width: 1101px) and (orientation: portrait)) or ((min-width: 1101px) and (orientation: landscape))' },
        // 'lg-custom': { 'raw': 'min-width: 1024px' }
        // 'lg-custom': { 'min': '1024px' },

        // 'lg-custom': { 'raw': '((min-width: 768px) and (orientation: landscape)) or ((min-width: 1024px) and (orientation: portrait))' },
        'lg-custom': {
          'raw': '(min-width: 768px) and (orientation: landscape), (min-width: 1024px) and (orientation: portrait)'
        },
        'btn-w-image-extra-small': { max: '449px' }
        // less thn that in all cases its mobile
        // min 768px w bl3rd desktop
        // min 768px w bl6ol mobile

        // after 1100 in all cases it should be desktop

      },
      fontFamily: {
        'Futura-Bk-BT-Medium': ['Futura-Bk-BT-Medium', 'Red Hat Text', 'sans-serif'], // Banner Cairo-Semi-Bold //Button on Banner  Cairo-Bold // bottom section Cairo-Regular 
        'red-hat-text': ['Red Hat Text']
        // 'Futura-Bk-BT-Heavy': ['Futura-Bk-BT-Heavy', 'Cairo-Bold', 'sans-serif'], // Banner Cairo-Bold

        // 
        // 'Poppins-Light': ['Poppins-Light', 'Cairo-Regular', 'sans-serif'], // Banner Cairo-Semi-Bold
        // 'Poppins-Medium': ['Poppins-Medium', 'Cairo-SemiBold', 'sans-serif'],
        // 'Poppins-Bold': ['Poppins-Bold', 'Cairo-Bold', 'sans-serif'],
        // // 
        // 'Cairo-Regular': ['Cairo-Regular', 'sans-serif'],

        // 'Cairo-Semi-Bold': ['Cairo-SemiBold', 'sans-serif'],
        // 'Cairo-Bold': ['Cairo-Bold', 'sans-serif'],

        // 'Noto-Sans-Medium': ['Noto-Sans-Medium', 'Cairo-SemiBold', 'sans-serif'],
        // 'Noto-Sans-Regular': ['Noto-Sans-Regular', 'Cairo-Regular', 'sans-serif'],

        // 'Roboto-Regular': ['Roboto-Regular', 'Cairo-Regular', 'sans-serif'],
        // 'Rubik-Bold': ['Rubik-Bold', 'Cairo-Regular', 'sans-serif']
      },
      boxShadow: {
        'custom-1': '0px 40px 80px #0000001A',
        'custom-2': '0px 20px 40px #0000004D',
        'custom-3': '0px 10px 30px #00000033',
        'custom-4': '0px 3px 6px #00000029',
        'custom-5': '0 20px 40px #0000001A',
        'custom-6': '0px 1px 13px #0000001A',
        'custom-7': '0px 1px 3px #0000000D',
        'custom-8': '0px 0px 10px #0000001A',
        'custom-9': '1px 1px 20px #fff'
      },
      dropShadow: {
        'widget': '0 3px 6px rgba(0, 0, 0, 0.16)',
        'map-shadow': '0px 10px 30px #00000033',
        'offer': '16px 16px 0px #00904A',
        'offer-RTL': '-16px 16px 0px #00904A'
      },
      maxWidth: {
        'desktop-less': '1440px',//1074px
        'desktop': '1440px',
        'large-desktop': '1792px',
        // 1074px
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(9,9,121,1) 100%)',
        'custom-gradient-rtl': 'linear-gradient(90deg,rgba(9,9,121,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1)  100%)',
      },
    },
  },
}
