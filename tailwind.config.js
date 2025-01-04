/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte}"],
	theme: {
		container: {
			center: true,

		},
	  extend: {
		fontFamily: {
		  rowdies: ['Rowdies', 'sans-serif'],
		  Roboto: ['Roboto', 'sans-serif']
		},
		colors: {
		  orange: '#FF5F00'
		}
	  },
	  height: {
		'500': '550px'
	  },
	  width: {
		'1920': '1920px'
	  },
	  keyframes: {
		scroll: {
		  '0%': { transform: 'translateX(100%)' },
		  '100%': { transform: 'translateX(-100%)' }
		},
		scrollReverse: {
		  '0%': { transform: 'translateX(-100%)' },
		  '100%': { transform: 'translateX(100%)' }
		}
  
		
	  },
	  animation: {
		scroll: 'scroll 30s linear infinite',
		scrollReverse: 'scrollReverse 30s linear infinite'
	  }
	},
	plugins: [],
  }