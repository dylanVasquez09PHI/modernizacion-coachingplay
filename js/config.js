// Configuración de Tailwind CSS
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sora: ['Sora', 'sans-serif'] },
      colors: {
        brand: {
          pink:   '#E8297A',
          yellow: '#F5C842',
          blue:   '#4FC3F7',
          purple: '#8B2FC9',
          bg:     '#0A0B10',
          card:   '#12131F',
        }
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.5s ease 0.2s both',
        'fade-up-2': 'fadeUp 0.5s ease 0.35s both',
        'fade-up-3': 'fadeUp 0.5s ease 0.5s both',
        'fade-up-4': 'fadeUp 0.5s ease 0.65s both',
        'fade-up-5': 'fadeUp 0.5s ease 0.8s both',
        'fade-up-6': 'fadeUp 0.6s ease 1.0s both',
        'slide-in-1': 'slideIn 0.5s ease 0.7s both',
        'slide-in-2': 'slideIn 0.5s ease 0.85s both',
        'slide-in-3': 'slideIn 0.5s ease 1.0s both',
        'slide-in-4': 'slideIn 0.5s ease 1.15s both',
      }
    }
  }
}
