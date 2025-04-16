export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '24px 24px',
      },
    },
  },
  safelist: [
    'bg-indigo-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'text-indigo-600',
    'text-green-600',
    'text-blue-600',
    'text-purple-600',
  ],
}