const fontMultiply = (i) => `${i * 1.1}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '0px', },
      'sm': { 'min': '640px', },
      'md': { 'min': '768px', },
      'lg': { 'min': '1024px', },
      'xl': { 'min': '1280px' },
      '2xl': { 'min': '1536px' },
    },
    colors: {
      'app-background': '#000',
      'app-background-inset': '#0d0e11',
      'app-background-content': '#14141a',
      'app-background-code': '#22212c',
      'app-muted': '#343243',
      'app-foreground': '#a0a0c0',
      'app-foreground-code': '#f7f8f2',
      'app-foreground-bright': '#fff',
      'app-purple': '#9580ff',
      'app-cyan': '#23ffca',
      'app-cyan-soft': '#80ffea',
      'app-orange': '#e2bb73',
      'app-red-soft': '#ff9480',
      'app-red': '#f55',
      'app-blue': '#8be9fd'
    },
    fontFamily: {
      'blender-pro': "Blender Pro"
    },
    fontSize: {
      sm: fontMultiply(0.8),
      base: fontMultiply(1),
      xl: fontMultiply(1.25),
      '2xl': fontMultiply(1.563),
      '3xl': fontMultiply(1.953),
      '4xl': fontMultiply(2.441),
      '5xl': fontMultiply(3.052),
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.app-foreground'),
            '--tw-prose-headings': theme('colors.app-foreground-bright'),
            '--tw-prose-lead': theme('colors.pink[700]'),
            '--tw-prose-links': theme('colors.app-cyan-soft'),
            '--tw-prose-bold': theme('colors.pink[900]'),
            '--tw-prose-counters': theme('colors.pink[600]'),
            '--tw-prose-bullets': theme('colors.pink[400]'),
            '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.pink[900]'),
            '--tw-prose-quote-borders': theme('colors.pink[300]'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.pink[900]'),
            '--tw-prose-pre-code': theme('colors.pink[100]'),
            '--tw-prose-pre-bg': theme('colors.pink[900]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography')
  ],
}


