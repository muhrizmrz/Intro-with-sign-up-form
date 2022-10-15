tailwind.config = {
    theme: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      },
      extend: {
        colors: {
          Red: 'hsl(0, 100%, 74%)',
          Green: 'hsl(154, 59%, 51%)',
          Blue: 'hsl(248, 32%, 49%)',
          DarkBlue: 'hsl(249, 10%, 26%)',
          GrayishBlue: 'hsl(246, 25%, 77%)',
        },
        fontFamily: {
          'Poppins': 'Poppins, sans-serif'
        },
        backgroundImage: {
          'intro-desktop' : "url('./images/bg-intro-desktop.png')",
          'intro-mobile' : "url('./images/bg-intro-mobile.png')"
        }
      }
    }
  }