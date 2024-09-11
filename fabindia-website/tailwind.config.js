/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
  },
  borderRadius: {
    'none': '0',
    'sm': '0.125rem',
    DEFAULT: '0.25rem',
    DEFAULT: '4px',
    'md': '0.375rem',
    'lg': '0.5rem',
    'full': '9999px',
    'large': '12px',
  },
  fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
  },
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
    },
    spacing: {
      '5px': '5px',
    },
    textUnderlineOffset: {
      3: '3px',
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    flexBasis: {    
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
    },
    width: {
        '128': '32rem',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    },
    colors: {
      'regal-blue': '#243c5a',
    },
    boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    animation: {
        'spin-slow': 'spin 3s linear infinite',
    },
    margin: {
      '5px': '5px',
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    },
    scrollMargin: {
      '96': '24rem',
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    },
    textDecorationThickness: {
      3: '3px',
    },
    },
},
    plugins: [],
}

