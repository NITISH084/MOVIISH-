import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        '450px': '450px',
      },
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(to bottom, rgba(0, 0, 0, 3.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 3.8) 100%)',
        'custom-gradient2': 'linear-gradient(to right, rgba(0, 0, 0, 1.8) 0%, rgba(0, 0, 0, 0.2) 100%)',
        'custom-gradient3': 'linear-gradient(to bottom, rgba(0, 0, 0, 1.8) 0%, rgba(0, 0, 0, 0.2) 100%)',
        'custom-gradient4': 'linear-gradient(to bottom, rgba(0, 0, 0, 1.5) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.8) 100%)',
      },
    },
  },
  plugins: [
    scrollbarHide(),
  
  ],
};
