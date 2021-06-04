module.exports = {
    purge: {
      enabled: true,
      content: [
        './**/*.html',
        './**/*.php'
      ],
      options: {
        safelist: [
          /^bg-/, 
          /^text-/, 
          /^justify-/, 
          /^grid-/, 
          /^gap-/, 
          /^w-/, 
          /^pl-/, 
          /^pr-/, 
          /^ml-/,  
          /^-ml-/,
          /^mr-/, 
          /^hover-/, 
          /^space-/, 
          /^z-/, 
        ], 
      },
    },
    theme: {
      extend: {
        colors: {
          //
        },
      },
    },
    variants: {},
    plugins: [],
  }
